/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize: {
        'h1': '100px',
        'h2': '90px',
        'h3': '80px',
        'h4': '60px',
        'h5': '25px',
        'h6': '22px',
        'h7': '18px',
        'h8': '16px',
        'h9': '14px',
        'h10': '12px',
      },
      lineHeight: {
        'h1': '100px',
        'h2': '98px',
        'h3': '88px',
        'h4': '66px',
        'h5': '30px',
        'h6': '24px',
        'h7': '20px',
        'h8': '20px',
        'h9': '14px',
        'h10': '16px',
      },
      textColor: {
        'gr': '#D2FE67',
        'gy': '#F5F5F799',
        'wh': '#F5F5F7',
        'sal': '#DDFE8D'
      },
      backgroundColor: {
        'gr': '#D2FE67',
        'gy': '#F5F5F799',
        'wh': '#F5F5F7',
        'sal': '#DDFE8D'
      },
      backgroundImage: {
        '=': 'url("/public/main page/icons/mn_icn.svg")',
        'plus_bl': 'url("/public/main page/icons/+_wh.svg)"'
      },
      gridTemplateColumns: {
        'slider_col': 'repeat(2, minmax(0, 540px))'
      },
      gridTemplateRows: {
        'slider_row': 'repeat(2, minmax(0, 317px))'
      },
    },
  },
  plugins: [],
}

