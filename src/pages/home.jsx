import React from 'react';
import Timer from '../elements/timer/Timer.jsx';
import ComponentUnderTest from '../elements/ComponentUnderTest.jsx';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        <h1>Welcome Home</h1>
        Timer: <Timer />
      	<ComponentUnderTest/>
      </div>
    );
  }
});

module.exports = Home;
