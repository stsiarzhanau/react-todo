import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist;
  });

  it('should call onSearch with entered input text', () => {
    const searchText = 'Dog';
    const spy = expect.createSpy();
    const todoSearch = TestUtils
      .renderIntoDocument(<TodoSearch onSearch={spy} />);
    const $elm = $(ReactDOM.findDOMNode(todoSearch));
    todoSearch.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('should call onSearch with proper checked value', () => {
    const spy = expect.createSpy();
    const todoSearch = TestUtils
      .renderIntoDocument(<TodoSearch onSearch={spy} />);
    const $elm = $(ReactDOM.findDOMNode(todoSearch));
    todoSearch.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
