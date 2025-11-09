// File: app/components/sections/Services.js
import Link from "next/link";
import Image from "next/image";

// A reusable component for the three "polaroid" service cards
const ServiceCard = ({ href, imgSrc, title, rotation }) => (
  <Link
    href={href}
    // Added 'relative' for the tape placeholder
    className={`block bg-white p-4 shadow-lg group hover:scale-105 transition-transform relative ${rotation}`}
  >
    {/* --- Placeholder for the 'tape' graphic --- */}
    {/* This div will hold your exported tape PNG */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 opacity-50 z-10">
      {<Image src="/image 6.png" alt="Tape" fill className="object-contain" />}
    </div>

    {/* --- Image Container --- */}
    <div className="relative w-full h-60 bg-gray-200">
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover group-hover:opacity-90 transition-opacity"
      />
    </div>
    <h3 className="font-serif text-2xl text-brand-dark text-center mt-4">
      {title}
    </h3>
  </Link>
);

export default function Services() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 relative">
      {/* --- Title Area (Updated) --- */}
      <div className="text-center max-w-2xl mx-auto">
        {/* Removed the "Services" h2 */}
        <p className="font-halant text-2xl text-brand-dark">
          The storyboard reveals the breadth of our craft.
        </p>

        {/* --- Placeholder for the brush stroke underline --- */}
        <div className="w-64 h-4 mx-auto my-4">
          {
            <Image
              src="/Vector 5.png"
              alt="Brush Stroke"
              width={256}
              height={16}
              className="object-contain"
            />
          }
        </div>
      </div>

      {/* --- Services Card Grid (Updated with rotations) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mt-16">
        <ServiceCard
          href="/services/film-production"
          imgSrc="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=1770&q=80"
          title="Film Production"
          rotation="transform -rotate-3" // Added rotation
        />
        <ServiceCard
          href="/services/branding"
          imgSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=1974&q=80"
          title="Branding"
          rotation="transform rotate-1" // Added rotation
        />
        <ServiceCard
          href="/services/art-curation"
          imgSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=1770&q=80"
          title="Art Curation"
          rotation="transform rotate-2" // Added rotation
        />
      </div>

      {/* --- Placeholder for bottom lace/mandala decoration --- */}
      <div className="w-full h-16rounded-lg flex items-center justify-center mt-24">
        {
          <Image
            src="/Frame 33.png"
            alt="Bottom Decoration"
            flow="Horizontal"
            width={1920}
            height={113.47335052490234}
            top={966}
            className="object-contain"
          />
        }
      </div>
    </section>
  );
}
