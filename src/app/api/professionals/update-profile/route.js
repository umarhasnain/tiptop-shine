import { connectDB } from "@/lib/mongodb";
import Professional from "@/models/Professional";

export async function PUT(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      email,
      name,
      phone,
      company,
      postcode,
      hasWebsite,
    } = body;

    // ================= CHECK USER =================
    const professional =
      await Professional.findOne({
        email,
      });

    if (!professional) {
      return Response.json(
        {
          success: false,
          error: "Professional not found",
        },
        { status: 404 }
      );
    }

    // ================= UPDATE FIELDS =================
    professional.name =
      name || professional.name;

    professional.phone =
      phone || professional.phone;

    professional.company =
      company || professional.company;

    professional.postcode =
      postcode || professional.postcode;

    professional.hasWebsite =
      hasWebsite || professional.hasWebsite;

    await professional.save();

    return Response.json({
      success: true,
      message:
        "Profile updated successfully",
      professional,
    });
  } catch (error) {
    console.error(
      "UPDATE PROFILE ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 }
    );
  }
}