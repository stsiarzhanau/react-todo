import React from 'react';

const propTypes = {
  id: React.PropTypes.string,
  text: React.PropTypes.string,
  completed: React.PropTypes.bool,
  onToggle: React.PropTypes.func,
};

/* eslint-disable jsx-a11y/no-static-element-interactions */

function Todo(props) {
  const { id, text, completed } = props;
  return (
    <div onClick={() => { props.onToggle(id); }}>
      <input
        type="checkbox" defaultChecked={completed}
      />
      {text}
    </div>
  );
}

Todo.propTypes = propTypes;

export default Todo;
