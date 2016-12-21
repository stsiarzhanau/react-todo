import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import Main from 'Main';
import TodoApp from 'TodoApp';
import * as actions from 'actions';
import * as reducers from 'reducers';
import store from 'configureStore';

import './styles/app.scss';

store.subscribe(() => {
  console.log('New state: ', store.getState());
});

store.dispatch(actions.addTodo('Wash cat'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// What for?
$(document).foundation();

// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={Main}>
//       <IndexRoute component={} />
//       <Route path="countdown" component={} />
//     </Route>
//   </Router>,
//   document.getElementById('app'),
// );

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app'),
);
