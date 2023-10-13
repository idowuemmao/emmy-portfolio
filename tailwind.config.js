/** @type {import('tailwindcss').Config} */

const { withAnimations } = require("animated-tailwindcss");

module.exports = withAnimations({
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
    plugins: [],
  },
});
