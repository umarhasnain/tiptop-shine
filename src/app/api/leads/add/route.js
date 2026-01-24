import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const lead = await Lead.create({
      serviceName: body.serviceName,
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      miles: body.miles,
      postcode: body.postcode,
      status: "pending",
    });

    return Response.json({ success: true, lead });
  } catch (err) {
    console.error("Add lead error:", err);
    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}
