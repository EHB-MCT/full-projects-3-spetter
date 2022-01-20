const path = require('path');

module.exports = {
  // entry: './src/index.js',
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'docs'),
  // },
  entry: {
    index: './src/index.js',
    stories: './src/stories.js',
    story: './src/story.js'
  }, 
  output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].js'
  },
  mode: 'development',
  watch: true
};