import { connectDB } from "@/lib/mongodb";
import QuoteRequest from "@/models/QuoteRequest";

export async function POST(req) {

  try {

    await connectDB();

    const body = await req.json();

    const request = await QuoteRequest.create(body);

    return Response.json({
      success: true,
      request
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      { error: "Failed to create request" },
      { status: 500 }
    );

  }

}