'use client';

import Link from "next/link";
import serviceCategories from "@/lib/serviceCategories";
import { slugify } from "@/lib/slugify";
import Image from "next/image";

export default function ThankYouPage(){

const recommended = serviceCategories.slice(0,4);

return(

<section className="min-h-screen bg-gray-50 py-20 px-6 md:px-20">

<div className="max-w-4xl mx-auto text-center">

<h1 className="text-4xl font-bold text-green-600 mb-6">
🎉 Request Submitted Successfully
</h1>

<p className="text-gray-600 text-lg mb-10">
Professionals will contact you soon with quotes.
</p>

<Link href="/">
<button className="px-6 py-3 bg-[#326BFD] text-white rounded-lg shadow-lg hover:bg-blue-700">
Back to Home
</button>
</Link>

</div>


{/* Recommended Services */}

<div className="mt-20">

<h2 className="text-3xl font-bold mb-10 text-center">
Recommended Services
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{recommended.map((svc,index)=>(

<div
key={index}
className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
>

<Image
src={svc.image}
alt={svc.name}
width={400}
height={250}
className="h-48 w-full object-cover"
/>

<div className="p-5">

<h3 className="font-semibold text-lg mb-2">
{svc.name}
</h3>

<p className="text-gray-500 text-sm mb-4">
Professional {svc.name.toLowerCase()} services
</p>

<Link href={`/services/${slugify(svc.name)}`}>

<button className="w-full py-2 bg-[#326BFD] text-white rounded-lg hover:bg-blue-700">

View Service

</button>

</Link>

</div>

</div>

))}

</div>

</div>

</section>

)

}