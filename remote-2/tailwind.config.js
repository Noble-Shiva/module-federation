const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.green,
      gray: colors.gray,
      while: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
