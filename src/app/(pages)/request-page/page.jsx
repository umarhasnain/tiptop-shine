

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

import {
  MapPin,
  ShieldCheck,
  Clock3,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

// ✅ SWEET ALERT IMPORT
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const dynamic = "force-dynamic";

function RequestPage() {
  const params = useSearchParams();
  const router = useRouter();

  const serviceName = params.get("service");
  const proId = params.get("proId");
  const proName = params.get("proName");
  const company = params.get("company");

  const service = serviceCategories.find(
    (s) => s.name === serviceName
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState(null);

  // ================= LOAD LOCATION =================
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

  // ================= SERVICE NOT FOUND =================
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-10 text-center max-w-lg w-full">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
            <span className="text-3xl">⚠️</span>
          </div>

          <h1 className="text-3xl font-black text-slate-900">
            Service Not Found
          </h1>

          <p className="text-slate-500 mt-3">
            The requested service is unavailable or may
            have been removed.
          </p>

          <button
            onClick={() => router.push("/")}
            className="
              mt-7
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-2xl
              font-semibold
              transition-all
            "
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  // ================= SUBMIT =================
  const handleSubmit = async (answers, customerData) => {
    if (!location) {
      setError(
        "Unable to detect location. Please enable GPS or enter manually."
      );
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

        // ===== CONTACT DETAILS =====
        name:
          answers?.name ||
          customerData?.name ||
          "",

        email:
          answers?.email ||
          customerData?.email ||
          "",

        // ===== FIXED PHONE =====
        phone:
          answers?.phone ||
          answers?.phoneNumber ||
          customerData?.phone ||
          "",

        postcode:
          answers?.postcode ||
          customerData?.postcode ||
          "",

        ...customerData,

        // ===== LOCATION =====
        location,
      };

      const res = await fetch("/api/request-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

        if (data.success) {
        // ✅ SWEET ALERT SUCCESS
        await Swal.fire({
          icon: "success",
          title: "Request Submitted!",
          text: "Your request has been sent successfully.",
          confirmButtonColor: "#2563eb",
        });

        router.push("/thank-you");
      } else {
        setError(
          data.error ||
            "Submission failed. Please try again."
        );
      }
    } catch (err) {
      console.error(err);

      setError(
        "Server error. Please try again later."
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30" />

      {/* ================= BACK BUTTON ================= */}
      <button
        onClick={() => router.back()}
        className="
          fixed
          top-5
          left-5
          z-50
          flex
          items-center
          gap-2
          bg-white/90
          backdrop-blur-xl
          border
          border-slate-200
          shadow-xl
          px-5
          py-3
          rounded-2xl
          hover:scale-105
          hover:shadow-2xl
          transition-all
          duration-300
        "
      >
        <ArrowLeft size={18} className="text-slate-700" />

        <span className="font-semibold text-slate-700">
          Back
        </span>
      </button>

      {/* ================= MAIN ================= */}
      <div className="relative z-10 py-10 lg:py-16 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-10">

          {/* ================= LEFT SIDEBAR ================= */}
          <div className="space-y-6">

            {/* SERVICE CARD */}
            <div
              className="
                bg-white/90
                backdrop-blur-xl
                border
                border-white
                shadow-2xl
                rounded-[32px]
                overflow-hidden
              "
            >
              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/20">
                      {service.categoryLabel || service.category}
                    </div>

                    {service.isFeatured && (
                      <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star size={12} />
                        Featured
                      </div>
                    )}
                  </div>

                  <h1 className="text-3xl font-black text-white">
                    {service.name}
                  </h1>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7">

                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* FEATURES */}
                <div className="grid grid-cols-1 gap-4 mt-7">

                  <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                      <ShieldCheck className="text-blue-600" size={22} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800">
                        Verified Professionals
                      </h4>

                      <p className="text-sm text-slate-500">
                        Trusted & experienced service providers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                      <Clock3 className="text-green-600" size={22} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800">
                        Fast Response
                      </h4>

                      <p className="text-sm text-slate-500">
                        Receive quotes quickly from professionals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                      <Sparkles className="text-purple-600" size={22} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800">
                        Premium Experience
                      </h4>

                      <p className="text-sm text-slate-500">
                        Smooth booking & professional support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROFESSIONAL CARD */}
            {proId && (
              <div
                className="
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-700
                  text-white
                  rounded-[30px]
                  shadow-2xl
                  p-7
                "
              >
                <p className="text-sm text-blue-100">
                  Your request will be sent directly to
                </p>

                <h3 className="text-2xl font-black mt-2">
                  {proName}
                </h3>

                {company && (
                  <p className="text-blue-100 mt-1">
                    {company}
                  </p>
                )}

                <div className="mt-5 flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} />
                  Verified Professional
                </div>
              </div>
            )}

            {/* LOCATION CARD */}
            {location && (
              <div
                className="
                  bg-white
                  rounded-[30px]
                  border
                  border-green-100
                  shadow-xl
                  p-6
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                    <MapPin
                      className="text-green-600"
                      size={22}
                    />
                  </div>

                  <div>
                    <h3 className="font-black text-slate-800">
                      Location Detected
                    </h3>

                    <p className="text-sm text-slate-500">
                      Based on your device/IP
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="font-semibold text-slate-800">
                    {location.city},{" "}
                    {location.region}
                  </p>

                  <p className="text-sm text-slate-500 mt-1">
                    Postcode:{" "}
                    {location.postcode || "N/A"}
                  </p>

                  <p className="text-xs text-slate-400 mt-2">
                    Source:{" "}
                    {location.source || "GPS/IP"}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* ================= FORM ================= */}
          <div className="lg:col-span-2">

            <div
              className="
                bg-white/90
                backdrop-blur-xl
                border
                border-white
                shadow-2xl
                rounded-[36px]
                p-4 sm:p-6 lg:p-8
              "
            >

              {/* TOP HEADER */}
              <div className="mb-8">

                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Sparkles size={16} />
                  Premium Request Form
                </div>

                <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                  Request a Quote
                </h2>

                <p className="text-slate-500 mt-3 max-w-2xl">
                  Fill out the details below and
                  receive responses from professional
                  service providers near your area.
                </p>
              </div>

              {/* FORM */}
             <DynamicServiceForm
  service={{
    ...service,

    // ===== REMOVE DUPLICATE CONTACT FIELDS =====
    questions: [
      // Only add if NOT already exists
      ...(!service.questions?.some(
        (q) =>
          q.key === "name" ||
          q.label?.toLowerCase().includes("name")
      )
        ? [
            {
              key: "name",
              label: "Contact Name",
              type: "text",
            },
          ]
        : []),

      ...(!service.questions?.some(
        (q) =>
          q.key === "email" ||
          q.label?.toLowerCase().includes("email")
      )
        ? [
            {
              key: "email",
              label: "Business Email",
              type: "email",
            },
          ]
        : []),

      ...(!service.questions?.some(
        (q) =>
          q.key === "phone" ||
          q.key === "phoneNumber" ||
          q.label?.toLowerCase().includes("phone")
      )
        ? [
            {
              key: "phone",
              label: "Phone Number",
              type: "text",
            },
          ]
        : []),

      // ORIGINAL QUESTIONS
      ...(service.questions || []),
    ],
  }}
  onSubmit={handleSubmit}
  loading={loading}
  location={location}
  setLocation={setLocation}
/>

              {/* ERROR */}
              {error && (
                <div
                  className="
                    mt-6
                    bg-red-50
                    border
                    border-red-200
                    text-red-600
                    p-4
                    rounded-2xl
                    text-center
                    font-medium
                  "
                >
                  {error}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ================= WRAPPER =================
export default function RequestPageWrapper() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />

            <p className="mt-4 text-slate-600 font-medium">
              Loading Service Request...
            </p>
          </div>
        </div>
      }
    >
      <RequestPage />
    </Suspense>
  );
}