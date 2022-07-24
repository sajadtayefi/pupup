/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./picture/1.jpg')",
        'svgOne': "url('./picture/Live-Wave-Background.svg')",
        'svgTwo': "url('./picture/Shadow-Fall-Background.svg')",
        'svgTree': "url('./picture/Bubble-Background.svg')",
        'svgFour': "url('./picture/Live-Motion-Background.svg')",
        'svgLast': "url('./picture/bubble-animated-background.svg')",


      }
    },
  },
  plugins: [],
}
