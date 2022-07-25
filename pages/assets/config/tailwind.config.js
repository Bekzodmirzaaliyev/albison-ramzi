const Roboto = require('../fonts/Roboto-Regular.ttf');
const PlayfairDisplay = require('../fonts/PlayfairDisplay-Regular.ttf');

tailwind.config = {
  theme: {
    container: {
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '14rem',
        'xl': '14rem',
        '2xl': '16rem',
      },
    },
    fontFamily: {
      'Playfair': ['Playfair Display', ...PlayfairDisplay],
      'Roboto': ['Roboto', ...Roboto, sans-serif],
    },
    extend: {
      colors: {
        'regal-green': '#177165',
      },
    },
  }
}