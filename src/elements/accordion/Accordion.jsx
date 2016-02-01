import React from 'react';
import AccordionItem from './AccordionItem.jsx';

if (typeof window !== 'undefined') {
  require('./accordion.scss');
}

let style = {
	/*
	override styles here.
	*/
	container: {},
	list: {}
};

let Accordion = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  render() {
    let items = this.props.items.map(function(item, index) {
      return <AccordionItem key={index} id={index} header={item.header} content={item.content} />;
    });

    return (
			<div className="accordion-container">
				<ul className="accordion-list">
					{items}
				</ul>
			</div>
    );
  }
});

export default Accordion;
