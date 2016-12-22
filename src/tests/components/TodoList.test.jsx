import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import { Provider } from 'react-redux';
import { configure } from 'configureStore';

import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';

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

  // test doesn't fail despite of TestUtils bug (no support for functional components)
  // due to Connected ?
  it('should render one Todo component for each todo item', () => {
    const todos = [
      {
        id: '1',
        text: 'Do smth',
        completed: false,
        completedAt: undefined,
        createdAt: 200,
      }, {
        id: '2',
        text: 'Check mail',
        completed: false,
        completedAt: undefined,
        createdAt: 200,
      },
    ];

    const store = configure({
      todos
    });

    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );

    const todoList = TestUtils
      .scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    const todosComponents = TestUtils
      .scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render message if no todos', () => {
    const todos = [];
    const todoList = TestUtils
      .renderIntoDocument(<Wrapper><TodoList todos={todos} /></Wrapper>);
    const $elm = $(ReactDOM.findDOMNode(todoList));

    expect($elm.find('.container__message')).toExist();
  });
});


