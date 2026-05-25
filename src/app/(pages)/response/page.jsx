"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Sparkles,
  BadgeCheck,
  Mail,
  X,
  Calendar,
  CreditCard,
  Phone,
  MapPin,
  Briefcase,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";

export default function MyResponsesPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("loggedInEmail");

        const res = await fetch(`/api/purchased-leads?email=${email}`);
        const json = await res.json();

        if (json.success) setData(json.purchasedLeads || []);
        else setData([]);
      } catch (err) {
        console.log(err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtered = data.filter((item) => {
    const lead = item?.leadDetails || {};
    const q = search.toLowerCase();

    return (
      lead?.answers?.name?.toLowerCase().includes(q) ||
      lead?.serviceName?.toLowerCase().includes(q) ||
      lead?.location?.city?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50">

      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 text-white">

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 blur-3xl rounded-full" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-14">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-xl border border-white/10">
                <Sparkles size={16} />
                Premium Purchased Leads
              </div>

              <h1 className="text-3xl md:text-5xl font-black mt-4">
                My Responses
              </h1>

              <p className="text-blue-100 mt-2 text-sm md:text-base max-w-xl">
                Manage your purchased leads with full customer details and insights.
              </p>
            </div>

            {/* SEARCH */}
            <div className="w-full md:w-[380px] bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3">
              <Search className="text-white/70" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search leads..."
                className="bg-transparent outline-none text-white placeholder-white/60 w-full"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 rounded-3xl bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No purchased leads found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filtered.map((item, i) => {
              const lead = item?.leadDetails || {};

              return (
                <div
                  key={i}
                  className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >

                  {/* TOP */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <BadgeCheck size={16} />
                        Purchased
                      </div>

                      <div className="bg-white/20 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                        <CreditCard size={13} />
                        {item.creditsUsed}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-4 line-clamp-1">
                      {lead?.answers?.name || "Unknown"}
                    </h2>

                    <p className="text-blue-100 text-sm">
                      {lead?.serviceName}
                    </p>

                  </div>

                  {/* BODY */}
                  <div className="p-5 space-y-3 text-sm text-gray-700">

                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-blue-600" />
                      <span className="truncate">
                        {lead?.answers?.email}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-green-600" />
                      {lead?.answers?.phone}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-red-500" />
                      {lead?.location?.city}, {lead?.location?.region}
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-indigo-600" />
                      {new Date(item.createdAt).toDateString()}
                    </div>

                    <button
                      onClick={() => setSelected(item)}
                      className="mt-4 w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition"
                    >
                      View Details
                    </button>

                  </div>
                </div>
              );
            })}

          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">

          <div className="bg-white w-full max-w-3xl rounded-[30px] overflow-hidden shadow-2xl">

            {/* HEADER */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 flex justify-between items-center">

              <div>
                <h2 className="text-xl font-bold">
                  Lead Details
                </h2>
                <p className="text-blue-100 text-sm">
                  Complete customer information
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
              >
                <X size={18} />
              </button>

            </div>

            {/* BODY */}
            <div className="p-6 space-y-6">

              <div className="grid md:grid-cols-2 gap-4">

                <div className="bg-gray-50 p-4 rounded-2xl">
                  <p className="text-xs text-gray-500">Name</p>
                  <p className="font-semibold">
                    {selected?.leadDetails?.answers?.name}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold break-all">
                    {selected?.leadDetails?.answers?.email}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl">
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="font-semibold">
                    {selected?.leadDetails?.answers?.phone}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl">
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-semibold">
                    {selected?.leadDetails?.location?.city}, {selected?.leadDetails?.location?.region}
                  </p>
                </div>

              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-2 text-green-700">
                <CheckCircle2 size={18} />
                Premium lead fully unlocked
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}