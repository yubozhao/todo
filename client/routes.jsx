import React from 'react';
import {mount} from 'react-mounter';
import TodoList from './containers/todo_list.jsx';
import Layout from './components/layout.jsx';


export default function () {
  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(Layout, {
        content: () => (<TodoList />)
      });
    }
  });
};
