import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// In Next.js 14, viewport is exported separately from metadata
export const viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata = {
  title: 'Uttarakhand Civic Portal',
  description: 'Report and track civic issues in Uttarakhand',
  manifest: '/manifest.json', // Link to PWA manifest
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'UK Complaints',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
