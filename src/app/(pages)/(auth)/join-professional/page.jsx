

// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // React icons
// import { FaSearch, FaRocket, FaTrophy } from 'react-icons/fa';

// /* ================= SERVICES LIST ================= */
// const servicesList = [
//   'House Cleaning',
//   'Office Cleaning',
//   'Deep Cleaning',
//   'Graphic Design',
//   'Web Design',
//   'Web Development',
//   'SEO Services',
//   'Digital Marketing',
//   'Book Keeping',
//   'Accounting',
//   'Life Coaching',
//   'Personal Trainer',
//   'Business Coach',
//   'Gardening',
//   'Landscaping',
//   'General Builder',
//   'Plumber',
//   'Electrician',
//   'Painter & Decorator',
//   'Photography',
//   'Wedding Photography',
//   'Videography',
//   'Video Editing',
// ];

// export default function HomePage() {
//   const router = useRouter();

//   const [query, setQuery] = useState('');
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-out-back',
//       once: false,
//     });
//   }, []);

//   /* ========= SAVE SERVICE ========= */
//   const saveServiceToLocal = (service) => {
//     if (!service) return;

//     localStorage.setItem(
//       'selectedService',
//       JSON.stringify({
//         name: service,
//         savedAt: Date.now(),
//       })
//     );
//   };

//   /* ========= GET STARTED HANDLER ========= */
//   const handleGetStarted = () => {
//     if (!query.trim()) {
//       setError('Please select a service to continue');
//       return;
//     }

//     setError('');
//     saveServiceToLocal(query);
//     router.push('/onboarding');
//   };

//   const filteredServices = servicesList.filter((service) =>
//     service.toLowerCase().includes(query.toLowerCase())
//   );

//   const features = [
//     {
//       icon: <FaSearch className="text-5xl text-blue-600 mb-4" />,
//       title: 'Find High-Quality Leads Fast',
//       points: [
//         'Browse targeted leads near you',
//         'Preview every lead before acting',
//         'Get real-time lead alerts',
//       ],
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
//       gradient: 'from-yellow-500/10 to-yellow-100/30',
//     },
//   ];

//   return (
//     <div className="bg-white text-gray-900">
//       {/* === HERO SECTION === */}
//       <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
//         {/* Left */}
//         <div className="md:w-1/2 space-y-5 text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
//             Skyrocket Your Success <br />
//             <span className="text-blue-600">Clients Are Waiting!</span>
//           </h1>

//           <p className="text-gray-600">
//             Thousands of eager local and remote clients are ready to hire.
//           </p>

//           {/* ===== SEARCH ===== */}
//           <div className="relative w-full max-w-md mx-auto md:mx-0">
//             <div className="flex shadow-sm">
//               <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => {
//                   setQuery(e.target.value);
//                   setShowSuggestions(true);
//                   setError('');
//                 }}
//                 onBlur={() =>
//                   setTimeout(() => setShowSuggestions(false), 150)
//                 }
//                 placeholder="What service do you provide?"
//                 className="flex-1 px-4 py-3 border rounded-l-md focus:ring-2 focus:ring-blue-500 outline-none"
//               />

//               <button
//                 onClick={handleGetStarted}
//                 disabled={!query.trim()}
//                 className={`px-5 py-3 rounded-r-md text-white transition
//                   ${
//                     query.trim()
//                       ? 'bg-blue-600 hover:bg-blue-700'
//                       : 'bg-gray-400 cursor-not-allowed'
//                   }`}
//               >
//                 Get Started
//               </button>
//             </div>

//             {/* ERROR MESSAGE */}
//             {error && (
//               <p className="text-red-500 text-xs mt-1">{error}</p>
//             )}

//             {/* Suggestions */}
//             {showSuggestions && query && (
//               <div className="absolute z-50 w-full bg-white border rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
//                 {filteredServices.length > 0 ? (
//                   filteredServices.map((item, i) => (
//                     <div
//                       key={i}
//                       onClick={() => {
//                         setQuery(item);
//                         saveServiceToLocal(item);
//                         setShowSuggestions(false);
//                         setError('');
//                       }}
//                       className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-50"
//                     >
//                       {item}
//                     </div>
//                   ))
//                 ) : (
//                   <div className="px-4 py-2 text-sm text-gray-500">
//                     No services found
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Popular Services */}
//           <div className="grid grid-cols-2 gap-y-1 pt-3">
//             {servicesList.slice(0, 10).map((service, i) => (
//               <p
//                 key={i}
//                 onClick={() => {
//                   setQuery(service);
//                   saveServiceToLocal(service);
//                   setError('');
//                 }}
//                 className="cursor-pointer hover:text-blue-600"
//               >
//                 🔹 {service}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* Right */}
//         <div className="md:w-1/2 flex justify-center">
//           <div className="rounded-xl shadow-2xl overflow-hidden w-[350px] bg-white">
//             <Image
//               src="/images/join-professional-img.jpg"
//               alt="Hero"
//               width={400}
//               height={500}
//               className="object-cover w-full h-[500px]"
//             />
//           </div>
//         </div>
//       </section>

//       {/* === FEATURES === */}
//       <section className="py-20 px-6 md:px-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//           {features.map((card, i) => (
//             <div
//               key={i}
//               className={`p-8 rounded-3xl shadow-xl bg-gradient-to-br ${card.gradient} text-center`}
//             >
//               {card.icon}
//               <h3 className="font-bold mb-3">{card.title}</h3>
//               <ul className="text-sm space-y-1">
//                 {card.points.map((p, idx) => (
//                   <li key={idx}>• {p}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>

        
//         {/* === STATS SECTION === */}
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

//          {/* === LOGOS SECTION === */}
//        <section
//          className="bg-white py-10"
//          data-aos="fade-up"
//          data-aos-delay="200"
//        >
//          <div className="max-w-5xl mx-auto px-6 text-center">
//            <h2 className="text-lg sm:text-xl font-bold text-black mb-6">
//              Larger businesses use <br className="md:hidden" /> our platform too
//            </h2>
//            <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-6">
//              {['Air(1).png', 'Air(2).png', 'Air(3).png', 'Air(4).png'].map(
//                (logo, i) => (
//                  <Image
//                    key={i}
//                    src={`/images/${logo}`}
//                    alt="logo"
//                    width={100}
//                    height={45}
//                    className="object-contain grayscale opacity-80 hover:opacity-100 transition"
//                    data-aos="zoom-in"
//                    data-aos-delay={`${i * 150}`}
//                  />
//                )
//              )}
//            </div>
//          </div>
//        </section>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSearch, FaRocket, FaTrophy } from 'react-icons/fa';

const servicesList = [
  'House Cleaning','Office Cleaning','Deep Cleaning','Graphic Design',
  'Web Design','Web Development','SEO Services','Digital Marketing',
  'Book Keeping','Accounting','Life Coaching','Personal Trainer',
  'Business Coach','Gardening','Landscaping','General Builder',
  'Plumber','Electrician','Painter & Decorator','Photography',
  'Wedding Photography','Videography','Video Editing',
];

export default function HomePage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const saveServiceToLocal = (service) => {
    localStorage.setItem(
      'selectedService',
      JSON.stringify({ name: service, savedAt: Date.now() })
    );
  };

  const handleGetStarted = () => {
    if (!query.trim()) {
      setError('Please select a service to continue');
      return;
    }
    saveServiceToLocal(query);
    router.push('/onboarding');
  };

  const filteredServices = servicesList.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  const features = [
    {
      icon: <FaSearch className="text-4xl text-blue-600 mb-4" />,
      title: 'Find High-Quality Leads Fast',
      points: ['Browse targeted leads', 'Preview before acting', 'Real-time alerts'],
    },
    {
      icon: <FaRocket className="text-4xl text-purple-600 mb-4" />,
      title: 'Scale With Confidence',
      points: ['No commissions', 'Transparent pricing', 'Guaranteed leads'],
    },
    {
      icon: <FaTrophy className="text-4xl text-yellow-500 mb-4" />,
      title: 'Win More Clients',
      points: ['Choose matching leads', 'Instant contact access', 'Close faster'],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8fafc] to-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative px-6 md:px-16 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center gap-16">

        {/* LEFT */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Skyrocket Your Success <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Clients Are Waiting!
            </span>
          </h1>

          <p className="text-gray-600 text-lg">
            Thousands of eager local and remote clients are ready to hire professionals like you.
          </p>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto md:mx-0">
            <div className="flex backdrop-blur-lg bg-white/80 border border-gray-200 rounded-xl shadow-xl overflow-hidden">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                  setError('');
                }}
                placeholder="What service do you provide?"
                className="flex-1 px-5 py-4 outline-none bg-transparent"
              />
              <button
                onClick={handleGetStarted}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 transition"
              >
                Get Started
              </button>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {showSuggestions && query && (
              <div className="absolute w-full bg-white border mt-2 rounded-xl shadow-2xl max-h-60 overflow-y-auto z-50">
                {filteredServices.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setQuery(item);
                      saveServiceToLocal(item);
                      setShowSuggestions(false);
                    }}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Popular */}
          <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
            {servicesList.slice(0, 8).map((service, i) => (
              <span
                key={i}
                onClick={() => setQuery(service)}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm cursor-pointer hover:bg-blue-100 transition"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 blur-3xl opacity-20 rounded-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-[350px]">
              <Image
                src="/images/join-professional-img.jpg"
                alt="Hero"
                width={400}
                height={500}
                className="object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {features.map((card, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition"
            >
              {card.icon}
              <h3 className="font-bold text-lg mb-4">{card.title}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {card.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10 px-6">
          {[
            ['10,000+', 'Leads per day'],
            ['£1M+', 'Business daily'],
            ['1,000+', 'Services'],
            ['500K+', 'Professionals'],
          ].map((stat, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <h3 className="text-3xl font-bold">{stat[0]}</h3>
              <p className="opacity-80">{stat[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <p className="text-gray-600 mb-4">
              “Our biggest client contacted us through the platform and we continue to grow every month.”
            </p>
            <p className="font-semibold">– Melanie Watsica</p>
          </div>
        </div>
      </section>

    </div>
  );
}