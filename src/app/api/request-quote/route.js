// import { connectDB } from "@/lib/mongodb";
// import QuoteRequest from "@/models/QuoteRequest";

// export async function POST(req) {

//   try {

//     await connectDB();

//     const body = await req.json();

//     const request = await QuoteRequest.create(body);

//     return Response.json({
//       success: true,
//       request
//     });

//   } catch (error) {

//     console.error(error);

//     return Response.json(
//       { error: "Failed to create request" },
//       { status: 500 }
//     );

//   }

// }

import { connectDB } from "@/lib/mongodb";
import ServiceRequest from "@/models/ServiceRequest";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    console.log("RECEIVED BODY:", body);

    const request = await ServiceRequest.create({
      serviceName: body.serviceName,
      category: body.category,
      answers: body.answers,

      name: body.name || body.answers?.name || "",
      email: body.email || "",
      phone: body.phone || body.answers?.phone || "",
      postcode: body.postcode || body.location?.postcode || "",

      location: {
        city: body.location?.city || "Unknown",
        country: body.location?.country || "Unknown",
        region: body.location?.region || "",
        postcode: body.location?.postcode || "",
        lat: body.location?.lat ?? null,
        lng: body.location?.lng ?? null,
      },
    });

    return Response.json({
      success: true,
      request,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}