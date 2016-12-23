import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import { Provider } from 'react-redux';
import store from 'configureStore';

import TodoApp from 'TodoApp';
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist;
  });

  // test failes due to TestUtils bug (no support for functional components)
  it('should render TodoList', () => {
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
    const todoApp = TestUtils
      .scryRenderedComponentsWithType(provider, todoApp)[0];
    const todoList = TestUtils
      .scryRenderedComponentsWithType(todoApp, todoList);

    expect(todoList.length).toEqual(1);
  });
});
