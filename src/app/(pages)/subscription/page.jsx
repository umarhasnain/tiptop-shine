"use client";
import { Check, Crown, Sparkles } from "lucide-react";

export default function SubscriptionPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eef2ff]">

      {/* ================= SIDEBAR ================= */}
      <aside className="hidden lg:flex w-72 bg-white/80 backdrop-blur-xl border-r border-gray-200 p-8 flex-col justify-between shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 tracking-tight">
            TipTop Shine
          </h2>

          <nav className="mt-12 space-y-5 text-sm font-medium">
            <p className="text-gray-400 hover:text-indigo-600 cursor-pointer">Dashboard</p>
            <p className="text-gray-400 hover:text-indigo-600 cursor-pointer">Wallet</p>
            <p className="text-indigo-600 font-semibold">Subscription</p>
            <p className="text-gray-400 hover:text-indigo-600 cursor-pointer">Leads</p>
            <p className="text-gray-400 hover:text-indigo-600 cursor-pointer">Settings</p>
          </nav>
        </div>

        <div className="bg-indigo-600 text-white rounded-2xl p-5 shadow-xl">
          <h4 className="font-semibold text-lg">Go Elite 🚀</h4>
          <p className="text-sm mt-2 text-indigo-200">
            Unlock premium ranking & discounted leads.
          </p>
          <button className="mt-4 w-full bg-white text-indigo-700 py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
            Upgrade Now
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 px-6 md:px-12 py-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
            Flexible Growth Plans
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Scale Faster with Smart Monetization
          </h1>

          <p className="mt-4 text-gray-500 text-lg">
            Choose the right plan to unlock discounted leads, higher ranking,
            and free monthly credits.
          </p>
        </div>

        {/* ================= PRICING CARDS ================= */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {/* BASIC */}
          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-gray-500 text-sm mt-2">
              Perfect for new professionals.
            </p>

            <h2 className="mt-6 text-5xl font-bold">
              $49<span className="text-base text-gray-500 font-medium">/mo</span>
            </h2>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-500" /> 100 Free Credits
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-500" /> Standard Lead Rate
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-500" /> Organic Ranking
              </li>
            </ul>

            <button className="mt-10 w-full border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>

          {/* PRO (HIGHLIGHTED) */}
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-2xl scale-105">
            <div className="bg-white rounded-3xl p-8 h-full">
              <span className="absolute -top-4 right-6 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                Most Popular
              </span>

              <h3 className="text-xl font-semibold flex items-center gap-2">
                Pro <Sparkles size={18} className="text-indigo-600" />
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Designed for growing businesses.
              </p>

              <h2 className="mt-6 text-5xl font-bold text-indigo-600">
                $149<span className="text-base text-gray-500 font-medium">/mo</span>
              </h2>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-green-500" /> 500 Free Credits
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-green-500" /> 20% Lead Discount
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-green-500" /> Priority Ranking
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-green-500" /> Weekly Profile Boost
                </li>
              </ul>

              <button className="mt-10 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
                Upgrade Plan
              </button>
            </div>
          </div>

          {/* ELITE */}
          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              Elite <Crown size={18} className="text-yellow-500" />
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Maximum visibility & savings.
            </p>

            <h2 className="mt-6 text-5xl font-bold">
              $399<span className="text-base text-gray-500 font-medium">/mo</span>
            </h2>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-500" /> Unlimited Credits
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-500" /> 35% Lead Discount
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-500" /> Top Ranking Badge
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-500" /> Always-On Boost
              </li>
            </ul>

            <button className="mt-10 w-full border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Contact Sales
            </button>
          </div>
        </div>

        {/* ================= COMPARISON TABLE ================= */}
        <div className="mt-24 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 border-b">
            <h2 className="text-2xl font-bold text-gray-900">
              Compare Every Detail
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="p-5">Feature</th>
                  <th className="p-5">Starter</th>
                  <th className="p-5 text-indigo-600">Pro</th>
                  <th className="p-5">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-5">Monthly Credits</td>
                  <td className="p-5">100</td>
                  <td className="p-5 font-semibold text-indigo-600">500</td>
                  <td className="p-5">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-5">Lead Discount</td>
                  <td className="p-5">Standard</td>
                  <td className="p-5">20% Off</td>
                  <td className="p-5">35% Off</td>
                </tr>
                <tr>
                  <td className="p-5">Search Ranking</td>
                  <td className="p-5">Organic</td>
                  <td className="p-5">Priority</td>
                  <td className="p-5">Top Spotlight</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}