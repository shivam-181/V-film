// File: app/layout.js

import { Montserrat, Playfair_Display, Island_Moments } from "next/font/google";
import "./globals.css";
import Header from "./components/sections/Header"; // 1. Import the new Header

// --- Font Config (Correct) ---
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});
const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-island-moments",
  display: "swap",
});

export const metadata = {
  title: "V Films | Film Production",
  description: "Varnan is where stories find their voice and form.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} ${islandMoments.variable} font-sans`}
      >
        <Header /> {/* 2. Add the global Header */}
        {/* 3. Add padding-top to the main content to push it below the fixed header */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
