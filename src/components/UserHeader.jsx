
// 'use client'

// import { useState } from "react";
// import { CircleUserRound, Menu, X } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function UserHeader() {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeDrawer = () => setIsOpen(false);

//   return (
//     <header className="bg-black text-white shadow-md relative z-50 ">

//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3">

//         {/* LOGO */}
//         <Link href="/">
//           <Image
//             src="/images/animated logo.gif"
//             alt="Logo"
//             width={180}
//             height={80}
//             className="w-[160px] md:w-[180px] h-auto"
//             priority
//           />
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex items-center space-x-8 text-sm">
//           <Link href="/general-dashboard" className="hover:text-blue-400">Dashboard</Link>
//           <Link href="/leads" className="hover:text-blue-400">Leads</Link>
//           <Link href="/subscription" className="hover:text-blue-400">Subscription</Link>
//           <Link href="/setting" className="hover:text-blue-400">Settings</Link>
//           <Link href="/myresponse" className="hover:text-blue-400">My Responses</Link>
//           <Link href="/helpdashboard" className="hover:text-blue-400">Help</Link>

//           <div className="flex items-center gap-2 ml-4">
//             <CircleUserRound className="w-6 h-6" />
//             <span>Hi Paula</span>
//           </div>
//         </nav>

//         {/* MOBILE BUTTON */}
//         <button className=" md:hidden " onClick={() => setIsOpen(true)}>
//           <Menu size={28} />
//         </button>
//       </div>

//       {/* BACKDROP */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 z-40 h-screen"
//           onClick={closeDrawer}
//         />
//       )}

//       {/* MOBILE DRAWER - FIXED FULL HEIGHT */}
//       <div
//         className={`
//           fixed top-0 left-0 bottom-0
//           w-[280px]
//           bg-[#0B0F19]
//           z-50
//           flex flex-col
//           h-screen
//           transition-transform duration-300
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >

//         {/* HEADER */}
//         <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
//           <span className="font-semibold">Menu</span>
//           <button onClick={closeDrawer}>
//             <X size={24} />
//           </button>
//         </div>

//         {/* LINKS */}
//         <nav className="flex flex-col p-4 gap-2 text-sm overflow-y-auto flex-1">

//           <Link onClick={closeDrawer} href="/general-dashboard" className="py-3 px-3 rounded-lg hover:bg-white/5">
//             Dashboard
//           </Link>

//           <Link onClick={closeDrawer} href="/leads" className="py-3 px-3 rounded-lg hover:bg-white/5">
//             Leads
//           </Link>

//           <Link onClick={closeDrawer} href="/subscription" className="py-3 px-3 rounded-lg hover:bg-white/5">
//             Subscription
//           </Link>

//           <Link onClick={closeDrawer} href="/setting" className="py-3 px-3 rounded-lg hover:bg-white/5">
//             Settings
//           </Link>

//           <Link onClick={closeDrawer} href="/myresponse" className="py-3 px-3 rounded-lg hover:bg-white/5">
//             My Responses
//           </Link>

//           <Link onClick={closeDrawer} href="/helpdashboard" className="py-3 px-3 rounded-lg hover:bg-white/5">
//             Help
//           </Link>
//         </nav>

//         {/* BOTTOM PROFILE */}
//         <div className="border-t border-white/10 p-4 flex items-center gap-3">
//           <CircleUserRound className="w-7 h-7" />
//           <span>Hi Paula</span>
//         </div>

//       </div>
//     </header>
//   );
// }

// 'use client'

// import { useState, useEffect, useRef } from "react";
// import { CircleUserRound, Menu, X, LogOut, Settings, User } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function UserHeader() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const [userName, setUserName] = useState("User");

//   const dropdownRef = useRef(null);

//   const closeDrawer = () => setIsOpen(false);

//   // ================= GET USER =================
//   useEffect(() => {
//     const email = localStorage.getItem("loggedInEmail");

//     if (email) {
//       const name = email.split("@")[0];
//       setUserName(name.charAt(0).toUpperCase() + name.slice(1));
//     }
//   }, []);

//   // ================= CLOSE DROPDOWN OUTSIDE CLICK =================
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // ================= LOGOUT =================
//   const handleLogout = () => {
//     localStorage.removeItem("loggedInEmail");
//     window.location.href = "/login";
//   };

//   return (
//     <header className="bg-black text-white shadow-md relative z-50">

//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">

//         {/* LOGO */}
//         <Link href="/">
//           <Image
//             src="/images/animated logo.gif"
//             alt="Logo"
//             width={170}
//             height={70}
//             className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
//             priority
//           />
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm">

//           <Link href="/general-dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
//           <Link href="/leads" className="hover:text-blue-400 transition">Leads</Link>
//           <Link href="/subscription" className="hover:text-blue-400 transition">Subscription</Link>
//           <Link href="/setting" className="hover:text-blue-400 transition">Settings</Link>
//           <Link href="/my-response" className="hover:text-blue-400 transition">My Responses</Link>
//           <Link href="/helpdashboard" className="hover:text-blue-400 transition">Help</Link>

//           {/* PROFILE DROPDOWN */}
//           <div className="relative ml-4" ref={dropdownRef}>

//             <button
//               onClick={() => setDropdown(!dropdown)}
//               className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition"
//             >
//               <CircleUserRound className="w-5 h-5" />
//               <span className="text-sm">{userName}</span>
//             </button>

//             {dropdown && (
//               <div className="absolute right-0 mt-3 w-48 bg-white text-black rounded-xl shadow-xl overflow-hidden">

//                 <div className="px-4 py-3 border-b">
//                   <p className="text-sm font-semibold">{userName}</p>
//                   <p className="text-xs text-gray-500">Logged In</p>
//                 </div>

//                 <Link
//                   href="/setting"
//                   className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-sm"
//                   onClick={() => setDropdown(false)}
//                 >
//                   <Settings size={16} />
//                   Settings
//                 </Link>

//                 <button
//                   onClick={handleLogout}
//                   className="w-full flex items-center gap-2 px-4 py-3 hover:bg-red-50 text-red-600 text-sm"
//                 >
//                   <LogOut size={16} />
//                   Logout
//                 </button>

//               </div>
//             )}

//           </div>

//         </nav>

//         {/* MOBILE BUTTON */}
//         <button className="md:hidden" onClick={() => setIsOpen(true)}>
//           <Menu size={28} />
//         </button>

//       </div>

//       {/* BACKDROP */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 z-40"
//           onClick={closeDrawer}
//         />
//       )}

//       {/* MOBILE DRAWER */}
//       <div
//         className={`
//           fixed top-0 left-0 bottom-0 w-[290px]
//           bg-[#0B0F19] text-white z-50
//           flex flex-col h-screen
//           transition-transform duration-300
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >

//         {/* HEADER */}
//         <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
//           <span className="font-semibold">Menu</span>
//           <button onClick={closeDrawer}>
//             <X size={24} />
//           </button>
//         </div>

//         {/* LINKS */}
//         <nav className="flex flex-col p-4 gap-2 text-sm flex-1 overflow-y-auto">

//           {[
//             ["Dashboard", "/general-dashboard"],
//             ["Leads", "/leads"],
//             ["Subscription", "/subscription"],
//             ["Settings", "/setting"],
//             ["My Responses", "/my-response"],
//             ["Help", "/helpdashboard"],
//           ].map(([label, href]) => (
//             <Link
//               key={href}
//               href={href}
//               onClick={closeDrawer}
//               className="py-3 px-3 rounded-lg hover:bg-white/5 transition"
//             >
//               {label}
//             </Link>
//           ))}

//         </nav>

//         {/* PROFILE FOOTER */}
//         <div className="border-t border-white/10 p-4">

//           <div className="flex items-center gap-3 mb-3">
//             <CircleUserRound className="w-7 h-7" />
//             <div>
//               <p className="text-sm font-semibold">{userName}</p>
//               <p className="text-xs text-gray-400">Online</p>
//             </div>
//           </div>

//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-2 rounded-xl text-sm"
//           >
//             <LogOut size={16} />
//             Logout
//           </button>

//         </div>

//       </div>

//     </header>
//   );
// }


'use client'

import { useState, useEffect, useRef } from "react";
import { CircleUserRound, Menu, X, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function UserHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [userName, setUserName] = useState("User");

  const dropdownRef = useRef(null);

  const closeDrawer = () => setIsOpen(false);

  // ================= LOCK BODY SCROLL =================
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // ================= USER =================
  useEffect(() => {
    const email = localStorage.getItem("loggedInEmail");

    if (email) {
      const name = email.split("@")[0];
      setUserName(name.charAt(0).toUpperCase() + name.slice(1));
    }
  }, []);

  // ================= OUTSIDE CLICK DROPDOWN =================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInEmail");
    window.location.href = "/login";
  };

  return (
    <header className="bg-black text-white shadow-md relative z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/images/animated logo.gif"
            alt="Logo"
            width={170}
            height={70}
            className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm">

          <Link href="/general-dashboard" className="hover:text-blue-400">Dashboard</Link>
          <Link href="/leads" className="hover:text-blue-400">Leads</Link>
          <Link href="/subscription" className="hover:text-blue-400">Subscription</Link>
          <Link href="/setting" className="hover:text-blue-400">Settings</Link>
          <Link href="/my-response" className="hover:text-blue-400">My Responses</Link>
          <Link href="/helpdashboard" className="hover:text-blue-400">Help</Link>

        </nav>

        {/* USER + MOBILE MENU */}
        <div className="flex items-center gap-3">

          {/* PROFILE */}
          <div className="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
            <CircleUserRound className="w-5 h-5" />
            <span className="text-sm">{userName}</span>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={26} />
          </button>

        </div>

      </div>

      {/* ================= OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeDrawer}
      />

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed top-0 left-0 h-full w-[300px] bg-[#0B0F19] text-white z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="font-semibold">Menu</span>
          <button onClick={closeDrawer}>
            <X size={24} />
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col p-4 gap-2 text-sm overflow-y-auto h-full">

          {[
            ["Dashboard", "/general-dashboard"],
            ["Leads", "/leads"],
            ["Subscription", "/subscription"],
            ["Settings", "/setting"],
            ["My Responses", "/my-response"],
            ["Help", "/helpdashboard"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={closeDrawer}
              className="py-3 px-3 rounded-lg hover:bg-white/5 transition"
            >
              {label}
            </Link>
          ))}

        </nav>

        {/* FOOTER */}
        <div className="border-t border-white/10 p-4">

          <div className="flex items-center gap-3 mb-3">
            <CircleUserRound className="w-7 h-7" />
            <div>
              <p className="text-sm font-semibold">{userName}</p>
              <p className="text-xs text-gray-400">Online</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-2 rounded-xl text-sm"
          >
            <LogOut size={16} />
            Logout
          </button>

        </div>

      </aside>

    </header>
  );
}