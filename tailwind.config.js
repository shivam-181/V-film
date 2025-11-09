// File: tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        display: ["var(--font-island-moments)", "cursive"],
        halant: ["var(--font-halant)", "serif"],
      },
      colors: {
        "brand-background": "#FFFCFA",
        "brand-dark": "#1E2338",
        "brand-body": "#4F4F4F",
        "brand-orange": "#F76F37",
        "brand-headline": "#0F3255",
        "brand-accent": "#F15D2B",
      },
    },
  },
  plugins: [],
};

export default config;
