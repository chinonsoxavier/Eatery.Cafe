/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx"],
  theme: {
    extend: {
      colors: {
        lightText: "#555",
        darkText: "rgba(53,53,53)",
        lighterText: "rgb(191, 189, 189)",
        lightBackground:"rgba(249,249,249)"
      },
    },
  },
  plugins: [require("autoprefixer")],
};
