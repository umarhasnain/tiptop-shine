"use client";
import UserHeader from "@/components/UserHeader";
import { Check, Crown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function SubscriptionPage() {
  return (
    <>
      <UserHeader />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* ================= HERO SECTION ================= */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              Flexible Growth Plans
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Grow Your Business <br className="hidden sm:block" />
              with Smart Lead Monetization
            </h1>

            <p className="mt-5 text-gray-600 text-lg">
              Get monthly credits, discounted lead pricing, and higher ranking
              to win more customers faster.
            </p>
          </div>

          {/* ================= PRICING CARDS ================= */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* STARTER */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
              <p className="text-gray-500 text-sm mt-2">
                Ideal for professionals just getting started.
              </p>

              <div className="mt-8">
                <span className="text-5xl font-bold text-gray-900">$49</span>
                <span className="text-gray-500 text-base ml-1">/month</span>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-gray-700 flex-1">
                <Feature>100 Monthly Credits</Feature>
                <Feature>Standard Lead Rate</Feature>
                <Feature>Organic Ranking</Feature>
              </ul>

              <button className="mt-10 w-full border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>

            {/* PRO (Highlighted) */}
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-indigo-600 to-purple-600 shadow-2xl scale-100 md:scale-105">
              <div className="bg-white rounded-3xl p-8 flex flex-col h-full">

                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </span>

                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  Pro <Sparkles size={18} className="text-indigo-600" />
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Designed for growing & serious businesses.
                </p>

                <div className="mt-8">
                  <span className="text-5xl font-bold text-indigo-600">$149</span>
                  <span className="text-gray-500 text-base ml-1">/month</span>
                </div>

                <ul className="mt-8 space-y-4 text-sm text-gray-700 flex-1">
                  <Feature>500 Monthly Credits</Feature>
                  <Feature>20% Lead Discount</Feature>
                  <Feature>Priority Search Ranking</Feature>
                  <Feature>Weekly Profile Boost</Feature>
                </ul>

                <button className="mt-10 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg">
                  Upgrade to Pro
                </button>
              </div>
            </div>

            {/* ELITE */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                Elite <Crown size={18} className="text-yellow-500" />
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Maximum visibility and highest savings.
              </p>

              <div className="mt-8">
                <span className="text-5xl font-bold text-gray-900">$399</span>
                <span className="text-gray-500 text-base ml-1">/month</span>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-gray-700 flex-1">
                <Feature>Unlimited Credits</Feature>
                <Feature>35% Lead Discount</Feature>
                <Feature>Top Ranking Badge</Feature>
                <Feature>Always-On Boost</Feature>
              </ul>

              <button className="mt-10 w-full border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                Contact Sales
              </button>
            </div>

          </div>

          {/* ================= COMPARISON TABLE ================= */}
          <div className="mt-28">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Compare Plans in Detail
              </h2>
              <p className="text-gray-500 mt-3">
                Choose the right level of growth for your business.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                    <tr>
                      <th className="p-6">Feature</th>
                      <th className="p-6">Starter</th>
                      <th className="p-6 text-indigo-600">Pro</th>
                      <th className="p-6">Elite</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <Row feature="Monthly Credits" starter="100" pro="500" elite="Unlimited" highlight />
                    <Row feature="Lead Discount" starter="Standard" pro="20%" elite="35%" />
                    <Row feature="Search Ranking" starter="Organic" pro="Priority" elite="Top Spotlight" />
                    <Row feature="Profile Boost" starter="—" pro="Weekly" elite="Always On" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="mt-28 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to grow faster?
            </h3>
            <p className="text-gray-500 mt-3">
              Upgrade your plan today and start winning more customers.
            </p>
            <Link href="/">
              <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md">
                Go to Dashboard
              </button>
            </Link>
          </div>

        </main>
      </div>
    </>
  );
}

/* FEATURE ITEM */
function Feature({ children }) {
  return (
    <li className="flex items-center gap-3">
      <Check size={18} className="text-green-500" />
      {children}
    </li>
  );
}

/* TABLE ROW */
function Row({ feature, starter, pro, elite, highlight }) {
  return (
    <tr>
      <td className="p-6 font-medium text-gray-700">{feature}</td>
      <td className="p-6">{starter}</td>
      <td className={`p-6 ${highlight ? "font-semibold text-indigo-600" : ""}`}>
        {pro}
      </td>
      <td className="p-6">{elite}</td>
    </tr>
  );
}