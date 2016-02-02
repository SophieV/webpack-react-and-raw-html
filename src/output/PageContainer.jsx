import React from 'react';

const isProduction = (process.env.NODE_ENV === 'production');

let PageContainer = React.createClass({
  render() {
    return (
      <html>
        <head>
					{!!isProduction ? <link rel="stylesheet" type="text/css" href="/style/style.css" /> : ''}
          <title>Rendered Page</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.dynamicComponent}}></div>
          <script dangerouslySetInnerHTML={{__html: `var APP_PROPS = ${JSON.stringify(this.props.appProps)};`}}></script>
					<script src='/build/bundle.js'></script>
        </body>
      </html>
    );
  }
});

module.exports = PageContainer;
