const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./js/**/*.js', './index.html'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      colors: {
        brand: {
          'blue': {
            'DEFAULT': 'hsl(192, 70%, 51%)',
            'dark': 'hsl(233, 26%, 24%)',
          },
          'green': {
            'DEFAULT': 'hsl(136, 65%, 51%)',
          },
          'grey': {
            'DEFAULT': 'hsl(220, 16%, 96%)',
            'dark': 'hsl(233, 8%, 62%)',
            light: 'hsl(0, 0%, 98%)'
          }
        }
      },
      minHeight: {
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      fontFamily: {
        'sans': ['Public Sans', ...defaultTheme.fontFamily.serif],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
