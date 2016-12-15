import React, { Component } from 'react';

const propTypes = {
  onAddTodo: React.PropTypes.func,
};

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todoText = this.todoText.value;
    if (typeof todoText === 'string' && todoText.length > 0) {
      this.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.todoText.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form
          onSubmit={this.handleSubmit}
          ref={(c) => { this.form = c; }}
        >
          <input
            type="text"
            placeholder="What do you need to do?"
            ref={(c) => { this.todoText = c; }}
          />
          <button className="expanded button">Add Todo</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = propTypes;

export default AddTodo;
