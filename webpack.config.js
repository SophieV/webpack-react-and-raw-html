import path from 'path';
import webpack from 'webpack';

const hotPort = (process.env.HOT_LOAD_PORT || 8080);

let config = {
  name: 'browser',
  devtool: 'eval',
  entry: [
    // for hot style updates
    'webpack/hot/only-dev-server',

    // script refreshing browser on non hot updates
    'webpack-dev-server/client?http://localhost:' + hotPort,

    // our app
    path.resolve(__dirname, 'devEntry.js')
  ],
  output: {
    //NOT USED - just to avoid error log
    path: path.resolve(__dirname, 'public', 'build'),
    filename: 'bundle.js',

    // localhost:3000/build for proxy
    publicPath: '/build/'
  },
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
	      loader: 'babel', // 'babel-loader' is also a legal name to reference
	      query: {
	        presets: ['react', 'es2015']
	      }
	    },
      {
        test: /\.(scss|sass)$/,
				loader: 'style!css!sass?sourceMap'
      },
      {
	      test: /\.css$/,
				loader: 'style!css?sourceMap'
	    },
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
