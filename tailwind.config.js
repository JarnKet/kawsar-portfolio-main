/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#242424",
        background: "#111111",
        componentBg: "#1a1a1a",
        secondary: "#8a8a8a",
        accent: "#dcdcdc",
      },
    },
  },
  plugins: [],
};
