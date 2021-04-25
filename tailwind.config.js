module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily: {
        body: ['LazenbyComp-Smooth']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
