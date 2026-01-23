import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await connectDB();
    const { name,email,password,serviceName } = await req.json();

    if(!name||!email||!password) return Response.json({message:'All fields required'},{status:400});

    const exists = await User.findOne({email});
    if(exists) return Response.json({message:'Email already exists'},{status:400});

    const hashed = await bcrypt.hash(password,10);
    await User.create({ name,email,password:hashed,serviceName,role:'professional' });

    return Response.json({success:true});
  } catch(err){
    console.error('SIGNUP ERROR:',err);
    return Response.json({message:'Signup failed'},{status:500});
  }
}
