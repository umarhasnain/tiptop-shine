// // import { connectDB } from "@/lib/mongodb";
// // import PurchasedLead from "@/models/PurchasedLead";

// // export async function POST(req) {
// //   try {
// //     await connectDB();

// //     const { email } =
// //       await req.json();

// //     const purchased =
// //       await PurchasedLead.find({
// //         professionalEmail: email,
// //       });

// //     const leadIds =
// //       purchased.map((p) =>
// //         p.leadId.toString()
// //       );

// //     return Response.json({
// //       success: true,
// //       leadIds,
// //     });
// //   } catch (err) {
// //     return Response.json(
// //       {
// //         success: false,
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }



// // import { connectDB } from "@/lib/mongodb";
// // import Professional from "@/models/Professional";
// // import PurchasedLead from "@/models/PurchasedLead";

// // export async function POST(req) {
// //   try {
// //     await connectDB();

// //     const body = await req.json();

// //     const {
// //       leadId,
// //       email,
// //       credits,
// //     } = body;

// //     // ================= VALIDATION =================
// //     if (!leadId || !email) {
// //       return Response.json(
// //         {
// //           success: false,
// //           error: "Missing required fields",
// //         },
// //         { status: 400 }
// //       );
// //     }

// //     // ================= FIND PROFESSIONAL =================
// //     const professional =
// //       await Professional.findOne({
// //         email,
// //       });

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

// //     // ✅ Already unlocked
// //     if (alreadyPurchased) {
// //       return Response.json({
// //         success: true,
// //         alreadyPurchased: true,
// //         remainingCredits:
// //           professional.credits || 0,
// //       });
// //     }

// //     // ================= CHECK CREDITS =================
// //     if (
// //       (professional.credits || 0) <
// //       Number(credits)
// //     ) {
// //       return Response.json(
// //         {
// //           success: false,
// //           error:
// //             "Insufficient credits",
// //         },
// //         { status: 400 }
// //       );
// //     }

// //     // ================= DEDUCT CREDITS =================
// //     professional.credits =
// //       Number(professional.credits || 0) -
// //       Number(credits);

// //     await professional.save();

// //     // ================= SAVE PURCHASE =================
// //     await PurchasedLead.create({
// //       leadId,
// //       professionalEmail: email,
// //       creditsUsed: credits,
// //     });

// //     // ================= SUCCESS =================
// //     return Response.json({
// //       success: true,

// //       purchased: true,

// //       leadId,

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
// //           "Internal server error",
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }


// // export async function GET(req) {
// //   try {
// //     await connectDB();

// //     // URL se email get karna
// //     const { searchParams } = new URL(req.url);
// //     const email = searchParams.get("email");

// //     // validation
// //     if (!email) {
// //       return Response.json(
// //         {
// //           success: false,
// //           error: "Email is required",
// //         },
// //         { status: 400 }
// //       );
// //     }

// //     // ================= FIND PURCHASED LEADS =================
// //     const purchasedLeads = await PurchasedLead.find({
// //       professionalEmail: email,
// //     }).sort({ createdAt: -1 });

// //     return Response.json({
// //       success: true,
// //       count: purchasedLeads.length,
// //       purchasedLeads,
// //     });
// //   } catch (err) {
// //     console.error("GET PURCHASED LEADS ERROR:", err);

// //     return Response.json(
// //       {
// //         success: false,
// //         error: "Internal server error",
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }


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
import PurchasedLead from "@/models/PurchasedLead";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return Response.json({
        success: false,
        error: "Email required",
      });
    }

    const purchasedLeads = await PurchasedLead.find({
      professionalEmail: email,
    }).sort({ createdAt: -1 });

    return Response.json({
      success: true,
      purchasedLeads: purchasedLeads || [],
    });
  } catch (err) {
    console.error(err);

    return Response.json({
      success: false,
      error: "Server error",
    });
  }
}