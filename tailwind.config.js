/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#A4FFAF",
        whitish: "#E6E5EA",
        gray: "#817D92",
        darkGray: "#24232C",
        blackish: "#18171F",
        redish: "#FF7A7A",
      },
      fontSize: {
        base: "0.94rem",
      },
      screens: {
        dt: "1440px",
      },
    },
  },
  plugins: [],
};
