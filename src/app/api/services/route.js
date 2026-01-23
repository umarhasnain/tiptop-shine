import { connectDB } from "@/lib/mongodb";
import Professional from "@/models/Professional";

export async function POST(req) {
  const { userId, service } = await req.json();
  await connectDB();

  await Professional.findByIdAndUpdate(userId, {
    $addToSet: { selectedServices: service },
  });

  return Response.json({ success: true });
}

export async function DELETE(req) {
  const { userId, service } = await req.json();
  await connectDB();

  await Professional.findByIdAndUpdate(userId, {
    $pull: { selectedServices: service },
  });

  return Response.json({ success: true });
}
