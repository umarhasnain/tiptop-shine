// 'use client';

// import { useSearchParams, useRouter } from "next/navigation";
// import serviceCategories from "@/lib/serviceCategories";
// import { slugify } from "@/lib/slugify";
// import Image from "next/image";
// import { useState } from "react";

// export default function RequestQuotePage(){

// const params = useSearchParams();
// const router = useRouter();

// const slug = params.get("service");

// const service = serviceCategories.find(
// (s)=>slugify(s.name) === slug
// );

// const [form,setForm] = useState({
// name:"",
// email:"",
// phone:"",
// postcode:"",
// details:""
// });

// const [loading,setLoading] = useState(false);

// const handleChange = (e)=>{

// setForm({
// ...form,
// [e.target.name]:e.target.value
// });

// };

// const handleSubmit = async(e)=>{

// e.preventDefault();

// setLoading(true);

// try{

// const payload = {
// serviceName: service.name,
// ...form
// };

// const res = await fetch("/api/request-quote",{
// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },
// body:JSON.stringify(payload)
// });

// const data = await res.json();

// if(data.success){

// alert("✅ Request Sent Successfully!");

// router.push("/thank-you");

// }

// }catch(err){

// console.error(err);
// alert("❌ Something went wrong");

// }

// setLoading(false);

// };

// if(!service){
// return <div className="py-20 text-center">Service not found</div>
// }

// return(

// <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">

// <div className="grid lg:grid-cols-2 gap-12">

// {/* SERVICE DETAILS */}

// <div className="bg-white p-8 rounded-2xl shadow-lg">

// <Image
// src={service.image}
// alt={service.name}
// width={600}
// height={400}
// className="rounded-xl mb-6"
// />

// <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
// {service.category}
// </span>

// <h1 className="text-3xl font-bold mt-4">
// {service.name}
// </h1>

// <p className="text-gray-600 mt-4">
// {service.description}
// </p>

// </div>


// {/* REQUEST FORM */}

// <div className="bg-white p-8 rounded-2xl shadow-lg">

// <h2 className="text-2xl font-bold mb-6">
// Request a Quote
// </h2>

// <form onSubmit={handleSubmit} className="space-y-4">

// <input
// name="name"
// placeholder="Full Name"
// required
// onChange={handleChange}
// className="w-full border p-3 rounded-lg"
// />

// <input
// name="email"
// placeholder="Email"
// required
// onChange={handleChange}
// className="w-full border p-3 rounded-lg"
// />

// <input
// name="phone"
// placeholder="Phone"
// required
// onChange={handleChange}
// className="w-full border p-3 rounded-lg"
// />

// <input
// name="postcode"
// placeholder="Postcode"
// required
// onChange={handleChange}
// className="w-full border p-3 rounded-lg"
// />

// <textarea
// name="details"
// placeholder="Describe your job..."
// rows="4"
// onChange={handleChange}
// className="w-full border p-3 rounded-lg"
// />

// <button
// type="submit"
// disabled={loading}
// className="w-full py-3 bg-[#326BFD] hover:bg-blue-700 text-white rounded-lg font-semibold"
// >

// {loading ? "Sending..." : "Submit Request"}

// </button>

// </form>

// </div>

// </div>

// </section>

// )

// }


'use client';

import { useSearchParams, useRouter } from "next/navigation";
import serviceCategories from "@/lib/serviceCategories";
import { slugify } from "@/lib/slugify";
import Image from "next/image";
import { useState } from "react";

export default function RequestQuotePage(){

  const params = useSearchParams();
  const router = useRouter();

  const slug = params.get("service");
  const proId = params.get("proId");
  const proName = params.get("proName");
  const company = params.get("company");

  const service = serviceCategories.find(
    (s)=>slugify(s.name) === slug
  );

  const [form,setForm] = useState({
    name:"",
    email:"",
    phone:"",
    postcode:"",
    details:""
  });

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = async(e)=>{

    e.preventDefault();
    setError("");

    if(!form.name || !form.email || !form.phone || !form.postcode){
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try{

      const payload = {
        serviceName: service.name,
        professionalId: proId || null,
        professionalName: proName || null,
        ...form
      };

      const res = await fetch("/api/request-quote",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
      });

      const data = await res.json();

      if(data.success){
        router.push("/thank-you");
      }else{
        setError("Something went wrong. Please try again.");
      }

    }catch(err){
      console.error(err);
      setError("Server error. Please try again.");
    }

    setLoading(false);
  };

  if(!service){
    return <div className="py-20 text-center">Service not found</div>
  }

  return(

  <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-20">

    <div className="grid lg:grid-cols-2 gap-12">

      {/* SERVICE DETAILS */}
      <div className="bg-white p-8 rounded-2xl shadow-xl">

        <Image
          src={service.image}
          alt={service.name}
          width={600}
          height={400}
          className="rounded-xl mb-6 object-cover"
        />

        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {service.category}
        </span>

        <h1 className="text-3xl font-bold mt-4">
          {service.name}
        </h1>

        <p className="text-gray-600 mt-4">
          {service.description}
        </p>

        {/* 🔥 Selected Professional */}
        {proId && (
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-gray-500">
              Sending request to:
            </p>
            <h3 className="font-semibold text-lg text-blue-700">
              {proName}
            </h3>
            {company && (
              <p className="text-sm text-gray-600">
                {company}
              </p>
            )}
          </div>
        )}

      </div>


      {/* REQUEST FORM */}
      <div className="bg-white p-8 rounded-2xl shadow-xl">

        <h2 className="text-2xl font-bold mb-6">
          Request a Quote
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none"
          />

          <input
            name="postcode"
            placeholder="Postcode"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none"
          />

          <textarea
            name="details"
            placeholder="Describe your job in detail..."
            rows="5"
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#326BFD] hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300"
          >
            {loading ? "Sending Request..." : "Submit Request"}
          </button>

        </form>

      </div>

    </div>

  </section>

  )

}