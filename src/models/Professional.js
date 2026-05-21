
// import mongoose from "mongoose";

// const ProfessionalSchema = new mongoose.Schema(
//   {
//     serviceName: {
//       type: [String],
//       default: [],
//     },

//     miles: String,
//     postcode: String,
//     name: String,
//     company: String,
//     email: { type: String, required: true },
//     phone: String,

//     hasWebsite: String,
//     companySize: String,
//     availability: String,
//     timeSlots: String,
//     workType: String,

//     documents: Object,
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Professional ||
//   mongoose.model("Professional", ProfessionalSchema);


import mongoose from "mongoose";

const ProfessionalSchema = new mongoose.Schema(
  {
    serviceName: {
      type: [String],
      default: [],
    },

    miles: String,
    postcode: String,
    name: String,
    company: String,
    email: { type: String, required: true, unique: true },
    phone: String,

    credits: {
      type: Number,
      default: 0,
    },

    subscription: {
      plan: {
        type: String,
        default: "Free",
      },
      expiresAt: Date,
    },

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
  mongoose.model("Professional", ProfessionalSchema);