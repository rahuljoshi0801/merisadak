# 🏔️ Uttarakhand Civic Portal (MeriSadak)

A highly responsive, mobile-first Progressive Web App (PWA) designed to empower citizens to easily report and track local civic issues (like damaged roads, garbage dumping, and unclean facilities) directly to the relevant authorities in Uttarakhand.

## 🚀 Key Features

*   **Citizen Reporting Form**: Easily submit issues with category selection, deep text descriptions, and photo evidence.
*   **Live Location Capture**: Automatically tags issues using the target device's secure HTML5 Geolocation API.
*   **Progressive Web App (PWA) Ready**: Can be installed directly to the home screen on iOS and Android devices like a native app.
*   **Admin Dashboard**: A protected statistics view to filter, track, and officially resolve active complaints.
*   **Status Tracking**: Quickly look up complaint IDs to view live resolution statuses.
*   **Mobile-First Design**: Beautiful Tailwind CSS styling crafted explicitly for phone users on the go.

## 🛠️ Technology Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **PWA Wrapper**: `next-pwa`
*   **Icons**: Native Emojis & Standard SVG
*   **Data Architecture**: Currently Frontend-only (using React UI States & simulated API delays for hackathon prototyping).

## 💻 Getting Started

First, install the package dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📱 Using the App

1.  **Home Screen**: Navigate through the core pillars (Submit, Track, Admin).
2.  **Reporting**: Click **📸 Report New Issue**. You will be asked for Geolocation permission. This will capture your precise Lat/Lng. Alternatively, attach a picture natively from your camera.
3.  **Admin Tools**: Go to the **👔 Admin Dashboard** to view hard-coded simulated data, filter by `Resolved` or `Pending`, and mark active mock tickets as complete.

## 🏗️ Future Deployment / Backend 
This project is currently pre-configured for **Vercel** deployment out-of-the-box.
To implement a living backend where complaints map persistently across users, Next.js Server Actions or dedicated `app/api/` network routes can be combined with Firebase, Supabase, or MongoDB. 

---
*Built with ❤️ for a cleaner, safer Uttarakhand.*