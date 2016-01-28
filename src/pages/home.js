import React, { Component } from 'react';
import Timer from '../elements/timer/Timer.js';
import ComponentUnderTest from '../elements/ComponentUnderTest.js';

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
