/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a6eba', // Blue from the logo
        background: '#F9FAFB', // Light gray background
        secondary: '#004d8a', // Darker blue for hover/accent
        accent: '#ffcc00', // Yellow for highlights (optional)
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
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
