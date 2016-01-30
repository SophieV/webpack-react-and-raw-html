import React from 'react';
if (typeof window !== 'undefined') {
  require('./CrownNav.scss');
}

import data from './data.json';

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

let CrownNav = React.createClass({
  render() {
    return (
			<div className="tabs crown-nav__container" style={style}>
				<div className="container">
		      <ul className="crown-nav__list">
					{
						data.links.map(function(link) {
					 		return <CrownNavItem data={link} />;
						})
					}
		      </ul>
				</div>
			</div>
    );
  }
});

module.exports = CrownNav;
