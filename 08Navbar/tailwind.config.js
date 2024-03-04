/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(17, 24, 39)",
        myShadow2: "-4.1px -5px 0 0 rgb(17, 24, 39)",
      }
    },
  },
  plugins: [],
}

