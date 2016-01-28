import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if(module.hot) {
  module.hot.accept();
}

require("./style.css");

if (typeof document != 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'));
}
