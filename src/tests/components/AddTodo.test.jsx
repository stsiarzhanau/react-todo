import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist;
  });

  it('should call onAddTodo when passed data is valid', () => {
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    const $elm = $(ReactDOM.findDOMNode(addTodo));

    addTodo.todoText.value = 'Walk dog';
    TestUtils.Simulate.submit($elm.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('Walk dog');
  });

  it('should not call onAddTodo when passed data is invalid', () => {
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    const $elm = $(ReactDOM.findDOMNode(addTodo));

    addTodo.todoText.value = '';
    TestUtils.Simulate.submit($elm.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
