

// 'use client';

// import Image from 'next/image';
// import { useEffect, useState, useMemo } from 'react';
// import { useParams, useSearchParams } from 'next/navigation';
// import serviceCategories from '@/lib/serviceCategories';
// import { slugify } from '@/lib/slugify';
// import Link from 'next/link';

// export default function ServiceDetail() {
//   const params = useParams();
//   const searchParams = useSearchParams();

//   const slug = params?.slug;
//   const postcode = searchParams.get("postcode");

//   const [professionals, setProfessionals] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // 🔹 Find service using slug
//   const service = useMemo(() => {
//     return serviceCategories.find(
//       (s) => slugify(s.name) === slug
//     );
//   }, [slug]);

//   useEffect(() => {
//     if (!service) return;

//     async function fetchProfessionals() {
//       try {
//         setLoading(true);
//         const res = await fetch('/api/professionals');
//         const data = await res.json();

//         if (data?.success && Array.isArray(data.professionals)) {

//           // 🔹 FILTER BY SERVICE NAME OR CATEGORY
//           let filtered = data.professionals.filter((pro) => {
//             if (!pro?.serviceName) return false;

//             const serviceNameLower = service.name.toLowerCase();
//             const serviceCategoryLower = service.category.toLowerCase();

//             // ServiceName can be string or array
//             if (Array.isArray(pro.serviceName)) {
//               return pro.serviceName.some(
//                 (srv) => srv?.toLowerCase().trim() === serviceNameLower ||
//                          srv?.toLowerCase().trim() === serviceCategoryLower
//               );
//             }

//             if (typeof pro.serviceName === "string") {
//               return pro.serviceName.toLowerCase().includes(serviceNameLower) ||
//                      pro.serviceName.toLowerCase().includes(serviceCategoryLower);
//             }

//             return false;
//           });

//           // 🔹 POSTCODE FILTER (optional)
//           if (postcode) {
//             const userPostcode = postcode.replace(/\s+/g, "").toLowerCase();
//             const postcodeFiltered = filtered.filter((pro) => {
//               if (!pro.postcode) return false;
//               const dbPostcode = pro.postcode.replace(/\s+/g, "").toLowerCase();
//               return dbPostcode.includes(userPostcode);
//             });
//             // Fallback: if no match, show service results anyway
//             filtered = postcodeFiltered.length > 0 ? postcodeFiltered : filtered;
//           }

//           setProfessionals(filtered);
//         }
//       } catch (err) {
//         console.error("Professional fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProfessionals();

//   }, [service, postcode]);

//   if (!service) {
//     return (
//       <div className="py-32 text-center text-gray-500 text-lg">
//         Service not found
//       </div>
//     );
//   }

//   return (
//     <section className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-16">

//       {/* ===== SERVICE HERO ===== */}
//       <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
//         <Image
//           src={service.image}
//           alt={service.name}
//           width={700}
//           height={450}
//           className="rounded-3xl object-cover shadow-2xl"
//         />
//         <div>
//           <span className="inline-block mb-4 px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full font-medium">
//             {service.category}
//           </span>

//           <h1 className="text-5xl font-extrabold mb-6 leading-tight">
//             {service.name}
//           </h1>

//           <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//             {service.description}
//           </p>

//           <Link
//             href={`/request-page?service=${encodeURIComponent(service.name)}`}
//           >
//             <button className="px-8 py-4 bg-[#094eff] hover:bg-blue-700 text-white rounded-xl text-lg font-semibold shadow-lg transition duration-300">
//               Get Free Quotes
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* ===== PROFESSIONALS SECTION ===== */}
//       <div>
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
//           <h2 className="text-3xl font-bold">
//             {service.name} Professionals Near You
//           </h2>

//           <div className="text-sm text-gray-500">
//             {postcode && (
//               <span>
//                 Postcode: <b>{postcode}</b>
//               </span>
//             )}
//             <span className="ml-4">{professionals.length} Found</span>
//           </div>
//         </div>

//         {loading ? (
//           <div className="text-center py-20 text-gray-500">
//             Loading professionals...
//           </div>
//         ) : professionals.length === 0 ? (
//           <div className="text-center py-20 bg-gray-50 rounded-2xl ">
//             <p className="text-gray-500 text-lg">
//               No professionals available for this service.
//             </p>
//           </div>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {professionals.map((pro) => (
//               <div
//                 key={pro._id}
//                 className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
//               >
//                 <div className="flex items-center gap-4 mb-5">
//                   <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-lg">
//                     {pro.name?.charAt(0)?.toUpperCase()}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg">{pro.name}</h3>
//                     <p className="text-sm text-gray-500">{pro.company}</p>
//                   </div>
//                 </div>

//                 <div className="space-y-2 text-sm text-gray-600 mb-6">
//                   <p>📍 {pro.postcode}</p>
//                   <p>🕒 {pro.availability}</p>
//                   <p>👥 Company Size: {pro.companySize}</p>
//                   <p>💼 Work Type: {pro.workType}</p>
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {pro.timeSlots && (
//                     <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
//                       {pro.timeSlots}
//                     </span>
//                   )}
//                   {pro.hasWebsite === 'Yes' && (
//                     <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
//                       Has Website
//                     </span>
//                   )}
//                 </div>

//                 <Link
//                   href={`/request-page?service=${encodeURIComponent(
//                     service.name
//                   )}&proId=${pro._id}&proName=${encodeURIComponent(
//                     pro.name
//                   )}&company=${encodeURIComponent(pro.company)}`}
//                 >
//                   <button className="w-full py-3 bg-[#326BFD] hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300">
//                     Request Quote
//                   </button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import serviceCategories from '@/lib/serviceCategories';
import { slugify } from '@/lib/slugify';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function ServiceDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const slug = params?.slug;
  const postcode = searchParams.get("postcode");

  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Find service using slug
  const service = useMemo(() => {
    return serviceCategories.find((s) => slugify(s.name) === slug);
  }, [slug]);

  useEffect(() => {
    if (!service) return;

    async function fetchProfessionals() {
      try {
        setLoading(true);
        const res = await fetch('/api/professionals');
        const data = await res.json();

        if (data?.success && Array.isArray(data.professionals)) {

          let filtered = data.professionals.filter((pro) => {
            if (!pro?.serviceName) return false;

            const serviceNameLower = service.name.toLowerCase();
            const serviceCategoryLower = service.category.toLowerCase();

            if (Array.isArray(pro.serviceName)) {
              return pro.serviceName.some(
                (srv) =>
                  srv?.toLowerCase().trim() === serviceNameLower ||
                  srv?.toLowerCase().trim() === serviceCategoryLower
              );
            }

            if (typeof pro.serviceName === "string") {
              return (
                pro.serviceName.toLowerCase().includes(serviceNameLower) ||
                pro.serviceName.toLowerCase().includes(serviceCategoryLower)
              );
            }

            return false;
          });

          if (postcode) {
            const userPostcode = postcode.replace(/\s+/g, "").toLowerCase();
            const postcodeFiltered = filtered.filter((pro) => {
              if (!pro.postcode) return false;
              const dbPostcode = pro.postcode.replace(/\s+/g, "").toLowerCase();
              return dbPostcode.includes(userPostcode);
            });

            filtered = postcodeFiltered.length > 0 ? postcodeFiltered : filtered;
          }

          setProfessionals(filtered);
        }
      } catch (err) {
        console.error("Professional fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProfessionals();
  }, [service, postcode]);

  if (!service) {
    return (
      <div className="py-32 text-center text-gray-500 text-lg">
        Service not found
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-16 relative">

      {/* ===== PREMIUM BACK BUTTON ===== */}
      <button
        onClick={() => router.back() || router.push('/services')}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 px-4 py-2 
        bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 
        rounded-full hover:bg-white hover:scale-105 transition"
      >
        <FaArrowLeft className="text-gray-700" />
        <span className="text-sm font-medium text-gray-700">Back</span>
      </button>

      {/* ===== SERVICE HERO ===== */}
      <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center mt-10">

        <Image
          src={service.image}
          alt={service.name}
          width={700}
          height={450}
          className="rounded-3xl object-cover shadow-2xl"
        />

        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full font-medium">
            {service.category}
          </span>

          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            {service.name}
          </h1>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {service.description}
          </p>

          <Link href={`/request-page?service=${encodeURIComponent(service.name)}`}>
            <button className="px-8 py-4 bg-[#094eff] hover:bg-blue-700 text-white rounded-xl text-lg font-semibold shadow-lg transition duration-300">
              Get Free Quotes
            </button>
          </Link>
        </div>
      </div>

      {/* ===== PROFESSIONALS SECTION ===== */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <h2 className="text-3xl font-bold">
            {service.name} Professionals Near You
          </h2>

          <div className="text-sm text-gray-500">
            {postcode && (
              <span>
                Postcode: <b>{postcode}</b>
              </span>
            )}
            <span className="ml-4">{professionals.length} Found</span>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading professionals...
          </div>
        ) : professionals.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-gray-500 text-lg">
              No professionals available for this service.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((pro) => (
              <div
                key={pro._id}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-lg">
                    {pro.name?.charAt(0)?.toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{pro.name}</h3>
                    <p className="text-sm text-gray-500">{pro.company}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p>📍 {pro.postcode}</p>
                  <p>🕒 {pro.availability}</p>
                  <p>👥 Company Size: {pro.companySize}</p>
                  <p>💼 Work Type: {pro.workType}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pro.timeSlots && (
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                      {pro.timeSlots}
                    </span>
                  )}
                  {pro.hasWebsite === 'Yes' && (
                    <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      Has Website
                    </span>
                  )}
                </div>

                <Link
                  href={`/request-page?service=${encodeURIComponent(
                    service.name
                  )}&proId=${pro._id}&proName=${encodeURIComponent(
                    pro.name
                  )}&company=${encodeURIComponent(pro.company)}`}
                >
                  <button className="w-full py-3 bg-[#326BFD] hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300">
                    Request Quote
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}