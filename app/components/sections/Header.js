// File: app/components/layout/Header.js

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// --- Logo Component ---
const Logo = () => (
  <Link href="/">
    <Image
      src="/VFilms_Logo.png"
      alt="V Films Logo"
      width={81}
      height={31}
      priority
    />
  </Link>
);

// --- Menu Icon Components ---
const PaintStrokeMenuIcon = () => (
  <Image src="/Vector.png" alt="Open Menu" width={30} height={20} priority />
);

const PaintStrokeCloseIcon = () => (
  <Image
    src="/Vector Close.png"
    alt="Close Menu"
    width={30}
    height={20}
    priority
  />
);

// --- Navigation Links Component ---
const NavLinks = ({ isMobile }) => {
  const navItems = [
    { name: "Services", href: "#" },
    { name: "Their Stories", href: "#" },
    { name: "Our Story", href: "#" },
    { name: "Varnan", href: "#" },
  ];

  if (isMobile) {
    return (
      <nav className="flex flex-col items-center space-y-6 pt-24">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-2xl text-brand-dark hover:text-brand-orange transition-colors"
          >
            {item.name}
          </a>
        ))}
        <a
          href="#"
          className="w-full max-w-xs text-center bg-brand-orange text-white px-6 py-3 rounded-full font-bold text-lg"
        >
          Let's Talk
        </a>
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-6">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-brand-dark hover:text-brand-orange transition-colors"
        >
          {item.name}
        </a>
      ))}
      <a
        href="#"
        className="bg-brand-orange text-white px-5 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Let's Talk
      </a>
    </nav>
  );
};

// --- Main Header Component ---
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-30 bg-textured shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />

          <div className="hidden md:flex items-center space-x-6">
            {isNavOpen ? (
              // Desktop Open State
              <>
                <NavLinks isMobile={false} />
                <button
                  onClick={() => setIsNavOpen(false)}
                  className="text-brand-dark"
                >
                  <PaintStrokeCloseIcon />
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsNavOpen(true)}
                className="text-brand-dark"
              >
                <PaintStrokeMenuIcon />
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="text-brand-dark"
            >
              {isNavOpen ? <PaintStrokeCloseIcon /> : <PaintStrokeMenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {isNavOpen && (
        <div className="md:hidden fixed inset-0 z-20 bg-brand-background flex flex-col p-6">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0">
            <Logo />
            <button
              className="text-brand-dark"
              onClick={() => setIsNavOpen(false)}
            >
              <PaintStrokeCloseIcon />
            </button>
          </div>
          <NavLinks isMobile={true} />
        </div>
      )}
    </>
  );
}
