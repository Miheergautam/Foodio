/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-y": "#ECD06F",
        "light-p": "#FF9398",
        "deep-b": "#1E56A0",
        "soft-b": "#90CCF4",
      },
      fontFamily: {
        alegreya: ["Alegreya", "serif"],
      },
    },
  },
  plugins: [],
}