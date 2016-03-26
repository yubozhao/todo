import React from 'react';
import TodoRow from './todo_row.jsx';
import CreateNewTaskRow from './new_task_row.jsx';
import * as lodash from 'lodash';
import TaskActions from '/client/actions/tasks';

const TodoList = React.createClass({
  propTypes: {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object)
  },
  toggleComplete(taskId) {
    TaskActions.toggleComplete(taskId);
  }, 
  toggleDelete(taskId) {
    TaskActions.toggleDelete(taskId);
  }, 
  createNewTask(value) {
    TaskActions.createNewTask(value);
  },
  render() {
    let list = [];
    if (this.props.tasks) {
      lodash.forEach(this.props.tasks, (task) => {
        list.push(
          <TodoRow task={task} toggleComplete={this.toggleComplete}
                   toggleDelete={this.toggleDelete} key={task._id}/>
        );
      });
    }
    return (
      <div className="row">
        <div className="col-lg-12">
          <CreateNewTaskRow onSubmit={this.createNewTask} />
        </div>
        <div className="col-lg-12">
          <ul className="list-group">
            {list}
          </ul>
        </div>
      </div>
    );
  }
});

export default TodoList;
