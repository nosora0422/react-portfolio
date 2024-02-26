/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        '--primary':'rgba(var(--primary))',
        '--lightgray':'rgba(var(--lightgray))',
        '--secondary':'rgba(var(--secondary))',
        '--blue':'rgba(var(--blue))',
        '--yellow':'rgba(var(--yellow))',
        '--blackShadow':'rgba(var(--blackShadow))',
        '--body--backgroundColor':'rgba(var(--body--backgroundColor))',
        '--nav--darkgray': 'rgba(var(--nav--darkgray))',
        '--gradient-dark': 'rgba(var(--gradient-dark))',
        '--gradient-light': 'rgba(var(--gradient-light))',
        '--dark--container': 'rgba(var(--dark--container))',
        '--darkMode-text': 'rgba(var(--darkMode-text))',
        '--contact-backgroundColor': 'rgba(var(--contact-backgroundColor))',
        '--card-background': 'rgba(var(--card-background))',
        '--chip--text': 'rgba(var(--chip--text))',
        '--grey': '#383838',
        '--background': 'rgb(252, 252, 252)',
        '--onDark': 'rgb(233, 233, 233)',
        '--outline': 'rgba(var(--outline))',
        '--nav--active': 'rgba(var(--nav--active))',
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
        '38': '9.6rem',
        'plus100': 'calc(100% + 100px)'
      },
      backgroundImage: {
        'spline': "url(https://app.spline.design/_assets/_icons/icon_favicon32x32.png)",
      },
      zIndex: {
        '1': '1',
      },
      
  },
  plugins: [],
  darkMode: 'class',

}
}
