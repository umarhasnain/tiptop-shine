
// 'use client';

// import { useState, useMemo, useEffect } from "react";
// import {
//   Search,
//   MapPin,
//   Phone,
//   Mail,
//   Lock,
//   User,
//   Coins,
//   CheckCircle2,
//   Sparkles,
//   ShieldCheck,
// } from "lucide-react";

// import UserHeader from "@/components/UserHeader";

// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";

// export default function LeadsDashboard() {
//   const [query, setQuery] = useState("");
//   const [activeId, setActiveId] = useState(null);

//   const [leads, setLeads] = useState([]);
//   const [professional, setProfessional] =
//     useState(null);

//   const [loadingBuy, setLoadingBuy] =
//     useState(false);

//   const [unlockedLeads, setUnlockedLeads] =
//     useState([]);

//   // ================= LOAD DATA =================
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const email =
//           localStorage.getItem(
//             "loggedInEmail"
//           );

//         if (!email) return;

//         // ================= PROFESSIONAL =================
//         const proRes = await fetch(
//           "/api/professionals"
//         );

//         const proData = await proRes.json();

//         const user =
//           proData?.professionals?.find(
//             (p) => p.email === email
//           );

//         setProfessional(user);

//         // ================= LOAD PURCHASED LEADS =================
//         const savedUnlocked =
//           JSON.parse(
//             localStorage.getItem(
//               "unlockedLeads"
//             ) || "[]"
//           );

//         setUnlockedLeads(savedUnlocked);

//         // ================= LOAD LEADS =================
//         const leadRes = await fetch(
//           "/api/get-leads",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type":
//                 "application/json",
//             },
//             body: JSON.stringify({
//               email,
//             }),
//           }
//         );

//         const leadData =
//           await leadRes.json();

//         // ================= SAFE LEADS =================
//         const safeLeads = (
//           leadData?.leads || []
//         ).map((l, i) => {
//           let creditsRequired = 5;

//           const premiumServices = [
//             "App Development",
//             "Cyber Security",
//             "Cloud Services",
//             "Interior Design",
//             "Home Security",
//             "Solar Panel Installation",
//             "Bathroom Renovation",
//           ];

//           if (
//             premiumServices.includes(
//               l.serviceName
//             )
//           ) {
//             creditsRequired = 25;
//           } else if (
//             l.category === "business"
//           ) {
//             creditsRequired = 15;
//           } else if (
//             l.category === "home-garden"
//           ) {
//             creditsRequired = 8;
//           }

//           return {
//             id: l._id || i,

//             serviceName:
//               l.serviceName || "",

//             category:
//               l.category || "",

//             name:
//               l.answers?.name ||
//               l.name ||
//               "Customer",

//             email:
//               l.answers?.email ||
//               l.email ||
//               "",

//             phone:
//               l.answers?.phone ||
//               l.phone ||
//               "",

//             city:
//               l.location?.city ||
//               "Unknown",

//             region:
//               l.location?.region ||
//               "",

//             postcode:
//               l.location?.postcode ||
//               "",

//             createdAt: l.createdAt,

//             answers:
//               l.answers || {},

//             creditsRequired,
//           };
//         });

//         setLeads(safeLeads);

//         if (safeLeads.length > 0) {
//           setActiveId(
//             safeLeads[0].id
//           );
//         }
//       } catch (err) {
//         console.error(
//           "LOAD ERROR:",
//           err
//         );
//       }
//     };

//     fetchData();
//   }, []);

//   // ================= SEARCH =================
//   const filtered = useMemo(() => {
//     if (!query.trim()) return leads;

//     const q = query.toLowerCase();

//     return leads.filter((l) =>
//       `${l.name} ${l.serviceName} ${l.city}`
//         .toLowerCase()
//         .includes(q)
//     );
//   }, [query, leads]);

//   // ================= ACTIVE LEAD =================
//   const activeLead =
//     filtered.find(
//       (l) => l.id === activeId
//     ) || null;

//   // ================= IS UNLOCKED =================
//   const isUnlocked =
//     unlockedLeads.includes(
//       activeLead?.id
//     );

//   // ================= BUY LEAD =================
//   const handleBuyLead =
//     async () => {
//       if (!activeLead) return;

//       // ===== ALREADY PURCHASED =====
//       if (isUnlocked) {
//         Swal.fire({
//           icon: "success",
//           title: "Already Unlocked",
//           text: "You already purchased this lead.",
//           confirmButtonColor:
//             "#2563eb",
//           borderRadius: "22px",
//         });

//         return;
//       }

//       // ===== CHECK CREDITS =====
//       if (
//         (professional?.credits ||
//           0) <
//         activeLead.creditsRequired
//       ) {
//         Swal.fire({
//           icon: "error",
//           title:
//             "Insufficient Credits",
//           html: `
//           <div style="padding-top:10px">
//             <div style="
//               background:#fef2f2;
//               border:1px solid #fecaca;
//               padding:18px;
//               border-radius:18px;
//               margin-top:10px;
//             ">
//               <div style="
//                 font-size:34px;
//                 font-weight:800;
//                 color:#dc2626;
//               ">
//                 ${activeLead.creditsRequired}
//               </div>

//               <div style="
//                 color:#991b1b;
//                 margin-top:5px;
//                 font-size:14px;
//               ">
//                 Credits Required
//               </div>
//             </div>
//           </div>
//         `,
//           confirmButtonColor:
//             "#2563eb",
//           borderRadius: "24px",
//         });

//         return;
//       }

//       // ===== CONFIRM =====
//       const confirm =
//         await Swal.fire({
//           title:
//             "Unlock Premium Lead?",
//           html: `
//           <div style="padding-top:10px">

//             <div style="
//               background:linear-gradient(135deg,#eff6ff,#dbeafe);
//               border:1px solid #bfdbfe;
//               padding:20px;
//               border-radius:22px;
//             ">
//               <div style="
//                 font-size:14px;
//                 color:#2563eb;
//                 margin-bottom:5px;
//               ">
//                 Lead Price
//               </div>

//               <div style="
//                 font-size:38px;
//                 font-weight:800;
//                 color:#1d4ed8;
//               ">
//                 ${activeLead.creditsRequired}
//               </div>

//               <div style="
//                 font-size:13px;
//                 color:#64748b;
//                 margin-top:6px;
//               ">
//                 Credits will be deducted instantly
//               </div>
//             </div>

//             <div style="
//               display:flex;
//               justify-content:center;
//               gap:10px;
//               flex-wrap:wrap;
//               margin-top:18px;
//             ">
//               <span style="
//                 background:#ecfdf5;
//                 color:#059669;
//                 padding:8px 14px;
//                 border-radius:999px;
//                 font-size:12px;
//                 font-weight:700;
//               ">
//                 Verified Lead
//               </span>

//               <span style="
//                 background:#f5f3ff;
//                 color:#7c3aed;
//                 padding:8px 14px;
//                 border-radius:999px;
//                 font-size:12px;
//                 font-weight:700;
//               ">
//                 Instant Access
//               </span>
//             </div>

//           </div>
//         `,
//           showCancelButton: true,
//           confirmButtonText:
//             "Unlock Now",
//           cancelButtonText:
//             "Cancel",
//           confirmButtonColor:
//             "#2563eb",
//           cancelButtonColor:
//             "#cbd5e1",
//           borderRadius: "28px",
//           width: 520,
//         });

//       if (!confirm.isConfirmed)
//         return;

//       try {
//         setLoadingBuy(true);

//         Swal.fire({
//           title:
//             "Unlocking Lead...",
//           text: "Processing secure transaction",
//           allowOutsideClick: false,
//           showConfirmButton: false,
//           didOpen: () => {
//             Swal.showLoading();
//           },
//         });

//         const email =
//           localStorage.getItem(
//             "loggedInEmail"
//           );

//         // ================= API =================
//         const res = await fetch(
//           "/api/buy-lead",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type":
//                 "application/json",
//             },
//             body: JSON.stringify({
//               leadId: activeLead.id,
//               email,
//               credits:
//                 activeLead.creditsRequired,
//             }),
//           }
//         );

//         const data =
//           await res.json();

//         Swal.close();

//         // ================= SUCCESS =================
//         if (data.success) {
//           // ===== SAVE UNLOCKED =====
//           const updatedUnlocked = [
//             ...unlockedLeads,
//             activeLead.id,
//           ];

//           setUnlockedLeads(
//             updatedUnlocked
//           );

//           localStorage.setItem(
//             "unlockedLeads",
//             JSON.stringify(
//               updatedUnlocked
//             )
//           );

//           // ===== UPDATE CREDITS =====
//           setProfessional((prev) => ({
//             ...prev,
//             credits:
//               data.remainingCredits,
//           }));

//           // ===== SUCCESS ALERT =====
//           await Swal.fire({
//             icon: "success",
//             title:
//               "Lead Unlocked!",
//             html: `
//             <div style="padding-top:10px">

//               <div style="
//                 background:linear-gradient(135deg,#dcfce7,#ecfdf5);
//                 padding:22px;
//                 border-radius:24px;
//                 margin-bottom:18px;
//               ">
//                 <div style="
//                   font-size:14px;
//                   color:#059669;
//                   margin-bottom:5px;
//                 ">
//                   Credits Deducted
//                 </div>

//                 <div style="
//                   font-size:42px;
//                   font-weight:800;
//                   color:#047857;
//                 ">
//                   -${activeLead.creditsRequired}
//                 </div>
//               </div>

//               <div style="
//                 background:#eff6ff;
//                 border:1px solid #bfdbfe;
//                 padding:16px;
//                 border-radius:18px;
//                 margin-bottom:16px;
//               ">
//                 <div style="
//                   color:#1d4ed8;
//                   font-weight:700;
//                   margin-bottom:4px;
//                 ">
//                   Remaining Credits
//                 </div>

//                 <div style="
//                   font-size:28px;
//                   font-weight:800;
//                   color:#1e3a8a;
//                 ">
//                   ${
//                     data.remainingCredits
//                   }
//                 </div>
//               </div>

//               <div style="
//                 background:#f8fafc;
//                 border:1px solid #e2e8f0;
//                 padding:14px;
//                 border-radius:16px;
//                 color:#475569;
//                 font-size:14px;
//               ">
//                 Customer contact details are now available.
//               </div>

//             </div>
//           `,
//             confirmButtonText:
//               "Awesome!",
//             confirmButtonColor:
//               "#2563eb",
//             borderRadius: "26px",
//             width: 520,
//           });
//         } else {
//           Swal.fire({
//             icon: "error",
//             title:
//               "Purchase Failed",
//             text:
//               data.error ||
//               "Unable to unlock lead",
//             confirmButtonColor:
//               "#dc2626",
//             borderRadius: "22px",
//           });
//         }
//       } catch (err) {
//         console.error(err);

//         Swal.fire({
//           icon: "error",
//           title: "Server Error",
//           text: "Something went wrong.",
//           confirmButtonColor:
//             "#dc2626",
//           borderRadius: "22px",
//         });
//       } finally {
//         setLoadingBuy(false);
//       }
//     };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <UserHeader />

//       <div className="flex flex-col md:flex-row h-[calc(100vh-80px)]">

//         {/* ================= SIDEBAR ================= */}
//         <aside className="w-full md:w-80 bg-white border-r shadow-sm flex flex-col">

//           {/* TOP */}
//           <div className="p-5 border-b">

//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="font-bold text-2xl text-gray-900">
//                   Leads
//                 </h2>

//                 <p className="text-sm text-gray-500 mt-1">
//                   {filtered.length} Available
//                 </p>
//               </div>

//               <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
//                 <Sparkles className="text-blue-600" size={22} />
//               </div>
//             </div>

//             {/* CREDIT CARD */}
//             <div className="mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-5 shadow-lg">

//               <div className="flex items-center justify-between">

//                 <div>
//                   <p className="text-xs opacity-80">
//                     Available Credits
//                   </p>

//                   <h3 className="text-3xl font-black mt-1">
//                     {professional?.credits || 0}
//                   </h3>
//                 </div>

//                 <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
//                   <Coins size={30} />
//                 </div>

//               </div>

//             </div>
//           </div>

//           {/* SEARCH */}
//           <div className="p-4 border-b">

//             <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3">

//               <Search
//                 size={18}
//                 className="text-gray-400"
//               />

//               <input
//                 value={query}
//                 onChange={(e) =>
//                   setQuery(
//                     e.target.value
//                   )
//                 }
//                 placeholder="Search leads..."
//                 className="ml-3 w-full bg-transparent outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* LEADS LIST */}
//           <div className="overflow-y-auto flex-1">

//             {filtered.map((lead) => {
//               const unlocked =
//                 unlockedLeads.includes(
//                   lead.id
//                 );

//               return (
//                 <button
//                   key={lead.id}
//                   onClick={() =>
//                     setActiveId(
//                       lead.id
//                     )
//                   }
//                   className={`w-full text-left px-5 py-4 border-b transition-all duration-200 ${
//                     activeId === lead.id
//                       ? "bg-blue-50"
//                       : "hover:bg-gray-50"
//                   }`}
//                 >

//                   <div className="flex justify-between gap-3">

//                     <div>
//                       <p className="font-bold text-gray-900">
//                         {lead.name}
//                       </p>

//                       <p className="text-sm text-gray-500 mt-1">
//                         {
//                           lead.serviceName
//                         }
//                       </p>

//                       <p className="text-xs text-gray-400 flex items-center gap-1 mt-2">
//                         <MapPin size={12} />
//                         {lead.city},{" "}
//                         {lead.region}
//                       </p>
//                     </div>

//                     <div>

//                       {unlocked ? (
//                         <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
//                           <CheckCircle2 size={12} />
//                           Unlocked
//                         </div>
//                       ) : (
//                         <div className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
//                           <Coins size={12} />
//                           {
//                             lead.creditsRequired
//                           }
//                         </div>
//                       )}

//                     </div>

//                   </div>

//                 </button>
//               );
//             })}
//           </div>
//         </aside>

//         {/* ================= MAIN ================= */}
//         <main className="flex-1 p-4 md:p-6 overflow-y-auto">

//           {!activeLead ? (
//             <div className="text-center text-gray-400 mt-20">
//               No leads found
//             </div>
//           ) : (
//             <div className="max-w-5xl mx-auto space-y-6">

//               {/* HEADER */}
//               <div className="bg-white rounded-3xl p-6 shadow-sm border">

//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

//                   <div>
//                     <h1 className="text-3xl font-black text-gray-900">
//                       {
//                         activeLead.name
//                       }
//                     </h1>

//                     <p className="text-gray-600 mt-2 text-lg">
//                       {
//                         activeLead.serviceName
//                       }
//                     </p>

//                     <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
//                       <MapPin size={15} />

//                       {
//                         activeLead.city
//                       },{" "}
//                       {
//                         activeLead.region
//                       }
//                     </div>
//                   </div>

//                   <div className="bg-blue-50 rounded-3xl px-6 py-5 text-center min-w-[150px]">

//                     <p className="text-xs text-blue-600 font-semibold">
//                       Lead Price
//                     </p>

//                     <h3 className="text-4xl font-black text-blue-700 mt-2 flex items-center justify-center gap-2">
//                       <Coins size={28} />
//                       {
//                         activeLead.creditsRequired
//                       }
//                     </h3>

//                   </div>

//                 </div>

//               </div>

//               {/* CONTENT */}
//               <div className="grid lg:grid-cols-2 gap-6">

//                 {/* PROJECT */}
//                 <div className="bg-white rounded-3xl p-6 shadow-sm border">

//                   <div className="flex items-center gap-2 mb-5">
//                     <ShieldCheck className="text-blue-600" size={20} />

//                     <h3 className="font-black text-xl">
//                       Project Details
//                     </h3>
//                   </div>

//                   <div className="space-y-3">

//                     {Object.entries(
//                       activeLead.answers || {}
//                     ).map(
//                       ([key, value]) => (
//                         <div
//                           key={key}
//                           className="bg-gray-50 rounded-2xl p-4"
//                         >
//                           <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold">
//                             {key}
//                           </p>

//                           <p className="text-sm text-gray-700 mt-1 break-words">
//                             {Array.isArray(
//                               value
//                             )
//                               ? value.join(
//                                   ", "
//                                 )
//                               : value?.toString()}
//                           </p>
//                         </div>
//                       )
//                     )}

//                   </div>
//                 </div>

//                 {/* CONTACT */}
//                 <div className="bg-white rounded-3xl p-6 shadow-sm border">

//                   <h3 className="font-black text-xl mb-5">
//                     Contact Information
//                   </h3>

//                   {!isUnlocked ? (
//                     <div className="border-2 border-dashed border-gray-200 rounded-3xl p-8 text-center">

//                       <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
//                         <Lock size={32} className="text-gray-500" />
//                       </div>

//                       <h4 className="text-xl font-bold text-gray-900">
//                         Unlock Premium Lead
//                       </h4>

//                       <p className="text-gray-500 mt-2 max-w-sm mx-auto">
//                         Purchase this lead to view customer phone number, email and location details.
//                       </p>

//                       <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-3 rounded-2xl font-bold">
//                         <Coins size={18} />
//                         {
//                           activeLead.creditsRequired
//                         }{" "}
//                         Credits Required
//                       </div>

//                       <button
//                         onClick={
//                           handleBuyLead
//                         }
//                         disabled={
//                           loadingBuy
//                         }
//                         className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all duration-200"
//                       >
//                         {loadingBuy
//                           ? "Unlocking..."
//                           : `Unlock Lead (${activeLead.creditsRequired} Credits)`}
//                       </button>

//                     </div>
//                   ) : (
//                     <div className="space-y-4">

//                       <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3 text-green-700">
//                         <CheckCircle2 size={20} />
//                         <span className="font-semibold">
//                           Lead Purchased Successfully
//                         </span>
//                       </div>

//                       <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
//                         <User size={18} className="text-blue-600" />

//                         <div>
//                           <p className="text-xs text-gray-400">
//                             Customer Name
//                           </p>

//                           <p className="font-semibold text-gray-900">
//                             {
//                               activeLead.name
//                             }
//                           </p>
//                         </div>
//                       </div>

//                       <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
//                         <Phone size={18} className="text-green-600" />

//                         <div>
//                           <p className="text-xs text-gray-400">
//                             Phone Number
//                           </p>

//                           <p className="font-semibold text-gray-900">
//                             {
//                               activeLead.phone
//                             }
//                           </p>
//                         </div>
//                       </div>

//                       <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
//                         <Mail size={18} className="text-red-500" />

//                         <div>
//                           <p className="text-xs text-gray-400">
//                             Email Address
//                           </p>

//                           <p className="font-semibold text-gray-900 break-all">
//                             {
//                               activeLead.email
//                             }
//                           </p>
//                         </div>
//                       </div>

//                       <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
//                         <MapPin size={18} className="text-purple-600" />

//                         <div>
//                           <p className="text-xs text-gray-400">
//                             Location
//                           </p>

//                           <p className="font-semibold text-gray-900">
//                             {
//                               activeLead.city
//                             }{" "}
//                             -{" "}
//                             {
//                               activeLead.postcode
//                             }
//                           </p>
//                         </div>
//                       </div>

//                     </div>
//                   )}
//                 </div>

//               </div>

//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

//** This is a test page for development purposes. It is not used in production.


// 'use client';

// import { useState, useMemo, useEffect } from "react";
// import {
//   Search,
//   MapPin,
//   Phone,
//   Mail,
//   Lock,
//   User,
//   Coins,
//   CheckCircle2,
// } from "lucide-react";

// import UserHeader from "@/components/UserHeader";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";

// export default function LeadsDashboard() {
//   const [query, setQuery] = useState("");
//   const [activeId, setActiveId] = useState(null);
//   const [leads, setLeads] = useState([]);
//   const [professional, setProfessional] = useState(null);
//   const [loadingBuy, setLoadingBuy] = useState(false);

//   // ✅ PERSIST PURCHASED LEADS
//   const [unlockedLeads, setUnlockedLeads] = useState([]);

//   // ================= LOAD DATA =================
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const email = localStorage.getItem("loggedInEmail");

//         if (!email) return;

//         // ================= PROFESSIONAL =================
//         const proRes = await fetch("/api/professionals");
//         const proData = await proRes.json();

//         const user = proData?.professionals?.find(
//           (p) => p.email === email
//         );

//         setProfessional(user);

//         // ================= LOAD PURCHASED LEADS =================
//         const savedUnlocked =
//           JSON.parse(
//             localStorage.getItem(`unlockedLeads_${email}`)
//           ) || [];

//         setUnlockedLeads(savedUnlocked);

//         // ================= LEADS =================
//         const leadRes = await fetch("/api/get-leads", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email }),
//         });

//         const leadData = await leadRes.json();

//         // ✅ FIX NO LEADS ISSUE
//         const leadsArray =
//           leadData?.leads ||
//           leadData?.data ||
//           [];

//         const safeLeads = leadsArray.map((l, i) => ({
//           id: l._id || i,

//           serviceName:
//             l.serviceName || "Service",

//           category: l.category || "",

//           // ================= CONTACT =================
//           name:
//             l.answers?.name ||
//             l.name ||
//             "Customer",

//           email:
//             l.answers?.email ||
//             l.email ||
//             "",

//           phone:
//             l.answers?.phone ||
//             l.phone ||
//             "",

//           // ================= LOCATION =================
//           city:
//             l.location?.city ||
//             "Unknown",

//           region:
//             l.location?.region ||
//             "",

//           postcode:
//             l.location?.postcode ||
//             "",

//           // ================= EXTRA =================
//           createdAt: l.createdAt,
//           answers: l.answers || {},

//           // ✅ DEFAULT LEAD PRICE
//           creditsRequired:
//             l.creditsRequired || 10,
//         }));

//         setLeads(safeLeads);

//         // AUTO ACTIVE
//         if (safeLeads.length > 0) {
//           setActiveId(safeLeads[0].id);
//         }
//       } catch (err) {
//         console.error("Fetch Error:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   // ================= SEARCH =================
//   const filtered = useMemo(() => {
//     if (!query.trim()) return leads;

//     const q = query.toLowerCase();

//     return leads.filter((l) =>
//       `
//       ${l.name}
//       ${l.serviceName}
//       ${l.city}
//     `
//         .toLowerCase()
//         .includes(q)
//     );
//   }, [query, leads]);

//   // ================= ACTIVE LEAD =================
//   const activeLead =
//     filtered.find(
//       (l) => l.id === activeId
//     ) || null;

//   // ================= UNLOCKED =================
//   const isUnlocked =
//     activeLead &&
//     unlockedLeads.includes(
//       activeLead.id.toString()
//     );

//   // ================= BUY LEAD =================
//   const handleBuyLead = async () => {
//     if (!activeLead) return;

//     try {
//       setLoadingBuy(true);

//       const email =
//         localStorage.getItem(
//           "loggedInEmail"
//         );

//       const res = await fetch(
//         "/api/buy-lead",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type":
//               "application/json",
//           },
//           body: JSON.stringify({
//             leadId: activeLead.id,
//             email,
//           }),
//         }
//       );

//       const data = await res.json();

//       if (!data.success) {
//         Swal.fire({
//           icon: "error",
//           title: "Purchase Failed",
//           text:
//             data.error ||
//             "Unable to purchase lead.",
//           confirmButtonColor: "#2563eb",
//         });

//         return;
//       }

//       // ================= SAVE UNLOCKED =================
//       const updatedUnlocked = [
//         ...unlockedLeads,
//         activeLead.id.toString(),
//       ];

//       setUnlockedLeads(updatedUnlocked);

//       localStorage.setItem(
//         `unlockedLeads_${email}`,
//         JSON.stringify(updatedUnlocked)
//       );

//       // ================= UPDATE CREDITS =================
//       setProfessional((prev) => ({
//         ...prev,
//         credits:
//           data.remainingCredits ??
//           prev?.credits ??
//           0,
//       }));

//       // ================= BEAUTIFUL SUCCESS ALERT =================
//       await Swal.fire({
//         icon: "success",
//         title:
//           "🎉 Lead Purchased Successfully!",
//         html: `
//           <div style="padding-top:10px">
//             <p style="font-size:15px;color:#475569">
//               Customer details unlocked successfully.
//             </p>

//             <div style="
//               margin-top:20px;
//               background:#eff6ff;
//               border-radius:16px;
//               padding:16px;
//             ">
//               <p style="
//                 margin:0;
//                 color:#2563eb;
//                 font-weight:700;
//                 font-size:14px;
//               ">
//                 Remaining Credits
//               </p>

//               <h2 style="
//                 margin-top:8px;
//                 font-size:34px;
//                 color:#111827;
//                 font-weight:800;
//               ">
//                 ${data.remainingCredits}
//               </h2>
//             </div>
//           </div>
//         `,
//         confirmButtonText:
//           "View Contact Details",
//         confirmButtonColor:
//           "#2563eb",
//         background: "#ffffff",
//         backdrop: `
//           rgba(37,99,235,0.15)
//         `,
//       });
//     } catch (err) {
//       console.error(err);

//       Swal.fire({
//         icon: "error",
//         title: "Something went wrong",
//         text:
//           "Please try again later.",
//         confirmButtonColor:
//           "#2563eb",
//       });
//     } finally {
//       setLoadingBuy(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <UserHeader />

//       <div className="flex flex-col md:flex-row h-[calc(100vh-80px)]">

//         {/* ================= SIDEBAR ================= */}
//         <aside className="w-full md:w-80 bg-white border-r shadow-md flex flex-col">

//           {/* HEADER */}
//           <div className="p-5 border-b">
//             <h2 className="font-bold text-2xl">
//               Leads
//             </h2>

//             <p className="text-sm text-gray-500">
//               {filtered.length} Available
//             </p>

//             {/* CREDITS */}
//             <div className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-4 shadow-lg">

//               <div className="flex justify-between items-center">

//                 <div>
//                   <p className="text-sm opacity-90">
//                     Available Credits
//                   </p>

//                   <h3 className="text-3xl font-black mt-1">
//                     {professional?.credits || 0}
//                   </h3>
//                 </div>

//                 <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
//                   <Coins size={28} />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* SEARCH */}
//           <div className="p-4 border-b">
//             <div className="flex items-center bg-gray-100 rounded-xl px-3 py-3">
//               <Search
//                 size={18}
//                 className="text-gray-400"
//               />

//               <input
//                 value={query}
//                 onChange={(e) =>
//                   setQuery(e.target.value)
//                 }
//                 placeholder="Search leads..."
//                 className="ml-2 w-full bg-transparent outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* LEADS */}
//           <div className="overflow-y-auto flex-1">

//             {filtered.length === 0 && (
//               <div className="p-8 text-center text-gray-400">
//                 No leads found
//               </div>
//             )}

//             {filtered.map((lead) => {

//               const purchased =
//                 unlockedLeads.includes(
//                   lead.id.toString()
//                 );

//               return (
//                 <button
//                   key={lead.id}
//                   onClick={() =>
//                     setActiveId(lead.id)
//                   }
//                   className={`w-full text-left px-5 py-4 border-b transition ${
//                     activeId === lead.id
//                       ? "bg-blue-50"
//                       : "hover:bg-gray-50"
//                   }`}
//                 >
//                   <div className="flex justify-between items-start">

//                     <div>
//                       <p className="font-bold text-gray-900">
//                         {lead.name}
//                       </p>

//                       <p className="text-sm text-gray-600 mt-1">
//                         {lead.serviceName}
//                       </p>

//                       <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
//                         <MapPin size={12} />
//                         {lead.city},{" "}
//                         {lead.region}
//                       </p>
//                     </div>

//                     {purchased ? (
//                       <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
//                         <CheckCircle2 size={12} />
//                         Unlocked
//                       </div>
//                     ) : (
//                       <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">
//                         {lead.creditsRequired}
//                         cr
//                       </div>
//                     )}
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         </aside>

//         {/* ================= MAIN ================= */}
//         <main className="flex-1 p-4 md:p-6 overflow-y-auto">

//           {!activeLead ? (
//             <div className="text-center text-gray-400 mt-20">
//               No leads found
//             </div>
//           ) : (
//             <div className="max-w-5xl mx-auto space-y-6">

//               {/* HEADER */}
//               <div className="bg-white p-6 rounded-2xl shadow">

//                 <div className="flex justify-between items-start gap-5">

//                   <div>
//                     <h1 className="text-2xl font-black">
//                       {activeLead.name}
//                     </h1>

//                     <p className="text-gray-600 mt-1">
//                       {activeLead.serviceName}
//                     </p>

//                     <p className="text-sm text-gray-500 flex items-center gap-1 mt-3">
//                       <MapPin size={14} />
//                       {activeLead.city},{" "}
//                       {activeLead.region}
//                     </p>
//                   </div>

//                   <div className="bg-blue-50 text-blue-700 rounded-2xl px-5 py-4 text-center min-w-[120px]">
//                     <p className="text-xs font-semibold">
//                       Lead Price
//                     </p>

//                     <h3 className="text-2xl font-black mt-1">
//                       {activeLead.creditsRequired}
//                     </h3>
//                   </div>
//                 </div>
//               </div>

//               {/* DETAILS */}
//               <div className="bg-white p-6 rounded-2xl shadow grid md:grid-cols-2 gap-8">

//                 {/* PROJECT */}
//                 <div>
//                   <h3 className="font-bold text-lg mb-4">
//                     Project Details
//                   </h3>

//                   <div className="space-y-3 text-sm">

//                     {Object.entries(
//                       activeLead.answers || {}
//                     ).map(
//                       ([key, value]) => (
//                         <div
//                           key={key}
//                           className="border-b pb-2"
//                         >
//                           <span className="font-semibold capitalize text-gray-800">
//                             {key}:
//                           </span>{" "}

//                           <span className="text-gray-600">
//                             {Array.isArray(value)
//                               ? value.join(", ")
//                               : value?.toString()}
//                           </span>
//                         </div>
//                       )
//                     )}
//                   </div>
//                 </div>

//                 {/* CONTACT */}
//                 <div>
//                   <h3 className="font-bold text-lg mb-4">
//                     Contact Info
//                   </h3>

//                   {!isUnlocked ? (
//                     <div className="border-2 border-dashed border-gray-300 p-8 rounded-2xl text-center">

//                       <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
//                         <Lock
//                           size={34}
//                           className="text-gray-500"
//                         />
//                       </div>

//                       <h4 className="text-xl font-bold">
//                         Unlock this lead
//                       </h4>

//                       <p className="text-gray-500 text-sm mt-2">
//                         Spend{" "}
//                         <span className="font-bold text-blue-600">
//                           {
//                             activeLead.creditsRequired
//                           }{" "}
//                           credits
//                         </span>{" "}
//                         to access customer details.
//                       </p>

//                       <button
//                         onClick={
//                           handleBuyLead
//                         }
//                         disabled={
//                           loadingBuy
//                         }
//                         className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
//                       >
//                         {loadingBuy
//                           ? "Processing..."
//                           : `Unlock Lead (${activeLead.creditsRequired} Credits)`}
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="space-y-4 text-sm">

//                       <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
//                         <User
//                           size={18}
//                           className="text-blue-600"
//                         />

//                         <span>
//                           {activeLead.name}
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
//                         <Phone
//                           size={18}
//                           className="text-green-600"
//                         />

//                         <span>
//                           {activeLead.phone}
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
//                         <Mail
//                           size={18}
//                           className="text-red-600"
//                         />

//                         <span>
//                           {activeLead.email}
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
//                         <MapPin
//                           size={18}
//                           className="text-purple-600"
//                         />

//                         <span>
//                           {activeLead.city} -{" "}
//                           {
//                             activeLead.postcode
//                           }
//                         </span>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//               </div>
//             </div>
//           )}

//         </main>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
