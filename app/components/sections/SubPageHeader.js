"use client"; // For the mobile menu
import { useState } from "react";
import Image from "next/image";

// --- Logo Component ---
const Logo = () => (
  <Image
    src="/VFilms_Logo.png"
    alt="V Films Logo"
    width={81}
    height={31}
    priority
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
