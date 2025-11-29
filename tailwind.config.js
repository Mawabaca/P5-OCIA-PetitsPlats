/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-poppins)",
          "Poppins",
          "ui-sans-serif",
          "system-ui",
        ],
        display: ["var(--font-bebas)", "Bebas Neue", "ui-sans-serif"],
      },
      colors: {
        accent: "#ffd15b",
      },
    },
  },
  plugins: [],
};
