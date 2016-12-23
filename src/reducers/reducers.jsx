import moment from 'moment';
import uuid from 'uuid';

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          id: uuid(),
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          // todo.completed = !todo.completed;
          // todo.completedAt = todo.completed ? moment().unix() : undefined;
          const nextCompleted = !todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined,
          };
        }
        return todo;
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos,
      ];
    default:
      return state;
  }
};
