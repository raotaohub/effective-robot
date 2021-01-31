const path = require('path');
//安装插件HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//dist清理插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: '学习mustache',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "www"),
    compress: false,
    port: 8080,
    publicPath: '/xuni/'
  }
};