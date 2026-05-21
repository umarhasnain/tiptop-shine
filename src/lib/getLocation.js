// export async function getUserLocation() {
//   try {
//     // STEP 1: GET GPS
//     const position = await new Promise((resolve, reject) => {
//       if (!navigator.geolocation) {
//         reject("No geolocation support");
//       }

//       navigator.geolocation.getCurrentPosition(resolve, reject, {
//         enableHighAccuracy: false,
//         timeout: 5000,
//         maximumAge: 0,
//       });
//     });

//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     // STEP 2: CALL API
//     const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

//     const res = await fetch(url);
//     const data = await res.json();

//     return {
//       city: data.city || data.locality || "Unknown",
//       country: data.countryName || "Unknown",
//       postcode: data.postcode || "",
//       region: data.principalSubdivision || "",
//       lat: latitude,
//       lng: longitude,
//     };

//   } catch (err) {
//     console.log("GPS FAILED → USING IP FALLBACK");

//     try {
//       const res = await fetch("https://ipapi.co/json/");
//       const ipData = await res.json();

//       return {
//         city: ipData.city || "Unknown",
//         country: ipData.country_name || "Unknown",
//         postcode: ipData.postal || "",
//         region: ipData.region || "",
//         lat: null,
//         lng: null,
//       };
//     } catch (e) {
//       return {
//         city: "Unknown",
//         country: "Unknown",
//         postcode: "",
//         region: "",
//         lat: null,
//         lng: null,
//       };
//     }
//   }
// }


export async function getUserLocation() {
  // DEFAULT OBJECT
  const fallback = {
    city: "",
    country: "",
    postcode: "",
    region: "",
    lat: null,
    lng: null,
    source: "manual",
  };

  // =========================
  // STEP 1 — GPS LOCATION
  // =========================

  try {
    if (!navigator.geolocation) {
      throw new Error("Geolocation not supported");
    }

    // PERMISSION CHECK
    if (navigator.permissions) {
      const permission = await navigator.permissions.query({
        name: "geolocation",
      });

      if (permission.state === "denied") {
        throw new Error("Location permission denied");
      }
    }

    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      });
    });

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // OPENSTREETMAP REVERSE GEOCODE
    const geoRes = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
    );

    const geoData = await geoRes.json();

    return {
      city:
        geoData.address?.city ||
        geoData.address?.town ||
        geoData.address?.village ||
        "",

      country: geoData.address?.country || "",

      postcode: geoData.address?.postcode || "",

      region: geoData.address?.state || "",

      lat,
      lng,

      source: "gps",
    };
  } catch (gpsError) {
    console.log("GPS FAILED:", gpsError.message);
  }

  // =========================
  // STEP 2 — IP FALLBACK
  // =========================

  try {
    const ipRes = await fetch("https://ipapi.co/json/");

    const ipData = await ipRes.json();

    const lat = parseFloat(ipData.latitude);
    const lng = parseFloat(ipData.longitude);

    return {
      city: ipData.city || "",

      country: ipData.country_name || "",

      postcode: ipData.postal || "",

      region: ipData.region || "",

      lat: Number.isFinite(lat) ? lat : null,

      lng: Number.isFinite(lng) ? lng : null,

      source: "ip",
    };
  } catch (ipError) {
    console.log("IP FALLBACK FAILED");
  }

  return fallback;
}