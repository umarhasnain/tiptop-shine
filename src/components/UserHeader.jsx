
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
import {
  CircleUserRound,
  Menu,
  X,
  LogOut,
  Settings,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";

export default function UserHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [userName, setUserName] = useState("User");

  const dropdownRef = useRef(null);

  // CLOSE SIDEBAR
  const closeDrawer = () => setIsOpen(false);

  // LOCK BODY SCROLL
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // GET USER NAME
  useEffect(() => {
    const email = localStorage.getItem("loggedInEmail");

    if (email) {
      const name = email.split("@")[0];

      setUserName(
        name.charAt(0).toUpperCase() + name.slice(1)
      );
    }
  }, []);

  // CLOSE DROPDOWN OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // ESC KEY CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeDrawer();
        setDropdown(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("loggedInEmail");
    window.location.href = "/login";
  };

  return (
    <>
      {/* ================= HEADER ================= */}

      <header
        className="
          fixed
          top-0
          left-0
          right-0
          w-full
          h-[78px]
          bg-black/95
          backdrop-blur-xl
          border-b
          border-white/10
          shadow-2xl
          z-[999999999]
        "
      >
        <div className="max-w-[1600px] mx-auto h-full px-4 sm:px-6 lg:px-10">

          <div className="flex items-center justify-between h-full">

            {/* ========== LOGO ========== */}

            <Link
              href="/"
              className="flex items-center shrink-0"
            >
              <Image
                src="/images/animated logo.gif"
                alt="Logo"
                width={180}
                height={70}
                priority
                className="
                  w-[115px]
                  sm:w-[145px]
                  lg:w-[165px]
                  h-auto
                  object-contain
                "
              />
            </Link>

            {/* ========== DESKTOP NAVIGATION ========== */}

            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">

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
                  className="
                    text-[14px]
                    text-white/90
                    hover:text-blue-400
                    transition-all
                    duration-200
                    font-medium
                  "
                >
                  {label}
                </Link>
              ))}

              {/* ========== USER PROFILE ========== */}

              <div
                className="relative ml-2"
                ref={dropdownRef}
              >

                <button
                  onClick={() =>
                    setDropdown(!dropdown)
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    bg-white/10
                    hover:bg-white/15
                    border
                    border-white/10
                    px-3
                    py-2
                    text-white
                    rounded-full
                    transition-all
                    duration-200
                  "
                >
                  <CircleUserRound className="w-5 h-5" />

                  <span className="text-sm font-medium text-white/90">
                    Hi {userName}
                  </span>
                </button>

                {/* ========== DROPDOWN ========== */}

                {dropdown && (
                  <div
                    className="
                      absolute
                      right-0
                      top-[60px]
                      w-60
                      bg-white
                      text-black
                      rounded-2xl
                      overflow-hidden
                      shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                      border
                      border-gray-200
                      z-[999999999]
                    "
                  >

                    <div className="px-5 py-4 border-b bg-gray-50">

                      <p className="font-semibold text-sm">
                        {userName}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        Logged In Account
                      </p>

                    </div>

                    <Link
                      href="/setting"
                      onClick={() =>
                        setDropdown(false)
                      }
                      className="
                        flex
                        items-center
                        gap-3
                        px-5
                        py-3.5
                        hover:bg-gray-100
                        transition
                        text-sm
                      "
                    >
                      <Settings size={17} />
                      Settings
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="
                        w-full
                        flex
                        items-center
                        gap-3
                        px-5
                        py-3.5
                        hover:bg-red-50
                        text-red-600
                        transition
                        text-sm
                      "
                    >
                      <LogOut size={17} />
                      Logout
                    </button>

                  </div>
                )}
              </div>
            </nav>

            {/* ========== MOBILE BUTTON ========== */}

            <button
              onClick={() => setIsOpen(true)}
              className="
                lg:hidden
                flex
                items-center
                justify-center
                w-11
                h-11
                rounded-xl
                bg-white/10
                hover:bg-white/15
                transition-all
                duration-200
              "
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </header>

      {/* ================= SPACER ================= */}

      <div className="h-[78px]" />

      {/* ================= OVERLAY ================= */}

      <div
        onClick={closeDrawer}
        className={`
          fixed
          inset-0
          bg-black/70
          backdrop-blur-sm
          transition-all
          duration-300
          z-[999999990]
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-[310px]
          max-w-[85vw]
          bg-[#0A0F1C]
          text-white
          border-r
          border-white/10
          shadow-[0_0_60px_rgba(0,0,0,0.5)]
          z-[999999999]
          transform
          transition-transform
          duration-300
          ease-in-out
          flex
          flex-col
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* ========== SIDEBAR TOP ========== */}

        <div
          className="
            flex
            items-center
            justify-between
            px-5
            h-[78px]
            border-b
            border-white/10
            shrink-0
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                w-11
                h-11
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
              "
            >
              <CircleUserRound className="w-6 h-6" />
            </div>

            <div>

              <p className="font-semibold text-sm">
                {userName}
              </p>

              <p className="text-xs text-gray-400 mt-0.5">
                Welcome Back
              </p>

            </div>
          </div>

          <button
            onClick={closeDrawer}
            className="
              w-10
              h-10
              rounded-xl
              flex
              items-center
              justify-center
              hover:bg-white/10
              transition
            "
          >
            <X size={24} />
          </button>

        </div>

        {/* ========== NAVIGATION ========== */}

        <div className="flex-1 overflow-y-auto px-4 py-5">

          <nav className="flex flex-col gap-2">

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
                className="
                  flex
                  items-center
                  px-4
                  py-3.5
                  rounded-2xl
                  text-sm
                  font-medium
                  text-white/90
                  hover:bg-white/10
                  hover:text-white
                  transition-all
                  duration-200
                "
              >
                {label}
              </Link>
            ))}

          </nav>
        </div>

        {/* ========== SIDEBAR FOOTER ========== */}

        <div
          className="
            p-4
            border-t
            border-white/10
            bg-[#0A0F1C]
            shrink-0
          "
        >

          <button
            onClick={handleLogout}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              bg-red-600
              hover:bg-red-700
              transition-all
              duration-200
              py-3
              rounded-2xl
              text-sm
              font-medium
              shadow-lg
            "
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </aside>
    </>
  );
}