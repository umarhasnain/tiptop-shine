import React from "react";

export default function Sidebar({ selectedTab, setSelectedTab }) {
  return (
    <div className="w-1/4 bg-gray-900 text-white h-screen p-6">
      {/* <h2 className="text-2xl font-bold mb-8">Dashboard</h2> */}

      <div className="space-y-4">
        <button
          onClick={() => setSelectedTab("pending")}
          className={`w-full text-left py-2 px-4 rounded-lg transition ${
            selectedTab === "pending"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-800"
          }`}
        >
          🔴 Pending
        </button>
        <button
          onClick={() => setSelectedTab("hired")}
          className={`w-full text-left py-2 px-4 rounded-lg transition ${
            selectedTab === "hired"
              ? "bg-green-600 text-white"
              : "hover:bg-gray-800"
          }`}
        >
          🟢 Hired
        </button>
      </div>
    </div>
  );
}
