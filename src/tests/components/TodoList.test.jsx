import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

// http://stackoverflow.com/questions/36682241/testing-functional-components-with-renderintodocument
class Wrapper extends React.Component {
  render() {
    return this.props.children
  }
}

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist;
  });
  it('should render one Todo component for each todo item', () => {
    const todos = [
      {
        id: '1',
        text: 'Do smth',
      }, {
        id: '2',
        text: 'Check mail',
      },
    ];
    const todoList = TestUtils
      .renderIntoDocument(<Wrapper><TodoList todos={todos} /></Wrapper>);
    const todosComponents = TestUtils
      .scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});

// test failed due to TestUtils bug
