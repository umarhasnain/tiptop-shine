'use client';

import { useState, useMemo, useEffect } from "react";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Lock,
  User,
  Coins,
  CheckCircle2,
} from "lucide-react";
import UserHeader from "@/components/UserHeader";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function LeadsDashboard() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(null);
  const [leads, setLeads] = useState([]);
  const [professional, setProfessional] = useState(null);
  const [loadingBuy, setLoadingBuy] = useState(false);

  const [unlockedLeads, setUnlockedLeads] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(
        localStorage.getItem("unlockedLeads") || "[]"
      );
    }

    return [];
  });

  // ================= LOAD DATA =================
  useEffect(() => {
    const fetchData = async () => {
      const email = localStorage.getItem("loggedInEmail");

      if (!email) return;

      try {
        // ================= PROFESSIONAL =================
        const proRes = await fetch("/api/professionals");
        const proData = await proRes.json();

        const user = proData?.professionals?.find(
          (p) => p.email === email
        );

        setProfessional(user);

        // ================= LEADS =================
        const leadRes = await fetch("/api/get-leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const leadData = await leadRes.json();

        const safeLeads = (leadData?.leads || []).map(
          (l, i) => {
            let creditsRequired = 5;

            const premiumServices = [
              "App Development",
              "Cyber Security",
              "Cloud Services",
              "Interior Design",
              "Home Security",
            ];

            if (
              premiumServices.includes(l.serviceName)
            ) {
              creditsRequired = 25;
            } else if (
              l.category === "business"
            ) {
              creditsRequired = 15;
            } else if (
              l.category === "home-garden"
            ) {
              creditsRequired = 8;
            }

            return {
              id: l._id || i,
              serviceName: l.serviceName,
              category: l.category,

              name:
                l.answers?.name ||
                l.name ||
                "Customer",

              email:
                l.answers?.email ||
                l.email ||
                "",

              phone:
                l.answers?.phone ||
                l.phone ||
                "",

              city:
                l.location?.city ||
                "Unknown",

              region:
                l.location?.region || "",

              postcode:
                l.location?.postcode || "",

              createdAt: l.createdAt,

              answers:
                l.answers || {},

              creditsRequired,
            };
          }
        );

        setLeads(safeLeads);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // ================= SAVE UNLOCKED =================
  useEffect(() => {
    localStorage.setItem(
      "unlockedLeads",
      JSON.stringify(unlockedLeads)
    );
  }, [unlockedLeads]);

  // ================= SEARCH =================
  const filtered = useMemo(() => {
    if (!query.trim()) return leads;

    const q = query.toLowerCase();

    return leads.filter((l) =>
      `${l.name} ${l.serviceName} ${l.city}`
        .toLowerCase()
        .includes(q)
    );
  }, [query, leads]);

  // ================= DEFAULT ACTIVE =================
  useEffect(() => {
    if (
      filtered.length > 0 &&
      !activeId
    ) {
      setActiveId(filtered[0].id);
    }
  }, [filtered, activeId]);

  const activeLead =
    filtered.find(
      (l) => l.id === activeId
    ) || null;

  const isUnlocked =
    unlockedLeads.includes(
      activeLead?.id
    );

  // ================= BUY LEAD =================
  const handleBuyLead = async () => {
    if (!activeLead) return;

    if (
      (professional?.credits || 0) <
      activeLead.creditsRequired
    ) {
      Swal.fire({
        icon: "error",
        title: "Insufficient Credits",
        text: `You need ${activeLead.creditsRequired} credits to unlock this lead.`,
        confirmButtonColor: "#2563eb",
        borderRadius: "20px",
      });

      return;
    }

    const confirm = await Swal.fire({
      title: "Unlock Premium Lead?",
      html: `
        <div style="padding-top:10px">
          <div style="
            background:#eff6ff;
            border:1px solid #bfdbfe;
            padding:18px;
            border-radius:18px;
          ">
            <div style="
              font-size:14px;
              color:#2563eb;
              margin-bottom:6px;
            ">
              Lead Price
            </div>

            <div style="
              font-size:34px;
              font-weight:800;
              color:#1d4ed8;
            ">
              ${activeLead.creditsRequired} Credits
            </div>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Unlock Now",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#9ca3af",
      borderRadius: "24px",
      width: 500,
    });

    if (!confirm.isConfirmed) return;

    try {
      setLoadingBuy(true);

      Swal.fire({
        title: "Unlocking Lead...",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const email =
        localStorage.getItem(
          "loggedInEmail"
        );

      const res = await fetch(
        "/api/buy-lead",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            leadId: activeLead.id,
            email,
            credits:
              activeLead.creditsRequired,
          }),
        }
      );

      const data = await res.json();

      Swal.close();

      if (data.success) {
        const updatedUnlocked = [
          ...new Set([
            ...unlockedLeads,
            activeLead.id,
          ]),
        ];

        setUnlockedLeads(
          updatedUnlocked
        );

        setProfessional((prev) => ({
          ...prev,
          credits:
            data.remainingCredits,
        }));

        await Swal.fire({
          icon: "success",
          title:
            "Lead Unlocked Successfully",
          html: `
            <div style="padding-top:10px">

              <div style="
                background:linear-gradient(135deg,#dbeafe,#eff6ff);
                padding:20px;
                border-radius:20px;
                margin-bottom:18px;
              ">
                <div style="
                  font-size:14px;
                  color:#2563eb;
                  margin-bottom:6px;
                ">
                  Credits Deducted
                </div>

                <div style="
                  font-size:34px;
                  font-weight:800;
                  color:#1d4ed8;
                ">
                  -${activeLead.creditsRequired}
                </div>
              </div>

              <div style="
                background:#ecfdf5;
                border:1px solid #a7f3d0;
                padding:14px;
                border-radius:16px;
                color:#065f46;
                font-size:14px;
                font-weight:500;
              ">
                Customer contact details are now available.
              </div>

              <p style="
                margin-top:18px;
                color:#6b7280;
                font-size:13px;
              ">
                Remaining Credits:
                <strong style="color:#111827">
                  ${data.remainingCredits}
                </strong>
              </p>

            </div>
          `,
          confirmButtonText:
            "Awesome!",
          confirmButtonColor:
            "#2563eb",
          borderRadius: "24px",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Purchase Failed",
          text:
            data.error ||
            "Unable to unlock lead.",
          confirmButtonColor:
            "#dc2626",
          borderRadius: "20px",
        });
      }
    } catch (err) {
      console.error(err);

      Swal.fire({
        icon: "error",
        title: "Server Error",
        text:
          "Something went wrong. Please try again.",
        confirmButtonColor:
          "#dc2626",
        borderRadius: "20px",
      });
    } finally {
      setLoadingBuy(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-hidden">
      <UserHeader />

      <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-80px)]">

        {/* ================= SIDEBAR ================= */}
        <aside className="w-full lg:w-[360px] xl:w-[390px] bg-white border-r shadow-sm flex flex-col">

          {/* TOP */}
          <div className="p-4 sm:p-5 border-b">
            <h2 className="font-bold text-xl sm:text-2xl">
              Leads
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {filtered.length} Available
            </p>

            {/* CREDITS */}
            <div className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-4 sm:p-5 shadow-lg">

              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm opacity-80">
                    Available Credits
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-bold mt-1 truncate">
                    {professional?.credits ||
                      0}
                  </h3>
                </div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Coins size={30} />
                </div>
              </div>
            </div>
          </div>

          {/* SEARCH */}
          <div className="p-4 border-b">
            <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3">
              <Search
                size={18}
                className="text-gray-400 flex-shrink-0"
              />

              <input
                value={query}
                onChange={(e) =>
                  setQuery(
                    e.target.value
                  )
                }
                placeholder="Search leads..."
                className="ml-2 w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* LEADS LIST */}
          <div className="overflow-y-auto flex-1 max-h-[400px] lg:max-h-full">

            {filtered.map((lead) => {
              const unlocked =
                unlockedLeads.includes(
                  lead.id
                );

              return (
                <button
                  key={lead.id}
                  onClick={() =>
                    setActiveId(
                      lead.id
                    )
                  }
                  className={`w-full text-left p-4 sm:p-5 border-b transition-all duration-200 ${
                    activeId === lead.id
                      ? "bg-blue-50 border-l-4 border-l-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm sm:text-base truncate">
                        {lead.name}
                      </p>

                      <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-1">
                        {
                          lead.serviceName
                        }
                      </p>

                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-2">
                        <MapPin
                          size={12}
                          className="flex-shrink-0"
                        />

                        <span className="truncate">
                          {lead.city},{" "}
                          {lead.region}
                        </span>
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      {unlocked ? (
                        <div className="bg-green-100 text-green-700 text-xs px-3 py-1.5 rounded-full flex items-center gap-1 font-medium">
                          <CheckCircle2
                            size={12}
                          />
                          <span className="hidden sm:inline">
                            Unlocked
                          </span>
                        </div>
                      ) : (
                        <div className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1.5 rounded-full flex items-center gap-1 font-medium">
                          <Coins
                            size={12}
                          />
                          {
                            lead.creditsRequired
                          }
                        </div>
                      )}
                    </div>

                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6 overflow-y-auto">

          {!activeLead ? (
            <div className="text-center text-gray-400 mt-20">
              No leads found
            </div>
          ) : (
            <div className="max-w-6xl mx-auto space-y-5 sm:space-y-6">

              {/* HEADER */}
              <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-sm border border-gray-100">

                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

                  <div className="min-w-0">
                    <h1 className="text-2xl sm:text-3xl font-bold break-words">
                      {
                        activeLead.name
                      }
                    </h1>

                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                      {
                        activeLead.serviceName
                      }
                    </p>

                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-3">
                      <MapPin
                        size={15}
                        className="flex-shrink-0"
                      />

                      <span className="break-words">
                        {
                          activeLead.city
                        },{" "}
                        {
                          activeLead.region
                        }
                      </span>
                    </p>
                  </div>

                  <div className="bg-blue-50 text-blue-700 px-5 py-4 rounded-3xl text-center w-full sm:w-fit">
                    <p className="text-xs font-medium uppercase tracking-wide">
                      Lead Price
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-1 mt-1">
                      <Coins size={22} />
                      {
                        activeLead.creditsRequired
                      }
                    </h3>
                  </div>

                </div>
              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">

                {/* PROJECT */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-sm border border-gray-100">
  <h3 className="font-bold text-lg mb-5">
    Project Details
  </h3>

  <div className="space-y-3">
    {Object.entries(activeLead.answers || {})
      .filter(
        ([key]) =>
          ![
            "phone",
            "email",
            "fullName",
            "userName",
            "userEmail",
          ].includes(key)
      )
      .map(([key, value]) => (
        <div
          key={key}
          className="bg-gray-50 rounded-2xl p-3 sm:p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
            {key}
          </p>

          <p className="text-sm sm:text-[15px] text-gray-800 break-words">
            {Array.isArray(value)
              ? value.join(", ")
              : value?.toString()}
          </p>
        </div>
      ))}
  </div>
</div>

                {/* CONTACT */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-5">
                    Contact Info
                  </h3>

                  {!isUnlocked ? (
                    <div className="border-2 border-dashed border-gray-200 p-5 sm:p-8 rounded-3xl text-center">

                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                        <Lock
                          size={28}
                        />
                      </div>

                      <p className="font-bold text-lg">
                        Unlock this lead
                      </p>

                      <p className="text-sm text-gray-500 mt-2 mb-6 max-w-sm mx-auto">
                        Spend{" "}
                        <span className="font-bold text-blue-600">
                          {
                            activeLead.creditsRequired
                          }{" "}
                          credits
                        </span>{" "}
                        to access customer details instantly.
                      </p>

                      <button
                        onClick={
                          handleBuyLead
                        }
                        disabled={
                          loadingBuy
                        }
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        {loadingBuy
                          ? "Unlocking..."
                          : `Unlock Lead (${activeLead.creditsRequired} Credits)`}
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">

                      <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                        <User
                          size={18}
                          className="text-blue-600 flex-shrink-0"
                        />

                        <span className="text-sm sm:text-base break-all">
                          {
                            activeLead.name
                          }
                        </span>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                        <Phone
                          size={18}
                          className="text-green-600 flex-shrink-0"
                        />

                        <span className="text-sm sm:text-base break-all">
                          {
                            activeLead.phone
                          }
                        </span>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                        <Mail
                          size={18}
                          className="text-purple-600 flex-shrink-0"
                        />

                        <span className="text-sm sm:text-base break-all">
                          {
                            activeLead.email
                          }
                        </span>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                        <MapPin
                          size={18}
                          className="text-red-500 flex-shrink-0"
                        />

                        <span className="text-sm sm:text-base break-words">
                          {
                            activeLead.city
                          }{" "}
                          -{" "}
                          {
                            activeLead.postcode
                          }
                        </span>
                      </div>

                      <div className="bg-green-50 text-green-700 border border-green-200 rounded-2xl p-4 mt-5 flex items-center gap-2 font-medium text-sm sm:text-base">
                        <CheckCircle2
                          size={18}
                          className="flex-shrink-0"
                        />
                        Lead purchased successfully
                      </div>

                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}