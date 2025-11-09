// File: app/components/sections/Portfolio.js
import React from "react";
import Image from "next/image";

// --- SVG Icons for Controls (Unchanged) ---
const PlayIcon = () => (
  <svg
    className="w-16 h-16 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ArrowLeft = () => (
  <svg
    className="w-6 h-6 text-brand-dark"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    className="w-6 h-6 text-brand-dark"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

// --- Main Portfolio Component ---
export default function Portfolio() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 overflow-hidden">
      {/* --- Title Area (Unchanged) --- */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-serif text-2xl text-brand-dark">
          The Highlight Reel
        </p>
        <p className="text-brand-body mt-2">Watch the magic we've captured.</p>
      </div>

      <div className="flex items-center justify-center gap-8 mt-16">
        {/* 1. Left Column: Camera Illustration (Hidden on mobile) */}
        <div className="hidden lg:block w-1/4">
          <div className="w-full h-96 flex items-center justify-center rounded-lg">
            {
              <Image
                src="/Cam Group.png"
                alt="Vintage Camera"
                width={200}
                height={384}
                className="object-contain"
              />
            }
          </div>
        </div>

        {/* 2. Middle Column: Film Strip Player */}
        <div className="w-full lg:w-1/2 max-w-4xl">
          <div className="relative">
            {/* The film strip border */}
            <div className="w-full bg-gray-200 p-4 border-4 border-gray-300 rounded-lg">
              <div className="flex space-x-2 w-full h-8 bg-white border-y border-gray-400 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-full bg-gray-400 flex-shrink-0"
                  />
                ))}
              </div>

              {/* Main Video Area */}
              <div className="relative w-full aspect-video bg-black my-4">
                <Image
                  src="/Frame 17.png"
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer">
                  <PlayIcon />
                </div>
              </div>

              <div className="flex space-x-2 w-full h-8 bg-white border-y border-gray-400 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-full bg-gray-400 flex-shrink-0"
                  />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
              <ArrowLeft />
            </button>
            <button className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* 3. Right Column: Mandala Illustration (Hidden on mobile) */}
        <div className="hidden lg:block w-1/4">
          <div className="w-full h-96 flex items-center justify-center rounded-lg">
            {
              <Image
                src="/Portfolio.png"
                alt="Mandala"
                width={200}
                height={384}
                className="object-contain"
              />
            }
          </div>
        </div>
      </div>
    </section>
  );
}
