"use client";

import servicesList from "@/lib/servicesList";

export default function ServiceSelector({ professional }) {
  const selectedServices = professional.serviceName || [];

  const toggleService = async (service, active) => {
    await fetch("/api/services", {
      method: active ? "DELETE" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: professional._id,
        service,
      }),
    });

    location.reload();
  };

  return (
    <div className="space-y-2">
      {servicesList.map((service) => {
        const active = selectedServices.includes(service);

        return (
          <div
            key={service}
            className="flex justify-between items-center bg-white rounded-xl px-4 py-2 shadow"
          >
            <span className="text-sm">{service}</span>

            <button
              onClick={() => toggleService(service, active)}
              className={`text-sm font-medium ${
                active ? "text-red-500" : "text-indigo-600"
              }`}
            >
              {active ? "Remove" : "Add"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
