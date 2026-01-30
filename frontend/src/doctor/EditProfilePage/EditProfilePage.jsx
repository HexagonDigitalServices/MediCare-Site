import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Edit2,
  Save,
  X,
  Plus,
  Calendar,
  Clock,
  Image as ImageIcon,
  Check,
  Trash,
  Star,
  User,
  Briefcase,
  GraduationCap,
  MapPin,
  DollarSign,
  CheckCircle,
  AlertCircle,
  BadgeIndianRupee,
} from "lucide-react";
import { editProfilePageStyles, iconSize } from "../assets/dummyStyles";

const STORAGE_KEY = "doctorToken_v1";

function parse12HourTimeToMinutes(t) {
  if (!t) return 0;
  const [time, ampm] = t.split(" ");
  const [hh, mm] = time.split(":");
  let h = Number(hh) % 12;
  if ((ampm || "").toUpperCase() === "PM") h += 12;
  return h * 60 + Number(mm);
}

function formatTimeFromInput(time24) {
  if (!time24) return time24;
  const [h, m] = time24.split(":");
  let hr = Number(h);
  const ampm = hr >= 12 ? "PM" : "AM";
  hr = hr % 12 || 12;
  return `${String(hr).padStart(2, "0")}:${m} ${ampm}`;
}

function dedupeAndSortSchedule(schedule = {}) {
  const out = {};
  Object.entries(schedule || {}).forEach(([date, slots]) => {
    const uniq = Array.from(new Set(slots || []));
    uniq.sort(
      (a, b) => parse12HourTimeToMinutes(a) - parse12HourTimeToMinutes(b),
    );
    out[date] = uniq;
  });
  return out;
}

export default function EditProfilePage({ apiBase }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const API_BASE = "http://localhost:4000/api/doctors";

  const [doc, setDoc] = useState(null);
  const [editing, setEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [localImageFile, setLocalImageFile] = useState(null);
  const [saveMessage, setSaveMessage] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [loading, setLoading] = useState(true);

  const styles = editProfilePageStyles;

  useEffect(() => {
    let cancelled = false;
    async function fetchDoctor() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/${id}`);
        const json = await res.json();
        if (!res.ok) throw new Error(json?.message || "Failed to fetch doctor");
        const d = json.data || json || {};
        d.schedule = dedupeAndSortSchedule(d.schedule || {});
        d.imageUrl =
          d.imageUrl || d.image || d.imageUrl === null ? d.imageUrl : d.image;
        if (!cancelled) {
          setDoc(d);
          setImagePreview(d.imageUrl || "");
        }
      } catch (err) {
        console.error("fetchDoctor error:", err);
        addToast("Unable to load profile", "error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (id) fetchDoctor();
    return () => {
      cancelled = true;
      if (imagePreview && imagePreview.startsWith("blob:"))
        URL.revokeObjectURL(imagePreview);
    };
  }, [id]);

  const addToast = (text, type = "success") => {
    const idt = Date.now() + Math.random();
    const t = { id: idt, text, type };
    setToasts((prev) => [t, ...prev.slice(0, 2)]);
    setTimeout(
      () => setToasts((prev) => prev.filter((it) => it.id !== idt)),
      3000,
    );
  };

  const addDate = (dateStr) => {
    if (!dateStr) return;
    if (doc.schedule[dateStr]) {
      addToast("Date already exists", "error");
      return;
    }
    setDoc((d) => ({ ...d, schedule: { ...d.schedule, [dateStr]: [] } }));
    addToast("Date added successfully", "success");
  };

  const addSlot = (dateStr, time) => {
    if (!dateStr || !time) return;
    const formatted = formatTimeFromInput(time);
    setDoc((d) => {
      const existing = d.schedule[dateStr] || [];
      if (existing.includes(formatted)) {
        addToast(`${formatted} already exists for ${dateStr}`, "error");
        return d;
      }
      const nextArr = [...existing, formatted];
      nextArr.sort(
        (a, b) => parse12HourTimeToMinutes(a) - parse12HourTimeToMinutes(b),
      );
      return { ...d, schedule: { ...d.schedule, [dateStr]: nextArr } };
    });
    addToast(`Time slot ${formatted} added`, "success");
  };

  const removeSlot = (dateStr, slot) => {
    setDoc((d) => {
      const next = (d.schedule[dateStr] || []).filter((s) => s !== slot);
      return { ...d, schedule: { ...d.schedule, [dateStr]: next } };
    });
    addToast(`Removed ${slot} from ${dateStr}`, "info");
  };

  const removeDate = (dateStr) => {
    setDoc((d) => {
      const clone = { ...d.schedule };
      delete clone[dateStr];
      return { ...d, schedule: clone };
    });
    addToast(`Date ${dateStr} removed`, "info");
  };

  const handleImageChange = (e) => {
    if (!editing) return;
    const file = e.target.files?.[0];
    if (!file) return;
    if (imagePreview && imagePreview.startsWith("blob:"))
      URL.revokeObjectURL(imagePreview);
    const url = URL.createObjectURL(file);
    setImagePreview(url);
    setLocalImageFile(file);
    setDoc((d) => ({ ...d, imageUrl: url }));
    addToast("Profile image updated locally", "success");
  };

  const toggleAvailability = () => {
    setDoc((d) => {
      const current = d.availability === "Available" || d.available === true;
      const nextVal = current ? "Unavailable" : "Available";
      return { ...d, availability: nextVal, available: !current };
    });
    addToast("Availability toggled", "info");
  };

  const handleReset = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/${id}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || "Failed to fetch");
      const d = json.data || json || {};
      d.schedule = dedupeAndSortSchedule(d.schedule || {});
      setDoc(d);
      setImagePreview(d.imageUrl || "");
      setLocalImageFile(null);
      setEditing(false);
      addToast("Reset to server profile", "info");
    } catch (err) {
      console.error("Reset error:", err);
      addToast("Reset failed", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!doc) return;
    setSaveMessage({ type: "saving", text: "Saving profile..." });
    addToast("Saving profile...", "info");

    try {
      const form = new FormData();
      const updatable = [
        "name",
        "specialization",
        "experience",
        "qualifications",
        "location",
        "about",
        "fee",
        "availability",
        "success",
        "patients",
        "rating",
        "email",
      ];
      updatable.forEach((k) => {
        if (doc[k] !== undefined && doc[k] !== null) {
          form.append(k, String(doc[k]));
        }
      });

      form.append("schedule", JSON.stringify(doc.schedule || {}));

      if (localImageFile) {
        form.append("image", localImageFile);
      } else if (doc.imageUrl && !doc.imageUrl.startsWith("blob:")) {
        form.append("imageUrl", doc.imageUrl);
      }

      const token = localStorage.getItem(STORAGE_KEY);
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const res = await fetch(`${API_BASE}/${id}`, {
        method: "PUT",
        headers,
        body: form,
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.message || "Failed to save");
      }

      const updated = json.data || json;
      updated.schedule = dedupeAndSortSchedule(updated.schedule || {});
      setDoc(updated);
      setLocalImageFile(null);
      setImagePreview(updated.imageUrl || imagePreview);
      setEditing(false);
      setSaveMessage({ type: "success", text: "Profile saved successfully!" });
      addToast("Profile saved successfully!", "success");
      setTimeout(() => setSaveMessage(null), 1500);
    } catch (err) {
      console.error("handleSave error:", err);
      setSaveMessage({ type: "error", text: "Save failed" });
      addToast(err.message || "Save failed", "error");
    }
  };

  const fieldConfigs = doc
    ? [
        {
          icon: User,
          label: "Name",
          value: doc.name || "",
          onChange: (v) => setDoc((d) => ({ ...d, name: v })),
        },
        {
          icon: Briefcase,
          label: "Specialization",
          value: doc.specialization || "",
          onChange: (v) => setDoc((d) => ({ ...d, specialization: v })),
        },
        {
          icon: Clock,
          label: "Experience",
          value: doc.experience || "",
          onChange: (v) => setDoc((d) => ({ ...d, experience: v })),
        },
        {
          icon: GraduationCap,
          label: "Qualifications",
          value: doc.qualifications || "",
          onChange: (v) => setDoc((d) => ({ ...d, qualifications: v })),
        },
        {
          icon: MapPin,
          label: "Location",
          value: doc.location || "",
          onChange: (v) => setDoc((d) => ({ ...d, location: v })),
        },
        {
          icon: User,
          label: "Patients",
          value: doc.patients ?? "",
          onChange: (v) =>
            setDoc((d) => ({ ...d, patients: v === "" ? "" : Number(v) || 0 })),
        },
        {
          icon: CheckCircle,
          label: "Success",
          value: doc.success ?? "",
          onChange: (v) =>
            setDoc((d) => ({ ...d, success: v === "" ? "" : Number(v) || 0 })),
        },
        {
          icon: Star,
          label: "Rating (out of 5)",
          value: doc.rating ?? "",
          onChange: (v) =>
            setDoc((d) => ({
              ...d,
              rating: v === "" ? "" : parseFloat(v) || 0,
            })),
        },
        {
          icon: DollarSign,
          label: "Fee (INR)",
          value: doc.fee ?? "",
          onChange: (v) =>
            setDoc((d) => ({ ...d, fee: v === "" ? "" : Number(v) || 0 })),
        },
      ]
    : [];

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className="text-center">
          <div className={styles.loadingSpinner} />
          <div className={styles.loadingText}>Loading profile...</div>
        </div>
      </div>
    );
  }

  if (!doc) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.errorText}>Doctor not found.</div>
      </div>
    );
  }

  const isAvailable = doc.availability === "Available" || doc.available;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.maxWidthContainer}>
        <div className={styles.toastContainer}>
          {toasts.map((t) => (
            <div
              key={t.id}
              className={`${styles.toastBase} ${
                t.type === "error"
                  ? styles.toastError
                  : t.type === "info"
                    ? styles.toastInfo
                    : styles.toastSuccess
              }`}
            >
              {t.type === "error" ? (
                <AlertCircle
                  className={`${styles.toastIcon} ${styles.toastErrorIcon}`}
                />
              ) : (
                <Check
                  className={`${styles.toastIcon} ${styles.toastSuccessIcon}`}
                />
              )}
              <span className={styles.toastText}>{t.text}</span>
            </div>
          ))}
        </div>

        <div className={styles.mainCard}>
          <div className={styles.headerBackground}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img
                  src={imagePreview || ""}
                  alt={doc.name}
                  className={styles.profileImage}
                />
                <label className={styles.imageEditButton(editing)}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={styles.imageInput}
                    disabled={!editing}
                  />
                  <ImageIcon className={styles.imageEditIcon(editing)} />
                </label>
              </div>
            </div>
          </div>

          <div className={styles.profileContent}>
            <div className={styles.profileHeader}>
              <div className={styles.profileInfo}>
                <h1 className={styles.profileName}>{doc.name}</h1>
                <p className={styles.profileSubtitle}>
                  <Briefcase className={styles.subtitleIcon} />
                  <span className="truncate">
                    {doc.specialization} : {doc.location}
                  </span>
                </p>

                <div className={styles.statsContainer}>
                  {/* Patients */}
                  <div className={styles.statItem}>
                    <User
                      className={`${styles.statIcon} ${styles.statEmeraldIcon}`}
                    />
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <div className={styles.statLabel}>Patients</div>
                        {!editing ? (
                          <div className={styles.statValue}>{doc.patients}</div>
                        ) : (
                          <input
                            type="number"
                            min={0}
                            step={1}
                            value={doc.patients ?? ""}
                            onChange={(e) =>
                              setDoc((d) => ({
                                ...d,
                                patients:
                                  e.target.value === ""
                                    ? ""
                                    : Number(e.target.value),
                              }))
                            }
                            className={styles.statPatientsInput}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Success */}
                  <div className={styles.statItem}>
                    <CheckCircle
                      className={`${styles.statIcon} ${styles.statEmeraldIcon}`}
                    />
                    <div className="flex flex-col">
                      <div className={styles.statLabel}>Success</div>
                      {!editing ? (
                        <div className={styles.statValue}>{doc.success}</div>
                      ) : (
                        <input
                          type="number"
                          min={0}
                          step={1}
                          value={doc.success ?? ""}
                          onChange={(e) =>
                            setDoc((d) => ({
                              ...d,
                              success:
                                e.target.value === ""
                                  ? ""
                                  : Number(e.target.value),
                            }))
                          }
                          className={styles.statPatientsInput}
                        />
                      )}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className={styles.ratingStatItem}>
                    <Star className={styles.statAmberIcon("star")} />
                    <div className="flex flex-col">
                      <div className={styles.statAmberLabel}>Rating</div>
                      {!editing ? (
                        <div className={styles.statAmberValue}>
                          {typeof doc.rating === "number"
                            ? `${doc.rating}/5`
                            : doc.rating}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min={0}
                            max={5}
                            step={0.1}
                            value={doc.rating ?? ""}
                            onChange={(e) =>
                              setDoc((d) => ({
                                ...d,
                                rating:
                                  e.target.value === ""
                                    ? ""
                                    : parseFloat(e.target.value),
                              }))
                            }
                            className={styles.statInput}
                          />
                          <div className="text-sm text-amber-700">/5</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Fee */}
                  <div className={styles.feeStatItem}>
                    <BadgeIndianRupee className={styles.statAmberIcon()} />
                    {!editing ? (
                      <span className={styles.statAmberValue}>{doc.fee}</span>
                    ) : (
                      <input
                        type="number"
                        min={0}
                        step={1}
                        value={doc.fee ?? ""}
                        onChange={(e) =>
                          setDoc((d) => ({
                            ...d,
                            fee:
                              e.target.value === ""
                                ? ""
                                : Number(e.target.value),
                          }))
                        }
                        className={styles.statInput}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.actionButtons}>
                <button
                  type="button"
                  onClick={toggleAvailability}
                  className={styles.availabilityToggle(isAvailable)}
                >
                  <div className={styles.toggleTrack(isAvailable)}>
                    <div className={styles.toggleThumb(isAvailable)}></div>
                  </div>
                  <span className={styles.toggleText(isAvailable)}>
                    {isAvailable ? "Available" : "Unavailable"}
                  </span>
                </button>

                <button
                  onClick={() => setEditing((s) => !s)}
                  className={styles.editButton}
                >
                  <div className={styles.editButtonContent}>
                    <Edit2 className="w-4 h-4" />
                    <span className="font-medium">
                      {editing ? "Cancel" : "Edit Profile"}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>
                <div className={styles.sectionIconContainer}>
                  <User className={styles.sectionIcon} />
                </div>
                Personal Information
              </h2>

              <div className={styles.fieldGrid}>
                {fieldConfigs.map((field, index) => (
                  <div key={index} className={styles.fieldGroup}>
                    <div className={styles.fieldHeader}>
                      <div className={styles.fieldIconContainer(editing)}>
                        <field.icon className={styles.fieldIcon} />
                      </div>
                      <label className={styles.fieldLabel}>{field.label}</label>
                    </div>
                    <input
                      value={field.value}
                      onChange={(e) =>
                        editing && field.onChange(e.target.value)
                      }
                      disabled={!editing}
                      readOnly={!editing}
                      className={styles.inputBase(editing)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* About */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>
                <div className={styles.sectionIconContainer}>
                  <Briefcase className={styles.sectionIcon} />
                </div>
                About
              </h2>
              <div className="relative">
                <textarea
                  rows={3}
                  value={doc.about || ""}
                  onChange={(e) =>
                    editing && setDoc((d) => ({ ...d, about: e.target.value }))
                  }
                  disabled={!editing}
                  readOnly={!editing}
                  className={styles.aboutTextarea(editing)}
                  placeholder="Tell patients about your expertise, approach, and philosophy..."
                />
                <div className={styles.aboutCharCount}>
                  {(doc.about || "").length}/500
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className={styles.formSection}>
              <div className={styles.scheduleHeader}>
                <h2 className={styles.sectionTitle}>
                  <div className={styles.sectionIconContainer}>
                    <Calendar className={styles.sectionIcon} />
                  </div>
                  Schedule & Availability
                </h2>

                <div className="flex items-center gap-3">
                  {editing && <AddDate onAdd={addDate} />}
                  {saveMessage && (
                    <div className={styles.saveMessage(saveMessage.type)}>
                      {saveMessage.text}
                    </div>
                  )}
                </div>
              </div>

              {Object.keys(doc.schedule || {}).length === 0 ? (
                <div className={styles.emptySchedule}>
                  <Calendar className={styles.emptyScheduleIcon} />
                  <p className={styles.emptyScheduleText}>
                    No schedule added yet
                  </p>
                  <p className={styles.emptyScheduleSubtext}>
                    Add dates to create time slots
                  </p>
                </div>
              ) : (
                <div className={styles.scheduleGrid}>
                  {Object.entries(doc.schedule)
                    .sort(([a], [b]) => (a > b ? 1 : -1))
                    .map(([date, slots]) => (
                      <div key={date} className={styles.dateCard}>
                        <div className={styles.dateHeader}>
                          <div className="flex items-center gap-3">
                            <div className={styles.dateIconContainer}>
                              <Calendar className={styles.dateIcon} />
                            </div>
                            <div>
                              <div className={styles.dateTitle}>
                                {new Date(date).toLocaleDateString("en-US", {
                                  weekday: "short",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </div>
                              <div className={styles.dateSubtitle}>{date}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={styles.dateSlotCount}>
                              {slots.length} slot{slots.length !== 1 ? "s" : ""}
                            </span>
                            <button
                              onClick={() => editing && removeDate(date)}
                              disabled={!editing}
                              className={styles.dateDeleteButton(editing)}
                            >
                              <Trash className={styles.dateDeleteIcon} />
                            </button>
                          </div>
                        </div>

                        <div className={styles.timeSlotContainer}>
                          {slots.map((slot, idx) => (
                            <div key={idx} className={styles.timeSlotItem}>
                              <div className="flex items-center gap-3">
                                <Clock className={styles.timeSlotIcon} />
                                <span className={styles.timeSlotText}>
                                  {slot}
                                </span>
                              </div>
                              <button
                                onClick={() =>
                                  editing && removeSlot(date, slot)
                                }
                                disabled={!editing}
                                className={styles.timeSlotDeleteButton(editing)}
                              >
                                <X className={styles.timeSlotDeleteIcon} />
                              </button>
                            </div>
                          ))}

                          {editing && (
                            <div className={styles.addSlotContainer}>
                              <div className="flex items-center gap-2">
                                <input
                                  type="time"
                                  className={styles.addSlotInput}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" && e.target.value) {
                                      addSlot(date, e.target.value);
                                      e.target.value = "";
                                    }
                                  }}
                                  onBlur={(e) => {
                                    if (e.target.value) {
                                      addSlot(date, e.target.value);
                                      e.target.value = "";
                                    }
                                  }}
                                />
                                <button
                                  onClick={(e) => {
                                    const input =
                                      e.currentTarget.previousElementSibling;
                                    if (input.value) {
                                      addSlot(date, input.value);
                                      input.value = "";
                                    }
                                  }}
                                  className={styles.addSlotButton}
                                >
                                  <Plus className={styles.addSlotIcon} />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className={styles.actionsSection}>
              <div className={styles.actionsText}>
                {editing
                  ? "Make changes and save your profile"
                  : "View and edit your profile"}
              </div>

              <div className={styles.actionsButtons}>
                <button onClick={handleReset} className={styles.resetButton}>
                  Reset to Server
                </button>

                <button
                  onClick={handleSave}
                  disabled={!editing || saveMessage?.type === "saving"}
                  className={styles.saveButton}
                >
                  {saveMessage?.type === "saving" ? (
                    <div className={styles.saveButtonContent}>
                      <div className={styles.saveSpinner}></div>
                      <span>Saving...</span>
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      <div className={styles.saveButtonContent}>
                        <Save className="w-4 h-4" />
                        <span className="font-medium">Save Profile</span>
                      </div>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{styles.customCSS}</style>
    </div>
  );
}

function AddDate({ onAdd }) {
  const styles = editProfilePageStyles;
  const [value, setValue] = useState("");
  const handleAdd = () => {
    if (value) {
      onAdd(value);
      setValue("");
    }
  };
  return (
    <div className={styles.addDateContainer}>
      <input
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
        className={styles.addDateInput}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd} className={styles.addDateButton}>
        <Plus className={styles.addDateIcon} />
        <span className="font-medium">Add Date</span>
      </button>
    </div>
  );
}
