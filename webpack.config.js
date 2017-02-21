var path = require('path');

module.exports = {
  // This is the "main" file which should include all other modules
  entry: './src/app/main.js',
  // Where should the compiled file go?
  output: {
    filename: 'build.js',
    publicPath: '/dist',
    path: './dist'

    // To the `dist` folder
    //path: './src/app',
    // With the filename `build.js` so it's dist/build.js
    //filename: 'build.js'
  },
  externals: {
    'cheerio': 'window'
  },
  module: {
    // Special compilation rules
    loaders: [
        {
          // Ask webpack to check: If this file ends with .js, then apply some transforms
          test: /\.js$/,
          // Transform it with babel
          loader: 'babel-loader?presets[]=es2015&presets[]=stage-0&plugins[]=transform-runtime',
          // don't transform node_modules folder (which don't need to be compiled)
          exclude: /node_modules/
        },
        {
          // Ask webpack to check: If this file ends with .js, then apply some transforms
          test: /\.vue$/,
          // Transform it with babel
          loader: 'vue-loader'
        },
        {
          test: /\.html$/,
          loader: "html"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}