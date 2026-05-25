'use client';

import { useEffect, useState } from "react";
import {
  Coins,
  TrendingUp,
  Wallet,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  Sparkles,
  Clock3,
} from "lucide-react";
import UserHeader from "@/components/UserHeader";

export default function MyCreditsPage() {
  const [professional, setProfessional] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // ================= LOAD USER =================
  useEffect(() => {
    const fetchUser = async () => {
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
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // ================= CALCULATIONS =================
  const credits =
    professional?.credits || 0;

  const usedCredits = 145;
  const totalSpent = 320;
  const unlockedLeads = 18;

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <UserHeader />

      <div className="p-4 sm:p-5 lg:p-8">

        {/* ================= HERO ================= */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-5 sm:p-8 lg:p-10 text-white shadow-2xl">

          {/* BG EFFECT */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md mb-5">
                <Sparkles size={16} />
                Premium Credit Wallet
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Manage Your
                <span className="block mt-1">
                  Credits & Leads
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-blue-100 leading-relaxed max-w-xl">
                Track your available credits,
                purchased leads, and spending
                history in one premium dashboard.
              </p>

              {/* STATS */}
              <div className="mt-8 flex flex-wrap gap-3">

                <div className="bg-white/15 border border-white/20 backdrop-blur-md px-4 py-3 rounded-2xl min-w-[130px]">
                  <p className="text-xs text-blue-100">
                    Total Leads
                  </p>

                  <h3 className="text-2xl font-bold mt-1">
                    {unlockedLeads}
                  </h3>
                </div>

                <div className="bg-white/15 border border-white/20 backdrop-blur-md px-4 py-3 rounded-2xl min-w-[130px]">
                  <p className="text-xs text-blue-100">
                    Credits Used
                  </p>

                  <h3 className="text-2xl font-bold mt-1">
                    {usedCredits}
                  </h3>
                </div>

              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full xl:w-[420px]">

              <div className="bg-white/15 border border-white/20 backdrop-blur-xl rounded-[30px] p-6 sm:p-7 shadow-2xl">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-100">
                      Available Balance
                    </p>

                    <h2 className="text-5xl font-black mt-3">
                      {loading
                        ? "..."
                        : credits}
                    </h2>

                    <p className="mt-2 text-blue-100 text-sm">
                      Active credits in wallet
                    </p>
                  </div>

                  <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center">
                    <Coins size={42} />
                  </div>
                </div>

                {/* PROGRESS */}
                <div className="mt-8">

                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-blue-100">
                      Wallet Status
                    </span>

                    <span className="font-semibold">
                      82%
                    </span>
                  </div>

                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-[82%] bg-white rounded-full" />
                  </div>

                </div>

                {/* ACTION */}
                <button className="mt-8 w-full bg-white text-blue-700 hover:bg-blue-50 transition-all duration-200 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg">
                  Buy More Credits
                  <ArrowUpRight size={18} />
                </button>

              </div>

            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">

          {/* CARD 1 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Current Credits
                </p>

                <h3 className="text-3xl font-black mt-2 text-gray-900">
                  {credits}
                </h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Wallet size={30} />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-green-600 text-sm font-semibold">
              <TrendingUp size={16} />
              +12% this month
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Total Spent
                </p>

                <h3 className="text-3xl font-black mt-2 text-gray-900">
                  {totalSpent}
                </h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center">
                <CreditCard size={30} />
              </div>
            </div>

            <div className="mt-5 text-sm text-gray-500">
              On premium leads
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Purchased Leads
                </p>

                <h3 className="text-3xl font-black mt-2 text-gray-900">
                  {unlockedLeads}
                </h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                <CheckCircle2 size={30} />
              </div>
            </div>

            <div className="mt-5 text-sm text-gray-500">
              Successfully unlocked
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Membership
                </p>

                <h3 className="text-2xl font-black mt-2 text-gray-900">
                  {professional?.subscription
                    ?.plan || "Free"}
                </h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center">
                <ShieldCheck size={30} />
              </div>
            </div>

            <div className="mt-5 text-sm text-gray-500">
              Active subscription
            </div>
          </div>

        </div>

        {/* ================= ACTIVITY ================= */}
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6 mt-6">

          {/* RECENT TRANSACTIONS */}
          <div className="2xl:col-span-2 bg-white rounded-[30px] p-5 sm:p-6 shadow-sm border border-gray-100">

            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Recent Credit Activity
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Latest purchases and deductions
                </p>
              </div>
            </div>

            <div className="space-y-4">

              {[
                {
                  title:
                    "Lead Purchase",
                  credits: "-25",
                  service:
                    "App Development",
                },
                {
                  title:
                    "Credit Top Up",
                  credits: "+100",
                  service:
                    "Wallet Recharge",
                },
                {
                  title:
                    "Lead Purchase",
                  credits: "-15",
                  service:
                    "Interior Design",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-50 hover:bg-gray-100 transition-all duration-200 rounded-2xl p-4"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <Coins
                        size={24}
                        className="text-blue-600"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {
                          item.service
                        }
                      </p>
                    </div>

                  </div>

                  <div className="text-left sm:text-right">
                    <h3
                      className={`text-2xl font-black ${
                        item.credits.startsWith(
                          "+"
                        )
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {item.credits}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      Today
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* SIDE PANEL */}
          <div className="space-y-6">

            {/* SECURITY */}
            <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">

              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                <ShieldCheck size={30} />
              </div>

              <h3 className="text-2xl font-black mt-5">
                Secure Payments
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                Your wallet and lead purchases
                are fully encrypted and secured
                with premium payment protection.
              </p>

            </div>

            {/* PLAN */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-[30px] p-6 shadow-xl overflow-hidden relative">

              <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock3 size={16} />
                  Subscription Plan
                </div>

                <h3 className="text-3xl font-black mt-4">
                  {professional?.subscription
                    ?.plan || "Free"}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  Upgrade your membership to get
                  more leads, premium visibility,
                  and bonus credits every month.
                </p>

                <button className="mt-6 w-full bg-white text-black hover:bg-gray-100 transition-all duration-200 py-3 rounded-2xl font-bold">
                  Upgrade Plan
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}