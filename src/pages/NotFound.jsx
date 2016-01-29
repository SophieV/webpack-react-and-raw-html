import React from 'react';
import Timer from '../elements/timer/Timer.jsx';
import ComponentUnderTest from '../elements/ComponentUnderTest.jsx';

const NotFound = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Sorry, not found</h1>
      </div>
    );
  }
});

module.exports = NotFound;
