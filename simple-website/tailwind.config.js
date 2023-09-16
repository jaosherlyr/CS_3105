/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'royal-purple': {
        '50': '#faf6fd',
        '100': '#f3ecfb',
        '200': '#e8d9f5',
        '300': '#d8bbec',
        '400': '#c192e0',
        '500': '#a567ce',
        '600': '#8948b1',
        '700': '#7b3d9e',
        '800': '#5f3078',
        '900': '#512c63',
        '950': '#301240',
      },
      'white' : '#ffffff',
    },
    extend: {},
  },
  plugins: [],
}

