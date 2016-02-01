import React from 'react';

const aDependency = React.createClass({
  render: function() {
    return (<div>dependency run</div>);
  }
});

module.exports = aDependency;
