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
