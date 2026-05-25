'use client';

import {
  Receipt,
  CreditCard,
  Download,
  CheckCircle2,
  Calendar,
  Wallet,
  ArrowUpRight,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import UserHeader from "@/components/UserHeader";

export default function InvoicesBillingPage() {
  const invoices = [
    {
      id: "#INV-1024",
      date: "12 May 2026",
      amount: "$49.00",
      status: "Paid",
      plan: "Pro Membership",
    },
    {
      id: "#INV-1023",
      date: "02 May 2026",
      amount: "$99.00",
      status: "Paid",
      plan: "Credits Top Up",
    },
    {
      id: "#INV-1022",
      date: "21 Apr 2026",
      amount: "$29.00",
      status: "Paid",
      plan: "Starter Plan",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <UserHeader />

      <div className="p-4 sm:p-6 lg:p-8">

        {/* HERO */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white p-6 sm:p-8 lg:p-10 shadow-2xl">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md mb-5">
                <Receipt size={16} />
                Billing & Invoices
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Manage Payments
                <span className="block mt-1">
                  & Billing History
                </span>
              </h1>

              <p className="mt-4 text-gray-300 max-w-xl text-sm sm:text-base leading-relaxed">
                View invoices, billing history,
                subscriptions, and securely manage
                all your platform payments.
              </p>
            </div>

            {/* CARD */}
            <div className="w-full xl:w-[380px] bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-6 shadow-2xl">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">
                    Current Plan
                  </p>

                  <h2 className="text-4xl font-black mt-2">
                    Pro
                  </h2>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Wallet size={30} />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">
                    Next Billing
                  </span>

                  <span className="font-semibold">
                    18 Jun 2026
                  </span>
                </div>

                <button className="mt-6 w-full bg-white text-black hover:bg-gray-100 transition-all duration-200 py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
                  Upgrade Plan
                  <ArrowUpRight size={18} />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">

          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Total Payments
                </p>

                <h3 className="text-3xl font-black mt-2">
                  $177
                </h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <CreditCard size={28} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Paid Invoices
                </p>

                <h3 className="text-3xl font-black mt-2">
                  12
                </h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                <CheckCircle2 size={28} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Active Plan
                </p>

                <h3 className="text-3xl font-black mt-2">
                  Pro
                </h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Renewal Date
                </p>

                <h3 className="text-xl font-black mt-2">
                  18 Jun
                </h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center">
                <Calendar size={28} />
              </div>
            </div>
          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white rounded-[30px] shadow-sm border border-gray-100 mt-6 overflow-hidden">

          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-black">
              Invoice History
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Download your recent invoices and receipts
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Invoice ID
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Plan
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Date
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Amount
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Status
                  </th>

                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {invoices.map((invoice, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-200"
                  >
                    <td className="px-6 py-5 font-semibold text-gray-900">
                      {invoice.id}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {invoice.plan}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {invoice.date}
                    </td>

                    <td className="px-6 py-5 font-bold text-gray-900">
                      {invoice.amount}
                    </td>

                    <td className="px-6 py-5">
                      <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        <CheckCircle2 size={14} />
                        {invoice.status}
                      </div>
                    </td>

                    <td className="px-6 py-5 text-right">
                      <button className="inline-flex items-center gap-2 bg-black text-white hover:bg-gray-800 transition-all duration-200 px-4 py-2 rounded-xl text-sm font-semibold">
                        <Download size={15} />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  );
}