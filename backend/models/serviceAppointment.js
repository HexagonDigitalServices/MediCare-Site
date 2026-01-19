{
  patientName: {
    type: String,
      required: true,
        trim: true,
    },

  mobile: {
    type: String,
      required: true,
        trim: true,
    },

  age: {
    type: Number,
      min: 0,
    },

  gender: {
    type: String,
      enum: ["Male", "Female", "Other", ""],
      default: "",
    },

  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
        required: true,
    },

  serviceName: {
    type: String,
      required: true,
    },

  serviceImage: {
    url: { type: String, default: "" },
    publicId: { type: String, default: "" },
  },

  fees: {
    type: Number,
      required: true,
        min: 0,
    },

  date: {
    type: String,
      required: true,
        index: true,
    },

  hour: {
    type: Number,
      required: true,
    },

  minute: {
    type: Number,
      required: true,
    },

  ampm: {
    type: String,
      enum: ["AM", "PM"],
      required: true,
    },

  status: {
    type: String,
      enum: ["Pending", "Confirmed", "Rescheduled", "Completed", "Canceled"],
      default: "Pending",
      index: true,
    },

  rescheduledTo: {
    date: { type: String },
    hour: { type: Number },
    minute: { type: Number },
    ampm: { type: String, enum: ["AM", "PM"] },
  },

  payment: {
    method: {
      type: String,
        enum: ["Cash", "Online"],
        default: "Cash",
      },

    status: {
      type: String,
     enum: ["Pending", "Paid", "Failed", "Refunded"],
        default: "Pending",
      },

    amount: {
      type: Number,
        required: true,
      },

    providerId: {
      type: String,
        default: "",
      },

    paidAt: {
      type: Date,
        default: null,
      },

    sessionId: {
      type: String,
        default: "",
        index: true,
      },

    meta: {
      type: mongoose.Schema.Types.Mixed,
        default: { },
    },
  },
}
