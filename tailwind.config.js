module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'greenz': "#01753D",
        'gold': "#AE9B31",
        'dark': "#231F20",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "Arial", "sans-serif"],
        "tahoma": ["Tahoma", "Arial", "sans-serif"],
      },
      fontSize: {
        '80px': '5.25rem',
        '64px': '4rem',
        '32px': '2rem',
      },
      screens: {
        "3xl": "1790px",
        'mob': '320px'
      },

      backgroundImage: theme => ({
        'tree-bg': "url('/assets/img/tree-bg.png')",
        'burger': "url('/assets/img/burger.svg')"
      })

    },

  },

  variants: {
    extend: {},
  },
  plugins: [],
};
