import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';
let AppComponent = React.createFactory(App);

if(module.hot) {
  module.hot.accept();
}

require("./style/style.scss");

if (typeof document != 'undefined') {
  ReactDOM.render(AppComponent(window.APP_PROPS), document.getElementById('app'));
}
