// 'use client';

// import Image from 'next/image';
// import React, { useEffect } from 'react';
// import serviceCategories from '@/lib/serviceCategories';
// import AOS from 'aos';
// import 'aos/dist/aos.css';


// /* ================= EXAMPLE SERVICES DATA ================= */
// // export const serviceCategories = [
// //   {
// //     category: "Home & Garden",
// //     services: [
// //       { name: "House Cleaning", image: "/images/house-cleaning.webp", description: "Professional home cleaning with trusted staff & eco-friendly products." },
// //       { name: "Commercial Cleaning", image: "/images/commercial-cleaning.jpeg", description: "Reliable office cleaning services for all business sizes." },
// //       { name: "Pressure Washing", image: "/images/pressure.jpg", description: "High-pressure cleaning for driveways, patios, and exteriors." }
// //     ]
// //   },
// //   {
// //     category: "Health & Wellbeing",
// //     services: [
// //       { name: "Car Detailing", image: "/images/car-detailing.jpg", description: "Complete interior and exterior car detailing services." },
// //       { name: "Gutter Cleaning", image: "/images/gutter-cleaning.jpg", description: "Keep your gutters free of debris and flowing smoothly." },
// //       { name: "Window Cleaning", image: "/images/window-cleaning.jpg", description: "Sparkling clean windows inside and out." }
// //     ]
// //   },
// //   {
// //     category: "Wedding & Event",
// //     services: [
// //       { name: 'Yard Cleaning', image: '/images/photo-1651289082712-bedffb9434fd.jpeg', description: 'Make your yard spotless before your special event.' },
// //       { name: 'Post Construction Cleaning', image: '/images/photo-1636991943265-02517de53ef3.jpeg', description: 'Deep cleaning after event setups or construction projects.' },
// //       { name: 'Pool Cleaning', image: '/images/photo-1509577330292-0532d33c053e.jpeg', description: 'Keep your pool crystal clear for your guests and events.' }
// //     ]
// //   },
// //   {
// //     category: "Business & Professional",
// //     services: [
// //       { name: 'Accounting', image: '/images/photo-1651289082712-bedffb9434fd.jpeg', description: 'Make your yard spotless before your special event.' },
// //       { name: 'Web Design', image: '/images/photo-1636991943265-02517de53ef3.jpeg', description: 'Deep cleaning after event setups or construction projects.' },
// //       { name: 'SEO Specialists', image: '/images/photo-1509577330292-0532d33c053e.jpeg', description: 'Keep your pool crystal clear for your guests and events.' }
// //     ]
// //   },
// //   {
// //     category: "Lessons & Training",
// //     services: [
// //       { name: 'Business & Career Coaching', image: '/images/photo-1651289082712-bedffb9434fd.jpeg', description: 'Make your yard spotless before your special event.' },
// //       { name: 'English Lessons', image: '/images/photo-1636991943265-02517de53ef3.jpeg', description: 'Deep cleaning after event setups or construction projects.' },
// //       { name: 'Tutoring', image: '/images/photo-1509577330292-0532d33c053e.jpeg', description: 'Keep your pool crystal clear for your guests and events.' }
// //     ]
// //   },
// //   {
// //     category: "Personal Services",
// //     services: [
// //       { name: 'Life Coaching', image: '/images/photo-1651289082712-bedffb9434fd.jpeg', description: 'Make your yard spotless before your special event.' },
// //       { name: 'Personal Chef Services', image: '/images/photo-1636991943265-02517de53ef3.jpeg', description: 'Deep cleaning after event setups or construction projects.' },
// //       { name: 'Private Investigators', image: '/images/photo-1509577330292-0532d33c053e.jpeg', description: 'Keep your pool crystal clear for your guests and events.' }
// //     ]
// //   },
// //   {
// //     category: "Other / More",
// //     services: [
// //       { name: 'Dog & Pet Grooming', image: '/images/photo-1651289082712-bedffb9434fd.jpeg', description: 'Make your yard spotless before your special event.' },
// //       { name: 'Dog Training', image: '/images/photo-1636991943265-02517de53ef3.jpeg', description: 'Deep cleaning after event setups or construction projects.' },
// //       { name: 'Graphic Design', image: '/images/photo-1509577330292-0532d33c053e.jpeg', description: 'Keep your pool crystal clear for your guests and events.' }
// //     ]
// //   }
// // ];

// /* ================= PREMIUM SERVICES GRID COMPONENT ================= */
// export default function ServicesGrid({ categories = serviceCategories }) {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: 'ease-out-cubic',
//       once: true,
//     });
//   }, []);

//   return (
//     <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white">
//       {categories.map((cat, i) => (
//         <div key={i} className="mb-16">
//           {/* Category Header + View All Button */}
//           <div className="flex flex-wrap items-center justify-between mb-8 gap-2">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 flex-1" data-aos="fade-up">
//               {cat.category}
//             </h2>
//             <button
//               className="px-6 py-2 bg-[#094eff] hover:bg-blue-700 text-white rounded-md font-medium shadow-lg transition flex-shrink-0"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               View All
//             </button>
//           </div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {cat.services.map((svc, idx) => (
//               <div
//                 key={idx}
//                 className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
//                 data-aos="fade-up"
//                 data-aos-delay={`${idx * 150}`}
//               >
//                 {/* Service Image */}
//                 <Image
//                   src={svc.image}
//                   alt={svc.name}
//                   width={400}
//                   height={250}
//                   className="object-cover w-full h-64 md:h-56 group-hover:scale-105 transition-transform duration-500"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

//                 {/* Text Info */}
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white font-semibold text-lg md:text-xl drop-shadow-md">{svc.name}</h3>
//                   <p className="text-white text-xs md:text-sm mt-1 drop-shadow-md">{svc.description}</p>
//                   <button className="mt-3 px-4 py-2 bg-[#326BFD] hover:bg-blue-700 text-white rounded-md text-sm shadow-lg transition">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }


//*********************************GRID WORKING CODE 3 Products */

// 'use client';

// import Image from 'next/image';
// import React, { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import serviceCategories from '@/lib/serviceCategories';
// import { groupServicesByCategory } from '@/lib/groupServices';

// export default function ServicesGrid() {
//   const router = useRouter();

//   // 🔥 Sirf 3 services per category
//   const categories = groupServicesByCategory(serviceCategories, 3);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-out-cubic',
//       once: true,
//     });
//   }, []);

//   return (
//     <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white">
//       {categories.map((cat, i) => (
//         <div key={i} className="mb-20">
          
//           {/* Header */}
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
//               {cat.category}
//             </h2>

//             <button
//               onClick={() => router.push('/services')}
//               className="px-6 py-2 bg-[#094eff] hover:bg-blue-700 text-white rounded-md font-medium shadow transition"
//             >
//               View All
//             </button>
//           </div>

//           {/* Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {cat.services.map((svc, idx) => (
//               <div
//                 key={idx}
//                 data-aos="fade-up"
//                 data-aos-delay={idx * 120}
//                 className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl group transition cursor-pointer"
//               >
//                 <Image
//                   src={svc.image}
//                   alt={svc.name}
//                   width={400}
//                   height={260}
//                   className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white text-lg font-semibold">
//                     {svc.name}
//                   </h3>
//                   <p className="text-white text-sm mt-1 line-clamp-2">
//                     {svc.description}
//                   </p>

//                   <button className="mt-3 px-4 py-2 bg-[#326BFD] hover:bg-blue-700 text-white text-sm rounded-md">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       ))}
//     </section>
//   );
// }



//***********************************************NEW CODE */

'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

import serviceCategories from '@/lib/serviceCategories';
import { groupServicesByCategory } from '@/lib/groupServices';
import { slugify } from '@/lib/slugify';

export default function ServicesGrid() {
  const router = useRouter();

  const categories = groupServicesByCategory(serviceCategories, 3);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white">
      {categories.map((cat) => (
        <div key={cat.category} className="mb-20">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">{cat.category}</h2>
            <button
              onClick={() => router.push('/services')}
              className="px-6 py-2 bg-[#094eff] text-white rounded-md"
            >
              View All
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cat.services.map((svc, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={svc.image}
                  alt={svc.name}
                  width={400}
                  height={260}
                  className="w-full h-60 object-cover group-hover:scale-105 transition"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold">
                    {svc.name}
                  </h3>
                  <p className="text-white text-sm line-clamp-2">
                    {svc.description}
                  </p>

                  <button
                    onClick={() =>
                      router.push(
                        `/services/${slugify(svc.name)}?category=${slugify(
                          svc.category
                        )}`
                      )
                    }
                    className="mt-3 px-4 py-2 bg-[#326BFD] text-white text-sm rounded-md"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </section>
  );
}
