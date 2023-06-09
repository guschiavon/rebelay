module.exports = {
  content: [
      "./_includes/**/*.html",
      "./_layouts/**/*.html",
      "./_pages/*.html",
      "./_posts/*.md",
      "./*.html",
      "./js/*.js",
      "./js/components/*.component.js"
    ],
  css: ["./_site/style/*.css"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []  
};