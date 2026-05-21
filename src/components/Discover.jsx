'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  FaHome,
  FaHeart,
  FaGift,
  FaBriefcase,
  FaBars,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DiscoverSection = () => {
  const categories = [
    {
      icon: <FaHome />,
      label: 'Home & Garden',
      href: '/services?category=home-garden',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: <FaHeart />,
      label: 'Health & Wellbeing',
      href: '/services?category=health',
      color: 'from-pink-400 to-red-500',
    },
    {
      icon: <FaGift />,
      label: 'Wedding & Events',
      href: '/services?category=events',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: <FaBriefcase />,
      label: 'Business Services',
      href: '/services?category=business',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: <FaBars />,
      label: 'Other Services',
      href: '/services',
      color: 'from-gray-500 to-gray-700',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      {/* Title */}
      <h2
        className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900"
        data-aos="fade-down"
      >
        Discover Our Services
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <Link
            key={index}
            href={cat.href}
            className="group"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div
              className="
                flex flex-col items-center justify-center
                p-5 rounded-2xl bg-white shadow-md
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
                border border-gray-100
              "
            >
              {/* Icon Circle */}
              <div
                className={`
                  w-14 h-14 flex items-center justify-center
                  rounded-full text-white text-xl
                  bg-gradient-to-r ${cat.color}
                  group-hover:scale-110 transition
                `}
              >
                {cat.icon}
              </div>

              {/* Label */}
              <span className="mt-3 text-sm sm:text-base font-semibold text-gray-700 group-hover:text-black text-center">
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;

// 'use client';
// import React, { useEffect } from 'react';
// import {
//   FaHome,
//   FaHeart,
//   FaGift,
//   FaBriefcase,
//   FaChalkboardTeacher,
//   FaBars,
// } from 'react-icons/fa';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const DiscoverSection = () => {
//   const categories = [
//     { icon: <FaHome className="text-green-500 text-lg sm:text-xl" />, label: 'Home & Garden' },
//     { icon: <FaHeart className="text-blue-500 text-lg sm:text-xl" />, label: 'Health & Wellbeing' },
//     { icon: <FaGift className="text-red-500 text-lg sm:text-xl" />, label: 'Wedding & Event' },
//     { icon: <FaBriefcase className="text-purple-500 text-lg sm:text-xl" />, label: 'Business Services' },
//     // { icon: <FaChalkboardTeacher className="text-yellow-500 text-lg sm:text-xl" />, label: 'Lesson & Training' },
//     { icon: <FaBars className="text-black text-lg sm:text-xl" />, label: 'Other Services' },
//   ];

//   // 🔹 Initialize AOS once component mounts
//   useEffect(() => {
//     AOS.init({
//       duration: 800, // animation speed
//       easing: 'ease-in-out',
//       once: false, // only animate once
//     });
//   }, []);

//   return (
//     <div className="bg-blue-50 py-8 px-4">
//       {/* Title */}
//       <h2
//         className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 text-black"
//         data-aos="fade-down"
//       >
//         Discover
//       </h2>

//       {/* Categories Grid */}
//       <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-4 justify-cente items-center max-w-6xl mx-auto">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center text-xs sm:text-sm font-medium"
//             data-aos="zoom-in"
//             data-aos-delay={index * 100} // stagger animation for each icon
//           >
//             {/* Icon */}
//             <div className="mb-2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md">
//               {cat.icon}
//             </div>

//             {/* Label */}
//             <span className="text-black">{cat.label}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DiscoverSection;
