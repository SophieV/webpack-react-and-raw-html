import React from 'react';
import Timer from '../elements/timer/Timer.jsx';
import ComponentUnderTest from '../elements/ComponentUnderTest.jsx';
import CrownNav from '../elements/crownNav/CrownNav.jsx';
import crownNavData from '../elements/crownNav/data.json';
import Accordion from '../elements/accordion/Accordion.jsx';
import accordionData from '../elements/accordion/data.json';

const Home = React.createClass({
  render: function() {
    return (
			<div>
				<header className="jumbotron">
					<div className="container">
						<h1 className="title is-1">React Test!</h1>
						<h3 className="subtitle is-3">Pulling in from local data.json file</h3>
					</div>
				</header>

				<CrownNav links={crownNavData.links}/>

				<div className="container">
					<Accordion items={accordionData.items} />
				</div>
			</div>
    );
  }
});

module.exports = Home;
