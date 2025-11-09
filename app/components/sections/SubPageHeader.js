"use client"; // For the mobile menu
import { useState } from "react";
import Image from "next/image";

// --- Logo Component ---
const Logo = () => (
  <Image
    src="/VFilms_Logo.png" // <-- CHANGE THIS to your filename (e.g., "/image_464c55.png")
    alt="V Films Logo"
    width={81} // Based on the original design's size
    height={31} // Based on the original design's size
    priority // Helps the logo load faster
  />
);

const HamburgerIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

// We won't build the full mobile menu for these pages
// unless you want to. For now, it's just the icon.
export default function SubPageHeader() {
  return (
    <div className="container mx-auto px-6 pt-6 flex justify-between items-center">
      <Logo />
      <button className="text-brand-dark">
        <HamburgerIcon />
      </button>
    </div>
  );
}
