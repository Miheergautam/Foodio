/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-yellow": "#ECD06F",
        "light-pink": "#FF9398",
        "deep-blue": "#1E56A0",
        "soft-light-blue": "#90CCF4",
      },
      fontFamily: {
        alegreya: ["Alegreya", "serif"],
      },
    },
  },
  plugins: [],
};
