/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-12': 'repeat(auto-fill, 12rem)',
        'auto-fill-13': 'repeat(auto-fill, 13rem)',
        'auto-fill-14': 'repeat(auto-fill, 14rem)',
      },
    },
  },
  plugins: [],
};
