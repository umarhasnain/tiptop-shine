

// "use client";

// import DynamicServiceForm from "@/components/DynamicForm/DynamicServiceForm";
// import serviceCategories from "@/lib/serviceCategories";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useState } from "react";

// export default function RequestPage() {

//   const params = useSearchParams();
//   const router = useRouter();

//   const serviceName = params.get("service");
//   const proId = params.get("proId");
//   const proName = params.get("proName");
//   const company = params.get("company");

//   const service = serviceCategories.find(
//     (s) => s.name === serviceName
//   );

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   if (!service) {
//     return <div className="p-10 text-center">Service not found</div>;
//   }
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setError("");

//   try {
//     const res = await fetch("/api/request-quote", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         serviceName: service.name,
//         category: service.category,
//         answers: formData,

//         name: formData.name || "",
//         email: formData.email || "",
//         phone: formData.phone || "",
//         postcode: formData.postcode || "",
//       }),
//     });

//     const data = await res.json();

//     console.log("API RESPONSE:", data); // 🔥 DEBUG

//     if (!res.ok || !data.success) {
//       throw new Error(data?.error || "API failed");
//     }

//     await Swal.fire({
//       icon: "success",
//       title: "Request Submitted!",
//     });

//     router.push("/thank-you");

//   } catch (err) {
//     console.error(err);
//     setError(err.message || "Submission failed");
//   } finally {
//     setLoading(false); // 🔥 GUARANTEED STOP
//   }
// };


//   return (
//     <div className="py-20 bg-gray-50 min-h-screen px-6">

//       <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

//         <div className="bg-white p-6 rounded-2xl shadow-xl h-fit">
//           <h2 className="text-2xl font-bold mb-3">{service.name}</h2>
//           <p className="text-gray-600 text-sm mb-6">
//             {service.description}
//           </p>

//           {proId && (
//             <div className="bg-blue-50 p-4 rounded-xl">
//               <p className="text-sm text-gray-500">Sending to:</p>
//               <h3 className="font-semibold text-blue-700">
//                 {proName}
//               </h3>
//               <p className="text-sm text-gray-600">{company}</p>
//             </div>
//           )}
//         </div>

//         <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl">

//           {error && (
//             <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg">
//               {error}
//             </div>
//           )}

//           <DynamicServiceForm
//             service={service}
//             onSubmit={handleSubmit}
//             loading={loading}
//           />

//         </div>

//       </div>
//     </div>
//   );
// }



// 'use client';

// import DynamicServiceForm from "@/components/DynamicForm/DynamicServiceForm";
// import serviceCategories from "@/lib/serviceCategories";
// import { getUserLocation } from "@/lib/getLocation";

// import { useSearchParams, useRouter } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function RequestPage() {
//   // ✅ This is a Client Component, so hooks are safe
//   const params = useSearchParams();
//   const router = useRouter();

//   const serviceName = params.get("service");
//   const proId = params.get("proId");
//   const proName = params.get("proName");
//   const company = params.get("company");

//   // Find service by name
//   const service = serviceCategories.find(
//     (s) => s.name === serviceName
//   );

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [location, setLocation] = useState(null);

//   // LOAD LOCATION on client only
//   useEffect(() => {
//     async function loadLocation() {
//       try {
//         const loc = await getUserLocation();
//         setLocation(loc);
//       } catch (err) {
//         console.error("Failed to get location:", err);
//         setLocation({
//           city: "Unknown",
//           region: "",
//           postcode: "",
//           lat: null,
//           lng: null,
//           source: "unknown",
//         });
//       }
//     }

//     loadLocation();
//   }, []);

//   if (!service) {
//     return (
//       <div className="p-10 text-center text-lg font-semibold">
//         Service not found
//       </div>
//     );
//   }

//   const handleSubmit = async (answers, customerData) => {
//     if (!location) {
//       setError("Unable to detect location. Please enter manually.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const payload = {
//         serviceName: service.name,
//         category: service.category,
//         professionalId: proId || null,
//         professionalName: proName || null,
//         company: company || null,
//         answers,
//         ...customerData,
//         location,
//       };

//       const res = await fetch("/api/request-quote", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (data.success) {
//         router.push("/thank-you");
//       } else {
//         setError(data.error || "Submission failed. Please try again.");
//       }
//     } catch (err) {
//       console.error("Request error:", err);
//       setError("Server error. Please try again later.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="py-20 bg-gray-50 min-h-screen px-6">
//       <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

//         {/* LEFT PANEL */}
//         <div className="bg-white p-6 rounded-3xl shadow-xl h-fit border">
//           <h2 className="text-3xl font-bold mb-3">{service.name}</h2>
//           <p className="text-gray-600 mb-6">{service.description}</p>

//           {proId && (
//             <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl">
//               <p className="text-sm text-gray-500">Sending request to</p>
//               <h3 className="font-bold text-blue-700">{proName}</h3>
//               {company && <p className="text-sm text-gray-600">{company}</p>}
//             </div>
//           )}

//           {location && (
//             <div className="mt-5 p-4 rounded-2xl bg-green-50 border border-green-200">
//               <p className="font-semibold text-green-700">Location Detected</p>
//               <p className="text-sm text-gray-700 mt-1">
//                 {location.city}, {location.region} {location.postcode}
//               </p>
//               <p className="text-xs text-gray-500 mt-1">
//                 Source: {location.source || "GPS/IP"}
//               </p>
//             </div>
//           )}
//         </div>

//         {/* FORM PANEL */}
//         <div className="lg:col-span-2">
//           <DynamicServiceForm
//             service={service}
//             onSubmit={handleSubmit}
//             loading={loading}
//             location={location}
//             setLocation={setLocation}
//           />

//           {error && (
//             <div className="mt-4 bg-red-100 text-red-600 p-3 rounded-xl text-center font-medium">
//               {error}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import DynamicServiceForm from "@/components/DynamicForm/DynamicServiceForm";
import serviceCategories from "@/lib/serviceCategories";
import { getUserLocation } from "@/lib/getLocation";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

export const dynamic = 'force-dynamic'; // <-- Important fix

function RequestPage() {
  const params = useSearchParams();
  const router = useRouter();

  const serviceName = params.get("service");
  const proId = params.get("proId");
  const proName = params.get("proName");
  const company = params.get("company");

  const service = serviceCategories.find((s) => s.name === serviceName);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function loadLocation() {
      try {
        const loc = await getUserLocation();
        setLocation(loc);
      } catch (err) {
        console.error(err);
        setLocation({
          city: "Unknown",
          region: "",
          postcode: "",
          lat: null,
          lng: null,
          source: "unknown",
        });
      }
    }
    loadLocation();
  }, []);

  if (!service) {
    return <div className="p-10 text-center text-lg font-semibold">Service not found</div>;
  }

  const handleSubmit = async (answers, customerData) => {
    if (!location) {
      setError("Unable to detect location. Please enter manually.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const payload = {
        serviceName: service.name,
        category: service.category,
        professionalId: proId || null,
        professionalName: proName || null,
        company: company || null,
        answers,
        ...customerData,
        location,
      };

      const res = await fetch("/api/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) router.push("/thank-you");
      else setError(data.error || "Submission failed. Please try again.");
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

        <div className="bg-white p-6 rounded-3xl shadow-xl h-fit border">
          <h2 className="text-3xl font-bold mb-3">{service.name}</h2>
          <p className="text-gray-600 mb-6">{service.description}</p>

          {proId && (
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl">
              <p className="text-sm text-gray-500">Sending request to</p>
              <h3 className="font-bold text-blue-700">{proName}</h3>
              {company && <p className="text-sm text-gray-600">{company}</p>}
            </div>
          )}

          {location && (
            <div className="mt-5 p-4 rounded-2xl bg-green-50 border border-green-200">
              <p className="font-semibold text-green-700">Location Detected</p>
              <p className="text-sm text-gray-700 mt-1">
                {location.city}, {location.region} {location.postcode}
              </p>
              <p className="text-xs text-gray-500 mt-1">Source: {location.source || "GPS/IP"}</p>
            </div>
          )}
        </div>

        <div className="lg:col-span-2">
          <DynamicServiceForm
            service={service}
            onSubmit={handleSubmit}
            loading={loading}
            location={location}
            setLocation={setLocation}
          />

          {error && (
            <div className="mt-4 bg-red-100 text-red-600 p-3 rounded-xl text-center font-medium">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RequestPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RequestPage />
    </Suspense>
  );
}