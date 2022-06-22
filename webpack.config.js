const path = require('path');
const postCSSPlugins = [
  require("postcss-simple-vars"), 
  require("postcss-nested"), 
  require("autoprefixer")
]

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  mode: "development", 
  watch: true, 
  module: {
    rules: [
      // object 
      {
        // only if the file ends in css
        test: /\.css$/i,
        // use the loader
        use: ['style-loader', 'css-loader?url=false', {
          loader: "postcss-loader", 
          options: { postcssOptions: { 
            plugins: postCSSPlugins } 
          }
        }]
      }
    ]
  }
}
