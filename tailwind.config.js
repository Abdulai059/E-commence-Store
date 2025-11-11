/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // plugins: [require("daisyui")],
  plugins: [],
  daisyui: {
    themes: false,
    styled: true,
    base: false, // 🚨 turn off DaisyUI base styles
    utils: true,
    logs: false,
  },
};
