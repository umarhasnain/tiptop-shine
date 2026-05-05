// 'use client';

// import { useState, useEffect } from 'react';
// import RequestPopup from '@/components/RequestPopup';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import ServicesGrid from '@/components/ServicesGrid';

// export default function RequestSection() {
//   const [showModal, setShowModal] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null); // hover index track karne ke liye

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: false,
//       easing: 'ease-in-out',
//     });
//   }, []);

//   const suggestions = [
//     { title: 'Gardening', image: '/images/gardening.webp' },
//     { title: 'Personal Trainer', image: '/images/personal-trainer.webp' },
//     { title: 'Web Design', image: '/images/web-design.webp' },
//     { title: 'Cleaner', image: '/images/commercial-cleaning.jpeg' },
//   ];

//   return (
//     <section className="py-12 px-4 md:px-16 bg-gray-50 text-gray-800 relative">
//       {/* Heading */}
//       <div className="text-center mb-10" data-aos="fade-down">
//         <h2 className="text-3xl font-semibold">Your Request</h2>
//       </div>

//       {/* Hero Section */}
//       <div
//         className="bg-white shadow-md rounded-lg px-6 py-8 text-center max-w-4xl mx-auto mb-10"
//         data-aos="fade-up"
//       >
//         <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
//           <span className="text-blue-600">Find Service</span>{' '}
//           For Your Business On Tiptop Shine
//         </h3>
//         <p className="text-sm md:text-base text-gray-600 mt-4 mb-6">
//           Most businesses could be getting a better deal on the services they use day to day. We’ve
//           got thousands of suppliers ready and waiting to quote.
//         </p>
//         <button
//           onClick={() => setShowModal(true)}
//           className="text-white rounded-3xl px-6 py-3 bg-blue-500 hover:bg-blue-600 text-xl transition"
//         >
//           Place New Request
//         </button>
//       </div>

//       {/* Suggestions */}
//       <div>
//         <h4 className="text-xl font-semibold mb-6" data-aos="fade-down">
//           You May Also Need
//         </h4>
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
//           {suggestions.map((item, index) => (
//             <div
//               key={item.title}
//               className="relative rounded-md overflow-hidden bg-white shadow hover:shadow-lg transition cursor-pointer"
//               data-aos="fade-up"
//               data-aos-delay={index * 150} // stagger effect
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-40 object-cover"
//               />

//               {/* Popup on hover */}
//               {hoveredIndex === index && (
//                 <div className="absolute top-2 left-2 bg-white bg-opacity-90 p-2 rounded shadow-md text-sm font-semibold text-gray-800 z-10">
//                   {item.title} Service Available!
//                 </div>
//               )}

//               <div className="p-4 text-center font-medium text-gray-700">
//                 {item.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && <RequestPopup onClose={() => setShowModal(false)} />}
//     </section>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// // import MultiStepForm from '@/components/MultiStepForm';
// import Link from 'next/link';
// import serviceCategories from '@/lib/serviceCategories';
// import MultiStepForm from '@/components/DynamicForm/MultiStepForm';

// export default function RequestPage() {
//   const [selectedService, setSelectedService] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const saved = localStorage.getItem('requestData');

//     if (!saved) {
//       setLoading(false);
//       return;
//     }

//     const parsed = JSON.parse(saved);

//     const serviceData = serviceCategories.find(
//       (s) =>
//         s.name.toLowerCase() ===
//         parsed.service.toLowerCase()
//     );

//     if (serviceData) {
//       setSelectedService({
//         ...serviceData,
//         postcode: parsed.postcode,
//       });
//     }

//     setLoading(false);
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h2 className="text-xl font-semibold">Loading...</h2>
//       </div>
//     );
//   }

//   if (!selectedService) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
//         <h2 className="text-3xl font-bold mb-4">
//           No Service Selected
//         </h2>
//         <p className="text-gray-500 mb-6">
//           Please select a service first.
//         </p>
//         <Link
//           href="/"
//           className="bg-blue-600 text-white px-6 py-3 rounded-xl"
//         >
//           Go Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-20 px-6">
//       <MultiStepForm service={selectedService} />
//     </div>
//   );
// }

// "use client";

// import DynamicServiceForm from "@/components/DynamicForm/DynamicServiceForm";
// import serviceCategories from "@/lib/serviceCategories";
// import { useSearchParams } from "next/navigation";
// // import serviceCategories from "@/data/serviceCategories";
// // import DynamicServiceForm from "@/components/DynamicServiceForm";

// export default function RequestPage() {
//   const params = useSearchParams();
//   const serviceName = params.get("service");

//   const service = serviceCategories.find(
//     (s) => s.name === serviceName
//   );

//   if (!service) {
//     return <div className="p-10">Service not found</div>;
//   }

//   return (
//     <div className="py-20 bg-gray-100 min-h-screen">
//       <DynamicServiceForm service={service} />
//     </div>
//   );
// }


"use client";

import DynamicServiceForm from "@/components/DynamicForm/DynamicServiceForm";
import serviceCategories from "@/lib/serviceCategories";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function RequestPage() {

  const params = useSearchParams();
  const router = useRouter();

  const serviceName = params.get("service");
  const proId = params.get("proId");
  const proName = params.get("proName");
  const company = params.get("company");

  const service = serviceCategories.find(
    (s) => s.name === serviceName
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!service) {
    return <div className="p-10 text-center">Service not found</div>;
  }

  const handleSubmit = async (answers, customerData) => {

    setLoading(true);
    setError("");

    try {

      const payload = {
        serviceName: service.name,
        category: service.category,
        professionalId: proId || null,
        professionalName: proName || null,
        company: company || null,
        answers,
        ...customerData,
      };

      const res = await fetch("/api/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/thank-you");
      } else {
        setError("Something went wrong.");
      }

    } catch (err) {
      setError("Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen px-6">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

        <div className="bg-white p-6 rounded-2xl shadow-xl h-fit">
          <h2 className="text-2xl font-bold mb-3">{service.name}</h2>
          <p className="text-gray-600 text-sm mb-6">
            {service.description}
          </p>

          {proId && (
            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Sending to:</p>
              <h3 className="font-semibold text-blue-700">
                {proName}
              </h3>
              <p className="text-sm text-gray-600">{company}</p>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl">

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          <DynamicServiceForm
            service={service}
            onSubmit={handleSubmit}
            loading={loading}
          />

        </div>

      </div>
    </div>
  );
}