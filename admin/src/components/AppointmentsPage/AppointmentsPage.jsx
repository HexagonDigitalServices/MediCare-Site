function formatDateISO(iso) {
  try {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch (e) {
    return iso;
  }
}

function dateTimeFromSlot(slot) {
  try {
    const [y, m, d] = slot.date.split("-");
    const base = new Date(Number(y), Number(m) - 1, Number(d), 0, 0, 0, 0);

    const [time, ampm] = slot.time.split(" ");
    let [hh, mm] = time.split(":").map(Number);
    if (ampm === "PM" && hh !== 12) hh += 12;
    if (ampm === "AM" && hh === 12) hh = 0;
    base.setHours(hh, mm, 0, 0);
    return base;
  } catch (e) {
    return new Date(slot.date + "T00:00:00");
  }
}

export default function AppointmentsPage() {
  const isAdmin = true;

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterSpeciality, setFilterSpeciality] = useState("all");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const q = query.trim();
        const url = `${API_BASE}/api/appointments?limit=200${
          q ? `&search=${encodeURIComponent(q)}` : ""
        }`;
        const res = await fetch(url);
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.message || `Failed to fetch (${res.status})`);
        }
        const data = await res.json();
        const items = (data?.appointments || []).map((a) => {
          const doctorName =
            (a.doctorId && a.doctorId.name) || a.doctorName || "";
          const speciality =
            (a.doctorId && a.doctorId.specialization) ||
            a.speciality ||
            a.specialization ||
            "General";
          const fee = typeof a.fees === "number" ? a.fees : a.fee || 0;
          return {
            id: a._id || a.id,
            patientName: a.patientName || "",
            age: a.age || "",
            gender: a.gender || "",
            mobile: a.mobile || "",
            doctorName,
            speciality,
            fee,
            slot: {
              date: a.date || (a.slot && a.slot.date) || "",
              time: a.time || (a.slot && a.slot.time) || "00:00 AM",
            },
            status: a.status || (a.payment && a.payment.status) || "Pending",
            raw: a, // keep original in case we need it
          };
        });
        setAppointments(items);
      } catch (err) {
        console.error("Load appointments error:", err);
        setError(err.message || "Failed to load appointments");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const specialities = useMemo(() => {
    const set = new Set(appointments.map((a) => a.speciality || "General"));
    return ["all", ...Array.from(set)];
  }, [appointments]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return appointments.filter((a) => {
      if (
        filterSpeciality !== "all" &&
        (a.speciality || "").toLowerCase() !== filterSpeciality.toLowerCase()
      )
        return false;
      if (filterDate && a.slot?.date !== filterDate) return false;
      if (!q) return true;
      return (
        (a.doctorName || "").toLowerCase().includes(q) ||
        (a.speciality || "").toLowerCase().includes(q) ||
        (a.patientName || "").toLowerCase().includes(q) ||
        (a.mobile || "").toLowerCase().includes(q)
      );
    });
  }, [appointments, query, filterDate, filterSpeciality]);

  const sortedFiltered = useMemo(() => {
    return filtered.slice().sort((a, b) => {
      const da = dateTimeFromSlot(a.slot).getTime();
      const db = dateTimeFromSlot(b.slot).getTime();
      return db - da;
    });
  }, [filtered]);

  const displayed = useMemo(
    () => (showAll ? sortedFiltered : sortedFiltered.slice(0, 8)),
    [sortedFiltered, showAll]
  );

  async function adminCancelAppointment(id) {
    const appt = appointments.find((x) => x.id === id);
    if (!appt) return;

    const statusLower = (appt.status || "").toLowerCase();
    const isCancelled =
      statusLower === "canceled" || statusLower === "cancelled";
    const isCompleted = statusLower === "completed";

    if (isCancelled || isCompleted) return;

    const ok = window.confirm(
      `As admin, mark appointment for ${appt.patientName} with ${
        appt.doctorName
      } on ${formatDateISO(appt.slot.date)} at ${appt.slot.time} as CANCELLED?`
    );
    if (!ok) return;

    try {
      setAppointments((prev) =>
        prev.map((p) => (p.id === id ? { ...p, status: "Canceled" } : p))
      );
      setShowAll(true);

      const res = await fetch(`${API_BASE}/api/appointments/${id}/cancel`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || `Cancel failed (${res.status})`);
      }
      const data = await res.json();
      const updated = data?.appointment || data?.appointments || null;
      if (updated) {
        setAppointments((prev) =>
          prev.map((p) =>
            p.id === id
              ? {
                  ...p,
                  status: updated.status || "Canceled",
                  slot: {
                    date: updated.date || p.slot.date,
                    time: updated.time || p.slot.time,
                  },
                  raw: updated,
                }
              : p
          )
        );
      }
    } catch (err) {
      console.error("Cancel error:", err);
      setError(err.message || "Failed to cancel appointment");
      try {
        const reload = await fetch(`${API_BASE}/api/appointments?limit=200`);
        if (reload.ok) {
          const body = await reload.json();
          const items = (body?.appointments || []).map((a) => ({
            id: a._id || a.id,
            patientName: a.patientName || "",
            age: a.age || "",
            gender: a.gender || "",
            mobile: a.mobile || "",
            doctorName: (a.doctorId && a.doctorId.name) || a.doctorName || "",
            speciality:
              (a.doctorId && a.doctorId.specialization) ||
              a.speciality ||
              a.specialization ||
              "General",
            fee: typeof a.fees === "number" ? a.fees : a.fee || 0,
            slot: {
              date: a.date || (a.slot && a.slot.date) || "",
              time: a.time || (a.slot && a.slot.time) || "00:00 AM",
            },
            status: a.status || (a.payment && a.payment.status) || "Pending",
            raw: a,
          }));
          setAppointments(items);
        }
      } catch (e) {
      }
    }
  }
                <div
                  key={a.id}
                  style={{
                    animation: `fadeUp 420ms cubic-bezier(.2,.9,.2,1) forwards`,
                    animationDelay: `${idx * 70}ms`,
                    opacity: 0,
                  }}
                  className={pageStyles.card}
                >
                  <div className={pageStyles.cardHeader}>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={pageStyles.cardTitle}>
                          {a.patientName}
                        </h3>

                        <div className={pageStyles.patientInfo}>
                          <span>{a.age ? `${a.age} yrs` : ""}</span>
                          <span> {a.age ? ":" : ""} </span>
                          <span>{a.gender}</span>
                          <span className="hidden md:inline"> : </span>
                          <span className=" max-w-[120px]">{a.mobile}</span>
                        </div>
                      </div>

                      <div className={pageStyles.doctorInfo}>
                        {a.doctorName} :{" "}
                        <span className={pageStyles.doctorSpeciality}>
                          {a.speciality}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={pageStyles.feeLabel}>
                        Fees
                      </div>
                      <div className={pageStyles.feeAmount}>
                        <BadgeIndianRupee size={16} />
                        <span>{a.fee}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className={pageStyles.slotContainer}>
                      <Calendar size={14} className={pageStyles.slotIcon} />
                      <span>
                        {formatDateISO(a.slot.date)} — {a.slot.time}
                      </span>
                    </div>

                    <div
                      className={`${pageStyles.statusBadge} ${statusClasses(a.status)}`}
                    >
                      {a.status ? a.status.toUpperCase() : "PENDING"}
                    </div>

                    <div className="flex items-center gap-2">
                      {isAdmin && (
                        <button
                          onClick={() => adminCancelAppointment(a.id)}
                          title={
                            isDisabled
                              ? isCompleted
                                ? "Cannot cancel a completed appointment"
                                : "Already cancelled"
                              : "Admin Cancel (mark as cancelled)"
                          }
                          disabled={isDisabled}
                          aria-disabled={isDisabled}
                          className={pageStyles.cancelButton(isDisabled, isCompleted)}
                        >
                          {isDisabled
                            ? isCompleted
                              ? "Completed"
                              : "Admin Cancelled"
                            : "Admin Cancel"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
