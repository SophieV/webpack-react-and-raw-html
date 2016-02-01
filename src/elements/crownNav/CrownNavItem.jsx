import React from 'react';
let CrownNavItem = React.createClass({
  propTypes: {
    href: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  },

  render: function() {
    return <li><a href={this.props.href}>{this.props.text}</a></li>;
  }
});

module.exports = CrownNavItem;
