import React, { Component } from 'react';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import uuid from 'uuid';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false,
        }, {
          id: uuid(),
          text: 'Clean the yard',
          completed: true,
        }, {
          id: uuid(),
          text: 'Feed the cat',
          completed: true,
        }, {
          id: uuid(),
          text: 'Learn Redux',
          completed: false,
        },
      ],
      showCompleted: false,
      searchText: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase(),
    });
  }

  handleAddTodo(text) {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos,
        {
          text,
          id: uuid(),
          completed: false,
        },
      ],
    });
  }

  /* eslint-disable no-param-reassign */

  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos,
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
