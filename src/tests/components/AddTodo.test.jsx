import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import { AddTodo } from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist;
  });

  // it('should call onAddTodo when passed data is valid', () => {
  //   const spy = expect.createSpy();
  //   const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
  //   const $elm = $(ReactDOM.findDOMNode(addTodo));

  //   addTodo.todoText.value = 'Walk dog';
  //   TestUtils.Simulate.submit($elm.find('form')[0]);

  //   expect(spy).toHaveBeenCalledWith('Walk dog');
  // });

  // it('should not call onAddTodo when passed data is invalid', () => {
  //   const spy = expect.createSpy();
  //   const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
  //   const $elm = $(ReactDOM.findDOMNode(addTodo));

  //   addTodo.todoText.value = '';
  //   TestUtils.Simulate.submit($elm.find('form')[0]);

  //   expect(spy).toNotHaveBeenCalled();
  // });

it('should dispatch ADD_TODO when passed data is valid', () => {
    const todoText = 'Walk dog';
    const action = {
      type: 'ADD_TODO',
      text: todoText,
    };
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    const $elm = $(ReactDOM.findDOMNode(addTodo));

    addTodo.todoText.value = todoText;
    TestUtils.Simulate.submit($elm.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when passed data is invalid', () => {
    const todoText = '';
    const action = {
      type: 'ADD_TODO',
      text: todoText,
    };
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    const $elm = $(ReactDOM.findDOMNode(addTodo));

    addTodo.todoText.value = todoText;
    TestUtils.Simulate.submit($elm.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(action);
  });
});
