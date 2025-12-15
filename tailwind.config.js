/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        rooted: {
          green: "#3B4F3A",   // deep olive green
          greenSoft: "#6B8068",
          greenDark: "#2A3A28", 
          offwhite: "#FBFBF8",
          line: "#E3E6DF",
        },
      },
    },
  },
  plugins: [],
};
