

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