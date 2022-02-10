module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tall: { raw: "( min-height:740px )" },
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "50%": {
            opacity:0,
          },
        },
      },
      animation: {
        typewriter: "typewriter",
        blink: "blink",
      },
    },
  },
  plugins: [],
};
