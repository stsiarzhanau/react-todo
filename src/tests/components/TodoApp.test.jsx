import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist;
  });

  it('should add new todo to the todos on handleAddTodo', () => {
    const todoText = 'test text';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({ todos: [] });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

  });
});
