import React, { Component } from 'react';
import Timer from '../elements/timer/Timer';

let Home = React.createClass({
  render: function() {
    return (
      <div>Timer: <Timer /></div>
    );
  }
});

export default Home;
