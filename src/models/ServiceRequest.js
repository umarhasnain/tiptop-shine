// import mongoose from "mongoose";

// const ServiceRequestSchema = new mongoose.Schema(
//   {
//     serviceName: { type: String, required: true },
//     category: { type: String },
//     answers: { type: Object, required: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.models.ServiceRequest ||
//   mongoose.model("ServiceRequest", ServiceRequestSchema);

import mongoose from "mongoose";

const ServiceRequestSchema = new mongoose.Schema(
  {
    serviceName: { type: String, required: true },
    category: { type: String },

    answers: { type: Object, required: true },

    name: { type: String },
    email: { type: String },
    phone: { type: String },
    postcode: { type: String },

    // 🔥 FIXED LOCATION (STRICT STRUCTURE)
    location: {
      city: { type: String, default: "" },
      country: { type: String, default: "" },
      region: { type: String, default: "" },
      postcode: { type: String, default: "" },

      lat: { type: Number, default: null },
      lng: { type: Number, default: null },
    },
  },
  { timestamps: true }
);

// ⚠️ IMPORTANT: prevent overwrite issues in dev
export default mongoose.models.ServiceRequest ||
  mongoose.model("ServiceRequest", ServiceRequestSchema);