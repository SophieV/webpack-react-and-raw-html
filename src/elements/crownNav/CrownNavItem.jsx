import React from 'react';

let style = {
	/*
	override styles here.
	*/
	li: {},
	a: {
		// color: "pink"
	}
};

let CrownNavItem = React.createClass({
  propTypes: {
    href: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
			<li style={style.li}>
				<a href={this.props.href} style={style.a}>
					{this.props.text}
				</a>
			</li>
		);
  }
});

module.exports = CrownNavItem;
