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
				<header className="accordion-item__header">{this.props.header}</header>
				<div className="accordion-item__collapse" dangerouslySetInnerHTML={{__html: this.props.content}} />
			</li>
		);
  }
});

module.exports = AccordionItem;
