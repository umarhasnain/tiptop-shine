"use client";

import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  Globe,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Star,
  Award,
  Camera,
  Edit3,
  Save,
  X,
} from "lucide-react";
import Swal from "sweetalert2";

import UserHeader from "@/components/UserHeader";

export default function MyProfilePage() {
  const [professional, setProfessional] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [editing, setEditing] =
    useState(false);

  const [saving, setSaving] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      company: "",
      postcode: "",
      hasWebsite: "",
    });

  // ================= LOAD USER =================
  useEffect(() => {
    const fetchProfessional = async () => {
      try {
        const email =
          localStorage.getItem(
            "loggedInEmail"
          );

        if (!email) return;

        const res = await fetch(
          "/api/professionals"
        );

        const data = await res.json();

        const user =
          data?.professionals?.find(
            (p) => p.email === email
          );

        setProfessional(user);

        setFormData({
          name: user?.name || "",
          phone: user?.phone || "",
          company: user?.company || "",
          postcode:
            user?.postcode || "",
          hasWebsite:
            user?.hasWebsite || "",
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessional();
  }, []);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // ================= SAVE PROFILE =================
  const handleSave = async () => {
    try {
      setSaving(true);

      const res = await fetch(
        "/api/professionals/update-profile",
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email:
              professional?.email,
            ...formData,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setProfessional(
          data.professional
        );

        setEditing(false);

        // alert(
        //   "Profile updated successfully"
        // );
        Swal.fire({
  html: `
    <div style="padding-top:10px">

      <div style="
        width:90px;
        height:90px;
        margin:auto;
        border-radius:999px;
        background:linear-gradient(135deg,#22c55e,#16a34a);
        display:flex;
        align-items:center;
        justify-content:center;
        box-shadow:0 10px 40px rgba(34,197,94,.4);
      ">
        <span style="
          color:white;
          font-size:42px;
        ">
          ✓
        </span>
      </div>

      <h2 style="
        color:white;
        font-size:32px;
        font-weight:900;
        margin-top:24px;
      ">
        Profile Updated
      </h2>

      <p style="
        color:#d1d5db;
        margin-top:10px;
        line-height:1.7;
        font-size:15px;
      ">
        Your professional profile
        has been updated successfully.
      </p>

    </div>
  `,

  showConfirmButton: true,

  confirmButtonText: "Awesome 🚀",

  background:
    "rgba(17,24,39,0.92)",

  color: "#fff",

  backdrop: `
    rgba(0,0,0,0.7)
    left top
    no-repeat
  `,

  confirmButtonColor: "#2563eb",

  timer: 4000,

  timerProgressBar: true,

  customClass: {
    popup:
      "rounded-[32px] border border-white/10 backdrop-blur-xl shadow-2xl",

    confirmButton:
      "rounded-2xl px-8 py-3 text-sm font-bold",
  },
});
      } else {
        alert(
          data.error ||
            "Update failed"
        );
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  // ================= CANCEL EDIT =================
  const handleCancel = () => {
    setEditing(false);

    setFormData({
      name:
        professional?.name || "",
      phone:
        professional?.phone || "",
      company:
        professional?.company || "",
      postcode:
        professional?.postcode || "",
      hasWebsite:
        professional?.hasWebsite || "",
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <UserHeader />

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700" />

        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-52 h-52 bg-white rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* LEFT */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md mb-6">
                <ShieldCheck size={16} />
                Professional Profile
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                My Profile
              </h1>

              <p className="text-blue-100 text-sm sm:text-base mt-5 leading-relaxed max-w-2xl">
                Your profile showcases
                your strengths.
                Highlight what sets you
                apart and why clients
                should choose your
                services.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-md">
                  <p className="text-blue-100 text-xs uppercase tracking-wide">
                    Services
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-1">
                    {professional
                      ?.serviceName
                      ?.length || 0}
                  </h3>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-md">
                  <p className="text-blue-100 text-xs uppercase tracking-wide">
                    Credits
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-1">
                    {professional?.credits ||
                      0}
                  </h3>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-md">
                  <p className="text-blue-100 text-xs uppercase tracking-wide">
                    Status
                  </p>

                  <h3 className="text-lg font-bold text-green-300 mt-1">
                    Active
                  </h3>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-md">
                  <p className="text-blue-100 text-xs uppercase tracking-wide">
                    Trust Score
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-1">
                    98%
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT PROFILE CARD */}
            <div className="w-full max-w-md">
              <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl">
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">
                      Account Overview
                    </p>

                    <h2 className="text-white text-2xl font-bold mt-1">
                      Professional
                      Profile
                    </h2>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                    <Sparkles className="text-white" />
                  </div>
                </div>

                {/* PROFILE */}
                <div className="mt-8 text-center">
                  <div className="relative w-28 h-28 mx-auto">
                    <div className="w-28 h-28 rounded-full bg-white/15 border-4 border-white/20 flex items-center justify-center backdrop-blur-md overflow-hidden">
                      <User
                        size={50}
                        className="text-white"
                      />
                    </div>

                    <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-lg hover:scale-105 transition">
                      <Camera size={18} />
                    </button>
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-5">
                    {professional?.name ||
                      "Professional User"}
                  </h3>

                  <p className="text-blue-100 mt-1 text-sm">
                    {professional?.company ||
                      "Premium Service Provider"}
                  </p>

                  <div className="flex items-center justify-center gap-1 mt-3 text-yellow-300">
                    <Star
                      size={16}
                      fill="currentColor"
                    />
                    <Star
                      size={16}
                      fill="currentColor"
                    />
                    <Star
                      size={16}
                      fill="currentColor"
                    />
                    <Star
                      size={16}
                      fill="currentColor"
                    />
                    <Star
                      size={16}
                      fill="currentColor"
                    />
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-200 px-4 py-2 rounded-full text-sm">
                    <CheckCircle2 size={16} />
                    Verified Professional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN PROFILE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* ================= LEFT INFO ================= */}
          <div className="xl:col-span-2 space-y-6">
            {/* PROFILE DETAILS */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Personal
                    Information
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Your professional
                    account details.
                  </p>
                </div>

                {!editing ? (
                  <button
                    onClick={() =>
                      setEditing(true)
                    }
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl transition"
                  >
                    <Edit3 size={16} />
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={
                        handleSave
                      }
                      disabled={
                        saving
                      }
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl transition"
                    >
                      <Save size={16} />
                      {saving
                        ? "Saving..."
                        : "Save"}
                    </button>

                    <button
                      onClick={
                        handleCancel
                      }
                      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-2xl transition"
                    >
                      <X size={16} />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* NAME */}
                <div className="bg-gray-50 rounded-2xl p-5">
                  <label className="text-xs text-gray-500 uppercase tracking-wide">
                    Full Name
                  </label>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <User size={22} />
                    </div>

                    {editing ? (
                      <input
                        type="text"
                        name="name"
                        value={
                          formData.name
                        }
                        onChange={
                          handleChange
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <h3 className="font-bold text-gray-900">
                        {loading
                          ? "Loading..."
                          : professional?.name ||
                            "Not Added"}
                      </h3>
                    )}
                  </div>
                </div>

                {/* EMAIL */}
                <div className="bg-gray-50 rounded-2xl p-5">
                  <label className="text-xs text-gray-500 uppercase tracking-wide">
                    Email Address
                  </label>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                      <Mail size={22} />
                    </div>

                    <h3 className="font-bold text-gray-900 break-all">
                      {loading
                        ? "Loading..."
                        : professional?.email ||
                          "Not Added"}
                    </h3>
                  </div>
                </div>

                {/* PHONE */}
                <div className="bg-gray-50 rounded-2xl p-5">
                  <label className="text-xs text-gray-500 uppercase tracking-wide">
                    Phone Number
                  </label>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                      <Phone size={22} />
                    </div>

                    {editing ? (
                      <input
                        type="text"
                        name="phone"
                        value={
                          formData.phone
                        }
                        onChange={
                          handleChange
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <h3 className="font-bold text-gray-900">
                        {professional?.phone ||
                          "Not Added"}
                      </h3>
                    )}
                  </div>
                </div>

                {/* COMPANY */}
                <div className="bg-gray-50 rounded-2xl p-5">
                  <label className="text-xs text-gray-500 uppercase tracking-wide">
                    Company
                  </label>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center">
                      <Building2 size={22} />
                    </div>

                    {editing ? (
                      <input
                        type="text"
                        name="company"
                        value={
                          formData.company
                        }
                        onChange={
                          handleChange
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <h3 className="font-bold text-gray-900">
                        {professional?.company ||
                          "Not Added"}
                      </h3>
                    )}
                  </div>
                </div>

                {/* POSTCODE */}
                <div className="bg-gray-50 rounded-2xl p-5">
                  <label className="text-xs text-gray-500 uppercase tracking-wide">
                    Postcode
                  </label>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
                      <MapPin size={22} />
                    </div>

                    {editing ? (
                      <input
                        type="text"
                        name="postcode"
                        value={
                          formData.postcode
                        }
                        onChange={
                          handleChange
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <h3 className="font-bold text-gray-900">
                        {professional?.postcode ||
                          "Not Added"}
                      </h3>
                    )}
                  </div>
                </div>

                {/* WEBSITE */}
                <div className="bg-gray-50 rounded-2xl p-5">
                  <label className="text-xs text-gray-500 uppercase tracking-wide">
                    Website
                  </label>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                      <Globe size={22} />
                    </div>

                    {editing ? (
                      <input
                        type="text"
                        name="hasWebsite"
                        value={
                          formData.hasWebsite
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="https://example.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <h3 className="font-bold text-gray-900 break-all">
                        {professional?.hasWebsite ||
                          "Not Added"}
                      </h3>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICES */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">
                  My Services
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Services you
                  currently provide.
                </p>
              </div>

              <div className="p-6">
                {professional
                  ?.serviceName
                  ?.length ? (
                  <div className="flex flex-wrap gap-3">
                    {professional.serviceName.map(
                      (
                        service,
                        index
                      ) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 px-5 py-3 rounded-2xl font-semibold text-sm flex items-center gap-2"
                        >
                          <Briefcase size={16} />
                          {service}
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Briefcase
                      size={42}
                      className="mx-auto text-gray-300"
                    />

                    <p className="text-gray-500 mt-4">
                      No services added
                      yet.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-6">
            {/* TRUST CARD */}
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 rounded-3xl p-6 text-white shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                  <Award size={30} />
                </div>

                <h2 className="text-2xl font-black">
                  Premium
                  Professional
                </h2>

                <p className="text-blue-100 text-sm mt-3 leading-relaxed">
                  Your profile is
                  optimized to build
                  trust and increase
                  client conversion
                  rates.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} />
                    Verified
                    Professional
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} />
                    Trusted By
                    Clients
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} />
                    High Visibility
                    Profile
                  </div>
                </div>
              </div>
            </div>

            {/* PROFILE COMPLETION */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900">
                Profile Completion
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Complete your profile
                to attract more
                clients.
              </p>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Completion
                  </span>

                  <span className="text-sm font-bold text-blue-700">
                    92%
                  </span>
                </div>

                <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
