import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectDB();
    const { email, password, name } = await req.json();

    if (!email || !password) return NextResponse.json({ success: false, error: 'Email & password required' }, { status: 400 });

    // Check if user exists
    const existing = await User.findOne({ email });
    if (existing) return NextResponse.json({ success: false, error: 'Email already used' }, { status: 400 });

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({ email, password: hashed, name });
    await user.save();

    return NextResponse.json({ success: true, message: 'Signup successful' }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
