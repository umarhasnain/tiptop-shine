import mongoose from "mongoose";

const ServiceRequestSchema = new mongoose.Schema(
  {
    serviceName: { type: String, required: true },
    category: { type: String },
    answers: { type: Object, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.ServiceRequest ||
  mongoose.model("ServiceRequest", ServiceRequestSchema);