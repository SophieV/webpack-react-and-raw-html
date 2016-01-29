import React from 'react';
import MyDependency from './aDependency.jsx';

const ComponentUnderTest = React.createClass({
  getInitialState: function() {
    return { isChecked: false };
  },
  onChange: function() {
    this.setState({isChecked: !this.state.isChecked});
  },
  render: function() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
        <MyDependency />
      </label>
    );
  }
});

module.exports = ComponentUnderTest;
