// File: app/components/sections/Hero.js
// NO 'use client' or 'useState' needed here anymore.

import Image from "next/image";

export default function Hero() {
  return (
    // The 'min-h-screen' is gone, as the padding is handled by layout.js
    <section className="relative w-full container mx-auto px-6 py-12 md:py-24">
      {/* Background div (placeholder) */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('/mandala-background.svg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>

      {/* --- Hero Content --- */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center">
        {/* --- Left Column (Logo + Mandala) --- */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
          <div className="relative w-full max-w-sm aspect-square">
            <Image
              src="/Hero Mandala.png" // Assumes you have this in /public
              alt="Mandala"
              width={400}
              height={400}
              className="object-contain z-10"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Image
                src="/VFilms_Logo.png" // Assumes you have this in /public
                alt="V Films Logo"
                width={202}
                height={77}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* --- Right Column (Text Content) --- */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="font-display text-7xl md:text-8xl text-brand-headline">
            Varnan is where stories find
            <br />
            their voice and form
          </h1>
          <p className="font-halant text-2xl text-brand-orange mt-6">
            Films . Brands . Art
          </p>
          <p className="text-brand-body text-sm leading-relaxed max-w-sm">
            Since 2009, V’ve been telling stories - stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way - by listening with intention. V believes it takes
            trust, patience, and an eye for the unseen to capture what truly
            matters. V doesn’t just tell stories - V honors them.
          </p>
        </div>
      </div>
    </section>
  );
}
