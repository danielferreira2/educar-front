const themeColors = require('./src/assets/themes/colors.json');

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  plugins: [],
  variants: {
    extend: {
      textColor: ['disabled', 'hover'],
      backgroundColor: ['disabled', 'hover'],
    },
  },
  theme: {
    extend: {
      colors: themeColors,
      width: {
        card: '867px',
        cardMedium: '400px',
        cardSmall: '224px',
      },
      height: {
        cardDestaque: '600px',
        cardSubDestaque: '290px',
        cardSmall: '224px',
      },
      screens: {
        xs: '300px',
      },
      maxWidth: {
        card: '867px',
        cardSmall: '224px',
        cardMedium: '320px',
        skeletonCardSmall: '400px',
      },
      minWidth: {
        xl: '25rem',
        '2x1': '42rem',
      },
      maxHeight: {
        cardSmall: '224px',
      },
      borderRadius: {
        curveFooter: '800px',
        curveLogin: '200px',
      },
    },
  },
  important: true,
};
