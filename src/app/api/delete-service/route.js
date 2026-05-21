import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Professional from "@/models/Professional";

export async function POST(req) {
  await connectDB();

  const { email, serviceName } = await req.json();

  if (!email || !serviceName) {
    return NextResponse.json({ message: "Missing data" }, { status: 400 });
  }

  const professional = await Professional.findOne({ email });

  if (!professional) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  professional.serviceName = (professional.serviceName || []).filter(
    (s) => s !== serviceName
  );

  await professional.save();

  return NextResponse.json({ success: true });
}