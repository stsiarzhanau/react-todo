import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';

const propTypes = {
  id: React.PropTypes.string,
  text: React.PropTypes.string,
  completed: React.PropTypes.bool,
  createdAt: React.PropTypes.number,
  completedAt: React.PropTypes.number,
  dispatch: React.PropTypes.func,
};

/* eslint-disable jsx-a11y/no-static-element-interactions */

export function Todo(props) {
  const { id, text, completed, createdAt, completedAt, dispatch } = props;
  const todoClassName = completed ? 'todo todo-completed' : 'todo';
  const renderDate = () => {
    let message = 'Created ';
    let timestamp = createdAt;

    if (completed) {
      message = 'Completed ';
      timestamp = completedAt;
    }

    return `${message} ${moment.unix(timestamp).format('MMM D, YYYY @ h:mm a')}`;
  };

  return (
    <div
      onClick={() => { dispatch(actions.toggleTodo(id)); }}
      className={todoClassName}
    >
      <div>
        <input
          type="checkbox" defaultChecked={completed}
        />
      </div>
      <div>
        <p>{text}</p>
        <p className="todo__subtext">{renderDate()}</p>
      </div>
    </div>
  );
}

Todo.propTypes = propTypes;

export default connect()(Todo);
