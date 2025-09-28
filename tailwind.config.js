/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mac-beige': '#F5F5DC',
        'mac-gray': '#C0C0C0',
        'mac-dark-gray': '#808080',
        'mac-blue': '#0000FF',
        'mac-green': '#00FF00',
        'mac-red': '#FF0000',
        'mac-yellow': '#FFFF00',
        'chess-light': '#F0D9B5',
        'chess-dark': '#B58863',
      },
      fontFamily: {
        'monaco': ['Monaco', 'Menlo', 'Consolas', 'monospace'],
        'chicago': ['Chicago', 'Geneva', 'sans-serif'],
      },
      boxShadow: {
        'mac-inset': 'inset 1px 1px 0px #ffffff, inset -1px -1px 0px #808080',
        'mac-outset': '1px 1px 0px #ffffff, -1px -1px 0px #808080',
      },
    },
  },
  plugins: [],
}
