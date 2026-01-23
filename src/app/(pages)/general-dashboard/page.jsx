// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ServicesChartWithCrosshair from "@/components/ServicesChartWithCrosshair";
// import UserHeader from "@/components/UserHeader";
// import Image from "next/image";

// export default function Dashboard() {
//   useEffect(() => {
//     AOS.init({
//       duration: 700,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//   // Dashboard stats data
//   const stats = [
//     { title: "Revenue", icon: "📈", value: "$125,240", change: "▲ +12% this month", color: "green-600" },
//     { title: "Orders", icon: "🛒", value: "104", change: "New +40 this week", color: "blue-600" },
//     { title: "Customers", icon: "👥", value: "562", change: "+18 returning", color: "purple-600" },
//     { title: "Leads", icon: "📩", value: "1,029", change: "876 unread leads", color: "indigo-600" },
//     { title: "Responses", icon: "💬", value: "0", change: "You haven't responded yet", color: "gray-600" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#eef2ff] to-white">
//       {/* <UserHeader /> */}

//       <section className="py-8 px-4 md:px-6 lg:px-8">
//         <div className="max-w-[1400px] mx-auto">

//           {/* PAGE TITLE */}
//           <div
//             data-aos="fade-down"
//             className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
//           >
//             <div>
//               <p className="text-sm text-indigo-500 font-medium">
//                 Last updated on May 4, 2025
//               </p>
//               <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
//                 Dashboard Overview
//               </h1>
//             </div>

//             <div className="flex gap-3 flex-wrap">
//               <select className="px-5 py-2 bg-white/70 backdrop-blur-xl rounded-xl shadow-lg border text-sm font-medium hover:border-indigo-400 transition">
//                 <option>Last 30 days</option>
//                 <option>Last 7 days</option>
//               </select>
//               <button className="px-5 py-2 bg-white/70 backdrop-blur-xl rounded-xl shadow-lg border text-sm hover:bg-indigo-50 transition">
//                 ⬇ Download
//               </button>
//               <button className="px-5 py-2 bg-white/70 backdrop-blur-xl rounded-xl shadow-lg border text-sm hover:bg-indigo-50 transition">
//                 📤 Share
//               </button>
//             </div>
//           </div>

//           {/* TOP STATS CARDS */}
//           <div
//             data-aos="zoom-in"
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
//           >
//             {stats.map((stat) => (
//               <div key={stat.title} className="stat-card text-center p-6 rounded-2xl shadow-xl  bg-white/70 backdrop-blur-xl hover:shadow-2xl transition">
//                 <p className="text-sm font-medium text-gray-500">{stat.icon} {stat.title}</p>
//                 <h2 className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</h2>
//                 <p className={`text-xs mt-1 text-${stat.color}`}>{stat.change}</p>
//               </div>
//             ))}
//           </div>

//           {/* MAIN GRID */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//             {/* LEFT COLUMN */}
//             <div className="flex flex-col gap-8">

//               {/* PROFILE CARD */}
//               <div className="premium-card text-center" data-aos="fade-right">
//                 <Image
//                   src="/images/Ellipse 1.png"
//                   width={80}
//                   height={80}
//                   className="rounded-full mx-auto shadow-xl"
//                   alt="Profile"
//                 />
//                 <h3 className="text-lg font-bold mt-3 text-gray-900">Paula</h3>
//                 <p className="text-xs text-gray-500">Profile completion 23%</p>

//                 <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
//                   <div
//                     className="bg-indigo-600 h-2 rounded-full"
//                     style={{ width: "23%" }}
//                   ></div>
//                 </div>

//                 <button className="btn-link mt-3 text-indigo-600">Edit Profile</button>
//               </div>

//               {/* STARTER PACK CARD */}
//               <div className="premium-card" data-aos="fade-right">
//                 <h3 className="text-lg font-bold text-gray-900 text-center">
//                   ⭐ Starter Pack Offer
//                 </h3>

//                 <button className="btn-primary w-full mt-3">
//                   20% OFF + Refund Guarantee
//                 </button>

//                 <p className="text-xs text-gray-600 text-center mt-2">
//                   Respond to 5 leads instantly with premium support.
//                 </p>

//                 <button className="btn-link text-indigo-600 mt-3 text-center w-full">
//                   Learn More →
//                 </button>
//               </div>
//             </div>

//             {/* CENTER COLUMN */}
//             <div data-aos="fade-up" className="flex flex-col gap-8">

//               {/* LEAD SETTINGS */}
//               <div className="premium-card space-y-5">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-lg font-bold text-gray-900">Lead Settings</h3>
//                   <span className="btn-link">Edit</span>
//                 </div>

//                 <div>
//                   <p className="label">Service Categories</p>
//                   <div className="flex gap-2 flex-wrap mt-2">
//                     {["House Cleaning", "Carpet Cleaning", "Deep Cleaning", "Window Cleaning", "+8 more"].map(
//                       (item) => (
//                         <span key={item} className="tag">
//                           {item}
//                         </span>
//                       )
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <p className="label">Location</p>
//                   <p className="text-sm mt-1 text-gray-700 flex gap-1">📍 Nationwide</p>
//                   <p className="text-xs text-gray-500 mt-1">Estimated: 250 leads/day</p>
//                 </div>
//               </div>

//             </div>

//             {/* RIGHT COLUMN */}
//             <div className="flex flex-col gap-8" data-aos="fade-left">

//               {/* LEADS & RESPONSES CARDS already included in top stats */}

//             </div>
//           </div>

//           {/* PROMO SECTION */}
//           <div
//             className="premium-promo mt-12"
//             data-aos="zoom-in-up"
//           >
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900">
//                 Explore <span className="italic text-indigo-700">Commission & Exposure</span>
//               </h2>
//               <p className="text-sm text-gray-600 mt-2 max-w-md">
//                 Get access to exclusive insights, recommendations & special offers.
//               </p>

//               <button className="btn-link text-indigo-600 mt-3 text-sm">
//                 Read More →
//               </button>
//             </div>

//             <div className="hidden md:flex flex-col gap-2 opacity-40">
//               <div className="placeholder-line"></div>
//               <div className="placeholder-line"></div>
//               <div className="placeholder-line"></div>
//             </div>
//           </div>

//           {/* CHART SECTION */}
//           <div className="mt-10" data-aos="fade-up">
//             <ServicesChartWithCrosshair />
//           </div>

//         </div>

//         {/* EXTRA STYLES */}
//         <style>{`
//           .stat-card {
//             @apply bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition;
//           }
//           .premium-card {
//             @apply p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border hover:shadow-2xl transition;
//           }
//           .premium-promo {
//             @apply flex flex-col md:flex-row justify-between items-center p-8 bg-gradient-to-r from-white/80 to-indigo-50 
//             rounded-2xl backdrop-blur-xl shadow-xl border gap-8;
//           }
//           .btn-primary {
//             @apply bg-indigo-600 text-white text-xs py-2 px-5 rounded-full shadow hover:bg-indigo-700 transition;
//           }
//           .btn-link {
//             @apply text-xs underline cursor-pointer hover:text-indigo-700 transition;
//           }
//           .count-badge {
//             @apply text-xl bg-indigo-600 text-white px-6 py-1 rounded-full shadow;
//           }
//           .tag {
//             @apply px-3 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200;
//           }
//           .label {
//             @apply text-xs font-semibold text-gray-700;
//           }
//           .placeholder-line {
//             @apply w-24 h-6 border rounded-full;
//           }
//         `}</style>
//       </section>
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesChartWithCrosshair from "@/components/ServicesChartWithCrosshair";
import Image from "next/image";

export default function Dashboard() {
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });

    const fetchProfessionals = async () => {
      try {
        const res = await fetch("/api/professionals");
        const data = await res.json();
        if (res.ok) setProfessionals(data.professionals || []);
      } catch (err) {
        console.error("Failed to fetch professionals:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessionals();
  }, []);

  // Dashboard stats
  const stats = [
    {
      title: "Revenue",
      icon: "📈",
      value: "$125,240",
      change: "▲ +12% this month",
      color: "green-600",
    },
    {
      title: "Orders",
      icon: "🛒",
      value: "104",
      change: "New +40 this week",
      color: "blue-600",
    },
    {
      title: "Customers",
      icon: "👥",
      value: "562",
      change: "+18 returning",
      color: "purple-600",
    },
    {
      title: "Leads",
      icon: "📩",
      value: "1,029",
      change: "876 unread leads",
      color: "indigo-600",
    },
    {
      title: "Responses",
      icon: "💬",
      value: "0",
      change: "You haven't responded yet",
      color: "gray-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2ff] to-white">
      <section className="py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">

          {/* PAGE TITLE */}
          <div
            data-aos="fade-down"
            className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div>
              <p className="text-sm text-indigo-500 font-medium">
                Last updated on {new Date().toLocaleDateString()}
              </p>
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                Dashboard Overview
              </h1>
            </div>

            <div className="flex gap-3 flex-wrap">
              <select className="px-5 py-2 bg-white/70 backdrop-blur-xl rounded-xl shadow-lg border text-sm font-medium hover:border-indigo-400 transition">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
              </select>
              <button className="px-5 py-2 bg-white/70 backdrop-blur-xl rounded-xl shadow-lg border text-sm hover:bg-indigo-50 transition">
                ⬇ Download
              </button>
              <button className="px-5 py-2 bg-white/70 backdrop-blur-xl rounded-xl shadow-lg border text-sm hover:bg-indigo-50 transition">
                📤 Share
              </button>
            </div>
          </div>

          {/* TOP STATS CARDS */}
          <div
            data-aos="zoom-in"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
          >
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="stat-card text-center p-6 rounded-2xl shadow-xl bg-white/70 backdrop-blur-xl hover:shadow-2xl transition"
              >
                <p className="text-sm font-medium text-gray-500">
                  {stat.icon} {stat.title}
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </h2>
                <p className={`text-xs mt-1 text-${stat.color}`}>
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          {/* PROFESSIONALS LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <p>Loading professionals...</p>
            ) : professionals.length === 0 ? (
              <p>No professionals found.</p>
            ) : (
              professionals.map((p) => (
                <div
                  key={p._id}
                  data-aos="fade-up"
                  className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/Ellipse 1.png"
                      width={60}
                      height={60}
                      alt="Profile"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                      <p className="text-sm text-gray-500">{p.company || "-"}</p>
                      <p className="text-xs text-gray-400">{p.email}</p>
                    </div>
                  </div>

                  <div className="mt-3 text-sm">
                    <p>
                      <b>Service:</b> {p.serviceName}
                    </p>
                    <p>
                      <b>Miles:</b> {p.miles}, <b>Postcode:</b> {p.postcode}
                    </p>
                    <p>
                      <b>Availability:</b> {p.availability}, <b>Time:</b> {p.timeSlots}
                    </p>
                    <p>
                      <b>Work Type:</b> {p.workType}, <b>Website:</b> {p.hasWebsite}
                    </p>
                    <p>
                      <b>Company Size:</b> {p.companySize}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {Object.entries(p.documents || {}).map(([key, url]) => (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs underline text-indigo-600"
                        >
                          {key}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* CHART SECTION */}
          <div className="mt-10" data-aos="fade-up">
            <ServicesChartWithCrosshair />
          </div>
        </div>

        {/* STYLES */}
        <style>{`
          .stat-card {
            @apply bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition;
          }
        `}</style>
      </section>
    </div>
  );
}
