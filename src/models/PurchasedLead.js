// // import mongoose from "mongoose";

// // const PurchasedLeadSchema =
// //   new mongoose.Schema(
// //     {
// //       leadId: {
// //         type: String,
// //         required: true,
// //       },

// //       professionalEmail: {
// //         type: String,
// //         required: true,
// //       },

// //       creditsUsed: {
// //         type: Number,
// //         default: 0,
// //       },
// //     },
// //     {
// //       timestamps: true,
// //     }
// //   );

// // export default mongoose.models
// //   .PurchasedLead ||
// //   mongoose.model(
// //     "PurchasedLead",
// //     PurchasedLeadSchema
// //   );


// import mongoose from "mongoose";

// const PurchasedLeadSchema =
//   new mongoose.Schema(
//     {
//       leadId: {
//         type: String,
//         required: true,
//       },

//       professionalEmail: {
//         type: String,
//         required: true,
//       },

//       creditsUsed: {
//         type: Number,
//         default: 0,
//       },
//     },
//     {
//       timestamps: true,
//     }
//   );

// export default mongoose.models
//   .PurchasedLead ||
//   mongoose.model(
//     "PurchasedLead",
//     PurchasedLeadSchema
//   );



import mongoose from "mongoose";

const PurchasedLeadSchema =
  new mongoose.Schema(
    {
      leadId: {
        type: String,
        required: true,
      },

      professionalEmail: {
        type: String,
        required: true,
      },

      creditsUsed: {
        type: Number,
        default: 0,
      },

      // ================= LEAD DETAILS =================
      leadDetails: {
        serviceName: String,
        category: String,

        customer: {
          name: String,
          email: String,
          phone: String,
          postcode: String,
        },

        answers: {
          type: Object,
          default: {},
        },

        location: {
          type: Object,
          default: {},
        },
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.models
  .PurchasedLead ||
  mongoose.model(
    "PurchasedLead",
    PurchasedLeadSchema
  );