import { connectDB } from '@/lib/mongodb';
import Professional from '@/models/Professional';

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();

    const professional = await Professional.create(body);

    return Response.json(
      { success: true, data: professional },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: 'Failed to save data' },
      { status: 500 }
    );
  }
}
