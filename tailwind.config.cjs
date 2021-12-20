const colours = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  theme: {
    fontFamily: {
      'body': ['Inter', 'Roboto', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        brand: {
          'light': '#5eebba',
          DEFAULT: '#36e7a9',
          'dark': '#18cb8c',
        },
        gray: colours.trueGray
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-invert-th-borders': theme('colors.gray[700]'),
            '--tw-prose-invert-td-borders': theme('colors.gray[800]'),
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
