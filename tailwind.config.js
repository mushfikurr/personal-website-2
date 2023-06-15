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
        deepblue: {
          DEFAULT: "#738CD5",
          50: "#FFFFFF",
          100: "#F1F3FB",
          200: "#D1D9F1",
          300: "#B2C0E8",
          400: "#92A6DE",
          500: "#738CD5",
          600: "#4869C8",
          700: "#324FA6",
          800: "#253B7B",
          900: "#182650",
          950: "#111C3A",
        },
      },
    },
  },
  plugins: [],
};
