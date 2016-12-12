import React, { Component } from 'react';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

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
    // let { todos } = this.state;

    // todos
    // this.SetState({

    // });
    alert(`new todo: ${text}`);
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
