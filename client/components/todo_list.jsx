import React from 'react';
import TodoRow from './todo_row.jsx';

const TodoComponent = React.createClass({
  render() {
    return (
      <div className="row">
        <TodoRow />
      </div>
    );
  }
});

export default TodoComponent;
