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
        // 1. Add the new display font using the CSS variable
        display: ["var(--font-island-moments)", "cursive"],
        halant: ["var(--font-halant)", "serif"],
      },
      colors: {
        "brand-background": "#FFFCFA",
        "brand-dark": "#1E2338",
        "brand-body": "#4F4F4F",
        "brand-orange": "#F76F37",
        // 2. Add the new headline color from your specs
        "brand-headline": "#0F3255",
        // 3. Add the new accent color from your specs
        "brand-accent": "#F15D2B",
      },
    },
  },
  plugins: [],
};

export default config;
