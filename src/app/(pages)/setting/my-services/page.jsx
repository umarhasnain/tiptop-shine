"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import UserHeader from "@/components/UserHeader";

export default function LeadSettingsPage() {
  const [professional, setProfessional] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================= LOAD USER =================
  useEffect(() => {
    const fetchProfessional = async () => {
      try {
        const email =
          localStorage.getItem("loggedInEmail");

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
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessional();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <UserHeader />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700" />

        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md mb-5">
                <ShieldCheck size={16} />
                Professional Lead Settings
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Manage Your
                <span className="block text-blue-100">
                  Services & Locations
                </span>
              </h1>

              <p className="text-blue-100 text-sm sm:text-base mt-5 leading-relaxed max-w-xl">
                Review your services, update your
                working areas, and optimize your
                lead visibility with a premium
                professional dashboard experience.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">

                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-md">
                  <p className="text-blue-100 text-xs uppercase tracking-wide">
                    Services
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-1">
                    {professional?.serviceName
                      ?.length || 0}
                  </h3>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-md">
                  <p className="text-blue-100 text-xs uppercase tracking-wide">
                    Locations
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-1">
                    {professional?.postcode
                      ? "1"
                      : "0"}
                  </h3>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-md col-span-2 sm:col-span-1">
                  <p className="text-blue-100 text-xs uppercase tracking-wide">
                    Status
                  </p>

                  <h3 className="text-lg font-bold text-green-300 mt-1">
                    Active
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full max-w-md">
              <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-blue-100 text-sm">
                      Account Overview
                    </p>

                    <h3 className="text-white text-2xl font-bold mt-1">
                      Lead Settings
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                    <Sparkles className="text-white" />
                  </div>
                </div>

                <div className="space-y-4">

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                        <Briefcase className="text-white" />
                      </div>

                      <div>
                        <p className="text-white font-semibold">
                          My Services
                        </p>

                        <p className="text-blue-100 text-sm">
                          Review & manage your
                          services
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                        <MapPin className="text-white" />
                      </div>

                      <div>
                        <p className="text-white font-semibold">
                          My Locations
                        </p>

                        <p className="text-blue-100 text-sm">
                          Access your working
                          locations
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SETTINGS CARDS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ================= SERVICES ================= */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    My Services
                  </h2>

                  <p className="text-blue-100 mt-1 text-sm">
                    Check and review your active
                    services.
                  </p>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-md">
                  <Briefcase className="text-white" size={30} />
                </div>
              </div>
            </div>

            <div className="p-6">

              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-16 rounded-2xl bg-gray-100 animate-pulse"
                    />
                  ))}
                </div>
              ) : professional?.serviceName
                  ?.length ? (
                <div className="space-y-4">

                  {professional.serviceName.map(
                    (service, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border border-gray-100 rounded-2xl p-4 hover:border-blue-200 hover:bg-blue-50/40 transition"
                      >
                        <div className="flex items-center gap-3">

                          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                            <CheckCircle2 size={22} />
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {service}
                            </h3>

                            <p className="text-sm text-gray-500">
                              Active Service
                            </p>
                          </div>
                        </div>

                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                    )
                  )}

                </div>
              ) : (
                <div className="text-center py-14">
                  <Briefcase
                    size={42}
                    className="mx-auto text-gray-300"
                  />

                  <h3 className="mt-4 text-lg font-bold text-gray-700">
                    No Services Found
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Your selected services will
                    appear here.
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* ================= LOCATIONS ================= */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6">
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    My Locations
                  </h2>

                  <p className="text-indigo-100 mt-1 text-sm">
                    Access and manage your service
                    locations.
                  </p>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-md">
                  <MapPin className="text-white" size={30} />
                </div>
              </div>
            </div>

            <div className="p-6">

              {loading ? (
                <div className="h-28 rounded-2xl bg-gray-100 animate-pulse" />
              ) : professional?.postcode ? (
                <div className="space-y-4">

                  <div className="border border-gray-100 rounded-2xl p-5 hover:border-indigo-200 hover:bg-indigo-50/40 transition">

                    <div className="flex items-start gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
                        <MapPin size={26} />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">
                          Primary Location
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                          Service coverage based on
                          your registered area.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">

                          <div className="bg-gray-50 rounded-2xl p-4">
                            <p className="text-xs text-gray-500 uppercase tracking-wide">
                              Postcode
                            </p>

                            <h4 className="font-bold text-gray-900 mt-1">
                              {
                                professional.postcode
                              }
                            </h4>
                          </div>

                          <div className="bg-gray-50 rounded-2xl p-4">
                            <p className="text-xs text-gray-500 uppercase tracking-wide">
                              Radius
                            </p>

                            <h4 className="font-bold text-gray-900 mt-1">
                              {
                                professional.miles ||
                                "N/A"
                              }{" "}
                              Miles
                            </h4>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="text-center py-14">
                  <MapPin
                    size={42}
                    className="mx-auto text-gray-300"
                  />

                  <h3 className="mt-4 text-lg font-bold text-gray-700">
                    No Location Added
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Your working locations will
                    appear here.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* ================= FOOTER ACTION ================= */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden relative">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Keep Your Profile Updated
              </h2>

              <p className="text-blue-100 mt-3 text-sm sm:text-base leading-relaxed">
                Updating your services and
                locations helps you receive more
                accurate and high-converting leads.
              </p>
            </div>

            <Link
              href="/settings/profile"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 transition px-6 py-3 rounded-2xl font-bold shadow-lg"
            >
              Manage Profile
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

      </section>
    </div>
  );
}