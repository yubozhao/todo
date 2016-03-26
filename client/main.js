import ReactDOM from 'react-dom';
import React from 'react';
import {Meteor} from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Tasks from '/lib/collections/tasks';
import TodoList from '/client/components/todo_list.jsx';

class App extends TrackerReact(React.Component) {
  constructor(props) {
    super();
    this.state = {subs: {tasks: Meteor.subscribe('tasks')}};
  }
  componentWillUnmount() {
    this.state.subs.tasks.stop();
  }
  tasks() {
    return Tasks.find({}).fetch();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Todo list</h1>
          </div>
          <div className="content">
            <TodoList tasks={this.tasks()} />
          </div>
        </div>
      </div>
    );
  }
}

Meteor.startup(function () {
  ReactDOM.render(<App />, document.getElementById("render-target"));
});
