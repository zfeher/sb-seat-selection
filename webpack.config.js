const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    alias: {
      // vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    },

    extensions: ['.js', '.vue', '.json'],
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    overlay: true,
    stats: 'minimal',
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin(),
  ],

  // performance: {
  //   hints: false,
  // },
}
