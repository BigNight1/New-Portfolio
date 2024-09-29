const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Rutas de contenido de Flowbite React
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["Space Mono", "monospace"],
        Roboto: ["Roboto", "sans-serif"],
        Jersey: ["Jersey 15", "sans-serif"],
      },
    },
  },
  plugins: [
    flowbite.plugin(), // Plugin de Flowbite React
  ],
};
