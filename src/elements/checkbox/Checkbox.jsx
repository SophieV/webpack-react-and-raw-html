import React from 'react';

if (typeof window !== 'undefined') {
  require('./checkbox.scss');
}

let style = {
	/*
	override styles here.
	*/
};

let Checkbox = React.createClass({
	getInitialState: function() {
    return {
      isChecked: true
    };
  },
  toggleChange: function() {
    this.setState({
      isChecked: !this.state.isChecked // flip boolean value
    }, function() {
      console.log(this.state);
    }.bind(this));
  },
  render: function() {
    return (
      <input
        type="checkbox"
        checked={this.state.isChecked}
        onChange={this.toggleChange} />
    );
  }
});

export default Checkbox;
