import React, { Component } from 'react';
import Timer from '../elements/timer/Timer.jsx';
import ComponentUnderTest from '../elements/ComponentUnderTest.jsx';
import CrownNav from '../elements/crownNav/CrownNav.jsx';
import CrownNav_data from '../elements/crownNav/data.json';

let Home = React.createClass({
  render: function() {
    return (
			<div>
				<header className="jumbotron">
					<div className="container">
						<h1 className="title is-1">React Test</h1>
						<h3 className="subtitle is-3">Pulling in from local data.json file</h3>
					</div>
				</header>
				<CrownNav data={CrownNav_data} />
			</div>
    );
  }
});

export default Home;
