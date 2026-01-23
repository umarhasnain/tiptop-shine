import { connectDB } from "@/lib/mongodb";
import Professional from "@/models/Professional";

export async function GET() {
  try {
    await connectDB();

    const professionals = await Professional.find().sort({ createdAt: -1 });

    return new Response(
      JSON.stringify({ success: true, professionals }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, professionals: [] }),
      { status: 500 }
    );
  }
}
