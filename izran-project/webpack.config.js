const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    stories: './src/stories.js',
    userstory: './src/userstory.js',
    story: './src/story.js'
  }, 
  output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].js'
  },
  mode: 'development',
  watch: true
};