import React from 'react';
import RouteMapper from '../routes/routeMapping';
require("../style/style.scss");


const App = React.createClass({
  propTypes: {
    routeName: React.PropTypes.string.isRequired,
    isServerCall: React.PropTypes.bool
  },

  getInitialState: function() {
    return {routeName: this.props.routeName, isServerCall: this.props.isServerCall};
  },

  render: function() {
    console.log('this is a server side call %s', this.props.isServerCall);
    let DynamicComponent = RouteMapper(this.state.routeName, this.state.isServerCall).component;
    return (
      <DynamicComponent/>
    );
  }
});

module.exports = App;
// if export default then fails renderToString
