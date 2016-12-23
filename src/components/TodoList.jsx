import React from 'react';
import { connect } from 'react-redux';
import { filterTodos } from 'TodoAPI';

/* eslint-disable import/no-named-as-default */
import Todo from 'Todo';
/* eslint-enable */

const propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object),
  showCompleted: React.PropTypes.bool,
  searchText: React.PropTypes.string,
};

export function TodoList(props) {
  const { todos, showCompleted, searchText } = props;
  const filteredTodos = filterTodos(todos, showCompleted, searchText);
  const todoItems = filteredTodos.map(todo => (
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

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TodoList);
