const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: '/node_modules/',
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
