import { connectDB } from "@/lib/mongodb";
import Professional from "@/models/Professional";

export async function GET() {

  try {

    await connectDB();

    // ✅ Get all professionals
    const professionals = await Professional.find({});

    return Response.json(
      {
        success: true,
        professionals
      },
      { status: 200 }
    );

  } catch (error) {

    console.error("API /professionals error:", error);

    return Response.json(
      {
        success: false,
        error: "Failed to fetch professionals"
      },
      { status: 500 }
    );

  }

}