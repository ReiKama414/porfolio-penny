/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '100vh': '100vh',
      },
      fontSize: {
        'smplus': '0.938rem', /* 15px */
        'xlplus': '1.375rem', /* 22px */
      },
      fontFamily: {
        'arial': ['Arial', 'Helvetica', 'sans-serif'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'd2em': '0.2em',
      }
    },
  },
  plugins: [],
}
