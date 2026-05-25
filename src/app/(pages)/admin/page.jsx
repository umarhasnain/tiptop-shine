// 'use client';

// import Link from 'next/link';
// import { useMemo, useState } from 'react';
// import services from '@/lib/serviceCategories';

// import {
//   FaPlus,
//   FaSearch,
//   FaStar,
//   FaCheckCircle,
//   FaLayerGroup,
//   FaEye,
//   FaEdit,
//   FaChartLine,
//   FaCogs,
// } from 'react-icons/fa';

// export default function DashboardPage() {

//   const [search, setSearch] = useState('');

//   const totalServices = services.length;

//   const featuredServices = services.filter(
//     (s) => s.isFeatured
//   ).length;

//   const activeServices = services.filter(
//     (s) => s.isActive
//   ).length;

//   const categories = [
//     ...new Set(services.map((s) => s.category)),
//   ];

//   const filteredServices = useMemo(() => {

//     return services.filter((service) =>
//       service.nameincludes(search.toLowerCase())
//     );

//   }, [search]);

//   return (
//     <div className="min-h-screen bg-[#f4f7fb]">

//       {/* ================= TOP HEADER ================= */}

//       <div className="bg-gradient-to-r from-[#0F172A] via-[#111827] to-[#1E293B] px-6 lg:px-10 py-10 rounded-b-[40px] shadow-2xl">

//         <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

//           <div>

//             <div className="flex items-center gap-3 mb-4">

//               <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
//                 <FaChartLine className="text-white text-2xl" />
//               </div>

//               <div>
//                 <h1 className="text-4xl font-black text-white tracking-tight">
//                   Admin Dashboard
//                 </h1>

//                 <p className="text-gray-300 mt-1">
//                   Manage services, professionals & marketplace growth
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">

//             <div className="relative">

//               <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

//               <input
//                 type="text"
//                 placeholder="Search services..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full sm:w-[320px] bg-white/10 backdrop-blur-md border border-white/10 text-white placeholder:text-gray-400 rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-blue-400 transition"
//               />
//             </div>

//             <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#326BFD] hover:bg-blue-700 text-white rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02]">

//               <FaPlus />

//               Add Service
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="p-6 lg:p-10">

//         {/* ================= STATS ================= */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">

//           <StatCard
//             title="Total Services"
//             value={totalServices}
//             icon={<FaLayerGroup />}
//             color="blue"
//           />

//           <StatCard
//             title="Featured Services"
//             value={featuredServices}
//             icon={<FaStar />}
//             color="yellow"
//           />

//           <StatCard
//             title="Active Services"
//             value={activeServices}
//             icon={<FaCheckCircle />}
//             color="green"
//           />

//           <StatCard
//             title="Categories"
//             value={categories.length}
//             icon={<FaCogs />}
//             color="purple"
//           />
//         </div>

//         {/* ================= CATEGORY SECTION ================= */}

//         <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 mb-10">

//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

//             <div>
//               <h2 className="text-2xl font-bold text-gray-800">
//                 Service Categories
//               </h2>

//               <p className="text-gray-500 mt-1">
//                 Marketplace categories overview
//               </p>
//             </div>

//             <div className="px-5 py-2 rounded-2xl bg-blue-50 text-blue-700 font-semibold text-sm">
//               {categories.length} Categories
//             </div>
//           </div>

//           <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">

//             {categories.map((category) => {

//               const servicesCount = services.filter(
//                 (s) => s.category === category
//               ).length;

//               return (

//                 <div
//                   key={category}
//                   className="group p-6 rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
//                 >

//                   <div className="flex items-center justify-between mb-5">

//                     <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold">
//                       {category.charAt(0).toUpperCase()}
//                     </div>

//                     <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
//                       Active
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-800 capitalize">
//                     {category.replace('-', ' ')}
//                   </h3>

//                   <p className="text-gray-500 mt-2 text-sm">
//                     {servicesCount} services available
//                   </p>

//                   <div className="mt-5 w-full bg-gray-100 rounded-full h-2 overflow-hidden">

//                     <div
//                       className="bg-blue-600 h-2 rounded-full"
//                       style={{
//                         width: `${(servicesCount / totalServices) * 100}%`
//                       }}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* ================= SERVICES TABLE ================= */}

//         <div className="bg-white rounded-[30px] shadow-sm border border-gray-100 overflow-hidden">

//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 p-8 border-b border-gray-100">

//             <div>

//               <h2 className="text-3xl font-bold text-gray-800">
//                 Marketplace Services
//               </h2>

//               <p className="text-gray-500 mt-1">
//                 Manage all available marketplace services
//               </p>
//             </div>

//             <div className="flex gap-3">

//               <button className="px-5 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition">
//                 Export
//               </button>

//               <button className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg">
//                 Create Service
//               </button>
//             </div>
//           </div>

//           <div className="overflow-x-auto">

//             <table className="w-full min-w-[1100px]">

//               <thead className="bg-gray-50">

//                 <tr>

//                   <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
//                     Service
//                   </th>

//                   <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
//                     Category
//                   </th>

//                   <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
//                     Pricing
//                   </th>

//                   <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>

//                   <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
//                     Featured
//                   </th>

//                   <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
//                     Questions
//                   </th>

//                   <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>

//                 {filteredServices.map((service) => (

//                   <tr
//                     key={service.id}
//                     className="border-t border-gray-100 hover:bg-blue-50/40 transition-all duration-300"
//                   >

//                     <td className="px-6 py-5">

//                       <div className="flex items-center gap-4">

//                         <img
//                           src={service.image}
//                           alt={service.name}
//                           className="w-16 h-16 rounded-2xl object-cover shadow-md"
//                         />

//                         <div>

//                           <h3 className="font-bold text-gray-800 text-base">
//                             {service.name}
//                           </h3>

//                           <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//                             {service.description}
//                           </p>
//                         </div>
//                       </div>
//                     </td>

//                     <td className="px-6 py-5">

//                       <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium capitalize">
//                         {service.categoryLabel}
//                       </span>
//                     </td>

//                     <td className="px-6 py-5">

//                       <span className="capitalize font-semibold text-blue-700 bg-blue-50 px-3 py-2 rounded-xl text-sm">
//                         {service.pricingType}
//                       </span>
//                     </td>

//                     <td className="px-6 py-5">

//                       <span
//                         className={`px-4 py-2 rounded-full text-sm font-semibold ${
//                           service.isActive
//                             ? 'bg-green-100 text-green-700'
//                             : 'bg-red-100 text-red-700'
//                         }`}
//                       >
//                         {service.isActive ? 'Active' : 'Inactive'}
//                       </span>
//                     </td>

//                     <td className="px-6 py-5">

//                       {service.isFeatured ? (

//                         <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">

//                           <FaStar />

//                           Featured
//                         </span>

//                       ) : (

//                         <span className="text-gray-400 text-sm">
//                           Standard
//                         </span>
//                       )}
//                     </td>

//                     <td className="px-6 py-5">

//                       <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl text-sm font-semibold">
//                         {service.questions?.length || 0} Fields
//                       </span>
//                     </td>

//                     <td className="px-6 py-5">

//                       <div className="flex items-center gap-3">

//                         <Link
//                           href={`/services/${service.slug}`}
//                           className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl text-sm font-semibold transition"
//                         >

//                           <FaEye />

//                           View
//                         </Link>

//                         <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-semibold transition">

//                           <FaEdit />

//                           Edit
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}

//               </tbody>
//             </table>
//           </div>

//           {/* ================= FOOTER ================= */}

//           <div className="px-8 py-5 border-t border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gray-50">

//             <p className="text-sm text-gray-500">
//               Showing {filteredServices.length} of {services.length} services
//             </p>

//             <div className="flex items-center gap-3">

//               <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 transition">
//                 Previous
//               </button>

//               <button className="px-4 py-2 rounded-xl bg-blue-600 text-white">
//                 1
//               </button>

//               <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 transition">
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function StatCard({ title, value, color, icon }) {

//   const colors = {
//     blue: 'from-blue-500 to-blue-700',
//     green: 'from-green-500 to-green-700',
//     purple: 'from-purple-500 to-purple-700',
//     yellow: 'from-yellow-400 to-orange-500',
//   };

//   return (

//     <div className="relative overflow-hidden bg-white rounded-[30px] p-7 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

//       <div
//         className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colors[color]} opacity-10 rounded-full blur-3xl`}
//       />

//       <div className="relative flex items-center justify-between">

//         <div>

//           <p className="text-gray-500 font-medium">
//             {title}
//           </p>

//           <h3 className="text-5xl font-black mt-4 text-gray-800 tracking-tight">
//             {value}
//           </h3>
//         </div>

//         <div
//           className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${colors[color]} text-white flex items-center justify-center text-2xl shadow-xl`}
//         >
//           {icon}
//         </div>
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
