/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // sage/olive editorial palette
        sage: "#C7CBB7",       // page background
        sage2: "#D8DBC9",      // lighter panel (portrait backdrop, cards)
        sage3: "#BABEA9",      // darker panel / hover
        ink: "#1B1B15",        // primary text, near-black warm
        muted: "#6E7062",      // secondary text
        line: "#00000022",     // hairline borders (used as border-ink/15 etc.)
        cream: "#F2F1E8",      // lightest surface (badges, cards)
        rust: "#B65C36",       // single warm accent, used sparingly
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        accent: ["Instrument Serif", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        layer: "0 20px 60px -25px rgba(27,27,21,0.35)",
      },
    },
  },
  plugins: [],
};
