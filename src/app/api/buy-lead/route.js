// // import { connectDB } from "@/lib/mongodb";
// // import Professional from "@/models/Professional";
// // import PurchasedLead from "@/models/PurchasedLead";

// // export async function POST(req) {
// //   try {
// //     await connectDB();

// //     const body = await req.json();

// //     const { leadId, email, credits } = body;

// //     // ================= FIND PROFESSIONAL =================
// //     const professional = await Professional.findOne({
// //       email,
// //     });

// //     if (!professional) {
// //       return Response.json(
// //         {
// //           success: false,
// //           error: "Professional not found",
// //         },
// //         { status: 404 }
// //       );
// //     }

// //     // ================= CHECK ALREADY PURCHASED =================
// //     const alreadyPurchased =
// //       await PurchasedLead.findOne({
// //         leadId,
// //         professionalEmail: email,
// //       });

// //     if (alreadyPurchased) {
// //       return Response.json({
// //         success: true,
// //         message: "Already unlocked",
// //       });
// //     }

// //     // ================= CHECK CREDITS =================
// //     if (
// //       (professional.credits || 0) < credits
// //     ) {
// //       return Response.json(
// //         {
// //           success: false,
// //           error:
// //             "Not enough credits",
// //         },
// //         { status: 400 }
// //       );
// //     }

// //     // ================= DEDUCT CREDITS =================
// //     professional.credits =
// //       (professional.credits || 0) -
// //       credits;

// //     await professional.save();

// //     // ================= SAVE PURCHASE =================
// //     await PurchasedLead.create({
// //       leadId,
// //       professionalEmail: email,
// //       creditsUsed: credits,
// //     });

// //     return Response.json({
// //       success: true,
// //       remainingCredits:
// //         professional.credits,
// //     });
// //   } catch (err) {
// //     console.error(
// //       "BUY LEAD ERROR:",
// //       err
// //     );

// //     return Response.json(
// //       {
// //         success: false,
// //         error:
// //           "Server error",
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }


// // // import PurchasedLead from "@/models/PurchasedLead";
// // // import Lead from "@/models/Lead";

// // // export default async function handler(req, res) {
// // //   try {
// // //     const { leadId, email, credits, snapshot } = req.body;

// // //     // 1. check lead
// // //     const lead = await Lead.findById(leadId);
// // //     if (!lead) {
// // //       return res.status(404).json({ success: false, error: "Lead not found" });
// // //     }

// // //     // 2. save purchased lead WITH FULL DATA
// // //     const purchased = await PurchasedLead.create({
// // //       leadId,
// // //       professionalEmail: email,
// // //       creditsUsed: credits,

// // //       // ✅ FULL SNAPSHOT SAVE
// // //       leadSnapshot: {
// // //         name: snapshot?.name || lead.name,
// // //         email: snapshot?.email || lead.email,
// // //         phone: snapshot?.phone || lead.phone,
// // //         serviceName: snapshot?.serviceName || lead.serviceName,
// // //         category: snapshot?.category || lead.category,
// // //         city: snapshot?.city || lead.location?.city,
// // //         region: snapshot?.region || lead.location?.region,
// // //         postcode: snapshot?.postcode || lead.location?.postcode,
// // //         answers: lead.answers || {},
// // //       },
// // //     });

// // //     return res.status(200).json({
// // //       success: true,
// // //       purchasedLead: purchased,
// // //       remainingCredits: 100, // (your logic here)
// // //     });
// // //   } catch (err) {
// // //     console.error(err);
// // //     return res.status(500).json({
// // //       success: false,
// // //       error: "Server error",
// // //     });
// // //   }
// // // }



// import { connectDB } from "@/lib/mongodb";

// import Professional from "@/models/Professional";
// import PurchasedLead from "@/models/PurchasedLead";
// import Lead from "@/models/Lead"; // <-- apna actual lead model import kro

// export async function POST(req) {
//   try {
//     await connectDB();

//     const body = await req.json();

//     const {
//       leadId,
//       email,
//       credits,
//     } = body;

//     // ================= FIND PROFESSIONAL =================
//     const professional =
//       await Professional.findOne({
//         email,
//       });

//     if (!professional) {
//       return Response.json(
//         {
//           success: false,
//           error:
//             "Professional not found",
//         },
//         { status: 404 }
//       );
//     }

//     // ================= FIND LEAD =================
//     const lead =
//       await Lead.findById(leadId);

//     if (!lead) {
//       return Response.json(
//         {
//           success: false,
//           error: "Lead not found",
//         },
//         { status: 404 }
//       );
//     }

//     // ================= CHECK ALREADY PURCHASED =================
//     const alreadyPurchased =
//       await PurchasedLead.findOne({
//         leadId,
//         professionalEmail: email,
//       });

//     if (alreadyPurchased) {
//       return Response.json({
//         success: true,
//         message:
//           "Already unlocked",
//       });
//     }

//     // ================= CHECK CREDITS =================
//     if (
//       (professional.credits || 0) <
//       credits
//     ) {
//       return Response.json(
//         {
//           success: false,
//           error:
//             "Not enough credits",
//         },
//         { status: 400 }
//       );
//     }

//     // ================= DEDUCT CREDITS =================
//     professional.credits =
//       (professional.credits || 0) -
//       credits;

//     await professional.save();

//     // ================= SAVE PURCHASE =================
//     await PurchasedLead.create({
//       leadId,
//       professionalEmail: email,
//       creditsUsed: credits,

//       leadDetails: {
//         serviceName:
//           lead.serviceName,

//         category: lead.category,

//         customer: {
//           name:
//             lead.answers?.name ||
//             "",

//           email:
//             lead.answers?.email ||
//             "",

//           phone:
//             lead.answers?.phone ||
//             "",

//           postcode:
//             lead.answers
//               ?.postcode || "",
//         },

//         answers:
//           lead.answers || {},

//         location:
//           lead.location || {},
//       },
//     });

//     return Response.json({
//       success: true,

//       remainingCredits:
//         professional.credits,
//     });
//   } catch (err) {
//     console.error(
//       "BUY LEAD ERROR:",
//       err
//     );

//     return Response.json(
//       {
//         success: false,
//         error:
//           "Server error",
//       },
//       { status: 500 }
//     );
//   }
// }



import { connectDB } from "@/lib/mongodb";

import Professional from "@/models/Professional";
import PurchasedLead from "@/models/PurchasedLead";

// ✅ YE APNA REAL MODEL LAGAO
import ServiceRequest from "@/models/ServiceRequest";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      leadId,
      email,
      credits,
    } = body;

    // ================= PROFESSIONAL =================
    const professional =
      await Professional.findOne({
        email,
      });

    if (!professional) {
      return Response.json(
        {
          success: false,
          error:
            "Professional not found",
        },
        { status: 404 }
      );
    }

    // ================= LEAD FIND =================
    const lead =
      await ServiceRequest.findById(
        leadId
      );

    console.log(
      "LEAD FOUND:",
      lead
    );

    if (!lead) {
      return Response.json(
        {
          success: false,
          error:
            "Lead not found",
        },
        { status: 404 }
      );
    }

    // ================= ALREADY PURCHASED =================
    const alreadyPurchased =
      await PurchasedLead.findOne({
        leadId,
        professionalEmail:
          email,
      });

    if (alreadyPurchased) {
      return Response.json({
        success: true,
        message:
          "Already unlocked",
      });
    }

    // ================= CREDITS CHECK =================
    if (
      (professional.credits || 0) <
      credits
    ) {
      return Response.json(
        {
          success: false,
          error:
            "Not enough credits",
        },
        { status: 400 }
      );
    }

    // ================= DEDUCT CREDITS =================
    professional.credits =
      (professional.credits || 0) -
      credits;

    await professional.save();

    // ================= SAVE PURCHASE =================
    await PurchasedLead.create({
      leadId:
        lead._id.toString(),

      professionalEmail:
        email,

      creditsUsed: credits,

      leadDetails: {
        serviceName:
          lead.serviceName ||
          "",

        category:
          lead.category || "",

        customer: {
          name:
            lead.answers?.name ||
            "",

          email:
            lead.answers
              ?.email || "",

          phone:
            lead.answers
              ?.phone || "",

          postcode:
            lead.answers
              ?.postcode || "",
        },

        answers:
          lead.answers || {},

        location:
          lead.location || {},
      },
    });

    return Response.json({
      success: true,

      remainingCredits:
        professional.credits,
    });
  } catch (err) {
    console.error(
      "BUY LEAD ERROR:",
      err
    );

    return Response.json(
      {
        success: false,
        error:
          "Server error",
      },
      { status: 500 }
    );
  }
}