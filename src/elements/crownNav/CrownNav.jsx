import React from 'react';
console.log('requiring crown nav css');
// import './CrownNav.scss';
import CrownNavItem from './CrownNavItem.jsx';

let style = {
	/*
	override styles here.
	*/
};



let CrownNav = React.createClass({
  propTypes: {
    links: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  render() {
    let items = this.props.links.map(function(link, index) {
        return <CrownNavItem key={index} id={index} text={link.text} href={link.href} />;
      });

    return (
			<div className="tabs crown-nav__container" style={style}>
				<div className="container">
		      <ul className="crown-nav__list">
					{items}
		      </ul>
				</div>
			</div>
    );
  }
});

module.exports = CrownNav;
