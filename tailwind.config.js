/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066ff',
        secondary: '#00c4cc',
        accent: '#ff4d4d',
        dark: '#0f172a',
        light: '#f8fafc',
        background: '#ffffff',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      fontSize: {
        'h1': '3rem',
        'h2': '2.25rem',
        'h3': '1.875rem',
        'body': '1rem',
      },
      lineHeight: {
        'relaxed': '1.75',
      },
      letterSpacing: {
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
      },
    },
  },
  plugins: [],
}
