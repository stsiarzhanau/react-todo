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

  // it('should add new todo to the todos on handleAddTodo', () => {
  //   const todoText = 'test text';
  //   const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

  //   todoApp.setState({ todos: [] });
  //   todoApp.handleAddTodo(todoText);

  //   expect(todoApp.state.todos[0].text).toBe(todoText);
  //   expect(todoApp.state.todos[0].createdAt).toBeA('number');
  // });

  // it('should toggle completed value when handleToggle called', () => {
  //   const todoData = {
  //     id: '11',
  //     text: 'Test features',
  //     completed: false,
  //     createdAt: 0,
  //     completedAt: undefined,
  //   };
  //   const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //   todoApp.setState({ todos: [todoData] });

  //   expect(todoApp.state.todos[0].completed).toBe(false);

  //   todoApp.handleToggle('11');

  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   expect(todoApp.state.todos[0].completedAt).toBeA('number');
  // });

  // it('should toggle todo from completed to incompleted', () => {
  //   const todoData = {
  //     id: '11',
  //     text: 'Test features',
  //     completed: true,
  //     createdAt: 0,
  //     completedAt: 0,
  //   };
  //   const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //   todoApp.setState({ todos: [todoData] });

  //   expect(todoApp.state.todos[0].completed).toBe(true);

  //   todoApp.handleToggle('11');

  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   expect(todoApp.state.todos[0].completedAt).toNotExist();
  // });

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
