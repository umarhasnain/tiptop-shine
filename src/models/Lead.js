// import mongoose from "mongoose";

// const LeadSchema = new mongoose.Schema(
//   {
//     serviceName: {
//       type: String,
//       required: true,
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

//     documents: {
//       id: String,
//       addressProof: String,
//       businessLicense: String,
//     },

//     status: {
//       type: String,
//       default: "pending", // admin review
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Lead ||
//   mongoose.model("Lead", LeadSchema);


import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
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

    documents: {
      id: String,
      addressProof: String,
      businessLicense: String,
    },

    assignedProfessional: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Professional",
    },

    isRead: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Lead ||
  mongoose.model("Lead", LeadSchema);
