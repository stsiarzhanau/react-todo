import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import { TodoSearch } from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist;
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const searchText = 'Dog';
    const action = {
      searchText,
      type: 'SET_SEARCH_TEXT',
    };
    const spy = expect.createSpy();
    const todoSearch = TestUtils
      .renderIntoDocument(<TodoSearch dispatch={spy} />);
    const $elm = $(ReactDOM.findDOMNode(todoSearch));
    todoSearch.searchTextInput.value = searchText;
    TestUtils.Simulate.change(todoSearch.searchTextInput);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    const spy = expect.createSpy();
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    const todoSearch = TestUtils
      .renderIntoDocument(<TodoSearch dispatch={spy} />);
    const $elm = $(ReactDOM.findDOMNode(todoSearch));
    todoSearch.showCompletedCheckbox.checked = true;
    TestUtils.Simulate.change(todoSearch.showCompletedCheckbox);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
