/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '501': '501px',
        '974': '974px',
      },
      margin: {
        '100vh': '100vh',
      },
      fontSize: {
        'smplus': '0.938rem', /* 15px */
        'xlplus': '1.375rem', /* 22px */
        '2xlplus': '1.75rem', /* 28px */
      },
      fontFamily: {
        'arial': ['Arial', 'Helvetica', 'sans-serif'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      colors: {
        'textcustom': '#3B3B3B',
      }
    },
  },
  plugins: [],
}
