// 'use client'
// import { useState } from "react";
// import { CircleUserRound, Menu, X } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function UserHeader() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-black text-white shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-3">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/">
//             <Image
//               src="/images/animated logo.gif"
//               alt="Logo"
//               width={80}   // intrinsic width
//               height={80}  // intrinsic height
//               className="w-[180px] h-[80px] "
//               priority
//             />
//           </Link>
//         </div>


//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center space-x-8">
//           <Link href="/general-dashboard" className="hover:text-blue-400">
//             Dashboard
//           </Link>
//           <Link href="/leads" className="hover:text-blue-400">
//             Leads
//           </Link>
//           <Link href="/subscription" className="hover:text-blue-400">
//             Subscription
//           </Link>
//           <Link href="/setting" className="hover:text-blue-400">
//             Settings
//           </Link>
//           <Link href="/myresponse" className="hover:text-blue-400">
//             My Responses
//           </Link>
//           <Link href="/helpdashboard" className="hover:text-blue-400">
//             Help
//           </Link>

//           {/* Profile */}
//           <div className="flex items-center space-x-2">
//             <CircleUserRound className="w-7 h-7" />
//             <span className="font-medium">Hi Paula</span>
//           </div>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white text-black px-4 pb-4 space-y-3">
//           <Link href="/general-dashboard" className="block hover:text-blue-400">
//             Dashboard
//           </Link>
//           <Link href="/leads" className="block hover:text-blue-400">
//             Leads
//           </Link>
//             <Link href="/subscription" className="block hover:text-blue-400">
//             Subscription
//           </Link>
        
//           <Link href="/setting" className="block hover:text-blue-400">
//             Settings
//           </Link>
//           <Link href="/myresponse" className="block hover:text-blue-400">
//             My Responses
//           </Link>
//           <Link href="/helpdashboard" className="block hover:text-blue-400">
//             Help
//           </Link>
//           <div className="flex items-center space-x-2 pt-2 border-t">
//             <CircleUserRound className="w-7 h-7" />
//             <span className="font-medium">Jhon</span>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


// //***************************************************STICKY DASHBOARD */
// 'use client'

// import { useState, useEffect, useRef } from "react";
// import {
//   CircleUserRound,
//   Menu,
//   ChevronDown,
//   LayoutDashboard,
//   Settings,
//   HelpCircle,
//   FileText,
//   CreditCard
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// export default function DashboardLayout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const pathname = usePathname();
//   const profileRef = useRef(null);

//   const navLinks = [
//     { name: "Dashboard", href: "/general-dashboard", icon: LayoutDashboard },
//     { name: "Leads", href: "/leads", icon: FileText },
//     { name: "Subscription", href: "/subscription", icon: CreditCard },
//     { name: "Settings", href: "/setting", icon: Settings },
//     { name: "My Responses", href: "/myresponse", icon: FileText },
//     { name: "Help", href: "/helpdashboard", icon: HelpCircle },
//   ];

//   useEffect(() => {
//     const handleClick = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   return (
//     <div className="min-h-screen flex bg-[#0B0F19] text-white overflow-hidden">

//       {/* SIDEBAR (DESKTOP + MOBILE DRAWER) */}
//       <aside
//         className={`
//           fixed md:static z-50 top-0 left-0
//           h-screen md:h-auto
//           w-[260px] bg-[#111827] border-r border-white/10
//           transform transition-transform duration-300
//           overflow-y-auto
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
//         `}
//       >

//         {/* LOGO */}
//         <div className="px-6 py-5 border-b border-white/10">
//           <Image
//             src="/images/animated logo.gif"
//             alt="logo"
//             width={140}
//             height={60}
//           />
//         </div>

//         {/* NAV */}
//         <nav className="p-4 space-y-2">
//           {navLinks.map((item) => {
//             const isActive = pathname === item.href;
//             const Icon = item.icon;

//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setSidebarOpen(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition
//                   ${isActive
//                     ? "bg-blue-600 text-white shadow-lg"
//                     : "text-gray-400 hover:bg-white/5 hover:text-white"
//                   }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 {item.name}
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>

//       {/* MOBILE OVERLAY */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* MAIN WRAPPER */}
//       <div className="flex flex-col flex-1 ">

//         {/* TOPBAR */}
//         <header className="h-16 shrink-0 flex items-center justify-between px-6 border-b border-white/10 bg-[#0B0F19]">

//           <div className="flex items-center gap-3">
//             <button
//               className="md:hidden"
//               onClick={() => setSidebarOpen(true)}
//             >
//               <Menu />
//             </button>

//             <h1 className="text-lg font-semibold">Dashboard</h1>
//           </div>

//           {/* PROFILE */}
//           <div className="relative" ref={profileRef}>
//             <button
//               onClick={() => setProfileOpen(!profileOpen)}
//               className="flex items-center gap-2 hover:bg-white/5 px-3 py-2 rounded-lg"
//             >
//               <CircleUserRound className="w-7 h-7" />
//               <span className="hidden md:block">Paula</span>
//               <ChevronDown className={`w-4 h-4 transition ${profileOpen ? "rotate-180" : ""}`} />
//             </button>

//             {profileOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-[#111827] border border-white/10 rounded-xl shadow-xl">
//                 <Link href="/profile" className="block px-4 py-3 hover:bg-white/5">Profile</Link>
//                 <Link href="/setting" className="block px-4 py-3 hover:bg-white/5">Settings</Link>
//                 <button className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-500/10">
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </header>

//         {/* CONTENT */}
//         <main className="flex-1 overflow-y-auto p-6">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// }

'use client'

import { useState } from "react";
import { CircleUserRound, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function UserHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);

  return (
    <header className="bg-black text-white shadow-md relative z-50 ">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/images/animated logo.gif"
            alt="Logo"
            width={180}
            height={80}
            className="w-[160px] md:w-[180px] h-auto"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <Link href="/general-dashboard" className="hover:text-blue-400">Dashboard</Link>
          <Link href="/leads" className="hover:text-blue-400">Leads</Link>
          <Link href="/subscription" className="hover:text-blue-400">Subscription</Link>
          <Link href="/setting" className="hover:text-blue-400">Settings</Link>
          <Link href="/myresponse" className="hover:text-blue-400">My Responses</Link>
          <Link href="/helpdashboard" className="hover:text-blue-400">Help</Link>

          <div className="flex items-center gap-2 ml-4">
            <CircleUserRound className="w-6 h-6" />
            <span>Hi Paula</span>
          </div>
        </nav>

        {/* MOBILE BUTTON */}
        <button className=" md:hidden " onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 h-screen"
          onClick={closeDrawer}
        />
      )}

      {/* MOBILE DRAWER - FIXED FULL HEIGHT */}
      <div
        className={`
          fixed top-0 left-0 bottom-0
          w-[280px]
          bg-[#0B0F19]
          z-50
          flex flex-col
          h-screen
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="font-semibold">Menu</span>
          <button onClick={closeDrawer}>
            <X size={24} />
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col p-4 gap-2 text-sm overflow-y-auto flex-1">

          <Link onClick={closeDrawer} href="/general-dashboard" className="py-3 px-3 rounded-lg hover:bg-white/5">
            Dashboard
          </Link>

          <Link onClick={closeDrawer} href="/leads" className="py-3 px-3 rounded-lg hover:bg-white/5">
            Leads
          </Link>

          <Link onClick={closeDrawer} href="/subscription" className="py-3 px-3 rounded-lg hover:bg-white/5">
            Subscription
          </Link>

          <Link onClick={closeDrawer} href="/setting" className="py-3 px-3 rounded-lg hover:bg-white/5">
            Settings
          </Link>

          <Link onClick={closeDrawer} href="/myresponse" className="py-3 px-3 rounded-lg hover:bg-white/5">
            My Responses
          </Link>

          <Link onClick={closeDrawer} href="/helpdashboard" className="py-3 px-3 rounded-lg hover:bg-white/5">
            Help
          </Link>
        </nav>

        {/* BOTTOM PROFILE */}
        <div className="border-t border-white/10 p-4 flex items-center gap-3">
          <CircleUserRound className="w-7 h-7" />
          <span>Hi Paula</span>
        </div>

      </div>
    </header>
  );
}