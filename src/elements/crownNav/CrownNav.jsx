import React from 'react';
import CrownNavItem from './CrownNavItem.jsx';

if (typeof window !== 'undefined') {
  require('./CrownNav.scss');
}

let style = {
	/*
	override styles here.
	*/
	container: {},
	list: {}
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
			<div className="tabs crown-nav__container" style={style.container}>
				<div className="container">
		      <ul className="crown-nav__list" style={style.list}>
						{items}
		      </ul>
				</div>
			</div>
    );
  }
});

export default CrownNav;
