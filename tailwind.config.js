/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cursive: ["Caveat"],
      sans: ["Nunito Sans"],
    },
    colors: {
      primary_color: "#f28e12",
      secondary_color: "#202020",
      separator_color: "#DFDFDF",
      border_color: "#9C9C9C",
    },
    extend: {},
  },
  plugins: [],
}
