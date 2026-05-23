// /** @type {import('next').NextConfig} */
// const nextConfig = { images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//     ],
//   },};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com", // <-- Add this
      }
      ,
      {
        protocol: "https",
        hostname: "images.pexels.com", // <-- add this line
      },
    ],
  },
};

export default nextConfig;