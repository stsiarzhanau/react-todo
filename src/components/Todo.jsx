import React from 'react';
import moment from 'moment';

const propTypes = {
  id: React.PropTypes.string,
  text: React.PropTypes.string,
  completed: React.PropTypes.bool,
  onToggle: React.PropTypes.func,
  createdAt: React.PropTypes.number,
  completedAt: React.PropTypes.number,
};

/* eslint-disable jsx-a11y/no-static-element-interactions */

function Todo(props) {
  const { id, text, completed, createdAt, completedAt } = props;
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
      onClick={() => { props.onToggle(id); }}
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

export default Todo;
