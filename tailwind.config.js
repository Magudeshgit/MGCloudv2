/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sfprodisplay": ['SF-ProDisplay'],
        "poppins": ['poppins']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

