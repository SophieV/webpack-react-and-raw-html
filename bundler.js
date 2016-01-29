// This little dev server is basically a wrapped express server that
// 'hot loads' our javascript for super fast live reload in development
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';
import path from 'path';
import fs from 'fs';

const Bundler = function () {

  // First we fire up Webpack an pass in the configuration we
  // created
  let bundleStart = null;
  let compiler = webpack(webpackConfig);

  // We give notice in the terminal when it starts bundling and
  // set the time it started
  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  // We also give notice when it is done compiling, including the
  // time it took. Nice to have
  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  let bundler = new WebpackDevServer(compiler, {

    // We need to tell Webpack to serve our bundled application
    // from the build path. When proxying:
    // http://localhost:3000/build -> http://localhost:8080/build
    publicPath: '/build/',

    // Configure hot replacement
    hot: true,
    historyApiFallback: true,
    inline: true,

    // The rest is terminal configurations
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  // We fire up the development server and give notice in the terminal
  // that we are starting the initial bundle
  let hotPort = (process.env.HOT_LOAD_PORT || 8080);
  bundler.listen(hotPort, 'localhost', function () {
    console.log('Bundling project on port %s, please wait...', hotPort);
  });
};

module.exports = Bundler;
