import { connectDB } from '@/lib/mongodb';
import Professional from '@/models/Professional';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.formData();
    const serviceName = formData.get('serviceName');
    if(!serviceName) return Response.json({success:false,message:'Service name missing'},{status:400});

    const fields = {
      miles: formData.get('miles'),
      postcode: formData.get('postcode'),
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      hasWebsite: formData.get('hasWebsite'),
      companySize: formData.get('companySize'),
      availability: formData.get('availability'),
      timeSlots: formData.get('timeSlots'),
      workType: formData.get('workType'),
    };

    const documents = {};
    for(const key of ['id','addressProof','businessLicense']){
      const file = formData.get(key);
      if(file && typeof file!=='string'){
        const buffer = Buffer.from(await file.arrayBuffer());
        const uploadRes = await new Promise((resolve,reject)=>{
          cloudinary.uploader.upload_stream({folder:'onboarding_documents',resource_type:'auto'},(err,res)=>{
            if(err) reject(err); else resolve(res);
          }).end(buffer);
        });
        documents[key] = uploadRes.secure_url;
      }
    }

    const professional = await Professional.create({ serviceName, ...fields, documents });
    return Response.json({success:true,data:professional},{status:201});
  } catch(err){
    console.error('ONBOARDING ERROR:',err);
    return Response.json({success:false,message:err.message},{status:500});
  }
}
