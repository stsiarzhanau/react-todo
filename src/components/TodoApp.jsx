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
        }, {
          id: uuid(),
          text: 'Clean the yard',
        }, {
          id: uuid(),
          text: 'Feed the cat',
        }, {
          id: uuid(),
          text: 'Learn Redux',
        },
      ],
      showCompleted: false,
      searchText: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
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
        },
      ],
    });
    // alert(`new todo: ${text}`);
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
