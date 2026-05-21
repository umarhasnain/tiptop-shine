
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { getUserLocation } from "@/lib/getLocation";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";

// export default function DynamicServiceForm({ service }) {
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleChange = (key, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const handleCheckbox = (key, option) => {
//     const currentValues = formData[key] || [];
//     if (currentValues.includes(option)) {
//       handleChange(
//         key,
//         currentValues.filter((item) => item !== option)
//       );
//     } else {
//       handleChange(key, [...currentValues, option]);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch("/api/requests", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           serviceName: service.name,
//           category: service.category,
//           answers: formData,
//         }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         // ✅ SweetAlert success popup
//         await Swal.fire({
//           icon: "success",
//           title: "Request Submitted!",
//           text: "Professionals will contact you soon with quotes.",
//           confirmButtonText: "Continue",
//           timer: 3000,
//           timerProgressBar: true,
//         });

//         // ✅ Redirect to Thank You page
//         router.push("/thank-you");
//       } else {
//         setError("Something went wrong. Please try again.");
//       }
//     } catch (err) {
//       setError("Server error. Please try later.");
//       console.error(err);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
      
//       {/* Header */}
//       <div className="mb-8 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           {service.name}
//         </h2>
//         <p className="text-gray-500 mt-2">
//           Please fill the details below to submit your request
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">

//         {service.questions.map((q, index) => (
//           <div key={index} className="space-y-2">
//             <label className="block font-semibold text-gray-700">
//               {q.label}
//             </label>

//             {/* TEXTAREA */}
//             {q.type === "textarea" && (
//               <textarea
//                 className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-xl transition outline-none"
//                 value={formData[q.key] || ""}
//                 onChange={(e) => handleChange(q.key, e.target.value)}
//                 required
//               />
//             )}

//             {/* SELECT */}
//             {q.type === "select" && (
//               <select
//                 className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-xl transition outline-none"
//                 value={formData[q.key] || ""}
//                 onChange={(e) => handleChange(q.key, e.target.value)}
//                 required
//               >
//                 <option value="">Select an option</option>
//                 {q.options.map((opt, i) => (
//                   <option key={i} value={opt}>{opt}</option>
//                 ))}
//               </select>
//             )}

//             {/* CHECKBOX */}
//             {q.type === "checkbox" && (
//               <div className="flex flex-wrap gap-3">
//                 {q.options.map((opt, i) => (
//                   <label
//                     key={i}
//                     className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:border-blue-400 transition"
//                   >
//                     <input
//                       type="checkbox"
//                       className="accent-blue-600"
//                       checked={formData[q.key]?.includes(opt) || false}
//                       onChange={() => handleCheckbox(q.key, opt)}
//                     />
//                     <span className="text-gray-700 text-sm">{opt}</span>
//                   </label>
//                 ))}
//               </div>
//             )}

//             {/* INPUT TYPES */}
//             {["text", "email", "number", "date", "time"].includes(q.type) && (
//               <input
//                 type={q.type}
//                 className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-xl transition outline-none"
//                 value={formData[q.key] || ""}
//                 onChange={(e) => handleChange(q.key, e.target.value)}
//                 required
//               />
//             )}
//           </div>
//         ))}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
//         >
//           {loading ? "Submitting..." : "Submit Request"}
//         </button>

//         {/* Error Message */}
//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl text-center font-medium mt-4">
//             {error}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }

//*****************************************************************************WORKIG WITH LOCAITON */

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { getUserLocation } from "@/lib/getLocation";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";

// export default function DynamicServiceForm({ service }) {
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleChange = (key, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const handleCheckbox = (key, option) => {
//     const currentValues = formData[key] || [];
//     if (currentValues.includes(option)) {
//       handleChange(
//         key,
//         currentValues.filter((item) => item !== option)
//       );
//     } else {
//       handleChange(key, [...currentValues, option]);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       /* ================= SAFE LOCATION (FIXED) ================= */
//       let location = null;

//       try {
//         location = await getUserLocation();
//       } catch (err) {
//         console.log("Location blocked or not allowed");
//         location = {
//           city: "Unknown",
//           country: "Unknown",
//           lat: null,
//           lng: null,
//         };
//       }

//       const payload = {
//         serviceName: service.name,
//         category: service.category,

//         answers: formData,

//         name: formData.name || "",
//         email: formData.email || "",
//         phone: formData.phone || "",
//         postcode: formData.postcode || "",

//         /* 🔥 IMPORTANT FIX */
//         location,
//       };

//       const res = await fetch("/api/request-quote", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (data.success) {
//         await Swal.fire({
//           icon: "success",
//           title: "Request Submitted!",
//           text: "Professionals will contact you soon.",
//         });

//         router.push("/thank-you");
//       } else {
//         setError("Something went wrong.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Server error. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
      
//       {/* Header */}
//       <div className="mb-8 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           {service.name}
//         </h2>
//         <p className="text-gray-500 mt-2">
//           Please fill the details below to submit your request
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">

//         {service.questions.map((q, index) => (
//           <div key={index} className="space-y-2">
//             <label className="block font-semibold text-gray-700">
//               {q.label}
//             </label>

//             {q.type === "textarea" && (
//               <textarea
//                 className="w-full border p-3 rounded-xl"
//                 value={formData[q.key] || ""}
//                 onChange={(e) => handleChange(q.key, e.target.value)}
//                 required
//               />
//             )}

//             {q.type === "select" && (
//               <select
//                 className="w-full border p-3 rounded-xl"
//                 value={formData[q.key] || ""}
//                 onChange={(e) => handleChange(q.key, e.target.value)}
//                 required
//               >
//                 <option value="">Select</option>
//                 {q.options.map((opt, i) => (
//                   <option key={i}>{opt}</option>
//                 ))}
//               </select>
//             )}

//             {["text", "email", "number", "date", "time"].includes(q.type) && (
//               <input
//                 type={q.type}
//                 className="w-full border p-3 rounded-xl"
//                 value={formData[q.key] || ""}
//                 onChange={(e) => handleChange(q.key, e.target.value)}
//                 required
//               />
//             )}
//           </div>
//         ))}

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
//         >
//           {loading ? "Submitting..." : "Submit Request"}
//         </button>

//         {error && (
//           <p className="text-red-500 text-center mt-3">{error}</p>
//         )}
//       </form>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function DynamicServiceForm({ service, onSubmit, loading, location, setLocation }) {
  const [formData, setFormData] = useState({});
  const [manualLocation, setManualLocation] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckbox = (key, option) => {
    const currentValues = formData[key] || [];
    handleChange(
      key,
      currentValues.includes(option)
        ? currentValues.filter((item) => item !== option)
        : [...currentValues, option]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // manual fallback
    if (!location || location.city === "Unknown") {
      if (!manualLocation) {
        setError("Please provide your location to proceed.");
        return;
      }
      setLocation({ ...location, city: manualLocation });
    }

    await onSubmit(formData, { name: formData.name || "", email: formData.email || "", phone: formData.phone || "" });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{service.name}</h2>
        <p className="text-gray-500 mt-2">Please fill the details below to submit your request</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {service.questions.map((q, index) => (
          <div key={index} className="space-y-2">
            <label className="block font-semibold text-gray-700">{q.label}</label>

            {q.type === "textarea" && (
              <textarea
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-xl transition outline-none"
                value={formData[q.key] || ""}
                onChange={(e) => handleChange(q.key, e.target.value)}
                required
              />
            )}

            {q.type === "select" && (
              <select
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-xl transition outline-none"
                value={formData[q.key] || ""}
                onChange={(e) => handleChange(q.key, e.target.value)}
                required
              >
                <option value="">Select an option</option>
                {q.options.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}

            {q.type === "checkbox" && (
              <div className="flex flex-wrap gap-3">
                {q.options.map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:border-blue-400 transition"
                  >
                    <input
                      type="checkbox"
                      className="accent-blue-600"
                      checked={formData[q.key]?.includes(opt) || false}
                      onChange={() => handleCheckbox(q.key, opt)}
                    />
                    <span className="text-gray-700 text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            )}

            {["text", "email", "number", "date", "time"].includes(q.type) && (
              <input
                type={q.type}
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-xl transition outline-none"
                value={formData[q.key] || ""}
                onChange={(e) => handleChange(q.key, e.target.value)}
                required
              />
            )}
          </div>
        ))}

        {/* Manual Location Input */}
        {(!location || location.city === "Unknown") && (
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Your City / ZIP</label>
            <input
              type="text"
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-xl transition outline-none"
              value={manualLocation}
              onChange={(e) => setManualLocation(e.target.value)}
              placeholder="Enter your city or ZIP"
              required
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl text-center font-medium mt-4">{error}</div>
        )}
      </form>
    </div>
  );
}