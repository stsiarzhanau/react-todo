import React from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';

const propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object),
};

export function TodoList(props) {
  const { todos } = props;
  const todoItems = todos.map(todo => (
    <Todo
      key={todo.id}
      {...todo}
    />
  ));

  if (todos.length === 0) {
    return <p className="container__message">Nothing To Do</p>;
  }

  return <div>{todoItems}</div>;
}

TodoList.propTypes = propTypes;

function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(mapStateToProps)(TodoList);
