import React, { Component } from 'react';
import uuid from 'uuid';

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import { setTodos, getTodos, filterTodos } from 'TodoAPI';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: getTodos(),
      showCompleted: false,
      searchText: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidUpdate() {
    setTodos(this.state.todos);
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
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
