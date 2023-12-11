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
      white_tint: "rgba(255,255,255,0.85)",
    },
    extend: {
      keyframes: {
        ltr: {
          "0%": { transform: "translateX(0vw)" },
          "100%": { transform: "translateX(100vw)" },
        },
        rtl: {
          "0%": { transform: "transformX(10vw0)" },
          "100%": { transform: "translateX(-100vw)" },
        },
      },
      animation: {
        "ltr-slow": "ltr 200s linear infinite",
        "rtl-slow": "rtl 200s linear infinite",
      },
    },
  },
  plugins: [],
}
