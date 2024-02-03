/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        '--darkgrey':'#383838',
        '--lightgray':'#9e9e9e',
        '--white':'rgb(247, 247, 247)',
        '--blue':'#346DFF',
        '--yellow':'#FFCD4B',
        '--blackShadow':'#c6c6c6',
        '--body--backgroundColor':'#fcfcfc',
        '--nav--darkgray': 'rgba(72,71,71,0.5)',
        '--gradient-dark': 'rgba(33,33,33,1)',
        '--gradient-light': 'rgba(56,56,56,1)',
        '--dark--container': '#555555'
      },
      fontFamily: {
        Josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
        Manrope: ['"Manrope"', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        buttonAnim: 'buttonAnim 500ms ease-in',
        footerAnim: 'background-color 200ms ease-in'
      },
      keyframes: {
        buttonAnim: {
          '0%' : {left: '-100%'},
          '100%':{left: '0%'}
        }
      },
      margin:{
        '25vh': '25svh',
        '100px': '100px',
        
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      padding: {
        '10px': '10px',
      },
      dropShadow: {
        'light': '0px 0px 4px #c6c6c6',
        'hover': '0px 6px 10px #c6c6c6'
      },
      screens: {
        'sm': '568px',
        'md': '834px',
        'lg': '1080px',
      },
      height:{
        '112': '28rem',
        'cal': 'calc(100vh - 78px)'
      },
      width:{
        '38': '9.6rem'
      },
      backgroundImage: {
        'spline': "url(https://app.spline.design/_assets/_icons/icon_favicon32x32.png)",
      },
      zIndex: {
        '1': '1',
      }
  },
  plugins: [],
}
}
