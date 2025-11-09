import Link from "next/link";
import Image from "next/image";

// --- Back Arrow Icon ---
const ArrowLeft = () => (
  <svg
    className="w-4 h-4 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

export default function ArtCurationPage() {
  return (
    <main className="container mx-auto px-6 py-16 md:py-24">
      {/* --- Back Button --- */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-brand-orange font-bold hover:underline"
        >
          <ArrowLeft />
          Back
        </Link>
      </div>

      {/* --- Page Content (from image_3995d0.jpg) --- */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        {/* --- Left Column: Image --- */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-square shadow-lg">
            <Image
              src="/Frame 30.png"
              alt="Art Curation"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="font-serif text-3xl text-brand-dark text-center mt-4">
            Art Curation
          </h2>
        </div>

        {/* --- Right Column: Text --- */}
        <div className="w-full md:w-1/2">
          <div className="max-w-lg">
            <p className="font-serif text-2xl text-brand-dark italic mb-8">
              "V take art where it belongs, to the people." – Vernita Verma
            </p>
            <div className="h-1 w-24 bg-brand-orange my-6" />

            <div className="space-y-4 text-brand-body">
              <p>
                Art isn't meant to sit on distant walls - it's meant to breathe,
                to travel, to belong.
              </p>
              <p>
                Through every festival, every performance, and every gathering,
                we help stories find their stage and their people.
              </p>
              <h3 className="font-serif text-xl text-brand-dark pt-4">
                V curates:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-brand-body">
                <li>Art Festivals</li>
                <li>Live Performances</li>
                <li>Community Events</li>
                <li>Cultural Storytelling</li>
              </ul>
            </div>

            <div className="mt-12">
              <Link
                href="#"
                className="font-bold text-brand-orange text-lg hover:underline"
              >
                Explore Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
