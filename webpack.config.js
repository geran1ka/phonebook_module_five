const path = require('path');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  devtool: 'source-map',
  devServer: {
    hot: true, // автоматическое перезагрузка страницы после внесения изменений
  },
  entry: './src/index.js',
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
}