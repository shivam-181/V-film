import React from "react";
import Image from "next/image";

const StatCard = ({ number, title, rotation }) => (
  <div className={`bg-yellow-100 p-6 shadow-lg w-full text-center ${rotation}`}>
    <p className="font-serif text-4xl text-brand-dark">{number}</p>
    <p className="font-serif text-lg text-brand-orange">{title}</p>
  </div>
);

export default function AboutUs() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
        <div className="w-full md:w-5/12 space-y-8">
          <div className="space-y-4">
            <h2 className="font-halant text-2xl text-brand-dark">
              A montage of familiar faces and names.
            </h2>
            <p className="text-brand-body text-sm leading-relaxed">
              Some stories come from the biggest names. Others begin with bold,
              rising voices. V've been fortunate to walk alongside both –
              listening, creating, and building stories that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard
              number="85+"
              title="Projects"
              rotation="transform -rotate-2"
            />
            <StatCard
              number="50+"
              title="Happy Clients"
              rotation="transform rotate-1"
            />
            <StatCard
              number="10+"
              title="Experts Team"
              rotation="transform -rotate-1"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 space-y-6">
          <h2 className="font-display text-4xl text-brand-headline leading-snug">
            Every project is more than just a brief –
            <br />
            it's a new chapter waiting to be written.
            <br />
            Together, we've crafted tales that inspire,
            <br />
            connect, and endure.
          </h2>

          <div className="relative w-full h-64 mt-12">
            <Image
              src="/mountain.png"
              alt="Mountain Illustration"
              fill
              className="object-contain z-10"
            />

            <Image
              src="/rainbow.png"
              alt="Client Logos"
              fill
              className="object-contain z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
