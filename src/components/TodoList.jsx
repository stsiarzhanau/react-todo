import React from 'react';
import Todo from 'Todo';

const propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object),
  onToggle: React.PropTypes.func,
};

/* eslint-disable arrow-body-style */

function TodoList(props) {
  const { todos, onToggle } = props;
  const todoItems = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        {...todo}
        onToggle={onToggle}
      />
    );
  });

  if (todos.length === 0) {
    return <p className="container__message">Nothing To Do</p>;
  }

  return <div>{todoItems}</div>;
}

TodoList.propTypes = propTypes;

export default TodoList;
