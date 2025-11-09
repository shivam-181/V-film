// File: app/page.js

import Hero from "@/app/components/sections/Hero";
import AboutTeam from "@/app/components/sections/AboutTeam";
import AboutUs from "@/app/components/sections/AboutUs";
import Services from "@/app/components/sections/Services";
import Portfolio from "@/app/components/sections/Portfolio";
import Contact from "@/app/components/sections/Contact";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutTeam />
      <AboutUs />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
