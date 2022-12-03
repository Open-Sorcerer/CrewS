/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display'],
        'raleway': ['Raleway'],
      },
    },
  },
  daisyui: {
    themes: ["lofi"],
  },
  plugins: [require("daisyui")],
};
