// import { connectDB } from "@/lib/mongodb";
// import Lead from "@/models/Lead";

// export async function GET(req) {
//   const professionalId = req.nextUrl.searchParams.get("professionalId");
//   await connectDB();

//   const leads = await Lead.find({
//     assignedProfessional: professionalId,
//   }).sort({ createdAt: -1 });

//   return Response.json({ leads });
// }

import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function GET() {
  await connectDB();

  const leads = await Lead.find().sort({ createdAt: -1 });
  return Response.json({ leads });
}
