import Link from "next/link";
import { useState } from "react";

export function AlertBar() {
    return (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl flex justify-between items-center text-sm">
            <span>You're not receiving our emails</span>
            <button className="font-semibold underline">
                Update email settings
            </button>
        </div>
    );
}

/* PROFILE */
export function ProfileCard({ professional }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow">
            <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl font-bold">
                    {professional.name?.[0] || "P"}
                </div>
                <div>
                    <p className="font-semibold">{professional.name}</p>
                    <p className="text-sm text-gray-500">{professional.company}</p>
                </div>
            </div>

            <p className="text-sm mt-6">Your profile is 23% complete</p>
            <div className="h-2 bg-gray-200 rounded mt-2">
                <div className="h-2 bg-blue-500 rounded w-[23%]" />
            </div>

            <Link href='/profile-setting'>

                <button className="text-blue-600 text-sm mt-3 font-medium">
                    Edit profile
                </button>
            </Link>
        </div>
    );
}


export function LeadSettingsCard({ professional, refreshProfessional }) {
  const [editing, setEditing] = useState(false);
  const [newService, setNewService] = useState("");

  const addService = async () => {
    if (!newService.trim()) return;
    const res = await fetch("/api/add-service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: professional.email, serviceName: newService.trim() })
    });
    const data = await res.json();
    if (data.success) {
      setNewService("");
      refreshProfessional();
    }
  };

  const deleteService = async (service) => {
    const res = await fetch("/api/delete-service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: professional.email, serviceName: service })
    });
    const data = await res.json();
    if (data.success) refreshProfessional();
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="font-bold text-lg mb-4">Lead settings</h2>

      {/* SERVICES */}
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <p className="font-semibold">Services</p>
          <button
            className="text-sm text-blue-600"
            onClick={() => setEditing(!editing)}
          >
            {editing ? "Done" : "Edit"}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          {(professional.serviceName || []).map((s) => (
            <span
              key={s}
              className="px-3 py-1 border rounded-full text-sm flex items-center gap-1"
            >
              {s}
              {editing && (
                <button
                  onClick={() => deleteService(s)}
                  className="text-red-500 font-bold text-xs"
                >
                  ✕
                </button>
              )}
            </span>
          ))}
        </div>

        {editing && (
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
              placeholder="Add new service"
              className="border px-2 py-1 rounded flex-1"
            />
            <button
              onClick={addService}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Add
            </button>
          </div>
        )}
      </div>

      {/* LOCATIONS */}
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <p className="font-semibold">Locations</p>
          <button className="text-sm text-blue-600">Edit</button>
        </div>
        <p className="text-sm text-gray-600">Nationwide</p>
      </div>

      {/* LEAD INFO */}
      <div className="mt-4 text-sm">
        <p className="font-semibold">Estimated 214 leads per day</p>
        <p className="text-gray-500 mt-1">
          Sending new leads to <br />
          <span className="underline cursor-pointer">{professional.email}</span>
        </p>
      </div>
    </div>
  );
}

/* LEADS STATS */
export function LeadsStatsCard({ total, unread }) {
    return (
        <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h2 className="font-bold mb-4">Leads</h2>

            <div className="text-3xl font-bold text-blue-600">
                {total}
            </div>
            <p className="text-sm text-gray-500">Leads</p>

            <hr className="my-4" />

            <div className="text-blue-600 font-semibold">
                {unread}
            </div>
            <p className="text-sm text-gray-500">Unread leads</p>
        </div>
    );
}

/* RESPONSES */
export function ResponsesCard() {
    return (
        <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h2 className="font-bold mb-4">Responses</h2>
            <p className="text-sm text-gray-500">
                You haven't responded to any leads yet.
            </p>
        </div>
    );
}

/* GET STARTED */
export function GetStartedCard() {
    return (
        <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-bold mb-2">Get started</h2>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-3">
                20% OFF STARTER PACK
            </span>
            <p className="text-sm text-gray-600">
                Respond to up to 10 customers
            </p>
            <button className="text-blue-600 text-sm mt-2 font-medium">
                More info
            </button>
        </div>
    );
}

/* HELP */
export function HelpCard() {
    return (
        <div className="bg-white rounded-2xl shadow p-6">
          <Link href='/help-center'>   <h2 className="font-bold mb-2">Help</h2></Link>
            <button className="text-blue-600 text-sm font-medium">
                Visit help center for tips & advice
            </button>
        </div>
    );
}

/* UI */
function Section({ title, children }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <p className="font-semibold">{title}</p>
                <button className="text-sm text-blue-600">Edit</button>
            </div>
            <div className="flex flex-wrap gap-2">
                {children}
            </div>
        </div>
    );
}

function Tag({ children }) {
    return (
        <span className="px-3 py-1 border rounded-full text-sm">
            {children}
        </span>
    );
}
