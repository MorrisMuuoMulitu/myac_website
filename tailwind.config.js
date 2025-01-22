/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            primary: '#0073E6', // Blue from the logo
            secondary: '#00A8E8', // Lighter blue for accents
            background: '#FFFFFF', // White background
          },
          fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            body: ['Open Sans', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }
