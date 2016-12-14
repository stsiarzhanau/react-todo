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

  return <div>{todoItems}</div>;
}

TodoList.propTypes = propTypes;

export default TodoList;
