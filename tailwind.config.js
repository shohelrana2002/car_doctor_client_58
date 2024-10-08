/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    textColor: {
      orange: ["#FF3811"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
