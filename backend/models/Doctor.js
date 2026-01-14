specialization: { type: String, default: "" },

imageUrl: { type: String, default: null },
imagePublicId: { type: String, default: null },

experience: { type: String, default: "" },
qualifications: { type: String, default: "" },
location: { type: String, default: "" },
about: { type: String, default: "" },

fee: { type: Number, default: 0 },
availability: {
  type: String,
      enum: ["Available", "Unavailable"],
      default: "Available",
    },

schedule: { type: Map, of: [String], default: { } },
success: { type: String, default: "" },
patients: { type: String, default: "" },
rating: { type: Number, default: 0 },