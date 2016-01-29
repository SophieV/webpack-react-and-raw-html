import express from 'express';
import path from 'path';
import httpProxy from 'http-proxy';
import browsingRoutes from './routes/index';
import dataRoutes from './routes/data';

const proxy = httpProxy.createProxyServer();
const server = express();
const isProduction = (process.env.NODE_ENV === 'production');
// const publicPath = path.resolve(__dirname, 'public');

// server.use(express.static(publicPath));

if (!isProduction) {

  // hot load webpack
  let bundle = require('./bundler.js');
  bundle();

  // Any requests to localhost:3000/build is proxied to webpack-dev-server
  server.all('/build/*', function (req, res) {
    console.log('path requested is %s', req.path);

    proxy.web(req, res, {
        target: 'http://localhost:' + (process.env.HOT_LOAD_PORT || 8080)
    });
  });
}

server.use('/', browsingRoutes);
server.use('/data', dataRoutes);

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

const port = (process.env.PORT || 3000);
server.listen(port, function () {
  console.log('server running on port ' + port);
});
