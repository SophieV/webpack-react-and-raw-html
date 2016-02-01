import React, { Component } from 'react';
import './CrownNav.scss';
import CrownNavItem from './CrownNavItem.jsx';

let style = {
	/*
	override styles here.
	*/
};


let CrownNav = React.createClass({
  render() {
		let links = this.props.data.links;
    return (
			<div className="tabs crown-nav__container" style={style}>
				<div className="container">
		      <ul className="crown-nav__list">
					{
						links.map(function(link, i) {
					 		return <CrownNavItem data={link} key={i} />
						})
					}
		      </ul>
				</div>
			</div>
    );
  }
});

export default CrownNav;
