/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        "hero-background": "url('/src/images/herobg.png')",
      },
      screens: {
        "3xl": "100%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
