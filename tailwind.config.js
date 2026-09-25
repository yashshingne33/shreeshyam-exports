/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        charcoal: "#202421",
        ivory: "#F7F5EF",
        forest: "#284D3C",
        brass: "#AF9560",
        "brass-dim": "#8F7A50",
        "ink-soft": "#4B5049",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        wide2: "0.04em",
      },
    },
  },
  plugins: [],
};
