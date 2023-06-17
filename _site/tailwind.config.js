const customTheme = require('./_data/theme.json')

module.exports = {
  purge: {
    content: [
      "./_includes/**/*.html",
      "./_layouts/**/*.html",
      "./_posts/*.md",
      "./*.html",
      "./js/*.js",
      "./js/components/*.component.js",
    ],
    safelist: [
      '.event-instance',
      '.event-instance--title',
      '.event-instance--summary',
      '.event-instance--details',
      '.events-wrapper--category',
      '.canyoning-meetings',
      '.workshops-and-training-courses',
      '.event-instance--category',
      '.article-content--image'
    ],
    options: {
      safelist: [
        '.event-instance',
        '.event-instance--title',
        '.event-instance--summary',
        '.event-instance--details',
        '.events-wrapper--category',
        '.canyoning-meetings',
        '.workshops-and-training-courses',
        '.event-instance--category',
        '.article-content--image'
      ],      
    },
  },
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        "tiny": '0.75rem'
      },
      fontFamily: {
        "display": customTheme.fonts.display_font_family,
        "body": customTheme.fonts.body_font_family
      },
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
