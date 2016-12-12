import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist;
  });
  it('should render one Todo component for each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'Do smth',
      }, {
        id: 2,
        text: 'Check mail',
      },
    ];
    const todoList = TestUtils
      .renderIntoDocument(<TodoList todos={todos} />);
      console.log(todoList);
    const todosComponents = TestUtils
      .scryRenderedComponentsWithType(todoList, Todo);
      console.log(todosComponents.length);
    expect(todosComponents.length).toBe(todos.length);
  });
});

// test failed
// todoList === null
// todosComponents.length === 0
// actual rendering is correct
// Is it a TestUtils bug?
