import mongoose from 'mongoose';

const OnboardingSchema = new mongoose.Schema({
  miles: String,
  postcode: String,
  name: String,
  company: String,
  email: String,
  phone: String,
  hasWebsite: String,
  companySize: String,
  availability: String,
  timeSlots: String,
  workType: String,
  serviceName: String,
  documents: {
    id: { type: Object, default: null },
    addressProof: { type: Object, default: null },
    businessLicense: { type: Object, default: null },
  },
  createdAt: { type: Date, default: Date.now },
});

const Onboarding = mongoose.models.Onboarding || mongoose.model('Onboarding', OnboardingSchema);
export default Onboarding;
