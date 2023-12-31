module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      fontFamily: {
        iAMono: ["iAWriterMono", "monospace"],
        iAWriterQuattro: ["iAWriterQuattro", "sans-serif"],
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      colors: {
        "lighter-gray": "#212121",
        "scrollbar-gray": "#363636",
        "darker-gray": "#171717",
        "cod-gray": {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
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
      backgroundPosition: {
        cursor: "calc(100vw - 100%) calc(100vh - 100%)",
      },
      backgroundSize: {
        200: "200% 200%",
      },
      gradientColorStops: {
        "custom-gradient": ["colors[cod-grey-950]", "colors[cod-grey-800]"], // Use the custom colors in the gradient definition
      },
      cursor: {
        gradient:
          "radial-gradient(circle at var(--tw-cursor-x) var(--tw-cursor-y), colors[cod-grey-950], colors[cod-grey-800])", // Use the custom colors in the cursor definition
      },
    },
  },
};
