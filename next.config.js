/** @type {import('next').NextConfig} */

// Configure next-pwa plugin
const withPWA = require('next-pwa')({
  dest: 'public',         // Service worker and PWA files will be generated here
  register: true,         // Automatically register the service worker
  skipWaiting: true,      // Active new service worker immediately
  disable: process.env.NODE_ENV === 'development', // Disable PWA during development
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
