export const setSearchText = searchText => ({
  searchText,
  type: 'SET_SEARCH_TEXT',
});

export const toggleShowCompleted = () => ({
  type: 'TOGGLE_SHOW_COMPLETED',
});

export const toggleTodo = id => ({
  id,
  type: 'TOGGLE_TODO',
});

export const addTodo = text => ({
  text,
  type: 'ADD_TODO',
});
