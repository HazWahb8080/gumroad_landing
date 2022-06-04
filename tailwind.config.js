module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      maven: ["Maven Pro", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
