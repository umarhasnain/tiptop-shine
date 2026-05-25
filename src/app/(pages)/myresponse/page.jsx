// // pages/emptyWithImage.js
// import UserHeader from "@/components/UserHeader";
// import Head from "next/head";

// export default function EmptyWithImage() {
//   return (
//    <div>
//     <UserHeader/>
//      <div className="min-h-screen flex flex-col bg-gray-50">
//       <Head>
//         <title>No Replies Yet</title>
//       </Head>

//       {/* --- Top Center Section --- */}
//       <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12 text-gray-600">
//         {/* SVG Icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-24 w-24 mb-6 opacity-20"
//           fill="none"
//           viewBox="0 0 64 64"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//         >
//           <rect x="4" y="12" width="24" height="12" rx="2" ry="2" />
//           <rect x="36" y="12" width="24" height="12" rx="2" ry="2" />
//           <circle cx="32" cy="42" r="10" />
//           <path d="M8 44h48M8 52h48" />
//         </svg>

//         {/* Text */}
//         <h2 className="text-lg font-semibold text-gray-800 mb-2">No Replies Yet</h2>
//         <p className="text-sm text-gray-500 max-w-xs">
//           You haven't reached out to any customers so far. <br />
//           Once you respond, their details will appear here.
//         </p>

//         <button className="mt-4 text-blue-600 font-semibold hover:underline">
//           Browse Leads
//         </button>
//       </main>

//       {/* --- Image Section at the Bottom --- */}
//       <section className="w-full bg-white py-6">
//         <div className="max-w-4xl mx-auto px-4">
//           <img
//             src="/images/women.png" // Replace with your image
//             alt="Footer Section Banner"
//             className="w-full h-auto "
//           />
//         </div>
//       </section>
//     </div>
//    </div>
//   );
// }

// 'use client'
// import { useState } from "react";
// // import Sidebar from "../components/Sidebar";
// // import DashboardContent from "../components/DashboardContent";
// import UserHeader from "@/components/UserHeader";
// import DashboardContent from "@/components/DashboardContent";
// import Sidebar from "@/components/Sidebar";

// export default function Home() {
//   const [selectedTab, setSelectedTab] = useState("pending");

//   return (
//    <div> 
//     <UserHeader/>
//     <div className="flex h-screen bg-gray-100 ">
//       <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
//       <DashboardContent selectedTab={selectedTab} />
//     </div>
//     <img src="/images/women in power banner 1.png"  />
//     </div>

//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import {
//   Search,
//   Sparkles,
//   Star,
//   BadgeCheck,
//   Mail,
//   Phone,
//   MapPin,
//   X,
//   Briefcase,
//   ClipboardList,
//   Calendar,
//   Layers,
// } from "lucide-react";

// export default function MyResponsesPage() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [selected, setSelected] = useState(null);

//   // ================= FETCH =================
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("/api/professionals");
//         const json = await res.json();

//         if (json.success) {
//           setData(json.professionals);
//         }
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // ================= FILTER =================
//   const filtered = data.filter((item) =>
//     item?.name?.toLowerCase().includes(search.toLowerCase()) ||
//     item?.email?.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-[#f4f7fb]">

//       {/* ================= HERO ================= */}
//       <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">

//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 blur-3xl rounded-full" />
//           <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 blur-3xl rounded-full" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 py-14">

//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

//             <div>
//               <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
//                 <Sparkles size={16} />
//                 My Purchased Services
//               </div>

//               <h1 className="text-4xl md:text-5xl font-black mt-4">
//                 Responses Dashboard
//               </h1>

//               <p className="text-blue-100 mt-3 max-w-xl">
//                 View all purchased professionals with complete service and contact details.
//               </p>
//             </div>

//             {/* SEARCH */}
//             <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 flex items-center gap-2 w-full md:w-96">
//               <Search className="text-white/70" />
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search services..."
//                 className="bg-transparent outline-none text-white placeholder-white/60 w-full"
//               />
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ================= LIST ================= */}
//       <div className="max-w-7xl mx-auto px-6 py-10">

//         {loading ? (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="h-52 bg-gray-200 animate-pulse rounded-3xl" />
//             ))}
//           </div>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//             {filtered.map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-3xl shadow-md hover:shadow-2xl border border-gray-100 overflow-hidden transition"
//               >

//                 {/* HEADER */}
//                 <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between">

//                   <div className="flex items-center gap-2">
//                     <BadgeCheck />
//                     Verified Service
//                   </div>

//                   <div className="flex items-center gap-1 text-yellow-300">
//                     <Star size={16} />
//                     4.9
//                   </div>

//                 </div>

//                 {/* BODY */}
//                 <div className="p-5">

//                   <h2 className="text-xl font-bold">
//                     {item.name}
//                   </h2>

//                   <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
//                     <MapPin size={14} />
//                     {item.location || "No Location"}
//                   </p>

//                   <div className="mt-4 space-y-2 text-sm text-gray-600">

//                     <div className="flex items-center gap-2">
//                       <Mail size={16} />
//                       {item.email}
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Phone size={16} />
//                       {item.phone || "N/A"}
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Briefcase size={16} />
//                       {item.serviceName || "General Service"}
//                     </div>

//                   </div>

//                   <button
//                     onClick={() => setSelected(item)}
//                     className="mt-5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl hover:opacity-90"
//                   >
//                     View Full Details
//                   </button>

//                 </div>
//               </div>
//             ))}

//           </div>
//         )}
//       </div>

//       {/* ================= MODAL ================= */}
//       {selected && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">

//           <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden">

//             {/* HEADER */}
//             <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 flex justify-between items-center">

//               <h2 className="font-bold text-lg flex items-center gap-2">
//                 <Layers size={18} />
//                 Service Details
//               </h2>

//               <button onClick={() => setSelected(null)}>
//                 <X />
//               </button>

//             </div>

//             {/* BODY */}
//             <div className="p-6 space-y-5">

//               {/* BASIC INFO */}
//               <div className="bg-gray-50 p-4 rounded-2xl">
//                 <p className="text-xs text-gray-500">Name</p>
//                 <p className="font-semibold">{selected.name}</p>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-2xl">
//                 <p className="text-xs text-gray-500">Email</p>
//                 <p className="font-semibold">{selected.email}</p>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-2xl">
//                 <p className="text-xs text-gray-500">Phone</p>
//                 <p className="font-semibold">{selected.phone || "N/A"}</p>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-2xl">
//                 <p className="text-xs text-gray-500">Location</p>
//                 <p className="font-semibold">{selected.location || "N/A"}</p>
//               </div>

//               {/* SERVICE SECTION (MAIN ADDITION) */}
//               <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-2xl border">

//                 <h3 className="font-bold flex items-center gap-2 mb-3">
//                   <ClipboardList size={18} />
//                   Service Information
//                 </h3>

//                 <div className="space-y-2 text-sm">

//                   <div className="flex justify-between">
//                     <span className="text-gray-500">Service Name</span>
//                     <span className="font-semibold">
//                       {selected.serviceName || "N/A"}
//                     </span>
//                   </div>

//                   <div className="flex justify-between">
//                     <span className="text-gray-500">Category</span>
//                     <span className="font-semibold">
//                       {selected.category || "General"}
//                     </span>
//                   </div>

//                   <div className="flex justify-between">
//                     <span className="text-gray-500">Experience</span>
//                     <span className="font-semibold">
//                       {selected.experience || "N/A"}
//                     </span>
//                   </div>

//                 </div>
//               </div>

//               {/* DATE */}
//               <div className="text-sm text-gray-500 flex items-center gap-2">
//                 <Calendar size={14} />
//                 {selected.createdAt
//                   ? new Date(selected.createdAt).toDateString()
//                   : "Recently"}
//               </div>

//             </div>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Sparkles,
  BadgeCheck,
  Mail,
  X,
  Layers,
  Calendar,
  CreditCard,
  Hash,
} from "lucide-react";

export default function MyResponsesPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const [userEmail, setUserEmail] = useState("");

  // ================= FETCH =================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("loggedInEmail");
        setUserEmail(email || "");

        const res = await fetch(`/api/purchased-leads?email=${email}`);
        const json = await res.json();

        if (json.success) {
          setData(json.purchasedLeads || []);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ================= FILTER =================
  const filtered = data.filter((item) => {
    const searchText = search.toLowerCase();

    return (
      item?.leadId?.toLowerCase().includes(searchText) ||
      item?.professionalEmail?.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="min-h-screen bg-[#f4f7fb]">

      {/* ================= HERO ================= */}
      <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 blur-3xl rounded-full" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-14">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                <Sparkles size={16} />
                Purchased Leads Dashboard
              </div>

              <h1 className="text-4xl md:text-5xl font-black mt-4">
                My Responses
              </h1>

              <p className="text-blue-100 mt-3 max-w-xl">
                All your purchased leads with complete tracking history.
              </p>
            </div>

            {/* SEARCH */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 flex items-center gap-2 w-full md:w-96">
              <Search className="text-white/70" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search leads..."
                className="bg-transparent outline-none text-white placeholder-white/60 w-full"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ================= LIST ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-52 bg-gray-200 animate-pulse rounded-3xl" />
            ))}
          </div>

        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-400 text-lg">
              No purchased leads found
            </div>
          </div>

        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filtered.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-md hover:shadow-2xl border border-gray-100 overflow-hidden transition duration-300"
              >

                {/* HEADER */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between">

                  <div className="flex items-center gap-2">
                    <BadgeCheck size={18} />
                    Purchased Lead
                  </div>

                  <div className="flex items-center gap-1 text-yellow-300 text-sm">
                    <CreditCard size={16} />
                    {item.creditsUsed} credits
                  </div>

                </div>

                {/* BODY */}
                <div className="p-5">

                  <div className="flex items-center gap-2 text-gray-800">
                    <Hash size={16} />
                    <h2 className="text-sm font-bold">Lead ID</h2>
                  </div>

                  <p className="text-xs text-gray-500 break-all mt-1">
                    {item.leadId}
                  </p>

                  <div className="mt-4 space-y-3 text-sm text-gray-600">

                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      {item.professionalEmail}
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {item.createdAt
                        ? new Date(item.createdAt).toDateString()
                        : "N/A"}
                    </div>

                  </div>

                  <button
                    onClick={() => setSelected(item)}
                    className="mt-5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl hover:opacity-90 transition"
                  >
                    View Full Details
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">

          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">

            {/* HEADER */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 flex justify-between items-center">

              <h2 className="font-bold text-lg flex items-center gap-2">
                <Layers size={18} />
                Lead Details
              </h2>

              <button onClick={() => setSelected(null)}>
                <X />
              </button>

            </div>

            {/* BODY */}
            <div className="p-6 space-y-4">

              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-xs text-gray-500">Lead ID</p>
                <p className="font-semibold break-all">{selected.leadId}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-xs text-gray-500">Professional Email</p>
                <p className="font-semibold">{selected.professionalEmail}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-xs text-gray-500">Credits Used</p>
                <p className="font-semibold">{selected.creditsUsed}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-xs text-gray-500">Date</p>
                <p className="font-semibold">
                  {selected.createdAt
                    ? new Date(selected.createdAt).toDateString()
                    : "N/A"}
                </p>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}