/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        resultTitle: ["36px", "40px"],
        temperature: ["60px", "72px"],
        footerText: ["22.8px", "26.8px"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
