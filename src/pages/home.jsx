import React, { Component } from 'react';
import Timer from '../elements/timer/Timer.jsx';
import ComponentUnderTest from '../elements/ComponentUnderTest.jsx';

let Home = React.createClass({
  render: function() {
    return (
      <div>
        Timer: <Timer />
      	<ComponentUnderTest/>
      </div>
    );
  }
});

export default Home;
