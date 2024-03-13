/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        herobg: "../assets/images/webp/header-bg.webp",
      },
      colors: {
        secondaryblack: "#000700",
        offblack: "#292D32",
        lightgreen: "#35A035",
        offwhite: "#FCFEFC",
      },
      fontSize: {
        xxl: "64px",
        xl: "52px",
        lg: "32px",
      },
      fontFamily: { jost: "Jost" },
    },
  },
  plugins: [],
};
