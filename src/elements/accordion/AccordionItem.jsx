import React from 'react';
import Checkbox from '../checkbox/Checkbox.jsx';
let style = {
	/*
	override styles here.
	*/
};
let AccordionItem = React.createClass({
  propTypes: {
    header: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
			<li style={style.li}>
				<Checkbox />
				<i></i>
				<h2>{this.props.header}</h2>
				<p>{this.props.content}</p>
			</li>
		);
  }
});

module.exports = AccordionItem;
