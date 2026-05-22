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


'use client';

import { useState, useMemo, useEffect } from "react";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Lock,
  Star,
} from "lucide-react";
import UserHeader from "@/components/UserHeader";

export default function LeadsDashboard() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(null);
  const [leads, setLeads] = useState([]);
  const [professional, setProfessional] = useState(null);
  const [loadingBuy, setLoadingBuy] = useState(false);
  const [unlockedLeads, setUnlockedLeads] = useState([]);

  // ================= LOAD DATA =================
  useEffect(() => {
    const fetchData = async () => {
      const email = localStorage.getItem("loggedInEmail");
      if (!email) return;

      const proRes = await fetch("/api/professionals");
      const proData = await proRes.json();
      const user = proData?.professionals?.find(
        (p) => p.email === email
      );
      setProfessional(user);

      const leadRes = await fetch("/api/get-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const leadData = await leadRes.json();
      const safeLeads = leadData?.leads?.map((l, i) => ({
        ...l,
        id: l._id || i,
      }));

      setLeads(safeLeads || []);
    };

    fetchData();
  }, []);

  // ================= SEARCH =================
  const filtered = useMemo(() => {
    if (!query.trim()) return leads;
    const q = query.toLowerCase();
    return leads.filter(
      (l) =>
        l?.name?.toLowerCase().includes(q) ||
        l?.serviceName?.toLowerCase().includes(q) ||
        l?.city?.toLowerCase().includes(q)
    );
  }, [query, leads]);

  useEffect(() => {
    if (filtered.length > 0) setActiveId(filtered[0].id);
  }, [filtered]);

  const activeLead =
    filtered.find((l) => l.id === activeId) || null;

  const isUnlocked = unlockedLeads.includes(activeLead?.id);

  // ================= BUY LEAD =================
  const handleBuyLead = async () => {
    if (!activeLead) return;
    if (professional?.credits < activeLead?.creditsRequired) {
      alert("Not enough credits");
      return;
    }

    try {
      setLoadingBuy(true);
      const email = localStorage.getItem("loggedInEmail");

      const res = await fetch("/api/buy-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId: activeLead.id,
          email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setUnlockedLeads((prev) => [...prev, activeLead.id]);
        setProfessional((prev) => ({
          ...prev,
          credits: prev.credits - activeLead.creditsRequired,
        }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingBuy(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader />

      <div className="flex flex-col md:flex-row h-[calc(100vh-80px)]">

        {/* SIDEBAR */}
        <aside className="w-full md:w-80 bg-white border-r shadow-lg overflow-y-auto">
          <div className="p-5 border-b">
            <h2 className="font-bold text-xl text-gray-800">Leads</h2>
            <p className="text-sm text-gray-500">{filtered.length} Available</p>
            <div className="mt-3 text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-xl font-semibold">
              Credits: {professional?.credits || 0}
            </div>
          </div>

          <div className="p-4 border-b">
            <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
              <Search size={18} className="text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search leads..."
                className="ml-2 w-full bg-transparent outline-none text-sm placeholder-gray-500"
              />
            </div>
          </div>

          <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
            {filtered.map((lead) => (
              <button
                key={lead.id}
                onClick={() => setActiveId(lead.id)}
                className={`w-full text-left px-5 py-4 border-b transition flex flex-col gap-1 ${
                  activeId === lead.id ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-800">{lead.name}</p>
                    <p className="text-xs text-gray-500">{lead.city}, {lead.region || lead.state}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                      {lead.creditsRequired} credits
                    </p>
                    <p className="text-xs text-gray-400">{lead.category}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 overflow-y-auto">
          {!activeLead ? (
            <div className="text-gray-400 text-lg text-center mt-20">
              No leads available
            </div>
          ) : (
            <div className="max-w-5xl mx-auto space-y-6">

              {/* HEADER */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{activeLead.name}</h1>
                    <p className="text-gray-600">{activeLead.serviceName}</p>
                    <p className="flex items-center text-gray-500 mt-2 text-sm">
                      <MapPin size={16} className="mr-1" />
                      {activeLead.city}, {activeLead.region || activeLead.state}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={20} className="text-yellow-400" />
                    <span className="text-gray-600 font-medium">{activeLead.rating || 4.5}</span>
                  </div>
                </div>
              </div>

              {/* DETAILS PANEL */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 grid md:grid-cols-2 gap-6">

                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Project Details</h3>
                  <p><strong>Need:</strong> {activeLead.need || "N/A"}</p>
                  <p><strong>Budget:</strong> {activeLead.budget || "N/A"}</p>
                  <p><strong>Timeline:</strong> {activeLead.when || "N/A"}</p>
                  <p><strong>Property:</strong> {activeLead.property || "N/A"}</p>
                  <p><strong>Created At:</strong> {new Date(activeLead.createdAt).toLocaleDateString()}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Contact Information</h3>

                  {!isUnlocked ? (
                    <div className="bg-gray-50 p-5 rounded-xl text-center border border-dashed border-gray-200">
                      <Lock className="mx-auto mb-3 text-gray-400" size={28} />
                      <p className="mb-3 text-sm text-gray-600">
                        Unlock this lead to view contact details
                      </p>
                      <button
                        onClick={handleBuyLead}
                        disabled={loadingBuy}
                        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
                      >
                        {loadingBuy
                          ? "Processing..."
                          : `Buy for ${activeLead.creditsRequired} Credits`}
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {activeLead.phone && (
                        <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl border border-green-100">
                          <Phone size={16} className="text-green-700" />
                          <span>{activeLead.phone}</span>
                        </div>
                      )}
                      {activeLead.email && (
                        <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl border border-green-100">
                          <Mail size={16} className="text-green-700" />
                          <span>{activeLead.email}</span>
                        </div>
                      )}
                      {activeLead.postcode && (
                        <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl border border-green-100">
                          <MapPin size={16} className="text-green-700" />
                          <span>{activeLead.city}, {activeLead.region || activeLead.state} - {activeLead.postcode}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}