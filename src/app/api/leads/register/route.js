import { connectDB } from "@/lib/db";
import Lead from "@/models/Lead";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const lead = await Lead.create(body);

    return Response.json({
      success: true,
      leadId: lead._id,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
