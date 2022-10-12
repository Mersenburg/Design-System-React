/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src//**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 24,
      xl: 28,
      '2xl': 32,
    },
    colors:{
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7C7C8A',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',

      'cyan-500': '#81d8f7',
      'cyan-300': '#98e1fb',

    },
    extend: {
      fontFamily:{
        sans: 'inter, sans-serif'
      },
    },
  },
  plugins: [],
}
