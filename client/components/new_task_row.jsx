import React from 'react';

const CreateNewTaskRow = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired
  },
  submit(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    let text = this.refs.textInput.value.trim(); 
    this.props.onSubmit(text);
    this.refs.textInput.value = "";
  },
  render() {
    return (
      <form className="form form-inline" onSubmit={this.submit}>
        <input type="text"  ref="textInput" placeholder="New task name" />
        <button type="submit" className="btn btn-xs">Submit</button>
      </form>
    );
  }
});

export default CreateNewTaskRow;
