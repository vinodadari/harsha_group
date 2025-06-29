// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Specify the protocol (https)
        hostname: 'images.unsplash.com', // Specify the hostname
        // Optional: port: '', // Specify the port if needed
        // Optional: pathname: '/account123/**', // Use wildcard for dynamic paths if needed
      },
      {
        protocol: 'https', // Specify the protocol (https)
        hostname: 'plus.unsplash.com', // Specify the hostname
        // Optional: port: '', // Specify the port if needed
        // Optional: pathname: '/account123/**', // Use wildcard for dynamic paths if needed
      }
    ],
  },
};
 
module.exports = nextConfig