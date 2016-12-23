import React, { Component } from 'react';

/* eslint-disable import/no-named-as-default */
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
/* eslint-enable */


class TodoApp extends Component {
  // handleSearch(showCompleted, searchText) {
  //   this.setState({
  //     showCompleted,
  //     searchText: searchText.toLowerCase(),
  //   });
  // }

  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
