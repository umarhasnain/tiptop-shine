// "use client";

// import { useState, useMemo, useEffect } from "react";
// import {
//   Search,
//   MapPin,
//   CheckCircle,
//   Phone,
//   Mail,
//   Lock,
//   Star,
//   ArrowLeft,
// } from "lucide-react";
// import UserHeader from "@/components/UserHeader";

// export default function LeadsDashboard() {
//   const [query, setQuery] = useState("");
//   const [activeId, setActiveId] = useState(null);
//   const [leads, setLeads] = useState([]);
//   const [professional, setProfessional] = useState(null);
//   const [loadingBuy, setLoadingBuy] = useState(false);
//   const [unlockedLeads, setUnlockedLeads] = useState([]);

//   // ================= LOAD DATA =================
//   useEffect(() => {
//     const fetchData = async () => {
//       const email = localStorage.getItem("loggedInEmail");
//       if (!email) return;

//       const proRes = await fetch("/api/professionals");
//       const proData = await proRes.json();
//       const user = proData?.professionals?.find(
//         (p) => p.email === email
//       );
//       setProfessional(user);

//       const leadRes = await fetch("/api/get-leads", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const leadData = await leadRes.json();
//       const safeLeads = leadData?.leads?.map((l, i) => ({
//         ...l,
//         id: l._id || i,
//       }));

//       setLeads(safeLeads || []);
//     };

//     fetchData();
//   }, []);

//   // ================= SEARCH =================
//   const filtered = useMemo(() => {
//     if (!query.trim()) return leads;
//     const q = query.toLowerCase();
//     return leads.filter(
//       (l) =>
//         l?.name?.toLowerCase().includes(q) ||
//         l?.serviceName?.toLowerCase().includes(q) ||
//         l?.city?.toLowerCase().includes(q)
//     );
//   }, [query, leads]);

//   useEffect(() => {
//     if (filtered.length > 0) setActiveId(filtered[0].id);
//   }, [filtered]);

//   const activeLead =
//     filtered.find((l) => l.id === activeId) || null;

//   const isUnlocked = unlockedLeads.includes(activeLead?.id);

//   // ================= BUY LEAD =================
//   const handleBuyLead = async () => {
//     if (!activeLead) return;
//     if (professional?.credits < activeLead?.creditsRequired) {
//       alert("Not enough credits");
//       return;
//     }

//     try {
//       setLoadingBuy(true);
//       const email = localStorage.getItem("loggedInEmail");

//       const res = await fetch("/api/buy-lead", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           leadId: activeLead.id,
//           email,
//         }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setUnlockedLeads((prev) => [...prev, activeLead.id]);
//         setProfessional((prev) => ({
//           ...prev,
//           credits: prev.credits - activeLead.creditsRequired,
//         }));
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoadingBuy(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <UserHeader />

//       <div className="flex flex-col md:flex-row h-[calc(100vh-80px)]">

//         {/* SIDEBAR */}
//         <aside className="w-full md:w-80 bg-white border-r shadow-lg overflow-y-auto">
//           <div className="p-5 border-b">
//             <h2 className="font-bold text-lg">Leads</h2>
//             <p className="text-sm text-gray-500">
//               {filtered.length} Available
//             </p>

//             <div className="mt-3 text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-xl font-semibold">
//               Credits: {professional?.credits || 0}
//             </div>
//           </div>

//           <div className="p-4 border-b">
//             <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
//               <Search size={16} />
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search leads..."
//                 className="ml-2 w-full bg-transparent outline-none text-sm"
//               />
//             </div>
//           </div>

//           {filtered.map((lead) => (
//             <button
//               key={lead.id}
//               onClick={() => setActiveId(lead.id)}
//               className={`w-full text-left px-5 py-4 border-b transition ${
//                 activeId === lead.id
//                   ? "bg-blue-50"
//                   : "hover:bg-gray-50"
//               }`}
//             >
//               <div className="flex justify-between">
//                 <p className="font-semibold">{lead.name}</p>
//                 <p className="font-semibold">{lead.category}</p>
//                 <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
//                   {lead.creditsRequired} credits
//                 </span>
//               </div>
//               <p className="text-xs text-gray-500">
//                 {lead.city}, {lead.state}
//               </p>
//             </button>
//           ))}
//         </aside>

//         {/* MAIN */}
//         <main className="flex-1 p-6 overflow-y-auto">

//           {!activeLead ? (
//             <div className="text-gray-400 text-lg">
//               No leads available
//             </div>
//           ) : (
//             <div className="max-w-5xl mx-auto space-y-6">

//               {/* HEADER */}
//               <div className="bg-white p-6 rounded-2xl shadow border">
//                 <h1 className="text-2xl font-bold">
//                   {activeLead.name}
//                 </h1>
//                 <p className="text-gray-600">
//                   {activeLead.serviceName}
//                 </p>
//                 <p className="flex items-center text-gray-500 mt-2">
//                   <MapPin size={14} className="mr-1" />
//                   {activeLead.city}, {activeLead.state}
//                 </p>
//               </div>

//               {/* DETAILS */}
//               <div className="bg-white p-6 rounded-2xl shadow border grid md:grid-cols-2 gap-6">

//                 <div>
//                   <h3 className="font-semibold mb-2">
//                     Project Details
//                   </h3>
//                   <p><strong>Need:</strong> {activeLead.need}</p>
//                   <p><strong>Budget:</strong> {activeLead.budget}</p>
//                   <p><strong>Timeline:</strong> {activeLead.when}</p>
//                   <p><strong>Property:</strong> {activeLead.property}</p>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold mb-2">
//                     Contact Information
//                   </h3>

//                   {!isUnlocked ? (
//                     <div className="bg-gray-100 p-5 rounded-xl text-center">
//                       <Lock className="mx-auto mb-3" />
//                       <p className="mb-3 text-sm text-gray-600">
//                         Unlock this lead to view contact details.
//                       </p>
//                       <button
//                         onClick={handleBuyLead}
//                         disabled={loadingBuy}
//                         className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
//                       >
//                         {loadingBuy
//                           ? "Processing..."
//                           : `Buy for ${activeLead.creditsRequired} Credits`}
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="space-y-3">
//                       <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl">
//                         <Phone size={16} />
//                         {activeLead.phone}
//                       </div>
//                       <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl">
//                         <Mail size={16} />
//                         {activeLead.email}
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


//***********************************************************************WORKING 909 */

// 'use client';

// import { useState, useMemo, useEffect } from "react";
// import {
//   Search,
//   MapPin,
//   Phone,
//   Mail,
//   Lock,
//   Star,
// } from "lucide-react";
// import UserHeader from "@/components/UserHeader";

// export default function LeadsDashboard() {
//   const [query, setQuery] = useState("");
//   const [activeId, setActiveId] = useState(null);
//   const [leads, setLeads] = useState([]);
//   const [professional, setProfessional] = useState(null);
//   const [loadingBuy, setLoadingBuy] = useState(false);
//   const [unlockedLeads, setUnlockedLeads] = useState([]);

//   // ================= LOAD DATA =================
//   useEffect(() => {
//     const fetchData = async () => {
//       const email = localStorage.getItem("loggedInEmail");
//       if (!email) return;

//       const proRes = await fetch("/api/professionals");
//       const proData = await proRes.json();
//       const user = proData?.professionals?.find(
//         (p) => p.email === email
//       );
//       setProfessional(user);

//       const leadRes = await fetch("/api/get-leads", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const leadData = await leadRes.json();
//       const safeLeads = leadData?.leads?.map((l, i) => ({
//         ...l,
//         id: l._id || i,
//       }));

//       setLeads(safeLeads || []);
//     };

//     fetchData();
//   }, []);

//   // ================= SEARCH =================
//   const filtered = useMemo(() => {
//     if (!query.trim()) return leads;
//     const q = query.toLowerCase();
//     return leads.filter(
//       (l) =>
//         l?.name?.toLowerCase().includes(q) ||
//         l?.serviceName?.toLowerCase().includes(q) ||
//         l?.city?.toLowerCase().includes(q)
//     );
//   }, [query, leads]);

//   useEffect(() => {
//     if (filtered.length > 0) setActiveId(filtered[0].id);
//   }, [filtered]);

//   const activeLead =
//     filtered.find((l) => l.id === activeId) || null;

//   const isUnlocked = unlockedLeads.includes(activeLead?.id);

//   // ================= BUY LEAD =================
//   const handleBuyLead = async () => {
//     if (!activeLead) return;
//     if (professional?.credits < activeLead?.creditsRequired) {
//       alert("Not enough credits");
//       return;
//     }

//     try {
//       setLoadingBuy(true);
//       const email = localStorage.getItem("loggedInEmail");

//       const res = await fetch("/api/buy-lead", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           leadId: activeLead.id,
//           email,
//         }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setUnlockedLeads((prev) => [...prev, activeLead.id]);
//         setProfessional((prev) => ({
//           ...prev,
//           credits: prev.credits - activeLead.creditsRequired,
//         }));
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoadingBuy(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <UserHeader />

//       <div className="flex flex-col md:flex-row h-[calc(100vh-80px)]">

//         {/* SIDEBAR */}
//         <aside className="w-full md:w-80 bg-white border-r shadow-lg overflow-y-auto">
//           <div className="p-5 border-b">
//             <h2 className="font-bold text-xl text-gray-800">Leads</h2>
//             <p className="text-sm text-gray-500">{filtered.length} Available</p>
//             <div className="mt-3 text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-xl font-semibold">
//               Credits: {professional?.credits || 0}
//             </div>
//           </div>

//           <div className="p-4 border-b">
//             <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
//               <Search size={18} className="text-gray-400" />
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search leads..."
//                 className="ml-2 w-full bg-transparent outline-none text-sm placeholder-gray-500"
//               />
//             </div>
//           </div>

//           <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
//             {filtered.map((lead) => (
//               <button
//                 key={lead.id}
//                 onClick={() => setActiveId(lead.id)}
//                 className={`w-full text-left px-5 py-4 border-b transition flex flex-col gap-1 ${
//                   activeId === lead.id ? "bg-blue-50" : "hover:bg-gray-50"
//                 }`}
//               >
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="font-semibold text-gray-800">{lead.name}</p>
//                     <p className="text-xs text-gray-500">{lead.city}, {lead.region || lead.state}</p>
//                   </div>
//                   <div className="flex flex-col items-end">
//                     <p className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
//                       {lead.creditsRequired} credits
//                     </p>
//                     <p className="text-xs text-gray-400">{lead.category}</p>
//                   </div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </aside>

//         {/* MAIN CONTENT */}
//         <main className="flex-1 p-6 overflow-y-auto">
//           {!activeLead ? (
//             <div className="text-gray-400 text-lg text-center mt-20">
//               No leads available
//             </div>
//           ) : (
//             <div className="max-w-5xl mx-auto space-y-6">

//               {/* HEADER */}
//               <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h1 className="text-2xl font-bold text-gray-800">{activeLead.name}</h1>
//                     <p className="text-gray-600">{activeLead.serviceName}</p>
//                     <p className="flex items-center text-gray-500 mt-2 text-sm">
//                       <MapPin size={16} className="mr-1" />
//                       {activeLead.city}, {activeLead.region || activeLead.state}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Star size={20} className="text-yellow-400" />
//                     <span className="text-gray-600 font-medium">{activeLead.rating || 4.5}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* DETAILS PANEL */}
//               <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 grid md:grid-cols-2 gap-6">

//                 <div>
//                   <h3 className="font-semibold text-gray-700 mb-3">Project Details</h3>
//                   <p><strong>Need:</strong> {activeLead.need || "N/A"}</p>
//                   <p><strong>Budget:</strong> {activeLead.budget || "N/A"}</p>
//                   <p><strong>Timeline:</strong> {activeLead.when || "N/A"}</p>
//                   <p><strong>Property:</strong> {activeLead.property || "N/A"}</p>
//                   <p><strong>Created At:</strong> {new Date(activeLead.createdAt).toLocaleDateString()}</p>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-gray-700 mb-3">Contact Information</h3>

//                   {!isUnlocked ? (
//                     <div className="bg-gray-50 p-5 rounded-xl text-center border border-dashed border-gray-200">
//                       <Lock className="mx-auto mb-3 text-gray-400" size={28} />
//                       <p className="mb-3 text-sm text-gray-600">
//                         Unlock this lead to view contact details
//                       </p>
//                       <button
//                         onClick={handleBuyLead}
//                         disabled={loadingBuy}
//                         className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
//                       >
//                         {loadingBuy
//                           ? "Processing..."
//                           : `Buy for ${activeLead.creditsRequired} Credits`}
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="space-y-3">
//                       {activeLead.phone && (
//                         <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl border border-green-100">
//                           <Phone size={16} className="text-green-700" />
//                           <span>{activeLead.phone}</span>
//                         </div>
//                       )}
//                       {activeLead.email && (
//                         <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl border border-green-100">
//                           <Mail size={16} className="text-green-700" />
//                           <span>{activeLead.email}</span>
//                         </div>
//                       )}
//                       {activeLead.postcode && (
//                         <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl border border-green-100">
//                           <MapPin size={16} className="text-green-700" />
//                           <span>{activeLead.city}, {activeLead.region || activeLead.state} - {activeLead.postcode}</span>
//                         </div>
//                       )}
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

//***********************************************************************WORKING Final */

// 'use client';

// import { useState, useMemo, useEffect } from "react";
// import {
//   Search,
//   MapPin,
//   Phone,
//   Mail,
//   Lock,
//   Star,
//   User,
// } from "lucide-react";
// import UserHeader from "@/components/UserHeader";

// export default function LeadsDashboard() {
//   const [query, setQuery] = useState("");
//   const [activeId, setActiveId] = useState(null);
//   const [leads, setLeads] = useState([]);
//   const [professional, setProfessional] = useState(null);
//   const [loadingBuy, setLoadingBuy] = useState(false);
//   const [unlockedLeads, setUnlockedLeads] = useState([]);

//   // ================= LOAD DATA =================
//   useEffect(() => {
//     const fetchData = async () => {
//       const email = localStorage.getItem("loggedInEmail");
//       if (!email) return;

//       const proRes = await fetch("/api/professionals");
//       const proData = await proRes.json();
//       const user = proData?.professionals?.find(
//         (p) => p.email === email
//       );
//       setProfessional(user);

//       const leadRes = await fetch("/api/get-leads", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const leadData = await leadRes.json();

//       const safeLeads = (leadData?.leads || []).map((l, i) => ({
//         id: l._id || i,

//         // ===== CORE =====
//         serviceName: l.serviceName,
//         category: l.category,

//         // ===== FIX ANSWERS STRUCTURE =====
//         name: l.answers?.name || l.name,
//         email: l.answers?.email || l.email,
//         phone: l.answers?.phone || l.phone,

//         // ===== LOCATION =====
//         city: l.location?.city,
//         region: l.location?.region,
//         postcode: l.location?.postcode,

//         // ===== EXTRA =====
//         createdAt: l.createdAt,
//         answers: l.answers,
//       }));

//       setLeads(safeLeads);
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

//   useEffect(() => {
//     if (filtered.length > 0) setActiveId(filtered[0].id);
//   }, [filtered]);

//   const activeLead =
//     filtered.find((l) => l.id === activeId) || null;

//   const isUnlocked = unlockedLeads.includes(activeLead?.id);

//   // ================= BUY LEAD =================
//   const handleBuyLead = async () => {
//     if (!activeLead) return;

//     try {
//       setLoadingBuy(true);
//       const email = localStorage.getItem("loggedInEmail");

//       const res = await fetch("/api/buy-lead", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           leadId: activeLead.id,
//           email,
//         }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setUnlockedLeads((prev) => [...prev, activeLead.id]);
//         setProfessional((prev) => ({
//           ...prev,
//           credits: prev.credits - (activeLead.creditsRequired || 0),
//         }));
//       }
//     } catch (err) {
//       console.error(err);
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

//           <div className="p-5 border-b">
//             <h2 className="font-bold text-xl">Leads</h2>
//             <p className="text-sm text-gray-500">
//               {filtered.length} Available
//             </p>

//             <div className="mt-3 text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-xl font-semibold">
//               Credits: {professional?.credits || 0}
//             </div>
//           </div>

//           {/* SEARCH */}
//           <div className="p-4 border-b">
//             <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
//               <Search size={18} className="text-gray-400" />
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search leads..."
//                 className="ml-2 w-full bg-transparent outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* LIST */}
//           <div className="overflow-y-auto flex-1">
//             {filtered.map((lead) => (
//               <button
//                 key={lead.id}
//                 onClick={() => setActiveId(lead.id)}
//                 className={`w-full text-left px-5 py-4 border-b transition ${
//                   activeId === lead.id
//                     ? "bg-blue-50"
//                     : "hover:bg-gray-50"
//                 }`}
//               >
//                 <div className="flex justify-between">
//                   <div>
//                     <p className="font-semibold">
//                       {lead.name}
//                     </p>

//                     <p className="text-xs text-gray-500 flex items-center gap-1">
//                       <MapPin size={12} />
//                       {lead.city}, {lead.region}
//                     </p>
//                   </div>

//                   <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
//                     Lead
//                   </span>
//                 </div>
//               </button>
//             ))}
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
//               <div className="bg-white p-5 rounded-2xl shadow">
//                 <h1 className="text-xl md:text-2xl font-bold">
//                   {activeLead.name}
//                 </h1>

//                 <p className="text-gray-600">
//                   {activeLead.serviceName}
//                 </p>

//                 <p className="text-sm text-gray-500 flex items-center gap-1 mt-2">
//                   <MapPin size={14} />
//                   {activeLead.city}, {activeLead.region}
//                 </p>
//               </div>

//               {/* DETAILS */}
//               <div className="bg-white p-5 rounded-2xl shadow grid md:grid-cols-2 gap-6">

//                 {/* PROJECT */}
//                 <div>
//                   <h3 className="font-semibold mb-3">
//                     Project Details
//                   </h3>

//                   <div className="space-y-2 text-sm">
//                     {Object.entries(activeLead.answers || {}).map(
//                       ([key, value]) => (
//                         <p key={key}>
//                           <span className="font-medium capitalize">
//                             {key}:
//                           </span>{" "}
//                           {Array.isArray(value)
//                             ? value.join(", ")
//                             : value?.toString()}
//                         </p>
//                       )
//                     )}
//                   </div>
//                 </div>

//                 {/* CONTACT */}
//                 <div>
//                   <h3 className="font-semibold mb-3">
//                     Contact Info
//                   </h3>

//                   {!isUnlocked ? (
//                     <div className="border border-dashed p-5 rounded-xl text-center">
//                       <Lock className="mx-auto mb-2" />
//                       <p className="text-sm mb-3">
//                         Unlock to view contact
//                       </p>

//                       <button
//                         onClick={handleBuyLead}
//                         className="bg-blue-600 text-white px-5 py-2 rounded-xl"
//                       >
//                         Unlock Lead
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="space-y-3 text-sm">
//                       <p className="flex items-center gap-2">
//                         <User size={14} /> {activeLead.name}
//                       </p>

//                       <p className="flex items-center gap-2">
//                         <Phone size={14} /> {activeLead.phone}
//                       </p>

//                       <p className="flex items-center gap-2">
//                         <Mail size={14} /> {activeLead.email}
//                       </p>

//                       <p className="flex items-center gap-2">
//                         <MapPin size={14} />
//                         {activeLead.city} - {activeLead.postcode}
//                       </p>
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

//***********************************************************************WORKING Final with Credit System */

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
//   Briefcase,
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

//   // ================= PERSIST UNLOCKED LEADS =================
//   const [unlockedLeads, setUnlockedLeads] = useState(() => {
//     if (typeof window !== "undefined") {
//       return JSON.parse(
//         localStorage.getItem("unlockedLeads") || "[]"
//       );
//     }

//     return [];
//   });

//   // ================= SAVE TO LOCAL STORAGE =================
//   useEffect(() => {
//     localStorage.setItem(
//       "unlockedLeads",
//       JSON.stringify(unlockedLeads)
//     );
//   }, [unlockedLeads]);

//   // ================= LOAD DATA =================
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const email =
//           localStorage.getItem("loggedInEmail");

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

//         // ================= LEADS =================
//         const leadRes = await fetch(
//           "/api/get-leads",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type":
//                 "application/json",
//             },
//             body: JSON.stringify({ email }),
//           }
//         );

//         const leadData =
//           await leadRes.json();

//         const safeLeads = (
//           leadData?.leads || []
//         ).map((l, i) => {
//           // ================= CREDIT SYSTEM =================
//           let creditsRequired = 5;

//           const premiumServices = [
//             "App Development",
//             "Cyber Security",
//             "Cloud Services",
//             "Interior Design",
//             "Home Security",
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
//               l.serviceName || "Service",

//             category: l.category || "",

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
//               l.location?.region || "",

//             postcode:
//               l.location?.postcode || "",

//             createdAt: l.createdAt,

//             answers: l.answers || {},

//             creditsRequired,
//           };
//         });

//         setLeads(safeLeads);
//       } catch (err) {
//         console.error(err);
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

//   // ================= DEFAULT ACTIVE =================
//   useEffect(() => {
//     if (
//       filtered.length > 0 &&
//       !activeId
//     ) {
//       setActiveId(filtered[0].id);
//     }
//   }, [filtered, activeId]);

//   const activeLead =
//     filtered.find(
//       (l) => l.id === activeId
//     ) || null;

//   const isUnlocked =
//     unlockedLeads.includes(
//       activeLead?.id
//     );

//   // ================= BUY LEAD =================
//   const handleBuyLead = async () => {
//     if (!activeLead) return;

//     // ================= ALREADY UNLOCKED =================
//     if (
//       unlockedLeads.includes(
//         activeLead.id
//       )
//     ) {
//       Swal.fire({
//         icon: "info",
//         title: "Already Unlocked",
//         text: "You already purchased this lead.",
//         confirmButtonColor: "#2563eb",
//       });

//       return;
//     }

//     // ================= CHECK CREDITS =================
//     if (
//       (professional?.credits || 0) <
//       activeLead.creditsRequired
//     ) {
//       Swal.fire({
//         icon: "error",
//         title: "Insufficient Credits",
//         text: `You need ${activeLead.creditsRequired} credits to unlock this lead.`,
//         confirmButtonColor: "#2563eb",
//         borderRadius: "20px",
//       });

//       return;
//     }

//     // ================= CONFIRM =================
//     const confirm = await Swal.fire({
//       title: "Unlock Premium Lead?",
//       html: `
//         <div style="padding-top:10px">

//           <div style="
//             background:linear-gradient(135deg,#eff6ff,#dbeafe);
//             border-radius:20px;
//             padding:22px;
//             margin-bottom:18px;
//           ">

//             <div style="
//               font-size:14px;
//               color:#2563eb;
//               margin-bottom:8px;
//             ">
//               Lead Unlock Cost
//             </div>

//             <div style="
//               font-size:42px;
//               font-weight:800;
//               color:#1d4ed8;
//             ">
//               ${activeLead.creditsRequired}
//             </div>

//             <div style="
//               color:#6b7280;
//               font-size:13px;
//             ">
//               Credits will be deducted securely
//             </div>

//           </div>

//           <div style="
//             display:flex;
//             justify-content:center;
//             gap:10px;
//             flex-wrap:wrap;
//           ">

//             <span style="
//               background:#ecfdf5;
//               color:#059669;
//               padding:8px 14px;
//               border-radius:999px;
//               font-size:12px;
//               font-weight:700;
//             ">
//               Verified Lead
//             </span>

//             <span style="
//               background:#eef2ff;
//               color:#4f46e5;
//               padding:8px 14px;
//               border-radius:999px;
//               font-size:12px;
//               font-weight:700;
//             ">
//               Instant Access
//             </span>

//           </div>

//         </div>
//       `,
//       showCancelButton: true,
//       confirmButtonText: "Unlock Lead",
//       cancelButtonText: "Cancel",
//       confirmButtonColor: "#2563eb",
//       cancelButtonColor: "#d1d5db",
//       borderRadius: "24px",
//       width: 520,
//     });

//     if (!confirm.isConfirmed) return;

//     try {
//       setLoadingBuy(true);

//       Swal.fire({
//         title: "Processing...",
//         text: "Unlocking customer details",
//         allowOutsideClick: false,
//         showConfirmButton: false,
//         didOpen: () => {
//           Swal.showLoading();
//         },
//       });

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
//             credits:
//               activeLead.creditsRequired,
//           }),
//         }
//       );

//       const data = await res.json();

//       Swal.close();

//       // ================= SUCCESS =================
//       if (data.success) {
//         // SAVE UNLOCKED
//         const updatedUnlocked = [
//           ...new Set([
//             ...unlockedLeads,
//             activeLead.id,
//           ]),
//         ];

//         setUnlockedLeads(
//           updatedUnlocked
//         );

//         // UPDATE PROFESSIONAL CREDITS
//         setProfessional((prev) => ({
//           ...prev,
//           credits:
//             data.remainingCredits,
//         }));

//         await Swal.fire({
//           icon: "success",
//           title:
//             "Lead Unlocked Successfully",
//           html: `
//             <div style="padding-top:10px">

//               <div style="
//                 background:linear-gradient(135deg,#dcfce7,#ecfdf5);
//                 padding:22px;
//                 border-radius:20px;
//                 margin-bottom:18px;
//               ">

//                 <div style="
//                   color:#059669;
//                   font-size:14px;
//                   margin-bottom:8px;
//                 ">
//                   Credits Deducted
//                 </div>

//                 <div style="
//                   font-size:40px;
//                   font-weight:800;
//                   color:#047857;
//                 ">
//                   -${activeLead.creditsRequired}
//                 </div>

//               </div>

//               <div style="
//                 background:#f9fafb;
//                 border-radius:16px;
//                 padding:14px;
//                 font-size:14px;
//                 color:#374151;
//               ">
//                 Remaining Credits:
//                 <strong>
//                   ${data.remainingCredits}
//                 </strong>
//               </div>

//             </div>
//           `,
//           confirmButtonText: "Continue",
//           confirmButtonColor: "#2563eb",
//           borderRadius: "24px",
//           width: 520,
//         });
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Purchase Failed",
//           text:
//             data.error ||
//             "Unable to unlock lead.",
//           confirmButtonColor: "#dc2626",
//         });
//       }
//     } catch (err) {
//       console.error(err);

//       Swal.fire({
//         icon: "error",
//         title: "Server Error",
//         text:
//           "Something went wrong. Please try again.",
//         confirmButtonColor: "#dc2626",
//       });
//     } finally {
//       setLoadingBuy(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col">

//       <UserHeader />

//       <div className="flex flex-col md:flex-row h-[calc(100vh-80px)]">

//         {/* ================= SIDEBAR ================= */}
//         <aside className="w-full md:w-[360px] bg-white/90 backdrop-blur-xl border-r border-gray-200 flex flex-col">

//           {/* TOP */}
//           <div className="p-5 border-b border-gray-100">

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
//                 <Briefcase className="text-blue-600" />
//               </div>
//             </div>

//             {/* CREDITS CARD */}
//             <div className="mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-5 text-white shadow-xl">

//               <div className="flex items-center justify-between">

//                 <div>
//                   <p className="text-xs opacity-80 uppercase tracking-wider">
//                     Available Credits
//                   </p>

//                   <h3 className="text-3xl font-black mt-2">
//                     {professional?.credits ||
//                       0}
//                   </h3>
//                 </div>

//                 <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
//                   <Coins size={30} />
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* SEARCH */}
//           <div className="p-4 border-b border-gray-100">
//             <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3">

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
//                 className="ml-3 w-full bg-transparent outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* LEADS */}
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
//                     setActiveId(lead.id)
//                   }
//                   className={`w-full text-left p-5 border-b border-gray-100 transition-all duration-200 ${
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

//                     {unlocked ? (
//                       <div className="bg-green-100 text-green-700 h-fit text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
//                         <CheckCircle2 size={12} />
//                         Unlocked
//                       </div>
//                     ) : (
//                       <div className="bg-yellow-100 text-yellow-700 h-fit text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
//                         <Coins size={12} />
//                         {
//                           lead.creditsRequired
//                         }
//                       </div>
//                     )}

//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         </aside>

//         {/* ================= MAIN ================= */}
//         <main className="flex-1 p-4 md:p-8 overflow-y-auto">

//           {!activeLead ? (
//             <div className="text-center text-gray-400 mt-20">
//               No leads found
//             </div>
//           ) : (
//             <div className="max-w-6xl mx-auto space-y-6">

//               {/* HEADER */}
//               <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

//                   <div>
//                     <h1 className="text-3xl font-black text-gray-900">
//                       {
//                         activeLead.name
//                       }
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                       {
//                         activeLead.serviceName
//                       }
//                     </p>

//                     <div className="flex items-center gap-2 text-sm text-gray-400 mt-3">
//                       <MapPin size={15} />
//                       {
//                         activeLead.city
//                       },{" "}
//                       {
//                         activeLead.region
//                       }
//                     </div>
//                   </div>

//                   <div className="bg-blue-50 rounded-2xl px-6 py-5 text-center min-w-[160px]">

//                     <p className="text-xs font-semibold text-blue-600 uppercase">
//                       Lead Price
//                     </p>

//                     <div className="flex items-center justify-center gap-2 mt-2">
//                       <Coins className="text-blue-600" />

//                       <h3 className="text-3xl font-black text-blue-700">
//                         {
//                           activeLead.creditsRequired
//                         }
//                       </h3>
//                     </div>

//                   </div>
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="grid lg:grid-cols-2 gap-6">

//                 {/* PROJECT DETAILS */}
//                 <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

//                   <h3 className="font-bold text-xl text-gray-900 mb-5">
//                     Project Details
//                   </h3>

//                   <div className="space-y-3">

//                     {Object.entries(
//                       activeLead.answers ||
//                         {}
//                     ).map(
//                       ([key, value]) => (
//                         <div
//                           key={key}
//                           className="flex justify-between gap-4 border-b border-gray-100 pb-3"
//                         >
//                           <span className="font-medium capitalize text-gray-600">
//                             {key}
//                           </span>

//                           <span className="text-right text-gray-900">
//                             {Array.isArray(
//                               value
//                             )
//                               ? value.join(
//                                   ", "
//                                 )
//                               : value?.toString()}
//                           </span>
//                         </div>
//                       )
//                     )}

//                   </div>
//                 </div>

//                 {/* CONTACT */}
//                 <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

//                   <h3 className="font-bold text-xl text-gray-900 mb-5">
//                     Contact Information
//                   </h3>

//                   {!isUnlocked ? (
//                     <div className="border-2 border-dashed border-gray-200 rounded-3xl p-8 text-center">

//                       <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
//                         <Lock
//                           size={30}
//                           className="text-gray-500"
//                         />
//                       </div>

//                       <h4 className="text-xl font-bold text-gray-900">
//                         Unlock This Lead
//                       </h4>

//                       <p className="text-gray-500 mt-2 mb-6">
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
//                         className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all"
//                       >
//                         {loadingBuy
//                           ? "Unlocking..."
//                           : `Unlock Lead (${activeLead.creditsRequired} Credits)`}
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="space-y-4">

//                       <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4">
//                         <User
//                           size={18}
//                           className="text-blue-600"
//                         />

//                         <span>
//                           {
//                             activeLead.name
//                           }
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4">
//                         <Phone
//                           size={18}
//                           className="text-green-600"
//                         />

//                         <span>
//                           {
//                             activeLead.phone
//                           }
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4">
//                         <Mail
//                           size={18}
//                           className="text-red-500"
//                         />

//                         <span>
//                           {
//                             activeLead.email
//                           }
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4">
//                         <MapPin
//                           size={18}
//                           className="text-purple-600"
//                         />

//                         <span>
//                           {
//                             activeLead.city
//                           }{" "}
//                           -{" "}
//                           {
//                             activeLead.postcode
//                           }
//                         </span>
//                       </div>

//                       <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3 text-green-700 font-medium mt-5">
//                         <CheckCircle2 size={18} />
//                         Lead purchased successfully
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
