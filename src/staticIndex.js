import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

// Exported static site renderer:
module.exports = function render(locals, callback) {
  callback(null, ReactDOMServer.renderToStaticMarkup(<App />));
};
