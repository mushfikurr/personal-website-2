module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      fontFamily: {
        iAMono: ["iAWriterMono", "monospace"],
      },
      colors: {
        "lighter-gray": "#212121",
        "darker-gray": "#171717",
      },
    },
  },
  plugins: [],
};
