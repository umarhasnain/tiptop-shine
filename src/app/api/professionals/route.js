import { connectDB } from "@/lib/mongodb";
import Professional from "@/models/Professional";

export async function GET() {
  try {
    await connectDB();

    // ⚠️ Abhi demo ke liye first professional
    // baad mein NextAuth se logged-in user laoge
    const professional = await Professional.findOne();

    if (!professional) {
      return Response.json(
        { professional: null },
        { status: 200 }
      );
    }

    return Response.json(
      { professional }, // 👈 IMPORTANT: object ke andar
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
