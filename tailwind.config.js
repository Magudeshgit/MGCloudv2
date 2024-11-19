/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import plugin from 'flowbite/plugin'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js"
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
    daisyui,
    plugin
  ],
  daisyui: {
    themes: ["light"],
  },
}

