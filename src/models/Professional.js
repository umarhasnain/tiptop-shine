import mongoose from 'mongoose';

const ProfessionalSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    miles: String,
    postcode: String,
    name: String,
    company: String,
    email: { type: String, required: true },
    phone: String,
    hasWebsite: String,
    companySize: String,
    availability: String,
    timeSlots: String,
    workType: String,
    documents: Object,
  },
  { timestamps: true }
);

export default mongoose.models.Professional ||
  mongoose.model('Professional', ProfessionalSchema);
