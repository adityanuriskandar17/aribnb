const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        DEFAULT: '#FF5A5F',
        dark: '#FF385C',
        light: '',

      },
      secondary: colors.gray,
      success: colors.green,
      danger: colors.red,
      warning: colors.yellow,
      info: colors.blue,
      light: colors.gray,
      dark: colors.gray,
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
