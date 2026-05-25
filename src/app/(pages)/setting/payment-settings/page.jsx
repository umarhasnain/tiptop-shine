'use client';

import {
  CreditCard,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Wallet,
  Plus,
  Trash2,
  BellRing,
} from "lucide-react";

import UserHeader from "@/components/UserHeader";

export default function PaymentSettingsPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <UserHeader />

      <div className="p-4 sm:p-6 lg:p-8">

        {/* HERO */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-6 sm:p-8 lg:p-10 text-white shadow-2xl">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md mb-5">
                <ShieldCheck size={16} />
                Secure Payment Settings
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Payment &
                <span className="block mt-1">
                  Wallet Settings
                </span>
              </h1>

              <p className="mt-4 text-blue-100 max-w-xl text-sm sm:text-base leading-relaxed">
                Manage your cards, payment methods,
                billing preferences, and secure wallet
                settings in one place.
              </p>
            </div>

            <div className="w-full xl:w-[360px] bg-white/15 border border-white/20 backdrop-blur-xl rounded-[30px] p-6 shadow-2xl">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-100">
                    Default Method
                  </p>

                  <h2 className="text-3xl font-black mt-2">
                    VISA
                  </h2>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Wallet size={30} />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-blue-100">
                  Ending in
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  •••• 4587
                </h3>
              </div>

            </div>
          </div>
        </div>

        {/* PAYMENT METHODS */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

          {/* LEFT */}
          <div className="xl:col-span-2 space-y-6">

            {/* CARD */}
            <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

                <div>
                  <h2 className="text-2xl font-black">
                    Saved Payment Methods
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Securely manage your cards and wallets
                  </p>
                </div>

                <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white px-5 py-3 rounded-2xl font-semibold">
                  <Plus size={18} />
                  Add New Card
                </button>
              </div>

              {/* CARD ITEM */}
              <div className="border border-gray-200 rounded-[28px] p-5 hover:border-blue-300 transition-all duration-200">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <CreditCard size={30} />
                    </div>

                    <div>
                      <h3 className="text-lg font-black">
                        VISA Classic
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        **** **** **** 4587
                      </p>

                      <div className="mt-3 inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        <CheckCircle2 size={14} />
                        Default Method
                      </div>
                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <button className="px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-200 font-semibold">
                      Edit
                    </button>

                    <button className="w-11 h-11 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-200 flex items-center justify-center">
                      <Trash2 size={18} />
                    </button>

                  </div>

                </div>
              </div>

            </div>

            {/* BILLING INFO */}
            <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">

              <h2 className="text-2xl font-black mb-6">
                Billing Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Full Name
                  </label>

                  <input
                    type="text"
                    defaultValue="John Smith"
                    className="mt-2 w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Email Address
                  </label>

                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="mt-2 w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-gray-600">
                    Billing Address
                  </label>

                  <input
                    type="text"
                    defaultValue="Street 12, New York"
                    className="mt-2 w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none focus:border-blue-500"
                  />
                </div>

              </div>

              <button className="mt-6 bg-black hover:bg-gray-900 transition-all duration-200 text-white px-6 py-3 rounded-2xl font-bold">
                Save Changes
              </button>

            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* SECURITY */}
            <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">

              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                <Lock size={30} />
              </div>

              <h3 className="text-2xl font-black mt-5">
                Secure Payments
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                All your payment information is encrypted
                and securely stored with advanced protection.
              </p>

            </div>

            {/* NOTIFICATIONS */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-[30px] p-6 shadow-xl">

              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <BellRing size={30} />
              </div>

              <h3 className="text-2xl font-black mt-5">
                Billing Alerts
              </h3>

              <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                Receive notifications for payments,
                subscriptions, invoices, and renewals.
              </p>

              <div className="mt-6 flex items-center justify-between bg-white/10 rounded-2xl px-4 py-4">
                <span className="font-semibold">
                  Email Alerts
                </span>

                <div className="w-14 h-8 bg-green-500 rounded-full relative">
                  <div className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full" />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}