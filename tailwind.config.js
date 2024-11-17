import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-gray': '#303035',
        'tan': '#95826a',
        'beige': '#d0c8bd',
        'blackish': '#080809',
        'medium-gray': '#4e4948',
      },
    },
  },
  plugins: [
    forms,
    typography,
  ],
};
