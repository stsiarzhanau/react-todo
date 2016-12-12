import React from 'react';

const propTypes = {
  id: React.PropTypes.number,
  text: React.PropTypes.string,
};

function Todo(props) {
  const { id, text } = props;
  return (
    <div>
      {id}. {text}
    </div>
  );
}

Todo.propTypes = propTypes;

export default Todo;
