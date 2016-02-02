import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import RouteMapper from './routeMapping';
import App from '../src/App.jsx';
import PageContainer from '../src/output/PageContainer.jsx';
let AppComponent = React.createFactory(App);

const router = express.Router();
const DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script;

const isProduction = (process.env.NODE_ENV === 'production');

let generateFullRawPage = function(res, route) {
  let props = {
    routeName: route,
    isServerCall: true
  };

  res.setHeader('Content-Type', 'text/html');
  let html = ReactDOMServer.renderToStaticMarkup(
		<PageContainer dynamicComponent={ReactDOMServer.renderToStaticMarkup(AppComponent(props))} appProps={props} />
  );

  // Return the page to the browser
  res.end(html);
};

let generateFullPage = function(res, route) {
  let props = {
    routeName: route,
    isServerCall: true
  };

  res.setHeader('Content-Type', 'text/html');
  let html = ReactDOMServer.renderToStaticMarkup(
		<PageContainer dynamicComponent={ReactDOMServer.renderToString(AppComponent(props))} appProps={props} />
  );

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
