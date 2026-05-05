import { connectDB } from "@/lib/mongodb";
import Professional from "@/models/Professional";

export async function POST(req) {

  try {

    await connectDB();

    const { email } = await req.json();

    if (!email) {
      return Response.json(
        { error: "Email required" },
        { status: 400 }
      );
    }

    const professional = await Professional.findOne({ email });

    return Response.json(
      {
        success: true,
        professional
      },
      { status: 200 }
    );

  } catch (error) {

    console.error("API /professional error:", error);

    return Response.json(
      {
        success: false,
        error: "Failed to fetch professional"
      },
      { status: 500 }
    );

  }

}