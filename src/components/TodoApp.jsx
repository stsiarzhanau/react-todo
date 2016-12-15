import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';

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
          createdAt: moment().unix(),
          completedAt: undefined,
        },
      ],
    });
  }

  /* eslint-disable no-param-reassign */

  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
