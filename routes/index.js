import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import RouteMapper from './routeMapping';
import App from '../src/App.jsx';
let AppComponent = React.createFactory(App);

const router = express.Router();
const DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script;

const isProduction = (process.env.NODE_ENV === 'production');

let generateFullRawPage = function(res,route) {
  let props = {
    routeName: route,
    isServerCall: true
  };

  res.setHeader('Content-Type', 'text/html');
  let html = ReactDOMServer.renderToStaticMarkup(body(null,
    // the id here needs to match the mounting id specified in devEntry.jsx
    div({id: 'app', dangerouslySetInnerHTML: {__html:
      ReactDOMServer.renderToStaticMarkup(AppComponent(props))
    }}),
    script({dangerouslySetInnerHTML: {__html:
      'var APP_PROPS = ' + JSON.stringify(props) + ';'
    }})
  ));

  // Return the page to the browser
  res.end(html);
};

let generateFullPage = function(res, route) {
  let props = {
    routeName: route,
    isServerCall: true
  };

  res.setHeader('Content-Type', 'text/html');
  let html = ReactDOMServer.renderToStaticMarkup(body(null,
    // the id here needs to match the mounting id specified in devEntry.jsx
    div({id: 'app', dangerouslySetInnerHTML: {__html:
      ReactDOMServer.renderToString(AppComponent(props))
    }}),
    script({dangerouslySetInnerHTML: {__html:
      'var APP_PROPS = ' + JSON.stringify(props) + ';'
    }}),
    // script({src: '//fb.me/react-0.14.7.min.js'}),
    // script({src: '//fb.me/react-dom-0.14.7.min.js'}),
    script({src: '/build/bundle.js'})
  ));

  // Return the page to the browser
  res.end(html);
};

router.get('/about', function(req, res) {
  console.log('path requested is %s', req.path);

  if (!isProduction) {
    generateFullPage(res, req.path);
  } else {
    generateFullRawPage(res, req.path);
  }
});

router.get('/', function(req, res) {
  console.log('path requested is %s', req.path);

  if (!isProduction) {
    generateFullPage(res, req.path);
  } else {
    generateFullRawPage(res, req.path);
  }
});

router.get('*', function(req, res) {
  console.log('path requested is %s', req.path);

  if (!isProduction) {
    generateFullPage(res, req.path);
  } else {
    generateFullRawPage(res, req.path);
  }
});

module.exports = router;
