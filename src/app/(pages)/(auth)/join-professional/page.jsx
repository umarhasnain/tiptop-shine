// 'use client';
// import { useEffect } from 'react';
// import Header from '@/components/Header';
// import Image from 'next/image';
// import Link from 'next/link';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // React icons
// import { FaSearch, FaRocket, FaTrophy } from 'react-icons/fa';

// export default function HomePage() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-out-back',
//       once: false,
//     });
//   }, []);

//   const features = [
//     {
//       icon: <FaSearch className="text-5xl text-blue-600 mb-4" />,
//       title: 'Find High-Quality Leads Fast',
//       points: [
//         'Browse targeted leads near you',
//         'Preview every lead before acting',
//         'Get real-time lead alerts',
//       ],
//       btn: 'How It Works',
//       gradient: 'from-blue-500/10 to-blue-100/30',
//     },
//     {
//       icon: <FaRocket className="text-5xl text-purple-600 mb-4" />,
//       title: 'Scale Your Business With Confidence',
//       points: [
//         'Keep every rupee — no commissions',
//         'Transparent, no hidden fees',
//         'Guaranteed leads or next one free',
//       ],
//       btn: 'See Pricing Plans',
//       gradient: 'from-purple-500/10 to-purple-100/30',
//     },
//     {
//       icon: <FaTrophy className="text-5xl text-yellow-500 mb-4" />,
//       title: 'Win More Clients, Effortlessly',
//       points: [
//         'Choose leads that match your service',
//         'Instantly access contact info',
//         'Call/message directly & close',
//       ],
//       btn: 'See A Sample Lead',
//       gradient: 'from-yellow-500/10 to-yellow-100/30',
//     },
//   ];

//   return (
//     <div className="bg-white text-gray-900">
//       {/* === HERO SECTION === */}
//       <section
//         className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10"
//         data-aos="fade-up"
//       >
//         {/* Left Side */}
//         <div className="md:w-1/2 space-y-5 text-center md:text-left">
//           <h1
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight"
//             data-aos="fade-right"
//           >
//             Skyrocket Your Success <br className="hidden sm:block" />
//             <span className="text-blue-600">Clients Are Waiting!</span>
//           </h1>
//           <p
//             className="text-gray-600 text-base sm:text-lg"
//             data-aos="fade-right"
//             data-aos-delay="200"
//           >
//             Thousands of eager local and remote clients are ready to hire. It’s
//             your time to shine.
//           </p>

//           {/* Search Bar */}
//           <div
//             className="flex w-full max-w-md mx-auto md:mx-0 shadow-sm"
//             data-aos="zoom-in"
//             data-aos-delay="400"
//           >
//             <input
//               type="text"
//               placeholder="What service do you provide?"
//               className="flex-1 px-4 py-3 border border-gray-300 text-sm rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <Link href="/onboarding">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-3 rounded-r-md transition">
//                 Get Started
//               </button>
//             </Link>
//           </div>

//           {/* Popular Services */}
//           <div
//             className="grid grid-cols-2 gap-y-1 pt-3 text-lg text-gray-800"
//             data-aos="fade-up"
//             data-aos-delay="600"
//           >
//             {[
//               'House Cleaning',
//               'Graphic Design',
//               'Life Coaching',
//               'Personal Trainer',
//               'Web Design',
//               'Book Keeping',
//               'Web Development',
//               'General Builder',
//               'General Photography',
//               'Gardening',
//             ].map((service, i) => (
//               <p
//                 key={i}
//                 className="hover:text-blue-600 cursor-pointer transition"
//               >
//                 🔹 {service}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* Right Side */}
//         <div
//           className="md:w-1/2 flex justify-center"
//           data-aos="fade-left"
//           data-aos-delay="200"
//         >
//           <div className="rounded-xl shadow-2xl overflow-hidden w-[350px] hover:scale-105 transition border border-blue-100 bg-gradient-to-t from-blue-50 to-white">
//             <Image
//               src="/images/join-professional-img.jpg"
//               alt="Highly Rated"
//               width={400}
//               height={500}
//               className="object-cover w-full h-[500px]"
//             />
//             <div className="bg-white p-5 text-center">
//               <h4 className="text-gray-900 text-base font-semibold mb-1">
//                 Sleek Finish Is Highly Rated
//               </h4>
//               <div className="text-yellow-400 text-xl">★★★★★</div>
//             </div>
//           </div>
//         </div>
//       </section>

//     {/* === FEATURES SECTION === */}
// <section
//   className="py-20 px-6 md:px-16 bg-gradient-to-b from-gray-50 via-white to-blue-50"
//   data-aos="fade-up"
// >
//   <div
//     className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
//     data-aos="zoom-in-up"
//   >
//     {features.map((card, i) => (
//       <div
//         key={i}
//         className={`relative group flex flex-col items-center justify-between h-full p-8 rounded-3xl shadow-xl border border-transparent 
//         hover:border-blue-300 transition-all duration-500 bg-gradient-to-br ${card.gradient} 
//         hover:scale-[1.03] hover:shadow-2xl`}
//         data-aos="fade-up"
//         data-aos-delay={`${i * 200}`}
//       >
//         {/* Floating Icon */}
//         <div className="absolute -top-8 bg-white shadow-lg rounded-full p-2 px-4 group-hover:scale-110 transition-transform duration-300">
//           {card.icon}
//         </div>

//         {/* Card Content */}
//         <div className="mt-10 text-center flex-1 flex flex-col justify-start">
//           <h3 className="font-extrabold text-gray-900 text-lg sm:text-xl mb-3">
//             {card.title}
//           </h3>
//           <ul className="text-gray-700 space-y-2 mb-8 text-sm sm:text-base leading-relaxed">
//             {card.points.map((p, idx) => (
//               <li key={idx} className="flex justify-center items-center gap-2">
//                 <span className="text-blue-500">•</span>
//                 {p}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Bottom Fixed Button */}
//         <div className="mt-6 w-full flex justify-center">
//           <button
//             className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold 
//             px-6 py-2.5  rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 hover:shadow-lg 
//             group-hover:translate-y-[-4px]"
//           >
//             {card.btn}
//           </button>
//         </div>

//         {/* Subtle Glow Animation */}
//         <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
//       </div>
//     ))}
//   </div>
// </section>

//       {/* === STATS SECTION === */}
//       <section className="bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
//         <div
//           className="md:w-1/2 space-y-5 text-center md:text-left"
//           data-aos="fade-right"
//         >
//           <h2 className="text-2xl sm:text-3xl font-bold text-black">
//             Tap Into Endless Opportunities
//           </h2>
//           <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto md:mx-0">
//             Hundreds of thousands of small businesses are connecting with real
//             customers — now it’s your turn.
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-3 rounded-md transition">
//             Get Started
//           </button>
//         </div>

//         <div className="md:w-1/2 grid grid-cols-2 gap-6 max-w-md mx-auto md:mx-0">
//           {[
//             { img: '/images/icon.png', num: '10,000s', text: 'leads a day' },
//             {
//               img: '/images/tttt(1).png',
//               num: '£1M+',
//               text: 'daily business done',
//             },
//             {
//               img: '/images/tttt(4).png',
//               num: '1,000+',
//               text: 'services offered',
//             },
//             { img: '/images/tttt(3).png', num: '500k+', text: 'small business' },
//           ].map((stat, i) => (
//             <div
//               key={i}
//               className="bg-gradient-to-br from-white to-blue-50 shadow-md rounded-xl p-5 flex flex-col items-center text-center hover:shadow-lg transition"
//               data-aos="fade-up"
//               data-aos-delay={`${i * 150}`}
//             >
//               <Image src={stat.img} alt="" width={50} height={50} />
//               <div className="text-2xl font-bold text-black mt-2">
//                 {stat.num}
//               </div>
//               <div className="text-sm text-gray-600">{stat.text}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* === TESTIMONIAL SECTION === */}
//       <section className="bg-gray-50 py-14 px-6" data-aos="fade-up">
//         <div className="text-center mb-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-black">
//             Success Stories That Inspire
//           </h2>
//           <p className="text-sm sm:text-base text-gray-600 mt-1">
//             Discover how small businesses are growing faster with our platform.
//           </p>
//         </div>

//         <div className="mx-auto flex flex-col md:flex-row items-center justify-center max-w-4xl gap-6">
//           <div
//             className="w-[330px] h-[270px] overflow-hidden rounded-lg shadow-lg"
//             data-aos="zoom-in"
//           >
//             <Image
//               src="/images/Group32.png"
//               alt="Testimonial"
//               width={430}
//               height={260}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div
//             className="bg-white p-6 w-[280px] min-h-[220px] flex flex-col justify-center shadow-xl rounded-lg border border-gray-100"
//             data-aos="fade-left"
//           >
//             <p className="text-xs text-blue-600 font-semibold uppercase mb-2">
//               Rugfoot Photography
//             </p>
//             <p className="text-sm text-gray-800 leading-snug mb-3">
//               “Our biggest client contacted us through the platform and we’ll
//               continue to bring on new clients through it.”
//             </p>
//             <p className="text-sm font-semibold text-black">
//               – Melanie Watsica
//             </p>
//           </div>
//         </div>

//         <div
//           className="flex justify-center mt-6 space-x-2"
//           data-aos="fade-up"
//           data-aos-delay="500"
//         >
//           <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
//           <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
//         </div>
//       </section>

//       {/* === LOGOS SECTION === */}
//       <section
//         className="bg-white py-10"
//         data-aos="fade-up"
//         data-aos-delay="200"
//       >
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-lg sm:text-xl font-bold text-black mb-6">
//             Larger businesses use <br className="md:hidden" /> our platform too
//           </h2>
//           <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-6">
//             {['Air(1).png', 'Air(2).png', 'Air(3).png', 'Air(4).png'].map(
//               (logo, i) => (
//                 <Image
//                   key={i}
//                   src={`/images/${logo}`}
//                   alt="logo"
//                   width={100}
//                   height={45}
//                   className="object-contain grayscale opacity-80 hover:opacity-100 transition"
//                   data-aos="zoom-in"
//                   data-aos-delay={`${i * 150}`}
//                 />
//               )
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

// React icons
import { FaSearch, FaRocket, FaTrophy } from 'react-icons/fa';

/* ================= SERVICES LIST ================= */
const servicesList = [
  'House Cleaning',
  'Office Cleaning',
  'Deep Cleaning',
  'Graphic Design',
  'Web Design',
  'Web Development',
  'SEO Services',
  'Digital Marketing',
  'Book Keeping',
  'Accounting',
  'Life Coaching',
  'Personal Trainer',
  'Business Coach',
  'Gardening',
  'Landscaping',
  'General Builder',
  'Plumber',
  'Electrician',
  'Painter & Decorator',
  'Photography',
  'Wedding Photography',
  'Videography',
  'Video Editing',
];

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
      once: false,
    });
  }, []);

  const filteredServices = servicesList.filter((service) =>
    service.toLowerCase().includes(query.toLowerCase())
  );

  const features = [
    {
      icon: <FaSearch className="text-5xl text-blue-600 mb-4" />,
      title: 'Find High-Quality Leads Fast',
      points: [
        'Browse targeted leads near you',
        'Preview every lead before acting',
        'Get real-time lead alerts',
      ],
      btn: 'How It Works',
      gradient: 'from-blue-500/10 to-blue-100/30',
    },
    {
      icon: <FaRocket className="text-5xl text-purple-600 mb-4" />,
      title: 'Scale Your Business With Confidence',
      points: [
        'Keep every rupee — no commissions',
        'Transparent, no hidden fees',
        'Guaranteed leads or next one free',
      ],
      btn: 'See Pricing Plans',
      gradient: 'from-purple-500/10 to-purple-100/30',
    },
    {
      icon: <FaTrophy className="text-5xl text-yellow-500 mb-4" />,
      title: 'Win More Clients, Effortlessly',
      points: [
        'Choose leads that match your service',
        'Instantly access contact info',
        'Call/message directly & close',
      ],
      btn: 'See A Sample Lead',
      gradient: 'from-yellow-500/10 to-yellow-100/30',
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* === HERO SECTION === */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
            Skyrocket Your Success <br />
            <span className="text-blue-600">Clients Are Waiting!</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg">
            Thousands of eager local and remote clients are ready to hire.
          </p>

          {/* ===== SEARCH WITH AUTOCOMPLETE ===== */}
          <div className="relative w-full max-w-md mx-auto md:mx-0">
            <div className="flex shadow-sm">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                placeholder="What service do you provide?"
                className="flex-1 px-4 py-3 border border-gray-300 text-sm rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <Link href="/onboarding">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-3 rounded-r-md transition">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Suggestions */}
            {showSuggestions && query && (
              <div className="absolute z-50 w-full bg-white border rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
                {filteredServices.length > 0 ? (
                  filteredServices.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setQuery(item);
                        setShowSuggestions(false);
                      }}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-50"
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    No services found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Popular Services */}
          <div className="grid grid-cols-2 gap-y-1 pt-3 text-lg text-gray-800">
            {servicesList.slice(0, 10).map((service, i) => (
              <p key={i} className="hover:text-blue-600 cursor-pointer transition">
                🔹 {service}
              </p>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-xl shadow-2xl overflow-hidden w-[350px] border border-blue-100 bg-gradient-to-t from-blue-50 to-white">
            <Image
              src="/images/join-professional-img.jpg"
              alt="Highly Rated"
              width={400}
              height={500}
              className="object-cover w-full h-[500px]"
            />
            <div className="bg-white p-5 text-center">
              <h4 className="text-gray-900 text-base font-semibold mb-1">
                Sleek Finish Is Highly Rated
              </h4>
              <div className="text-yellow-400 text-xl">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* === FEATURES SECTION === */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-gray-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((card, i) => (
            <div
              key={i}
              className={`relative group flex flex-col items-center justify-between h-full p-8 rounded-3xl shadow-xl 
              hover:scale-[1.03] transition bg-gradient-to-br ${card.gradient}`}
            >
              <div className="absolute -top-8 bg-white shadow-lg rounded-full p-3">
                {card.icon}
              </div>

              <div className="mt-10 text-center">
                <h3 className="font-extrabold text-lg mb-3">{card.title}</h3>
                <ul className="space-y-2 text-sm">
                  {card.points.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                {card.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      

        {/* === STATS SECTION === */}
      <section className="bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div
          className="md:w-1/2 space-y-5 text-center md:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Tap Into Endless Opportunities
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Hundreds of thousands of small businesses are connecting with real
            customers — now it’s your turn.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-3 rounded-md transition">
            Get Started
          </button>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-6 max-w-md mx-auto md:mx-0">
          {[
            { img: '/images/icon.png', num: '10,000s', text: 'leads a day' },
            {
              img: '/images/tttt(1).png',
              num: '£1M+',
              text: 'daily business done',
            },
            {
              img: '/images/tttt(4).png',
              num: '1,000+',
              text: 'services offered',
            },
            { img: '/images/tttt(3).png', num: '500k+', text: 'small business' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white to-blue-50 shadow-md rounded-xl p-5 flex flex-col items-center text-center hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={`${i * 150}`}
            >
              <Image src={stat.img} alt="" width={50} height={50} />
              <div className="text-2xl font-bold text-black mt-2">
                {stat.num}
              </div>
              <div className="text-sm text-gray-600">{stat.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === TESTIMONIAL SECTION === */}
      <section className="bg-gray-50 py-14 px-6" data-aos="fade-up">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            Success Stories That Inspire
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Discover how small businesses are growing faster with our platform.
          </p>
        </div>

        <div className="mx-auto flex flex-col md:flex-row items-center justify-center max-w-4xl gap-6">
          <div
            className="w-[330px] h-[270px] overflow-hidden rounded-lg shadow-lg"
            data-aos="zoom-in"
          >
            <Image
              src="/images/Group32.png"
              alt="Testimonial"
              width={430}
              height={260}
              className="object-cover w-full h-full"
            />
          </div>

          <div
            className="bg-white p-6 w-[280px] min-h-[220px] flex flex-col justify-center shadow-xl rounded-lg border border-gray-100"
            data-aos="fade-left"
          >
            <p className="text-xs text-blue-600 font-semibold uppercase mb-2">
              Rugfoot Photography
            </p>
            <p className="text-sm text-gray-800 leading-snug mb-3">
              “Our biggest client contacted us through the platform and we’ll
              continue to bring on new clients through it.”
            </p>
            <p className="text-sm font-semibold text-black">
              – Melanie Watsica
            </p>
          </div>
        </div>

        <div
          className="flex justify-center mt-6 space-x-2"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        </div>
      </section>

         {/* === LOGOS SECTION === */}
       <section
         className="bg-white py-10"
         data-aos="fade-up"
         data-aos-delay="200"
       >
         <div className="max-w-5xl mx-auto px-6 text-center">
           <h2 className="text-lg sm:text-xl font-bold text-black mb-6">
             Larger businesses use <br className="md:hidden" /> our platform too
           </h2>
           <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-6">
             {['Air(1).png', 'Air(2).png', 'Air(3).png', 'Air(4).png'].map(
               (logo, i) => (
                 <Image
                   key={i}
                   src={`/images/${logo}`}
                   alt="logo"
                   width={100}
                   height={45}
                   className="object-contain grayscale opacity-80 hover:opacity-100 transition"
                   data-aos="zoom-in"
                   data-aos-delay={`${i * 150}`}
                 />
               )
             )}
           </div>
         </div>
       </section>

    </div>
  );
}
