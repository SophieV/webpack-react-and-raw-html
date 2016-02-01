import React, { Component } from 'react';

let style = {
	/*
	override styles here.
	*/
};

let CrownNavItem = React.createClass({
  render: function() {
    return <li key={this.props.data.id}><a href={this.props.data.href}>{this.props.data.text}</a></li>;
  }
});

export default CrownNavItem;
