import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";
import Professional from "@/models/Professional";

export async function GET(req) {
  const userId = req.nextUrl.searchParams.get("userId");
  await connectDB();

  const user = await Professional.findById(userId);

  const leads = await Lead.find({
    service: { $in: user.selectedServices },
    assignedTo: userId,
  }).sort({ createdAt: -1 });

  return Response.json({ leads });
}
