// import { connectDB } from "@/lib/mongodb";
// import Professional from "@/models/Professional";

// export async function GET() {
//   try {
//     await connectDB();

//     // ⚠️ Abhi demo ke liye first professional
//     // baad mein NextAuth se logged-in user laoge
//     const professional = await Professional.findOne();

//     if (!professional) {
//       return Response.json(
//         { professional: null },
//         { status: 200 }
//       );
//     }

//     return Response.json(
//       { professional }, // 👈 IMPORTANT: object ke andar
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("API /professionals error:", error);
//     return Response.json(
//       { error: "Failed to fetch professional" },
//       { status: 500 }
//     );
//   }
// }


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

    // ✅ Logged in user ka professional
    const professional = await Professional.findOne({ email });

    if (!professional) {
      return Response.json(
        { professional: null },
        { status: 200 }
      );
    }

    return Response.json(
      { professional },
      { status: 200 }
    );

  } catch (error) {
    console.error("API /professionals error:", error);

    return Response.json(
      { error: "Failed to fetch professional" },
      { status: 500 }
    );
  }
}
