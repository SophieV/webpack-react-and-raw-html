let React = require('react');

var aDependency = React.createClass({
  render: function() {
    return (<div>dependency run</div>);
  }
});

module.exports = aDependency;
