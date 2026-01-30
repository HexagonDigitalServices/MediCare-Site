function parseDateTime(date, time) {
  return new Date(`${date}T${time}:00`);
}

function formatTimeAMPM(time24) {
  if (!time24) return "";
  const [hh, mm] = time24.split(":");
  let h = parseInt(hh, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${mm} ${ampm}`;
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function to24HourFromMaybe12(timeStr) {
  if (!timeStr) return "00:00";
  const m = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
  if (!m) return timeStr;
  let hh = Number(m[1]);
  const mm = m[2];
  const ampm = m[3];
  if (!ampm) return `${String(hh).padStart(2, "0")}:${mm}`;
  const up = ampm.toUpperCase();
  if (up === "AM") {
    if (hh === 12) hh = 0;
  } else {
    if (hh !== 12) hh += 12;
  }
  return `${String(hh).padStart(2, "0")}:${mm}`;
}

function to12HourFrom24(hhmm) {
  if (!hhmm) return "12:00 AM";
  const [hh, mm] = hhmm.split(":").map(Number);
  const ampm = hh >= 12 ? "PM" : "AM";
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${String(h12)}:${String(mm).padStart(2, "0")} ${ampm}`;
}

function backendToFrontendStatus(s) {
  if (!s) return "pending";
  const v = String(s).toLowerCase();
  if (v === "pending") return "pending";
  if (v === "confirmed") return "confirmed";
  if (v === "completed" || v === "complete") return "complete";
  if (v === "canceled" || v === "cancelled") return "cancelled";
  if (v === "rescheduled") return "rescheduled";
  return v;
}

function frontendToBackendStatus(fs) {
  if (!fs) return "Pending";
  const v = String(fs).toLowerCase();
  if (v === "pending") return "Pending";
  if (v === "confirmed") return "Confirmed";
  if (v === "complete") return "Completed";
  if (v === "cancelled") return "Canceled";
  if (v === "rescheduled") return "Rescheduled";
  return fs;
}

function normalizeAppointment(a) {
  if (!a) return null;
  const id = a._id || a.id || String(Math.random()).slice(2);
  const patient = a.patientName || a.patient || a.name || "Unknown";
  const age = a.age ?? a.patientAge ?? "";
  const gender = a.gender || "";
  const doctorName =
    (a.doctorId && a.doctorId.name) || a.doctorName || a.doctor || "";
  const doctorImage =
    (a.doctorId && (a.doctorId.imageUrl || a.doctorId.image)) ||
    a.doctorImage ||
    a.doctorImageUrl ||
    "";
  const speciality =
    (a.doctorId && (a.doctorId.specialization || a.doctorId.speciality)) ||
    a.speciality ||
    a.specialization ||
    "";
  const mobile = a.mobile || a.phone || "";
  const fee = Number(a.fees ?? a.fee ?? a.payment?.amount ?? 0) || 0;
  const date = a.date || (a.slot && a.slot.date) || "";
  const rawTime =
    a.time ||
    (a.slot && a.slot.time) ||
    (a.hour != null
      ? `${String(a.hour).padStart(2, "0")}:${String(a.minute || 0).padStart(
          2,
          "0",
        )}`
      : "");
  const time = to24HourFromMaybe12(rawTime);
  const status = backendToFrontendStatus(
    a.status || a.payment?.status || "pending",
  );
  return {
    id,
    patient,
    age,
    gender,
    doctorName,
    doctorImage,
    speciality,
    mobile,
    date,
    time,
    fee,
    status,
    raw: a,
  };
}

function StatusBadge({ status }) {
  const base = listPageStyles.statusBadgeBase;
  if (status === "complete")
    return (
      <span className={`${base} ${listPageStyles.statusBadgeComplete}`}>
        Completed
      </span>
    );
  if (status === "cancelled")
    return (
      <span className={`${base} ${listPageStyles.statusBadgeCancelled}`}>
        Cancelled
      </span>
    );
  if (status === "confirmed")
    return (
      <span className={`${base} ${listPageStyles.statusBadgeConfirmed}`}>
        Confirmed
      </span>
    );
  if (status === "rescheduled")
    return (
      <span className={`${base} ${listPageStyles.statusBadgeRescheduled}`}>
        Rescheduled
      </span>
    );
  return (
    <span className={`${base} ${listPageStyles.statusBadgePending}`}>
      Pending
    </span>
  );
}

function StatusSelect({ appointment, onChange }) {
  const terminal =
    appointment.status === "complete" || appointment.status === "cancelled";

  if (appointment.status === "rescheduled") {
    return (
      <select
        value={appointment.status}
        onChange={(e) => onChange(e.target.value)}
        className={`${listPageStyles.statusSelect} ${
          terminal
            ? listPageStyles.statusSelectDisabled
            : listPageStyles.statusSelectEnabled
        }`}
        title="After reschedule you can mark Completed or Cancelled"
      >
        <option value="rescheduled" disabled>
          Rescheduled
        </option>
        <option value="complete">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>
    );
  }

  const options = [
    { value: "pending", label: "Pending" },
    { value: "confirmed", label: "Confirmed" },
    { value: "complete", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ];

  return (
    <select
      value={appointment.status}
      onChange={(e) => onChange(e.target.value)}
      disabled={terminal}
      className={`${listPageStyles.statusSelect} ${
        terminal
          ? listPageStyles.statusSelectDisabled
          : listPageStyles.statusSelectEnabled
      }`}
      title={terminal ? "Status cannot be changed" : "Change status"}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} className="text-sm">
          {opt.label}
        </option>
      ))}
    </select>
  );
}

function RescheduleButton({ appointment, onReschedule }) {
  const terminal =
    appointment.status === "complete" || appointment.status === "cancelled";
  const [editing, setEditing] = useState(false);
  const [date, setDate] = useState(appointment.date || "");
  const [time, setTime] = useState(appointment.time || "09:00");

  const minDate = useMemo(() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }, []);

  useEffect(() => {
    const apptRaw = appointment.date ? String(appointment.date) : "";
    const apptDate = apptRaw.slice(0, 10);
    setDate(apptDate && apptDate >= minDate ? apptDate : minDate);
    setTime(appointment.time || "09:00");
  }, [appointment.date, appointment.time, minDate]);

  function save() {
    if (!date || !time) return;
    if (date < minDate) {
      setDate(minDate);
      return;
    }
    onReschedule(date, time);
    setEditing(false);
  }

  function cancel() {
    const apptRaw = appointment.date ? String(appointment.date) : "";
    const apptDate = apptRaw.slice(0, 10);
    setDate(apptDate && apptDate >= minDate ? apptDate : minDate);
    setTime(appointment.time || "09:00");
    setEditing(false);
  }

  return (
    <div className="w-full">
      {!editing ? (
        <div className="flex justify-end">
          <button
            onClick={() => setEditing(true)}
            disabled={terminal}
            title={
              terminal ? "Cannot reschedule completed/cancelled" : "Reschedule"
            }
            className={`${listPageStyles.rescheduleButton} ${
              terminal
                ? listPageStyles.rescheduleButtonDisabled
                : listPageStyles.rescheduleButtonEnabled
            }`}
          >
            Reschedule
          </button>
        </div>
      ) : (
        <div className={listPageStyles.rescheduleForm}>
          <input
            type="date"
            value={date}
            min={minDate}
            onChange={(e) => setDate(e.target.value)}
            className={listPageStyles.dateInput}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={listPageStyles.timeInput}
          />
          <div className={listPageStyles.rescheduleButtons}>
            <button onClick={save} className={listPageStyles.saveButton}>
              Save
            </button>
            <button onClick={cancel} className={listPageStyles.cancelButton}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const doctorId = params.id;

  async function fetchAppointments() {
    setLoading(true);
    setError(null);
    try {
      const url = `${API_BASE}/api/appointments/doctor/${encodeURIComponent(
        doctorId,
      )}`;

      const res = await fetch(url);
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          body?.message || `Failed to fetch appointments (${res.status})`,
        );
      }
      const body = await res.json();
      const list = Array.isArray(body.appointments)
        ? body.appointments
        : Array.isArray(body)
          ? body
          : (body.items ?? body.data ?? []);
      const normalized = (Array.isArray(list) ? list : [])
        .map(normalizeAppointment)
        .filter(Boolean);
      setAppointments(normalized);
    } catch (err) {
      console.error("fetchAppointments:", err);
      setError(err.message || "Failed to load appointments");
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAppointments();
  }, []);

  async function updateStatusRemote(id, newStatus) {
    const appt = appointments.find((p) => p.id === id);
    if (!appt) return;
    if (appt.status === "complete" || appt.status === "cancelled") return;

    const backendStatus = frontendToBackendStatus(newStatus);

    setAppointments((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p)),
    );

    try {
      const res = await fetch(`${API_BASE}/api/appointments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: backendStatus }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          body?.message || `Status update failed (${res.status})`,
        );
      }
      const body = await res.json();
      const updated = body.appointment || body;
      setAppointments((prev) =>
        prev.map((p) =>
          p.id === id
            ? normalizeAppointment(updated) || {
                ...p,
                status: backendToFrontendStatus(
                  updated.status || backendStatus,
                ),
              }
            : p,
        ),
      );
    } catch (err) {
      console.error("updateStatusRemote:", err);
      setAppointments((prev) =>
        prev.map((p) => (p.id === id ? { ...p, status: appt.status } : p)),
      );
      setError(err.message || "Failed to update status");
    }
  }

  async function rescheduleRemote(id, newDate, newTime24) {
    const appt = appointments.find((p) => p.id === id);
    if (!appt) return;
    if (appt.status === "complete" || appt.status === "cancelled") return;

    const time12 = to12HourFrom24(newTime24);

    setAppointments((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, date: newDate, time: newTime24, status: "rescheduled" }
          : p,
      ),
    );

    try {
      const res = await fetch(`${API_BASE}/api/appointments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: newDate, time: time12 }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || `Reschedule failed (${res.status})`);
      }
      const body = await res.json();
      const updated = body.appointment || body;
      setAppointments((prev) =>
        prev.map((p) =>
          p.id === id
            ? normalizeAppointment(updated) || {
                ...p,
                date: newDate,
                time: newTime24,
                status: backendToFrontendStatus(
                  updated.status || "Rescheduled",
                ),
              }
            : p,
        ),
      );
    } catch (err) {
      console.error("rescheduleRemote:", err);
      setError(err.message || "Failed to reschedule — reloading");
      await fetchAppointments();
    }
  }

  function updateStatus(id, newStatus) {
    updateStatusRemote(id, newStatus);
  }

  function updateDateTime(id, newDate, newTime) {
    rescheduleRemote(id, newDate, newTime);
  }

  const filtered = useMemo(() => {
    return [...appointments]
      .filter((a) =>
        search
          ? (a.patient || "").toLowerCase().includes(search.toLowerCase())
          : true,
      )
      .filter((a) => (statusFilter ? a.status === statusFilter : true))
      .sort(
        (a, b) => parseDateTime(b.date, b.time) - parseDateTime(a.date, a.time),
      );
  }, [appointments, search, statusFilter]);

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={listPageStyles.statusFilter}
              title="Filter by status"
            >
              <option value="">All</option>
              <option value="complete">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="rescheduled">Rescheduled</option>
            </select>
