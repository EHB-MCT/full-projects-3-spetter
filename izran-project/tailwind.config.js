module.exports = {
  content: [
    './docs/*.{html,js}'
  ],
  theme: {
    colors: {
      'izranbrown': {
        DEFAULT: '#270F0C',
        '50': '#B34537',
        '100': '#A43F32',
        '200': '#853329',
        '300': '#65271F',
        '400': '#461B16',
        '500': '#270F0C',
        '600': '#000000',
        '700': '#000000',
        '800': '#000000',
        '900': '#000000'
      }
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        warmGray: colors.warmGray,
      },
    },
  },
  plugins: [],
}
