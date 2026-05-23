// // import Link from "next/link";
// // import { useState } from "react";

// // export function AlertBar() {
// //     return (
// //         <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl flex justify-between items-center text-sm">
// //             <span>You're not receiving our emails</span>
// //             <button className="font-semibold underline">
// //                 Update email settings
// //             </button>
// //         </div>
// //     );
// // }

// // /* PROFILE */
// // export function ProfileCard({ professional }) {
// //     return (
// //         <div className="bg-white rounded-2xl p-6 shadow">
// //             <div className="flex items-center gap-4">
// //                 <div className="h-14 w-14 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl font-bold">
// //                     {professional.name?.[0] || "P"}
// //                 </div>
// //                 <div>
// //                     <p className="font-semibold">{professional.name}</p>
// //                     <p className="text-sm text-gray-500">{professional.company}</p>
// //                 </div>
// //             </div>

// //             <p className="text-sm mt-6">Your profile is 23% complete</p>
// //             <div className="h-2 bg-gray-200 rounded mt-2">
// //                 <div className="h-2 bg-blue-500 rounded w-[23%]" />
// //             </div>

// //             <Link href='/profile-setting'>

// //                 <button className="text-blue-600 text-sm mt-3 font-medium">
// //                     Edit profile
// //                 </button>
// //             </Link>
// //         </div>
// //     );
// // }


// // export function LeadSettingsCard({ professional, refreshProfessional }) {
// //   const [editing, setEditing] = useState(false);
// //   const [newService, setNewService] = useState("");

// //   const addService = async () => {
// //     if (!newService.trim()) return;
// //     const res = await fetch("/api/add-service", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ email: professional.email, serviceName: newService.trim() })
// //     });
// //     const data = await res.json();
// //     if (data.success) {
// //       setNewService("");
// //       refreshProfessional();
// //     }
// //   };

// //   const deleteService = async (service) => {
// //     const res = await fetch("/api/delete-service", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ email: professional.email, serviceName: service })
// //     });
// //     const data = await res.json();
// //     if (data.success) refreshProfessional();
// //   };

// //   return (
// //     <div className="bg-white rounded-2xl shadow p-6">
// //       <h2 className="font-bold text-lg mb-4">Lead settings</h2>

// //       {/* SERVICES */}
// //       <div className="mb-4">
// //         <div className="flex justify-between mb-2">
// //           <p className="font-semibold">Services</p>
// //           <button
// //             className="text-sm text-blue-600"
// //             onClick={() => setEditing(!editing)}
// //           >
// //             {editing ? "Done" : "Edit"}
// //           </button>
// //         </div>

// //         <div className="flex flex-wrap gap-2 mb-2">
// //           {(professional.serviceName || []).map((s) => (
// //             <span
// //               key={s}
// //               className="px-3 py-1 border rounded-full text-sm flex items-center gap-1"
// //             >
// //               {s}
// //               {editing && (
// //                 <button
// //                   onClick={() => deleteService(s)}
// //                   className="text-red-500 font-bold text-xs"
// //                 >
// //                   ✕
// //                 </button>
// //               )}
// //             </span>
// //           ))}
// //         </div>

// //         {editing && (
// //           <div className="flex gap-2 mt-2">
// //             <input
// //               type="text"
// //               value={newService}
// //               onChange={(e) => setNewService(e.target.value)}
// //               placeholder="Add new service"
// //               className="border px-2 py-1 rounded flex-1"
// //             />
// //             <button
// //               onClick={addService}
// //               className="bg-blue-600 text-white px-3 py-1 rounded"
// //             >
// //               Add
// //             </button>
// //           </div>
// //         )}
// //       </div>

// //       {/* LOCATIONS */}
// //       <div className="mb-4">
// //         <div className="flex justify-between mb-1">
// //           <p className="font-semibold">Locations</p>
// //           <button className="text-sm text-blue-600">Edit</button>
// //         </div>
// //         <p className="text-sm text-gray-600">Nationwide</p>
// //       </div>

// //       {/* LEAD INFO */}
// //       <div className="mt-4 text-sm">
// //         <p className="font-semibold">Estimated 214 leads per day</p>
// //         <p className="text-gray-500 mt-1">
// //           Sending new leads to <br />
// //           <span className="underline cursor-pointer">{professional.email}</span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // /* LEADS STATS */
// // export function LeadsStatsCard({ total, unread }) {
// //     return (
// //         <div className="bg-white rounded-2xl shadow p-6 text-center">
// //             <h2 className="font-bold mb-4">Leads</h2>

// //             <div className="text-3xl font-bold text-blue-600">
// //                 {total}
// //             </div>
// //             <p className="text-sm text-gray-500">Leads</p>

// //             <hr className="my-4" />

// //             <div className="text-blue-600 font-semibold">
// //                 {unread}
// //             </div>
// //             <p className="text-sm text-gray-500">Unread leads</p>
// //         </div>
// //     );
// // }

// // /* RESPONSES */
// // export function ResponsesCard() {
// //     return (
// //         <div className="bg-white rounded-2xl shadow p-6 text-center">
// //             <h2 className="font-bold mb-4">Responses</h2>
// //             <p className="text-sm text-gray-500">
// //                 You haven't responded to any leads yet.
// //             </p>
// //         </div>
// //     );
// // }

// // /* GET STARTED */
// // export function GetStartedCard() {
// //     return (
// //         <div className="bg-white rounded-2xl shadow p-6">
// //             <h2 className="font-bold mb-2">Get started</h2>
// //             <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-3">
// //                 20% OFF STARTER PACK
// //             </span>
// //             <p className="text-sm text-gray-600">
// //                 Respond to up to 10 customers
// //             </p>
// //             <button className="text-blue-600 text-sm mt-2 font-medium">
// //                 More info
// //             </button>
// //         </div>
// //     );
// // }

// // /* HELP */
// // export function HelpCard() {
// //     return (
// //         <div className="bg-white rounded-2xl shadow p-6">
// //           <Link href='/help-center'>   <h2 className="font-bold mb-2">Help</h2></Link>
// //             <button className="text-blue-600 text-sm font-medium">
// //                 Visit help center for tips & advice
// //             </button>
// //         </div>
// //     );
// // }

// // /* UI */
// // function Section({ title, children }) {
// //     return (
// //         <div className="mb-4">
// //             <div className="flex justify-between mb-1">
// //                 <p className="font-semibold">{title}</p>
// //                 <button className="text-sm text-blue-600">Edit</button>
// //             </div>
// //             <div className="flex flex-wrap gap-2">
// //                 {children}
// //             </div>
// //         </div>
// //     );
// // }

// // function Tag({ children }) {
// //     return (
// //         <span className="px-3 py-1 border rounded-full text-sm">
// //             {children}
// //         </span>
// //     );
// // }



// import Link from "next/link";
// import { useEffect, useState  } from "react";

// /* ALERT */
// export function AlertBar() {
//   return (
//     <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl flex justify-between items-center text-sm shadow-sm">
//       <span>You're not receiving our emails</span>
//       <button className="font-semibold underline hover:text-red-900 transition">
//         Update email settings
//       </button>
//     </div>
//   );
// }

// /* PROFILE */
// export function ProfileCard({ professional }) {
//   return (
//     <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
//       <div className="flex items-center gap-4">
//         <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
//           {professional?.name?.[0] || "P"}
//         </div>
//         <div>
//           <p className="font-semibold text-gray-800">
//             {professional?.name}
//           </p>
//           <p className="text-sm text-gray-500">
//             {professional?.company || "No company added"}
//           </p>
//         </div>
//       </div>

//       <div className="mt-6">
//         <p className="text-sm text-gray-500">Profile completion</p>
//         <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
//           <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 w-[45%]" />
//         </div>
//       </div>

//       <Link href="/profile-setting">
//         <button className="mt-5 text-blue-600 text-sm font-semibold hover:underline">
//           Edit profile →
//         </button>
//       </Link>
//     </div>
//   );
// }

// /* SUBSCRIPTION PREVIEW */
// export function SubscriptionPreviewCard({ professional }) {
//   const plan = professional?.subscription?.plan || "Free";
//   const credits = professional?.credits || 0;

//   return (
//     <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-3xl p-6 shadow-xl">
//       <h2 className="font-semibold text-lg mb-2">Your Plan</h2>
//       <p className="text-2xl font-bold">{plan}</p>

//       <div className="mt-4 text-sm opacity-90">
//         Available Credits: <span className="font-semibold">{credits}</span>
//       </div>

//       <Link href="/subscription">
//         <button className="mt-5 bg-white text-indigo-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-100 transition">
//           Upgrade Plan
//         </button>
//       </Link>
//     </div>
//   );
// }

// /* LEAD SETTINGS */
// export function LeadSettingsCard({ professional, refreshProfessional }) {
//   const [editing, setEditing] = useState(false);
//   const [newService, setNewService] = useState("");

//   const services = professional?.serviceName || [];

//   const addService = async () => {
//     if (!newService.trim()) return;

//     await fetch("/api/add-service", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: professional.email,
//         serviceName: newService.trim(),
//       }),
//     });

//     setNewService("");
//     refreshProfessional();
//   };

//   const deleteService = async (service) => {
//     await fetch("/api/delete-service", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: professional.email,
//         serviceName: service,
//       }),
//     });

//     refreshProfessional();
//   };

//   return (
//     <div className="bg-white rounded-3xl shadow-lg border p-6">
//       <div className="flex justify-between mb-4">
//         <h2 className="font-bold text-lg">Your Services</h2>
//         <button
//           onClick={() => setEditing(!editing)}
//           className="text-blue-600 text-sm font-medium"
//         >
//           {editing ? "Done" : "Edit"}
//         </button>
//       </div>

//       <div className="flex flex-wrap gap-2">
//         {services.map((s) => (
//           <span
//             key={s}
//             className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm flex items-center gap-2"
//           >
//             {s}
//             {editing && (
//               <button
//                 onClick={() => deleteService(s)}
//                 className="text-red-500 text-xs"
//               >
//                 ✕
//               </button>
//             )}
//           </span>
//         ))}
//       </div>

//       {editing && (
//         <div className="flex gap-2 mt-4">
//           <input
//             value={newService}
//             onChange={(e) => setNewService(e.target.value)}
//             placeholder="Add new service"
//             className="border rounded-xl px-3 py-2 flex-1 text-sm"
//           />
//           <button
//             onClick={addService}
//             className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm"
//           >
//             Add
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
// /* STATS */
// // export function LeadsStatsCard({ total, unread }) {
// //   return (
// //     <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 text-center">
// //       <h2 className="font-semibold mb-6">Leads Overview</h2>

// //       <div className="text-4xl font-bold text-blue-600">
// //         {total}
// //       </div>
// //       <p className="text-sm text-gray-500">Total Leads</p>

// //       <div className="mt-6 text-indigo-600 font-semibold text-xl">
// //         {unread}
// //       </div>
// //       <p className="text-sm text-gray-500">Unread Leads</p>
// //     </div>
// //   );
// // }

// // RECENT LEADS
// export function RecentLeads({ professional }) {
//   const [leads, setLeads] = useState([]);

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const fetchLeads = async () => {
//     const res = await fetch("/api/get-leads", {
//       method: "POST",
//       body: JSON.stringify({ email: professional.email }),
//     });

//     const data = await res.json();
//     setLeads(data.leads || []);
//   };

//   return (
//     <div className="bg-white rounded-3xl shadow-lg border p-6">
//       <h2 className="font-semibold mb-4">Recent Leads</h2>

//       <div className="space-y-3">
//         {leads.slice(0, 5).map((lead) => (
//           <div
//             key={lead._id}
//             className="p-4 border rounded-xl flex justify-between"
//           >
//             <div>
//               <p className="font-medium">{lead.answers?.name}</p>
//               <p className="text-sm text-gray-500">
//                 {lead.serviceName}
//               </p>
//             </div>

//             {!lead.isRead && (
//               <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
//                 New
//               </span>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// // LEADS STATS

// export function LeadsStatsCard({ professional }) {
//   const [leads, setLeads] = useState([]);
//   const [selectedService, setSelectedService] = useState("all");

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const fetchLeads = async () => {
//     const res = await fetch("/api/get-leads", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email: professional.email }),
//     });

//     const data = await res.json();
//     setLeads(data.leads || []);
//   };

//   // 🔥 FILTER FRONTEND
//   const filteredLeads =
//     selectedService === "all"
//       ? leads
//       : leads.filter((l) => l.serviceName === selectedService);

//   const unread = filteredLeads.filter((l) => !l.isRead).length;

//   return (
//     <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-5">
//         <h2 className="font-semibold">Leads Overview</h2>

//         <select
//           value={selectedService}
//           onChange={(e) => setSelectedService(e.target.value)}
//           className="border px-3 py-1 rounded-lg text-sm"
//         >
//           <option value="all">All</option>
//           {(professional?.serviceName || []).map((s) => (
//             <option key={s}>{s}</option>
//           ))}
//         </select>
//       </div>

//       {/* TOTAL */}
//       <div className="text-4xl font-bold text-blue-600">
//         {filteredLeads.length}
//       </div>
//       <p className="text-sm text-gray-500">Total Leads</p>

//       {/* UNREAD */}
//       <div className="mt-6 text-indigo-600 font-semibold text-xl">
//         {unread}
//       </div>
//       <p className="text-sm text-gray-500">Unread Leads</p>
//     </div>
//   );
// }
// /* RESPONSES */
// export function ResponsesCard() {
//   return (
//     <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 text-center">
//       <h2 className="font-semibold mb-4">Responses</h2>
//       <p className="text-sm text-gray-500">
//         You haven’t responded to any leads yet.
//       </p>
//     </div>
//   );
// }

// /* GET STARTED */
// export function GetStartedCard() {
//   return (
//     <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
//       <h2 className="font-semibold mb-2">Get Started</h2>
//       <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-3">
//         20% OFF STARTER PACK
//       </span>
//       <p className="text-sm text-gray-600">
//         Respond to up to 10 customers instantly.
//       </p>
//       <button className="text-blue-600 text-sm mt-3 font-semibold hover:underline">
//         Learn more →
//       </button>
//     </div>
//   );
// }

// /* HELP */
// export function HelpCard() {
//   return (
//     <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
//       <Link href="/help-center">
//         <h2 className="font-semibold mb-2 cursor-pointer">
//           Help Center
//         </h2>
//       </Link>
//       <button className="text-blue-600 text-sm font-semibold hover:underline">
//         Visit help center →
//       </button>
//     </div>
//   );
// }


//****************************************************************************************WORKING CODE */


"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* ================= ALERT ================= */
export function AlertBar() {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl flex justify-between items-center text-sm shadow-sm">
      <span>You're not receiving our emails</span>
      <button className="font-semibold underline hover:text-red-900 transition">
        Update email settings
      </button>
    </div>
  );
}

/* ================= PROFILE ================= */
export function ProfileCard({ professional }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
          {professional?.name?.[0] || "P"}
        </div>
        <div>
          <p className="font-semibold text-gray-800">
            {professional?.name || "Professional"}
          </p>
          <p className="text-sm text-gray-500">
            {professional?.company || "No company added"}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-500">Profile completion</p>
        <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 w-[45%]" />
        </div>
      </div>

      <Link href="/profile-setting">
        <button className="mt-5 text-blue-600 text-sm font-semibold hover:underline">
          Edit profile →
        </button>
      </Link>
    </div>
  );
}

/* ================= SUBSCRIPTION ================= */
export function SubscriptionPreviewCard({ professional }) {
  const plan = professional?.subscription?.plan || "Free";
  const credits = professional?.credits || 0;

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-3xl p-6 shadow-xl">
      <h2 className="font-semibold text-lg mb-2">Your Plan</h2>
      <p className="text-2xl font-bold">{plan}</p>

      <div className="mt-4 text-sm opacity-90">
        Available Credits: <span className="font-semibold">{credits}</span>
      </div>

      <Link href="/subscription">
        <button className="mt-5 bg-white text-indigo-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-100 transition">
          Upgrade Plan
        </button>
      </Link>
    </div>
  );
}

/* ================= LEAD SETTINGS ================= */
// export function LeadSettingsCard({ professional, refreshProfessional }) {
//   const [editing, setEditing] = useState(false);
//   const [newService, setNewService] = useState("");

//   const services = professional?.serviceName || [];

//   const addService = async () => {
//     if (!newService.trim()) return;

//     await fetch("/api/add-service", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: professional?.email,
//         serviceName: newService.trim(),
//       }),
//     });

//     setNewService("");
//     refreshProfessional();
//   };

//   const deleteService = async (service) => {
//     await fetch("/api/delete-service", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: professional?.email,
//         serviceName: service,
//       }),
//     });

//     refreshProfessional();
//   };

//   return (
//     <div className="bg-white rounded-3xl shadow-lg border p-6">
//       <div className="flex justify-between mb-4">
//         <h2 className="font-bold text-lg">Your Services</h2>
//         <button
//           onClick={() => setEditing(!editing)}
//           className="text-blue-600 text-sm font-medium"
//         >
//           {editing ? "Done" : "Edit"}
//         </button>
//       </div>

//       <div className="flex flex-wrap gap-2">
//         {services.map((s) => (
//           <span
//             key={s}
//             className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm flex items-center gap-2"
//           >
//             {s}
//             {editing && (
//               <button
//                 onClick={() => deleteService(s)}
//                 className="text-red-500 text-xs"
//               >
//                 ✕
//               </button>
//             )}
//           </span>
//         ))}
//       </div>

//       {editing && (
//         <div className="flex gap-2 mt-4">
//           <input
//             value={newService}
//             onChange={(e) => setNewService(e.target.value)}
//             placeholder="Add new service"
//             className="border rounded-xl px-3 py-2 flex-1 text-sm"
//           />
//           <button
//             onClick={addService}
//             className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm"
//           >
//             Add
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

/* ================= LEAD SETTINGS WITH SUGGESTION ================= */
/* LEAD SETTINGS */
export function LeadSettingsCard({ professional, refreshProfessional }) {
  const [editing, setEditing] = useState(false);
  const [newService, setNewService] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const services = professional?.serviceName || [];

  /* 🔥 MASTER SERVICES LIST (Alphabetical) */
  const masterServices = [
  // //   "House Cleaning",
  // // "Plumbing",
  // // "Electrician",
  // // "AC Repair",
  // // "Roof Repair",
  // // "Solar Panel Installation",
  // // "Graphic Design",
  // // "Digital Marketing",
  // // "SEO Services",
  // // "Nutritionist Consultation",
  // // "Carpet Cleaning",
  // // "Window Cleaning",
  // // "Bathroom Renovation",
  // // "Kitchen Renovation",
  // // "CCTV Installation",
  // // "Mobile Repair",
  // // "Content Writing",
  // // "Video Editing",
  // // "App Development",
  // // "Yoga Instructor",
  // // "Physiotherapy",
  // // "Web Design",
  //  "House Cleaning",
  // "Plumbing",
  // "Electrician",
  // "AC Repair",
  // "Roof Repair",
  // "Solar Panel Installation",
  // "Carpet Cleaning",
  // "Window Cleaning",
  // "Bathroom Renovation",
  // "Kitchen Renovation",

  // "Graphic Design",
  // "Web Development",
  // "SEO Services",
  // "Digital Marketing",
  // "Content Writing",
  // "App Development",

  // "Photography",
  // "Video Editing",

  // "Personal Trainer",
  // "Nutritionist",
  // "Yoga Instructor",
  // "Physiotherapy",

  // "Pest Control",
  // "Painting Services",
  // "Furniture Assembly",
  // "Laundry Service",
  // "Moving Service",

  // "Data Entry",
  // "Virtual Assistant",
  // "Social Media Management",
  // "UI/UX Design",
  // "Resume Writing",

  // "Podcast Editing",
  // "Live Streaming",
  // "DJ Services",
  // "Makeup Artist",

  // "Dance Instructor",
  // "Mental Health Coaching",
  // "Martial Arts Training",
  // "Diet Meal Planning",

  "House Cleaning",
"Plumbing",
"Electrician",
"AC Repair",
"Roof Repair",
"Solar Panel Installation",
"Carpet Cleaning",
"Window Cleaning",
"Bathroom Renovation",
"Kitchen Renovation",
"Pest Control",
"Painting Services",
"Furniture Assembly",
"Laundry Service",
"Moving Service",
"Garden Landscaping",
"Lawn Mowing",
"Pool Maintenance",

"Graphic Design",
"Web Design",
"Web Development",
"UI/UX Design",
"Digital Marketing",
"SEO Services",
"Content Writing",
"Copywriting",
"App Development",
"Photography",
"Video Editing",
"Podcast Editing",
"Live Streaming",
"Animation & Motion Graphics",

"Personal Trainer",
"Nutritionist Consultation",
"Yoga Instructor",
"Physiotherapy",
"Mental Health Coaching",
"Diet Meal Planning",
"Massage Therapy",
"Pilates Instruction",

"DJ Services",
"Makeup Artist",
"Dance Instructor",
"Martial Arts Training",
"Event Planning",
"Music Lessons",
"Voice Coaching",
"Party & Wedding Photography",
"Interior Styling",
"Personal Shopping"
  

  ].sort(); 

  /* 🔥 FILTER SUGGESTIONS */
  useEffect(() => {
    if (!newService.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = masterServices.filter(
      (service) =>
        service.toLowerCase().includes(newService.toLowerCase()) &&
        !services.includes(service)
    );

    setSuggestions(filtered);
  }, [newService, services]);

  /* ADD SERVICE */
  const addService = async (serviceName) => {
    const serviceToAdd = serviceName || newService;

    if (!serviceToAdd.trim()) return;
    if (services.includes(serviceToAdd)) return;

    await fetch("/api/add-service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: professional.email,
        serviceName: serviceToAdd.trim(),
      }),
    });

    setNewService("");
    setSuggestions([]);
    refreshProfessional();
  };

  /* DELETE SERVICE */
  const deleteService = async (service) => {
    await fetch("/api/delete-service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: professional.email,
        serviceName: service,
      }),
    });

    refreshProfessional();
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg  p-6 relative">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-lg">Your Services</h2>
        <button
          onClick={() => setEditing(!editing)}
          className="text-blue-600 text-sm font-medium"
        >
          {editing ? "Done" : "Edit"}
        </button>
      </div>

      {/* SERVICES LIST */}
      <div className="flex flex-wrap gap-2">
        {services.map((s) => (
          <span
            key={s}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm flex items-center gap-2"
          >
            {s}
            {editing && (
              <button
                onClick={() => deleteService(s)}
                className="text-red-500 text-xs"
              >
                ✕
              </button>
            )}
          </span>
        ))}
      </div>

      {/* INPUT + SUGGESTIONS */}
      {editing && (
        <div className="mt-4 relative">
          <input
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addService();
              }
            }}
            placeholder="Search or add service..."
            className="border rounded-xl px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* DROPDOWN SUGGESTIONS */}
          {suggestions.length > 0 && (
            <div className="absolute z-10 bg-white border rounded-xl mt-2 w-full shadow-lg max-h-48 overflow-y-auto">
              {suggestions.map((service) => (
                <div
                  key={service}
                  onClick={() => addService(service)}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm"
                >
                  {service}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}


/* ================= LEADS STATS ================= */
// export function LeadsStatsCard({ leads = [] }) {
//   const unread = leads.filter((l) => !l.isRead).length;

//   return (
//     <div className="bg-white rounded-3xl shadow-lg border p-6">
//       <h2 className="font-semibold mb-5">Leads Overview</h2>

//       <div className="text-4xl font-bold text-blue-600">
//         {leads.length}
//       </div>
//       <p className="text-sm text-gray-500">Total Leads</p>

//       <div className="mt-6 text-indigo-600 font-semibold text-xl">
//         {unread}
//       </div>
//       <p className="text-sm text-gray-500">Unread Leads</p>
//     </div>
//   );
// }

/* ================= LEADS STATS ================= */
// export function LeadsStatsCard({ leads = [], professional }) {
//   const userServices = professional?.serviceName || [];

//   /* 🔥 FILTER LEADS BASED ON USER SERVICES */
//   const filteredLeads = leads
//     .filter((lead) =>
//       userServices.includes(lead.serviceName)
//     )
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // newest first

//   const unread = filteredLeads.filter((l) => !l.isRead).length;

//   return (
//     <div className="bg-white rounded-3xl shadow-lg border p-6">
//       <h2 className="font-semibold mb-5">Leads Overview</h2>

//       {/* TOTAL MATCHING LEADS */}
//       <div className="text-4xl font-bold text-blue-600">
//         {filteredLeads.length}
//       </div>
//       <p className="text-sm text-gray-500">
//         Total Matching Leads
//       </p>

//       {/* UNREAD */}
//       <div className="mt-6 text-indigo-600 font-semibold text-xl">
//         {unread}
//       </div>
//       <p className="text-sm text-gray-500">
//         Unread Leads
//       </p>

//       {/* SERVICE INFO */}
//       <div className="mt-6 text-xs text-gray-400">
//         Showing leads for:
//         <span className="ml-1 font-medium text-gray-600">
//           {userServices.length > 0
//             ? userServices.join(", ")
//             : "No services selected"}
//         </span>
//       </div>
//     </div>
//   );
// }


/* ================= LEADS STATS NEW ================= */
export function LeadsStatsCard({ leads = [], professional }) {

  const sortedLeads = [...leads].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const unread = sortedLeads.filter((l) => !l?.isRead).length;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="font-semibold mb-5">Leads Overview</h2>

      <div className="text-4xl font-bold text-blue-600">
        {sortedLeads.length}
      </div>
      <p className="text-sm text-gray-500">
        Total Leads
      </p>

      <div className="mt-6 text-indigo-600 font-semibold text-xl">
        {unread}
      </div>
      <p className="text-sm text-gray-500">
        Unread Leads
      </p>

      <div className="mt-6 text-xs text-gray-400">
        Services:
        <span className="ml-1 font-medium text-gray-600">
          {Array.isArray(professional?.serviceName)
            ? professional.serviceName.join(", ")
            : professional?.serviceName || "None"}
        </span>
      </div>
    </div>
  );
}

/* ================= RESPONSES ================= */
export function ResponsesCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
      <h2 className="font-semibold mb-4">Responses</h2>
      <p className="text-sm text-gray-500">
        You haven’t responded to any leads yet.
      </p>
    </div>
  );
}

/* ================= GET STARTED ================= */
export function GetStartedCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="font-semibold mb-2">Get Started</h2>
      <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-3">
        20% OFF STARTER PACK
      </span>
      <p className="text-sm text-gray-600">
        Respond to up to 10 customers instantly.
      </p>
      <button className="text-blue-600 text-sm mt-3 font-semibold hover:underline">
        Learn more →
      </button>
    </div>
  );
}

/* ================= HELP ================= */
export function HelpCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <Link href="/help-center">
        <h2 className="font-semibold mb-2 cursor-pointer">
          Help Center
        </h2>
      </Link>
      <button className="text-blue-600 text-sm font-semibold hover:underline">
        Visit help center →
      </button>
    </div>
  );
}