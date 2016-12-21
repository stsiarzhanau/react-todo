import { createStore, combineReducers } from 'redux';
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

const configure = () => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
  });

  // /* eslint-disable no-underscore-dangle */
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const store = createStore(reducer, composeEnhancers(
  //   applyMiddleware(thunk)
  // ));
  // /* eslint-enable */

  /* eslint-disable no-underscore-dangle */
  const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  /* eslint-enable */

  return store;
};

export default configure();
