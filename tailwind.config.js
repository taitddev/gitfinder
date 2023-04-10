/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPrimary: "#fff",
        darkPrimary: "#141d2e",
        bluePrimary: "#0077ff",
        platinum: "#DCE0EA",
        silver: "#D2D6E0",
      },
    },
  },
  plugins: [],
};
