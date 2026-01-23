// 'use client';

// import Image from 'next/image';
// import { useSearchParams } from 'next/navigation';
// import serviceCategories from '@/lib/serviceCategories';
// import { slugify } from '@/lib/slugify';

// export default function ServiceDetail({ params }) {
//   const { slug } = params;
//   const searchParams = useSearchParams();
//   const categorySlug = searchParams.get('category');

//   const service = serviceCategories.find(
//     (s) => slugify(s.name) === slug
//   );

//   if (!service) {
//     return <div className="p-10 text-center">Service not found</div>;
//   }

//   const relatedServices = serviceCategories.filter(
//     (s) =>
//       slugify(s.category) === categorySlug &&
//       slugify(s.name) !== slug
//   );

//   return (
//     <section className="px-6 md:px-20 py-16">

//       {/* Main Service */}
//       <div className="grid md:grid-cols-2 gap-10 mb-20">
//         <Image
//           src={service.image}
//           alt={service.name}
//           width={600}
//           height={400}
//           className="rounded-xl object-cover"
//         />

//         <div>
//           <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
//           <p className="text-gray-600 mb-6">{service.description}</p>

//           <button className="px-6 py-3 bg-[#094eff] text-white rounded-md">
//             Get Free Quotes
//           </button>
//         </div>
//       </div>

//       {/* Related Services */}
//       <div>
//         <h2 className="text-3xl font-bold mb-8">
//           More {service.category} Services
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {relatedServices.map((svc, idx) => (
//             <div
//               key={idx}
//               className="border rounded-lg overflow-hidden hover:shadow-lg transition"
//             >
//               <Image
//                 src={svc.image}
//                 alt={svc.name}
//                 width={300}
//                 height={200}
//                 className="h-44 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-semibold">{svc.name}</h3>
//                 <p className="text-sm text-gray-600 line-clamp-2">
//                   {svc.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import serviceCategories from '@/lib/serviceCategories';
import { slugify } from '@/lib/slugify';

export default function ServiceDetail({ params }) {
  const { slug } = params;

  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 current service find from slug
  const service = serviceCategories.find(
    (s) => slugify(s.name) === slug
  );

  useEffect(() => {
    if (!service) return;

    async function fetchProfessionals() {
      try {
        const res = await fetch('/api/professionals');
        const data = await res.json();

        if (data.success) {
          // 🔥 FILTER BY serviceName
          const filtered = data.professionals.filter(
            (pro) => pro.serviceName === service.name
          );

          setProfessionals(filtered);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProfessionals();
  }, [service]);

  if (!service) {
    return (
      <div className="py-20 text-center text-gray-500">
        Service not found
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-16">

      {/* ================= SERVICE HERO ================= */}
      <div className="grid lg:grid-cols-2 gap-14 mb-24">
        <Image
          src={service.image}
          alt={service.name}
          width={700}
          height={450}
          className="rounded-2xl object-cover shadow-xl"
        />

        <div>
          <span className="inline-block mb-3 px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
            {service.category}
          </span>

          <h1 className="text-4xl font-extrabold mb-4">
            {service.name}
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            {service.description}
          </p>

          <button className="px-8 py-4 bg-[#094eff] hover:bg-blue-700 text-white rounded-xl text-lg font-semibold shadow-lg">
            Get Free Quotes
          </button>
        </div>
      </div>

      {/* ================= PROFESSIONALS ================= */}
      <div>
        <h2 className="text-3xl font-bold mb-10">
          {service.name} Professionals Near You
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading professionals...</p>
        ) : professionals.length === 0 ? (
          <p className="text-gray-500">
            No professionals available for this service.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((pro) => (
              <div
                key={pro._id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">
                    {pro.name?.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      {pro.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {pro.company}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-gray-600 mb-5">
                  <p>📍 {pro.postcode} · {pro.miles}</p>
                  <p>🕒 {pro.availability}</p>
                  <p>👥 Company Size: {pro.companySize}</p>
                  <p>💼 Work Type: {pro.workType}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                    {pro.timeSlots}
                  </span>

                  {pro.hasWebsite === 'Yes' && (
                    <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      Has Website
                    </span>
                  )}
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-[#326BFD] hover:bg-blue-700 text-white rounded-lg font-medium">
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
