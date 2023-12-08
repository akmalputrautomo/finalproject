/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
<<<<<<< HEAD
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
=======
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
>>>>>>> fcff3e7ae6c2566e12e06714dadeb66f87cad102
  theme: {
    extend: {},
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
  },
  plugins: [nextui()],
};
