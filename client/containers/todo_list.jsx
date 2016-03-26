import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class TodoList extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subs: {
        list: Meteor.subscribe('tasks')
      }
    };
  }
  componentWillUnmount() {
    this.state.subs.list.stop();
  }
  list() {
    return TodoLists.find({}).fetch();
  }
  render() {
    return (
      <div>
        <TodoListComponent todoList={list} />
      </div>
    );
  }
};

export default TodoList;
