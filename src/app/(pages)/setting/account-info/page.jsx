// "use client";

// import { useState } from "react";

// import {
//   ShieldCheck,
//   Mail,
//   Lock,
//   Phone,
//   Eye,
//   EyeOff,
//   Save,
//   Sparkles,
//   CheckCircle2,
//   Smartphone,
// } from "lucide-react";

// import Swal from "sweetalert2";

// import UserHeader from "@/components/UserHeader";

// export default function AccountInfoPage() {
//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [showNewPassword, setShowNewPassword] =
//     useState(false);

//   const [saving, setSaving] =
//     useState(false);

//   const [formData, setFormData] =
//     useState({
//       email:
//         "maptechdev91@gmail.com",

//       currentPassword: "",

//       newPassword: "",

//       phone: "03145478745",

//       alternatePhone: "",
//     });

//   // ================= HANDLE CHANGE =================
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,

//       [e.target.name]:
//         e.target.value,
//     });
//   };

//   // ================= SAVE =================
//   const handleSave = async () => {
//     try {
//       setSaving(true);

//       // API CALL HERE

//       setTimeout(() => {
//         setSaving(false);

//         Swal.fire({
//           title:
//             "Account Updated 🚀",

//           text: "Your account information has been updated successfully.",

//           icon: "success",

//           confirmButtonText:
//             "Awesome",

//           background:
//             "#0f172a",

//           color: "#fff",

//           confirmButtonColor:
//             "#2563eb",

//           timer: 4000,

//           timerProgressBar: true,

//           customClass: {
//             popup:
//               "rounded-[30px] border border-white/10",

//             confirmButton:
//               "rounded-2xl px-6 py-3 font-bold",
//           },
//         });
//       }, 1500);
//     } catch (error) {
//       console.log(error);

//       setSaving(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f4f7fb]">
//       <UserHeader />

//       {/* ================= HERO ================= */}
//       <section className="relative overflow-hidden">

//         {/* BG */}
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900" />

//         {/* GLOW */}
//         <div className="absolute top-0 left-0 w-full h-full opacity-20">

//           <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />

//           <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500 rounded-full blur-3xl" />

//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

//           <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

//             {/* LEFT */}
//             <div className="max-w-3xl">

//               <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-white text-sm">

//                 <ShieldCheck size={16} />

//                 Secure Account Settings

//               </div>

//               <h1 className="text-4xl sm:text-6xl font-black text-white mt-6 leading-tight">

//                 Account Info

//               </h1>

//               <p className="text-blue-100 text-sm sm:text-base mt-5 leading-relaxed max-w-2xl">

//                 Manage your login email,
//                 password, and contact
//                 numbers securely from
//                 here. Keep your account
//                 protected with advanced
//                 security and premium
//                 profile settings.

//               </p>

//               {/* STATS */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">

//                 <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">

//                   <p className="text-blue-100 text-xs uppercase">
//                     Security
//                   </p>

//                   <h3 className="text-2xl font-bold text-green-300 mt-2">
//                     Strong
//                   </h3>

//                 </div>

//                 <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">

//                   <p className="text-blue-100 text-xs uppercase">
//                     Status
//                   </p>

//                   <h3 className="text-2xl font-bold text-white mt-2">
//                     Active
//                   </h3>

//                 </div>

//                 <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">

//                   <p className="text-blue-100 text-xs uppercase">
//                     Verified
//                   </p>

//                   <h3 className="text-2xl font-bold text-cyan-300 mt-2">
//                     Yes
//                   </h3>

//                 </div>

//                 <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">

//                   <p className="text-blue-100 text-xs uppercase">
//                     Protection
//                   </p>

//                   <h3 className="text-2xl font-bold text-yellow-300 mt-2">
//                     99%
//                   </h3>

//                 </div>

//               </div>
//             </div>

//             {/* RIGHT CARD */}
//             <div className="w-full max-w-md">

//               <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">

//                 <div className="flex items-center justify-between">

//                   <div>
//                     <p className="text-blue-100 text-sm">
//                       Account Overview
//                     </p>

//                     <h2 className="text-white text-2xl font-black mt-1">
//                       Security Center
//                     </h2>
//                   </div>

//                   <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">

//                     <Sparkles className="text-white" />

//                   </div>
//                 </div>

//                 <div className="mt-10 text-center">

//                   <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mx-auto shadow-2xl shadow-cyan-500/40">

//                     <ShieldCheck
//                       size={45}
//                       className="text-white"
//                     />

//                   </div>

//                   <h3 className="text-2xl font-black text-white mt-5">

//                     Premium Security

//                   </h3>

//                   <p className="text-blue-100 text-sm mt-3 leading-relaxed">

//                     Your account is secured
//                     with encrypted protection
//                     and professional-grade
//                     security layers.

//                   </p>

//                   <div className="mt-6 inline-flex items-center gap-2 bg-green-500/20 border border-green-400/20 text-green-200 px-4 py-2 rounded-full text-sm">

//                     <CheckCircle2 size={16} />

//                     Fully Protected

//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= MAIN ================= */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

//           {/* ================= LEFT ================= */}
//           <div className="xl:col-span-2">

//             <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

//               {/* HEADER */}
//               <div className="p-6 border-b border-gray-100 flex items-center justify-between">

//                 <div>
//                   <h2 className="text-2xl font-black text-gray-900">
//                     Account Information
//                   </h2>

//                   <p className="text-sm text-gray-500 mt-1">
//                     Update your account
//                     credentials and contact
//                     details.
//                   </p>
//                 </div>

//                 <button
//                   onClick={handleSave}
//                   disabled={saving}
//                   className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white px-5 py-3 rounded-2xl transition shadow-lg"
//                 >
//                   <Save size={18} />

//                   {saving
//                     ? "Saving..."
//                     : "Save Changes"}
//                 </button>
//               </div>

//               {/* FORM */}
//               <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

//                 {/* EMAIL */}
//                 <div className="bg-gray-50 rounded-2xl p-5">

//                   <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">

//                     Login Email

//                   </label>

//                   <div className="mt-3 relative">

//                     <Mail
//                       size={20}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     />

//                     <input
//                       type="email"
//                       name="email"
//                       value={
//                         formData.email
//                       }
//                       onChange={
//                         handleChange
//                       }
//                       className="w-full h-14 rounded-2xl border border-gray-200 bg-white pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
//                     />

//                   </div>
//                 </div>

//                 {/* PHONE */}
//                 <div className="bg-gray-50 rounded-2xl p-5">

//                   <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">

//                     Contact Number

//                   </label>

//                   <div className="mt-3 relative">

//                     <Phone
//                       size={20}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     />

//                     <input
//                       type="text"
//                       name="phone"
//                       value={
//                         formData.phone
//                       }
//                       onChange={
//                         handleChange
//                       }
//                       className="w-full h-14 rounded-2xl border border-gray-200 bg-white pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
//                     />

//                   </div>
//                 </div>

//                 {/* ALT PHONE */}
//                 <div className="bg-gray-50 rounded-2xl p-5">

//                   <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">

//                     Alternate Number

//                   </label>

//                   <div className="mt-3 relative">

//                     <Smartphone
//                       size={20}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     />

//                     <input
//                       type="text"
//                       name="alternatePhone"
//                       value={
//                         formData.alternatePhone
//                       }
//                       onChange={
//                         handleChange
//                       }
//                       className="w-full h-14 rounded-2xl border border-gray-200 bg-white pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
//                     />

//                   </div>
//                 </div>

//                 {/* CURRENT PASSWORD */}
//                 <div className="bg-gray-50 rounded-2xl p-5">

//                   <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">

//                     Current Password

//                   </label>

//                   <div className="mt-3 relative">

//                     <Lock
//                       size={20}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     />

//                     <input
//                       type={
//                         showPassword
//                           ? "text"
//                           : "password"
//                       }
//                       name="currentPassword"
//                       value={
//                         formData.currentPassword
//                       }
//                       onChange={
//                         handleChange
//                       }
//                       className="w-full h-14 rounded-2xl border border-gray-200 bg-white pl-12 pr-14 outline-none focus:ring-2 focus:ring-blue-500"
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowPassword(
//                           !showPassword
//                         )
//                       }
//                       className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
//                     >
//                       {showPassword ? (
//                         <EyeOff size={20} />
//                       ) : (
//                         <Eye size={20} />
//                       )}
//                     </button>

//                   </div>
//                 </div>

//                 {/* NEW PASSWORD */}
//                 <div className="bg-gray-50 rounded-2xl p-5 md:col-span-2">

//                   <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">

//                     New Password

//                   </label>

//                   <div className="mt-3 relative">

//                     <Lock
//                       size={20}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     />

//                     <input
//                       type={
//                         showNewPassword
//                           ? "text"
//                           : "password"
//                       }
//                       name="newPassword"
//                       value={
//                         formData.newPassword
//                       }
//                       onChange={
//                         handleChange
//                       }
//                       className="w-full h-14 rounded-2xl border border-gray-200 bg-white pl-12 pr-14 outline-none focus:ring-2 focus:ring-blue-500"
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowNewPassword(
//                           !showNewPassword
//                         )
//                       }
//                       className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
//                     >
//                       {showNewPassword ? (
//                         <EyeOff size={20} />
//                       ) : (
//                         <Eye size={20} />
//                       )}
//                     </button>

//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* ================= RIGHT ================= */}
//           <div className="space-y-6">

//             {/* SECURITY CARD */}
//             <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden">

//               <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-3xl" />

//               <div className="relative">

//                 <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-5">

//                   <ShieldCheck size={30} />

//                 </div>

//                 <h2 className="text-2xl font-black">
//                   Secure Account
//                 </h2>

//                 <p className="text-blue-100 text-sm mt-3 leading-relaxed">

//                   Protect your account
//                   with advanced security
//                   settings and encrypted
//                   authentication.

//                 </p>

//                 <div className="mt-6 space-y-3">

//                   <div className="flex items-center gap-3">
//                     <CheckCircle2 size={18} />
//                     Encrypted Password
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <CheckCircle2 size={18} />
//                     Verified Email
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <CheckCircle2 size={18} />
//                     Secure Login Access
//                   </div>

//                 </div>
//               </div>
//             </div>

//             {/* PASSWORD STRENGTH */}
//             <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">

//               <h2 className="text-xl font-black text-gray-900">
//                 Password Strength
//               </h2>

//               <p className="text-sm text-gray-500 mt-1">
//                 Strong passwords keep
//                 your account safe.
//               </p>

//               <div className="mt-6">

//                 <div className="flex items-center justify-between mb-2">

//                   <span className="text-sm font-medium text-gray-700">
//                     Strength
//                   </span>

//                   <span className="text-sm font-bold text-green-600">
//                     Strong
//                   </span>

//                 </div>

//                 <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">

//                   <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-green-500 to-emerald-600" />

//                 </div>
//               </div>

//               <div className="mt-6 space-y-3">

//                 <div className="flex items-center gap-3 text-sm text-gray-700">

//                   <CheckCircle2
//                     size={16}
//                     className="text-green-600"
//                   />

//                   Minimum 8 Characters

//                 </div>

//                 <div className="flex items-center gap-3 text-sm text-gray-700">

//                   <CheckCircle2
//                     size={16}
//                     className="text-green-600"
//                   />

//                   Uppercase & Numbers

//                 </div>

//                 <div className="flex items-center gap-3 text-sm text-gray-700">

//                   <CheckCircle2
//                     size={16}
//                     className="text-green-600"
//                   />

//                   Secure Encryption

//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// // "use client";

// // import { useEffect, useState } from "react";
// // import {
// //   ShieldCheck,
// //   Mail,
// //   Lock,
// //   Eye,
// //   EyeOff,
// //   Save,
// //   Sparkles,
// // } from "lucide-react";

// // import Swal from "sweetalert2";
// // import UserHeader from "@/components/UserHeader";

// // export default function AccountInfoPage() {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showNewPassword, setShowNewPassword] = useState(false);
// //   const [saving, setSaving] = useState(false);

// //   const [userEmail, setUserEmail] = useState("");

// //   const [formData, setFormData] = useState({
// //     newEmail: "",
// //     currentPassword: "",
// //     newPassword: "",
// //   });

// //   // ================= LOAD USER =================
// //   useEffect(() => {
// //     const email = localStorage.getItem("loggedInEmail");

// //     if (email) {
// //       setUserEmail(email);
// //     }
// //   }, []);

// //   // ================= HANDLE CHANGE =================
// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   // ================= SAVE =================
// //   const handleSave = async () => {
// //     try {
// //       setSaving(true);

// //       const res = await fetch("/api/account/update", {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           email: userEmail,
// //           newEmail: formData.newEmail,
// //           currentPassword: formData.currentPassword,
// //           newPassword: formData.newPassword,
// //         }),
// //       });

// //       const data = await res.json();

// //       if (data.success) {
// //         if (formData.newEmail) {
// //           localStorage.setItem("loggedInEmail", formData.newEmail);
// //           setUserEmail(formData.newEmail);
// //         }

// //         Swal.fire({
// //           title: "Account Updated",
// //           text: "Your account has been updated successfully.",
// //           icon: "success",
// //           background: "#0f172a",
// //           color: "#fff",
// //           confirmButtonColor: "#2563eb",
// //         });

// //         setFormData({
// //           newEmail: "",
// //           currentPassword: "",
// //           newPassword: "",
// //         });
// //       } else {
// //         Swal.fire({
// //           title: "Update Failed",
// //           text: data.error,
// //           icon: "error",
// //         });
// //       }
// //     } catch (error) {
// //       Swal.fire({
// //         title: "Error",
// //         text: "Something went wrong",
// //         icon: "error",
// //       });
// //     } finally {
// //       setSaving(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f4f7fb]">
// //       <UserHeader />

// //       {/* HERO */}
// //       <section className="relative overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900" />

// //         <div className="relative max-w-6xl mx-auto px-6 py-12 text-white">
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full w-fit">
// //                 <ShieldCheck size={16} />
// //                 Secure Account Settings
// //               </div>

// //               <h1 className="text-5xl font-black mt-5">
// //                 Account Info
// //               </h1>

// //               <p className="text-blue-100 mt-3">
// //                 Update your email and password securely.
// //               </p>
// //             </div>

// //             <div className="bg-white/10 p-5 rounded-3xl">
// //               <Sparkles />
// //               <p className="text-sm mt-2">Protected Account</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FORM */}
// //       <section className="max-w-4xl mx-auto px-6 py-10">
// //         <div className="bg-white rounded-3xl shadow p-6 grid gap-6">

// //           {/* EMAIL */}
// //           <div className="bg-gray-50 p-5 rounded-2xl">
// //             <label className="text-sm font-semibold">New Email</label>
// //             <div className="relative mt-2">
// //               <Mail className="absolute left-3 top-3 text-gray-400" />
// //               <input
// //                 name="newEmail"
// //                 value={formData.newEmail}
// //                 onChange={handleChange}
// //                 className="w-full pl-10 p-3 rounded-xl border"
// //                 placeholder="Update email"
// //               />
// //             </div>
// //           </div>

// //           {/* CURRENT PASSWORD */}
// //           <div className="bg-gray-50 p-5 rounded-2xl">
// //             <label className="text-sm font-semibold">
// //               Current Password
// //             </label>

// //             <div className="relative mt-2">
// //               <Lock className="absolute left-3 top-3 text-gray-400" />

// //               <input
// //                 type={showPassword ? "text" : "password"}
// //                 name="currentPassword"
// //                 value={formData.currentPassword}
// //                 onChange={handleChange}
// //                 className="w-full pl-10 pr-10 p-3 rounded-xl border"
// //               />

// //               <button
// //                 type="button"
// //                 onClick={() => setShowPassword(!showPassword)}
// //                 className="absolute right-3 top-3"
// //               >
// //                 {showPassword ? <EyeOff /> : <Eye />}
// //               </button>
// //             </div>
// //           </div>

// //           {/* NEW PASSWORD */}
// //           <div className="bg-gray-50 p-5 rounded-2xl">
// //             <label className="text-sm font-semibold">New Password</label>

// //             <div className="relative mt-2">
// //               <Lock className="absolute left-3 top-3 text-gray-400" />

// //               <input
// //                 type={showNewPassword ? "text" : "password"}
// //                 name="newPassword"
// //                 value={formData.newPassword}
// //                 onChange={handleChange}
// //                 className="w-full pl-10 pr-10 p-3 rounded-xl border"
// //               />

// //               <button
// //                 type="button"
// //                 onClick={() => setShowNewPassword(!showNewPassword)}
// //                 className="absolute right-3 top-3"
// //               >
// //                 {showNewPassword ? <EyeOff /> : <Eye />}
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* SAVE BUTTON */}
// //         <div className="mt-8 text-right">
// //           <button
// //             onClick={handleSave}
// //             disabled={saving}
// //             className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-2xl flex items-center gap-2 ml-auto"
// //           >
// //             <Save size={18} />
// //             {saving ? "Saving..." : "Save Changes"}
// //           </button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Save,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import Swal from "sweetalert2";
import UserHeader from "@/components/UserHeader";

export default function AccountInfoPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [saving, setSaving] = useState(false);

  const [userEmail, setUserEmail] = useState("");

  const [formData, setFormData] = useState({
    newEmail: "",
    currentPassword: "",
    newPassword: "",
  });

  // ================= LOAD USER =================
  useEffect(() => {
    const email = localStorage.getItem("loggedInEmail");

    if (email) {
      setUserEmail(email);
    }
  }, []);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SAVE =================
  const handleSave = async () => {
    try {
      setSaving(true);

      const res = await fetch("/api/account/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          newEmail: formData.newEmail,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await res.json();

      if (data.success) {
        if (formData.newEmail) {
          localStorage.setItem("loggedInEmail", formData.newEmail);
          setUserEmail(formData.newEmail);
        }

        Swal.fire({
          title: "Account Updated 🚀",
          text: "Your account information has been updated successfully.",
          icon: "success",
          background: "#0f172a",
          color: "#fff",
          confirmButtonColor: "#2563eb",
          timer: 3500,
        });

        setFormData({
          newEmail: "",
          currentPassword: "",
          newPassword: "",
        });
      } else {
        Swal.fire({
          title: "Update Failed",
          text: data.error,
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <UserHeader />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900" />

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">

          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500 rounded-full blur-3xl" />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

            {/* LEFT */}
            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-white text-sm">

                <ShieldCheck size={16} />

                Secure Account Settings

              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white mt-6 leading-tight">

                Account Info

              </h1>

              <p className="text-blue-100 text-sm sm:text-base mt-5 leading-relaxed max-w-2xl">

                Manage your login email,
                password, and contact
                numbers securely from
                here. Keep your account
                protected with advanced
                security and premium
                profile settings.

              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">

                <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">

                  <p className="text-blue-100 text-xs uppercase">
                    Security
                  </p>

                  <h3 className="text-2xl font-bold text-green-300 mt-2">
                    Strong
                  </h3>

                </div>

                <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">

                  <p className="text-blue-100 text-xs uppercase">
                    Status
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-2">
                    Active
                  </h3>

                </div>

                <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">

                  <p className="text-blue-100 text-xs uppercase">
                    Verified
                  </p>

                  <h3 className="text-2xl font-bold text-cyan-300 mt-2">
                    Yes
                  </h3>

                </div>

                <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">

                  <p className="text-blue-100 text-xs uppercase">
                    Protection
                  </p>

                  <h3 className="text-2xl font-bold text-yellow-300 mt-2">
                    99%
                  </h3>

                </div>

              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full max-w-md">

              <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-blue-100 text-sm">
                      Account Overview
                    </p>

                    <h2 className="text-white text-2xl font-black mt-1">
                      Security Center
                    </h2>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">

                    <Sparkles className="text-white" />

                  </div>
                </div>

                <div className="mt-10 text-center">

                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mx-auto shadow-2xl shadow-cyan-500/40">

                    <ShieldCheck
                      size={45}
                      className="text-white"
                    />

                  </div>

                  <h3 className="text-2xl font-black text-white mt-5">

                    Premium Security

                  </h3>

                  <p className="text-blue-100 text-sm mt-3 leading-relaxed">

                    Your account is secured
                    with encrypted protection
                    and professional-grade
                    security layers.

                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 bg-green-500/20 border border-green-400/20 text-green-200 px-4 py-2 rounded-full text-sm">

                    <CheckCircle2 size={16} />

                    Fully Protected

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
     <section className="max-w-5xl mx-auto px-6 py-12">

  {/* HEADER CARD */}
  <div className="mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">

    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 blur-3xl rounded-full"></div>
    </div>

    <div className="relative">
      <h2 className="text-3xl font-black">
        Account Information
      </h2>

      <p className="text-blue-100 mt-2 text-sm">
        Update your account credentials and contact details securely with encrypted protection.
      </p>
    </div>
  </div>

  {/* FORM CARD */}
  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 grid md:grid-cols-2 gap-6">

    {/* EMAIL */}
    <div className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition">
      <label className="text-sm font-semibold text-gray-600">
        New Email
      </label>

      <div className="relative mt-2">
        <Mail className="absolute left-3 top-3 text-gray-400" />

        <input
          name="newEmail"
          value={formData.newEmail}
          onChange={handleChange}
          className="w-full pl-10 p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
          placeholder="Update email"
        />
      </div>
    </div>

    {/* CURRENT PASSWORD */}
    <div className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition">
      <label className="text-sm font-semibold text-gray-600">
        Current Password
      </label>

      <div className="relative mt-2">
        <Lock className="absolute left-3 top-3 text-gray-400" />

        <input
          type={showPassword ? "text" : "password"}
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          className="w-full pl-10 pr-10 p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>

    {/* NEW PASSWORD */}
    <div className="bg-gray-50 rounded-2xl p-5 md:col-span-2 hover:shadow-md transition">
      <label className="text-sm font-semibold text-gray-600">
        New Password
      </label>

      <div className="relative mt-2">
        <Lock className="absolute left-3 top-3 text-gray-400" />

        <input
          type={showNewPassword ? "text" : "password"}
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          className="w-full pl-10 pr-10 p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        <button
          type="button"
          onClick={() => setShowNewPassword(!showNewPassword)}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>

  </div>

  {/* SAVE BUTTON */}
  <div className="mt-8 flex justify-end">
    <button
      onClick={handleSave}
      disabled={saving}
      className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-2xl shadow-lg flex items-center gap-2 hover:shadow-xl transition"
    >
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

      <Save size={18} />
      {saving ? "Saving..." : "Save Changes"}
    </button>
  </div>

</section>
    </div>
  );
}