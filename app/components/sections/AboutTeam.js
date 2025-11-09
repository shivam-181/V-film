// File: app/components/sections/AboutTeam.js
import Link from "next/link";
import Image from "next/image";

// This represents the sticky note with text
const StickyNote = () => (
  // Added pt-8 to give space for the paperclip
  <div className="bg-yellow-100 p-6 pt-8 shadow-lg transform -rotate-2 w-full md:w-80 relative">
    {/* --- UPDATED Paperclip Placeholder --- */}
    {/* Moved to top-right and rotated to match the screenshot */}
    <div className="absolute -top-6 -right-3 w-10 h-16 transform rotate-12 flex items-center justify-center">
      <Image
        src="/pin.png"
        alt="Pin"
        width={69} // Use exact dimensions
        height={126} // Use exact dimensions
        top={-17}
        left={666}
        className="object-contain"
      />
    </div>

    <p className="font-serif text-brand-body text-sm leading-relaxed">
      Some craft films. Some build brands. Some curate art. We bring it all
      together - a collective of storytellers driven by one belief: every
      project deserves to be more than just a message; it should become a
      masterpiece. From first spark to final frame, from raw ideas to timeless
      visuals - we shape stories that stay with you.
    </p>
    <p className="font-serif text-brand-body text-sm leading-relaxed mt-4">
      From first spark to final frame, from raw ideas to timeless visuals – we
      shape stories that stay with you.
    </p>
  </div>
);

// --- Main AboutTeam Component ---
export default function AboutTeam() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 relative overflow-hidden">
      {/* --- This holds the two main columns --- */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* --- Left Column: Sticky Note & India Gate --- */}
        <div className="w-full md:w-1/2 lg:w-1/3 space-y-8 flex flex-col items-center">
          <StickyNote />

          {/* Placeholder for India Gate illustration */}
          <div className="w-48 h-64 rounded-lg flex items-center justify-center">
            {
              <Image
                src="/india-gate.png"
                width={442} // Use exact dimensions
                height={442}
                top={572}
                left={40} // Use exact dimensions
                alt="India Gate Illustration"
              />
            }
          </div>
        </div>

        {/* --- Right Column: Visuals & Button --- */}
        <div className="w-full md:w-1/2 lg:w-2/3 relative">
          {/* Team Silhouettes Placeholder */}
          <div className="flex justify-center items-center h-80 w-full rounded-lg">
            {
              <Image
                src="/team-silhouettes.png"
                width={647.64} // Use exact dimensions
                height={397} // Use exact dimensions
                alt="Team Silhouettes"
              />
            }
          </div>

          {/* Floating Text Elements (positioned relative to this column) */}
          <div className="absolute top-0 left-1/4 -mt-4">
            <p className="font-display text-brand-dark w-179 h-42">
              Film Makers
            </p>
            {
              <Image
                src="/Arrow1.png"
                width={151.5} // Use exact dimensions
                height={95.75} // Use exact dimensions
                alt="Arrow1"
              />
            }
          </div>
          <div className="absolute top-1/4 right-0 translate-x-1/2">
            <p className="font-display text-brand-dark">Art Curators</p>
            {
              <Image
                src="/Arrow2.png"
                width={102.93087005615234} // Use exact dimensions
                height={146} // Use exact dimensions
                alt="Arrow2"
              />
            }
          </div>
          <div className="absolute top-3/4 left-0 -translate-x-1/4">
            <p className="font-display text-brand-dark">Branding Experts</p>
            {
              <Image
                src="/Arrow3.png"
                width={197.98602294921875} // Use exact dimensions
                height={226.43600463867188} // Use exact dimensions
                alt="Arrow3"
              />
            }
          </div>

          {/* Text and Button at the bottom */}
          <div className="mt-12 text-center">
            <p className="font-serif text-2xl text-brand-dark mb-6">
              Take a closer look at the stories V bring to life.
            </p>
            <Link
              href="#"
              className="bg-brand-orange text-white px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
