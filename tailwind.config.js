/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      'sm1': '20px',
      'sm2':'375px',
      'sm3':'425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
    extend: {
      invert: {
        25: '.25',
        50: '.5',
        60:'0.6',
        75: '.75',
      },
      fontSize: {
        '10xl': '9rem',
      },
      rotate: {
        '24': '24deg',
      },
      shadow:{
        '3xl':'3rem',
      },
      colors:{
        'blueGreen': 'linear-gradient(90deg, #3498db, #2ecc71)',
        'darkBlue':'#001f3f',
        'teal':'#39cccc',
        'gold':'#ffd700',
        'darkOrange':'#ff5733',
        'deepPurple': '#800080',
        'softPink': '#FF85A2',
        'deepGreen': '#006400',
        'brightLime': '#00FF00',
        'deepRed': '#FF0000',
        'vibrantOrange': '#FFA500',
        'silver': '#C0C0C0',
        'darkGray': '#808080',
        'aqua': '#00FFFF',
        'deepBlue': '#000080',
        'crimson': '#DC143C',
        'maroon': '#800000',
        'yellow':'#FFFF00',
        'amber': '#FFBF00',
        'magenta': '#FF00FF',
        'softPink': '#FFC0CB',
        '1': '#B1E5F9',
        '2': '#F4D2FE',
        'cyan':'#33becc',
        'ltgreen':'#46cf8f',
        'yw':'#d4c951',
        'ywbg':'#1d1c16',
        'bl':'#fff',
        'purple':'#a5a1ff',
        'purplebg':'#1b1b1f',
        'pink':'#ffaed8',
        'pinkbg':'#1f1a1c',
      },
      borderRadius:{
        '4xl':'4rem',
        '3xl':'3rem',
        '6xl':'10rem',
      },
      backgroundImage: {
        'backdrop': "url('/media/images/parallax.jpg')",
      },
      width: {
        '84': "21rem",
      },
      height: {
        '100': "35rem",
      },
      borderWidth: {
        '1': "1px",
      },
      width: {
        '98': "98%",
      },
      fontFamily: {
        'poppins': "['Poppins', 'sans-serif']",
        'vina': "['Vina Sans', 'sans-serif']",
      },
    },
  },
  plugins: [],
}


