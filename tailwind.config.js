
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { emeraldDark:"#0A5C4A", emeraldDarker:"#064C3B", gridStroke:"rgba(148,163,184,0.25)" },
      boxShadow: { glow: "0 0 0 4px rgba(34,211,238,0.15)" },
      backgroundImage: { 'katak': "url('/assets/katak.svg')" }
    },
  },
  plugins: [],
}
