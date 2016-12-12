import React, { Component } from 'react';
import TodoList from 'TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog',
        }, {
          id: 2,
          text: 'Clean the yard',
        }, {
          id: 3,
          text: 'Feed the cat',
        }, {
          id: 4,
          text: 'Learn Redux',
        },
      ],
    };
  }
  render() {
    const { todos } = this.state;

    return <TodoList todos={todos} />;
  }
}

export default TodoApp;
