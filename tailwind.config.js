/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      fontSize: {
        body: '1.125rem'
      },
      colors: {
        pink: 'hsl(322, 100%, 66%)',
        veryPaleCyan: 'hsl(193, 100%, 96%)',
        veryDarkCyan: 'hsl(192, 100%, 9%)',
        grayishBlue: 'hsl(208, 11%, 55%)',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1024px',
        '2xl': '1280px',
        '3xl': '1440px',
        '4xl': '1536px',
      },
    },
  },
  plugins: [],
}
