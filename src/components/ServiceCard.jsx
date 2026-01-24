"use client";

import { useState } from "react";

export default function ServiceCard({ service }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const submitLead = async () => {
    await fetch("/api/leads/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        serviceName: service,
        ...form,
      }),
    });

    setOpen(false);
    setForm({ name: "", email: "", phone: "", company: "" });
    alert("Lead added successfully");
  };

  return (
    <div className="rounded-2xl bg-white shadow-lg p-5 hover:shadow-2xl transition">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{service}</h3>
        <button
          onClick={() => setOpen(!open)}
          className="text-sm px-3 py-1 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
        >
          + Add Lead
        </button>
      </div>

      {open && (
        <div className="mt-4 space-y-2">
          <input
            placeholder="Client Name"
            className="input"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Email"
            className="input"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Phone"
            className="input"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            placeholder="Company"
            className="input"
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />

          <button
            onClick={submitLead}
            className="w-full bg-green-600 text-white py-2 rounded-xl mt-2"
          >
            Save Lead
          </button>
        </div>
      )}
    </div>
  );
}
