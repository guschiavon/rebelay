const customTheme = require('./_data/theme.json')

module.exports = {
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
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
