/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mobiShop: {
          primary: '#FF512F',
          secondary: '#DD2476',
          accent: '#394E62',
        }
      }
    ]
  }
  ,
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}