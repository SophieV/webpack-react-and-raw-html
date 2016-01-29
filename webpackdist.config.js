import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import path from 'path';

const paths = [
  '/',
  '/world/'
];

module.exports = {

  entry: {
  'main':'./src/distEntry.js'
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
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
