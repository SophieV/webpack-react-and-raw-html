var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var path = require('path');

const paths = [
  '/',
  '/world/'
];

module.exports = {

  entry: {
  'main':'./distEntry.js'
},
  output: {
    filename: 'staticBundle.js',
    path: 'dist',
    /* IMPORTANT!
     * You must compile to UMD or CommonJS
     * so it can be required in a Node context: */
    libraryTarget: 'umd'
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', paths, {})
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
        loaders: ["style", "css", "sass"]
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
  }
};
