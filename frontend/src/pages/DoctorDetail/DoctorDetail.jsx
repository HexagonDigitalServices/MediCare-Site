import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CalendarCheck,
  MapPin,
  BadgeInfo,
  GraduationCap,
  Award,
  Clock,
  Star,
  Heart,
  Zap,
  Shield,
  Users,
  Phone,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Clerk client hooks
import { useAuth, useUser } from "@clerk/clerk-react";
import { doctorDetailStyles } from "../assets/dummyStyles";

const API_BASE = "http://localhost:4000";

function getScheduleDates(schedule) {
  if (!schedule) return [];

  const keys =
    typeof schedule === "object" && !Array.isArray(schedule)
      ? Object.keys(schedule)
      : [];

  // Parse keys into Date objects (supporting YYYY-MM-DD and ISO)
  const parsed = keys
    .map((k) => {
      const d = new Date(k);
      if (!isNaN(d)) return { key: k, date: d };

      // fallback: try splitting YYYY-MM-DD
      const parts = k.split("-").map((n) => Number(n));
      if (parts.length >= 3) {
        const [y, m, day] = parts;
        const dd = new Date(y, m - 1, day);
        if (!isNaN(dd)) return { key: k, date: dd };
      }
      return null;
    })
    .filter(Boolean);

  // Normalize compare by date-only (use UTC to avoid timezone time-of-day issues)
  const dateOnlyValue = (d) =>
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());

  const today = new Date();
  const todayVal = dateOnlyValue(today);

  const past = parsed
    .filter((p) => dateOnlyValue(p.date) < todayVal)
    .sort(
      (a, b) =>
        // most recent past first (descending)
        dateOnlyValue(b.date) - dateOnlyValue(a.date),
    );

  const future = parsed
    .filter((p) => dateOnlyValue(p.date) >= todayVal)
    .sort(
      (a, b) =>
        // earliest first (ascending)
        dateOnlyValue(a.date) - dateOnlyValue(b.date),
    );

  // Return array of Date objects in desired order
  return [...past, ...future].map((p) => p.date);
}

/**
 * Normalize phone string: remove non-digits and return up to last 10 digits.
 * Returns empty string if no digits.
 */
function normalizePhoneTo10(phone) {
  if (!phone) return "";
  const digits = ("" + phone).replace(/\D/g, "");
  if (!digits) return "";
  // prefer last 10 digits (common when country code present)
  return digits.length <= 10 ? digits : digits.slice(-10);
}

export default function DoctorDetail() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    gender: "",
    email: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clerk hooks
  const { getToken, isLoaded: authLoaded } = useAuth();
  const { isSignedIn, user, isLoaded: userLoaded } = useUser();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Prefill the form fields quietly if user is available (no UI markup change)
  useEffect(() => {
    if (!userLoaded) return;
    if (user) {
      const fullName =
        user.fullName ||
        `${user.firstName || ""} ${user.lastName || ""}`.trim() ||
        "";
      const rawPhone =
        user.primaryPhone ||
        (user.phoneNumbers && user.phoneNumbers.length > 0
          ? user.phoneNumbers[0]
          : "") ||
        "";
      const phone = normalizePhoneTo10(rawPhone);
      const email =
        (user.emailAddresses && user.emailAddresses[0]?.emailAddress) ||
        user.primaryEmailAddress ||
        "";

      setFormData((prev) => ({
        ...prev,
        name: prev.name || fullName,
        mobile: prev.mobile || phone,
        email: prev.email || email,
      }));
    }
  }, [userLoaded, user]);

  useEffect(() => {
    let mounted = true;
    async function fetchDoctor() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE}/api/doctors/${id}`);
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(
            body.message || `Failed to fetch (status ${res.status})`,
          );
        }
        const payload = await res.json();
        const doc = payload?.data || null;
        if (mounted) setDoctor(doc);
      } catch (err) {
        if (mounted) setError(err.message || "Failed to fetch doctor");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchDoctor();
    return () => {
      mounted = false;
    };
  }, [id]);

  const next7 = useMemo(() => getScheduleDates(doctor?.schedule), [doctor]);
  const fee = Number(doctor?.fee ?? doctor?.fees ?? 0);

  const slots = useMemo(() => {
    if (!selectedDate || !doctor?.schedule) return [];
    const key = selectedDate.toISOString().split("T")[0];
    return doctor.schedule && doctor.schedule[key] ? doctor.schedule[key] : [];
  }, [selectedDate, doctor]);

  // Mobile input handlers: only digits, max 10
  const handleMobileChange = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, mobile: digits }));
  };

  const handleMobilePaste = (e) => {
    e.preventDefault();
    const pasted = (e.clipboardData || window.clipboardData).getData("text");
    const digits = pasted.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, mobile: digits }));
  };

  const handleBooking = async () => {
    if (isSubmitting) return;

    // Validate patient details
    if (
      !formData.name ||
      !formData.age ||
      !formData.mobile ||
      !formData.gender
    ) {
      toast.error("Please fill all patient details!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    // Mobile must be exactly 10 digits
    const mobileDigits = (formData.mobile || "").replace(/\D/g, "");
    if (mobileDigits.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits.", {
        position: "top-center",
        autoClose: 2500,
      });
      return;
    }

    if (!selectedDate || !selectedSlot) {
      toast.error("Please select a date and time slot", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    if (!authLoaded || !userLoaded) {
      toast.error("Authentication not ready. Please try again in a moment.", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    if (!isSignedIn) {
      toast.error("You must sign in to create an appointment.", {
        position: "top-center",
        autoClose: 2200,
      });
      return;
    }

    setIsSubmitting(true);

    const dateISO = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD

    // prefer fields from doctor object (this is only sent as a hint; backend will use DB)
    const doctorNameValue = doctor?.name || "";
    const specialityValue =
      doctor?.specialization ||
      doctor?.speciality ||
      doctor?.specialityName ||
      "";

    // optional owner from doctor object (backend will prefer doctor.owner)
    const ownerValue = doctor?.owner || undefined;

    const payload = {
      doctorId: doctor._id || doctor.id,
      doctorName: doctorNameValue,
      speciality: specialityValue,
      owner: ownerValue,
      // NEW: send image hints (optional — backend prefers DB but accepts these)
      doctorImageUrl: doctor?.imageUrl || doctor?.image || "",
      doctorImagePublicId:
        doctor?.imagePublicId || doctor?.image?.publicId || "",
      patientName: formData.name,
      mobile: mobileDigits,
      age: formData.age,
      gender: formData.gender,
      date: dateISO,
      time: selectedSlot,
      fee: fee,
      fees: fee,
      paymentMethod: paymentMethod || "Online",
      email: formData.email || undefined,
    };

    try {
      const token = await getToken();
      if (!token) {
        throw new Error("Failed to obtain authentication token.");
      }

      const res = await fetch(`${API_BASE}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const body = await res.json().catch(() => null);
      if (!res.ok) {
        const message =
          body?.message || body?.error || `Booking failed (${res.status})`;
        toast.error(message, { position: "top-center" });
        setIsSubmitting(false);
        return;
      }

      // If checkoutUrl is returned -> redirect to Stripe Checkout
      if (body.checkoutUrl) {
        // redirect user to Stripe Checkout
        window.location.href = body.checkoutUrl;
        return;
      }

      // Booking created (Cash or free)
      toast.success("Booking successful", {
        position: "top-center",
        autoClose: 1500,
      });

      // navigate to appointments list (you can change this path)
      setTimeout(() => {
        window.location.href = "/appointments?payment_status=Pending";
      }, 700);
    } catch (err) {
      console.error("Booking error:", err);
      toast.error(
        err?.message || "Network error - booking failed (auth or server issue)",
        { position: "top-center" },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading)
    return (
      <div className={doctorDetailStyles.loadingContainer}>
        <div>Loading doctor...</div>
      </div>
    );

  if (error)
    return (
      <div className={doctorDetailStyles.errorContainer}>
        <div className={doctorDetailStyles.errorContent}>
          <div className={doctorDetailStyles.errorText}>Error</div>
          <div className={doctorDetailStyles.errorMessage}>{error}</div>
          <Link to="/doctors" className={doctorDetailStyles.backButton}>
            <ArrowLeft size={20} />
            Back to Doctors
          </Link>
        </div>
      </div>
    );

  if (!doctor)
    return (
      <div className={doctorDetailStyles.notFoundContainer}>
        <div className={doctorDetailStyles.notFoundContent}>
          <div className={doctorDetailStyles.notFoundEmoji}>😷</div>
          <h1 className={doctorDetailStyles.notFoundTitle}>Doctor Not Found</h1>
          <Link to="/doctors" className={doctorDetailStyles.backButton}>
            <ArrowLeft size={20} />
            Back to Doctors
          </Link>
        </div>
      </div>
    );

  return (
    <div className={doctorDetailStyles.pageContainer}>
      <ToastContainer />
      {/* Header */}
      <div className={doctorDetailStyles.headerContainer}>
        <div className={doctorDetailStyles.headerContent}>
          <div className={doctorDetailStyles.headerFlex}>
            <Link to="/doctors" className={doctorDetailStyles.headerBackButton}>
              <ArrowLeft size={18} />
              <span className={doctorDetailStyles.headerBackButtonText}>
                Back
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <h1 className={doctorDetailStyles.headerTitle}>Doctor Profile</h1>
            </div>

            <div className={doctorDetailStyles.headerRatingContainer}>
              <Star className={doctorDetailStyles.headerRatingIcon} size={18} />
              <span className={doctorDetailStyles.headerRatingText}>
                {doctor.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${doctorDetailStyles.mainContent} ${
          isVisible
            ? doctorDetailStyles.visibleState
            : doctorDetailStyles.hiddenState
        }`}
      >
        {/* profile card */}
        <div className={doctorDetailStyles.profileCard}>
          <div className={doctorDetailStyles.profileGrid}>
            <div className={doctorDetailStyles.leftColumn}>
              <div className={doctorDetailStyles.avatarContainer}>
                <div className={doctorDetailStyles.avatarGlow}></div>

                <img
                  src={
                    doctor.imageUrl || doctor.image || "/placeholder-doctor.jpg"
                  }
                  alt={doctor.name}
                  className={doctorDetailStyles.avatarImage}
                  style={{ objectPosition: "center" }}
                />
              </div>

              <div className={doctorDetailStyles.statsGrid}>
                <div className={doctorDetailStyles.statBox}>
                  <Heart
                    className={`${doctorDetailStyles.statIcon} ${doctorDetailStyles.heartIcon}`}
                  />
                  <div className={doctorDetailStyles.statValue}>
                    {doctor.success}%
                  </div>
                  <div className={doctorDetailStyles.statLabel}>Success</div>
                </div>
                <div className={doctorDetailStyles.statBox}>
                  <Award
                    className={`${doctorDetailStyles.statIcon} ${doctorDetailStyles.awardIcon}`}
                  />
                  <div className={doctorDetailStyles.statValue}>
                    {doctor.experience} Years
                  </div>
                  <div className={doctorDetailStyles.statLabel}>Experience</div>
                </div>
                <div className={doctorDetailStyles.statBox}>
                  <Users
                    className={`${doctorDetailStyles.statIcon} ${doctorDetailStyles.usersIcon}`}
                  />
                  <div className={doctorDetailStyles.statValue}>
                    {doctor.patients}
                  </div>
                  <div className={doctorDetailStyles.statLabel}>Patients</div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className={doctorDetailStyles.rightColumn}>
              <div className="space-y-3">
                <h1 className={doctorDetailStyles.doctorName}>{doctor.name}</h1>
                <div className={doctorDetailStyles.specializationBadge}>
                  <Zap className={doctorDetailStyles.badgeIcon} />
                  {doctor.specialization ||
                    doctor.speciality ||
                    doctor.specialization}
                </div>
              </div>

              <div className={doctorDetailStyles.infoGrid}>
                <div className={doctorDetailStyles.infoItem}>
                  <GraduationCap className={doctorDetailStyles.infoIcon} />
                  <div>
                    <div className={doctorDetailStyles.infoLabel}>
                      Qualifications
                    </div>
                    <div className={doctorDetailStyles.infoValue}>
                      {doctor.qualifications}
                    </div>
                  </div>
                </div>

                <div className={doctorDetailStyles.infoItem}>
                  <MapPin className={doctorDetailStyles.infoIcon} />
                  <div>
                    <div className={doctorDetailStyles.infoLabel}>Location</div>
                    <div className={doctorDetailStyles.infoValue}>
                      {doctor.location}
                    </div>
                  </div>
                </div>

                <div className={doctorDetailStyles.infoItem}>
                  <Clock className={doctorDetailStyles.infoIcon} />
                  <div>
                    <div className={doctorDetailStyles.infoLabel}>
                      Consultation Fee
                    </div>
                    <div className={doctorDetailStyles.feeValue}>₹{fee}</div>
                  </div>
                </div>

                <div className={doctorDetailStyles.infoItem}>
                  <Shield className={doctorDetailStyles.infoIcon} />
                  <div>
                    <div className={doctorDetailStyles.infoLabel}>
                      Availability
                    </div>
                    <div className={doctorDetailStyles.infoValue}>
                      {doctor.availability === "Available" || doctor.available
                        ? "Available"
                        : "Available Soon"}
                    </div>
                  </div>
                </div>
              </div>

              <div className={doctorDetailStyles.aboutContainer}>
                <div className={doctorDetailStyles.aboutHeader}>
                  <BadgeInfo className={doctorDetailStyles.aboutIcon} />
                  <h3 className={doctorDetailStyles.aboutTitle}>
                    About Doctor
                  </h3>
                </div>
                <p className={doctorDetailStyles.aboutText}>
                  {doctor.about || doctor.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* APPOINTMENT */}
        <div className={doctorDetailStyles.appointmentContainer}>
          <div className={doctorDetailStyles.appointmentContent}>
            <div className={doctorDetailStyles.appointmentHeader}>
              <CalendarCheck className={doctorDetailStyles.appointmentIcon} />
              <h2 className={doctorDetailStyles.appointmentTitle}>
                Book Your Appointment
              </h2>
            </div>

            <div className={doctorDetailStyles.appointmentGrid}>
              {/* LEFT COLUMN */}
              <div className={doctorDetailStyles.dateSection}>
                <h3 className={doctorDetailStyles.dateTitle}>
                  <CalendarCheck className={doctorDetailStyles.dateTitleIcon} />{" "}
                  Select Date
                </h3>

                <div className={doctorDetailStyles.dateScrollContainer}>
                  <div className={doctorDetailStyles.dateButtonsContainer}>
                    {next7.map((date) => {
                      const isSelected =
                        selectedDate?.toDateString() === date.toDateString();
                      return (
                        <button
                          key={date.toISOString()}
                          onClick={() => setSelectedDate(date)}
                          className={`${doctorDetailStyles.dateButton} ${
                            isSelected
                              ? doctorDetailStyles.dateButtonSelected
                              : doctorDetailStyles.dateButtonUnselected
                          }`}
                        >
                          <div className={doctorDetailStyles.dateContent}>
                            <div className={doctorDetailStyles.dateWeekday}>
                              {date.toLocaleDateString("en-US", {
                                weekday: "short",
                              })}
                            </div>
                            <div className={doctorDetailStyles.dateDay}>
                              {date.getDate()}
                            </div>
                            <div className={doctorDetailStyles.dateMonth}>
                              {date.toLocaleDateString("en-US", {
                                month: "short",
                              })}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* PATIENT FORM */}
                <div className={doctorDetailStyles.patientForm}>
                  <h3 className={doctorDetailStyles.patientFormTitle}>
                    Patient Details
                  </h3>

                  <div className={doctorDetailStyles.patientFormGrid}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className={doctorDetailStyles.formInput}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />

                    <input
                      type="number"
                      placeholder="Age"
                      className={doctorDetailStyles.formInput}
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                    />

                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="\d{10}"
                      maxLength={10}
                      placeholder="Mobile Number (10 digits)"
                      className={doctorDetailStyles.formInput}
                      value={formData.mobile}
                      onChange={(e) => handleMobileChange(e.target.value)}
                      onPaste={handleMobilePaste}
                    />

                    <select
                      className={doctorDetailStyles.formSelect}
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    >
                      <option value="">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>

                    <input
                      type="email"
                      placeholder="Email (optional - for receipts)"
                      className={doctorDetailStyles.emailInput}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className={doctorDetailStyles.timeSlotsSection}>
                <h3 className={doctorDetailStyles.timeSlotsTitle}>
                  <Clock className={doctorDetailStyles.timeSlotsIcon} />{" "}
                  Available Time Slots
                </h3>

                <div className={doctorDetailStyles.timeSlotsContainer}>
                  {slots.length === 0 && (
                    <p className={doctorDetailStyles.noSlotsMessage}>
                      No time slots for this date.
                    </p>
                  )}

                  {slots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`${doctorDetailStyles.timeSlotButton} ${
                        selectedSlot === slot
                          ? doctorDetailStyles.timeSlotButtonSelected
                          : doctorDetailStyles.timeSlotButtonUnselected
                      }`}
                    >
                      <div className={doctorDetailStyles.timeSlotContent}>
                        <Clock className={doctorDetailStyles.timeSlotIcon} />
                        <span>{slot}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* SUMMARY */}
                <div className={doctorDetailStyles.summaryContainer}>
                  <div className={doctorDetailStyles.summaryItem}>
                    <div className={doctorDetailStyles.summaryRow}>
                      <span className={doctorDetailStyles.summaryLabel}>
                        Selected Doctor:
                      </span>
                      <span className={doctorDetailStyles.summaryValue}>
                        {doctor?.name || "—"}
                      </span>
                    </div>

                    <div className={doctorDetailStyles.summaryRow}>
                      <span className={doctorDetailStyles.summaryLabel}>
                        Doctor Speciality:
                      </span>
                      <span className={doctorDetailStyles.summaryValue}>
                        {doctor?.specialization || doctor?.speciality || "—"}
                      </span>
                    </div>

                    <div className={doctorDetailStyles.summaryRow}>
                      <span className={doctorDetailStyles.summaryLabel}>
                        Selected Date:
                      </span>
                      <span className={doctorDetailStyles.summaryValue}>
                        {selectedDate
                          ? selectedDate.toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "Not selected"}
                      </span>
                    </div>

                    <div className={doctorDetailStyles.summaryRow}>
                      <span className={doctorDetailStyles.summaryLabel}>
                        Selected Time:
                      </span>
                      <span className={doctorDetailStyles.summaryValue}>
                        {selectedSlot || "Not selected"}
                      </span>
                    </div>

                    <div className={doctorDetailStyles.summaryRow}>
                      <span className={doctorDetailStyles.summaryLabel}>
                        Consultation Fee:
                      </span>
                      <span className={doctorDetailStyles.feeDisplay}>
                        ₹{fee}
                      </span>
                    </div>
                  </div>

                  {/* PAYMENT METHOD SELECTOR */}
                  <div className={doctorDetailStyles.paymentContainer}>
                    <label className={doctorDetailStyles.paymentLabel}>
                      Payment:
                    </label>
                    <div className={doctorDetailStyles.paymentOptions}>
                      <label
                        className={`${doctorDetailStyles.paymentOption} ${
                          paymentMethod === "Cash"
                            ? doctorDetailStyles.paymentOptionSelected
                            : doctorDetailStyles.paymentOptionUnselected
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value="Cash"
                          checked={paymentMethod === "Cash"}
                          onChange={() => setPaymentMethod("Cash")}
                          className={doctorDetailStyles.paymentRadio}
                        />
                        Cash
                      </label>
                      <label
                        className={`${doctorDetailStyles.paymentOption} ${
                          paymentMethod === "Online"
                            ? doctorDetailStyles.paymentOptionSelected
                            : doctorDetailStyles.paymentOptionUnselected
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value="Online"
                          checked={paymentMethod === "Online"}
                          onChange={() => setPaymentMethod("Online")}
                          className={doctorDetailStyles.paymentRadio}
                        />
                        Online
                      </label>
                    </div>
                  </div>

                  <button
                    onClick={handleBooking}
                    disabled={!selectedDate || !selectedSlot || isSubmitting}
                    className={`${doctorDetailStyles.bookingButton} ${
                      !selectedDate || !selectedSlot || isSubmitting
                        ? doctorDetailStyles.bookingButtonDisabled
                        : doctorDetailStyles.bookingButtonEnabled
                    }`}
                  >
                    <div className={doctorDetailStyles.bookingButtonContent}>
                      <Phone className={doctorDetailStyles.bookingIcon} />
                      <span>
                        {isSubmitting ? "Booking..." : "Confirm Booking"}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
