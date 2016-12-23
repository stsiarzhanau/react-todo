import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import { Todo } from 'Todo';

// http://stackoverflow.com/questions/36682241/testing-functional-components-with-renderintodocument
class Wrapper extends React.Component {
  render() {
    return this.props.children
  }
}

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    const todoData = {
      id: '199',
      text: 'Write todo.test.jsx test',
      completed: true,
    };
    const spy = expect.createSpy();
    const todo = TestUtils
      .renderIntoDocument(<Wrapper><Todo {...todoData} dispatch={spy} /></Wrapper>);
    const $elm = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($elm[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id,
    });
  });
});
