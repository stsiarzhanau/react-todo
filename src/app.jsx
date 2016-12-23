import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'configureStore';
import * as actions from 'actions';
import { setTodos, getTodos } from 'TodoAPI';

import TodoApp from 'TodoApp';

import './styles/app.scss';

store.subscribe(() => {
  const state = store.getState();
  console.log('New state: ', state); // eslint-disable-line no-console
  setTodos(state.todos);
});

const initialTodos = getTodos();
store.dispatch(actions.addTodos(initialTodos));


// What for?
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app'),
);
