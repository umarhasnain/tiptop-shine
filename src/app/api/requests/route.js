import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ServiceRequest from "@/models/ServiceRequest";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const newRequest = await ServiceRequest.create({
      serviceName: body.serviceName,
      category: body.category,
      answers: body.answers,
    });

    return NextResponse.json(
      { success: true, data: newRequest },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}