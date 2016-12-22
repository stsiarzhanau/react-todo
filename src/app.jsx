import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'configureStore';
import * as actions from 'actions';

import TodoApp from 'TodoApp';

import './styles/app.scss';

store.subscribe(() => {
  console.log('New state: ', store.getState());
});

store.dispatch(actions.addTodo('Wash cat'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// What for?
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app'),
);
