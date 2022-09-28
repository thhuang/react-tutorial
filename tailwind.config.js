/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        background: '#0e011a',
        'background-varient': '#1a042d',
        primary: '#4e2a84',
        'primary-varient': '#836eaa',
        white: '#ffffff',
        light: '#bbb8b8',
      },
      gridTemplateColumns: {
        'auto-fill-1': 'repeat(auto-fill, 1rem)',
        'auto-fill-2': 'repeat(auto-fill, 2rem)',
        'auto-fill-3': 'repeat(auto-fill, 3rem)',
        'auto-fill-4': 'repeat(auto-fill, 4rem)',
        'auto-fill-5': 'repeat(auto-fill, 5rem)',
        'auto-fill-6': 'repeat(auto-fill, 6rem)',
        'auto-fill-7': 'repeat(auto-fill, 7rem)',
        'auto-fill-8': 'repeat(auto-fill, 8rem)',
        'auto-fill-9': 'repeat(auto-fill, 9rem)',
        'auto-fill-10': 'repeat(auto-fill, 10rem)',
        'auto-fill-11': 'repeat(auto-fill, 11rem)',
        'auto-fill-12': 'repeat(auto-fill, 12rem)',
        'auto-fill-13': 'repeat(auto-fill, 13rem)',
        'auto-fill-14': 'repeat(auto-fill, 14rem)',
      },
    },
  },
  plugins: [],
};
