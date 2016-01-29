var path = require('path');
var webpack = require('webpack');

module.exports = {
  name: 'browser',
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/devEntry'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
			{
	      test: /\.js$/,
	      loaders: ['react-hot', 'babel'],
	      include: path.join(__dirname, 'src')
	    },
			{
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: ['babel'], // 'babel-loader' is also a legal name to reference
	      query: {
	        presets: ['react', 'es2015']
	      }
	    },
			{
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
		]
  }
};
