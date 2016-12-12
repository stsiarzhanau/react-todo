import React from 'react';
import Todo from 'Todo';

const propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object),
};

function TodoList(props) {
  const { todos } = props;
  const todoItems = todos.map(todo => <Todo key={todo.id} {...todo} />);

  return <div>{todoItems}</div>;
}

TodoList.propTypes = propTypes;

export default TodoList;
