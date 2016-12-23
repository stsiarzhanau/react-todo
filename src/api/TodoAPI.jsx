export const setTodos = (todos) => {
  if ($.isArray(todos)) {
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
  return undefined;
};

export const getTodos = () => {
  const stringTodos = localStorage.getItem('todos');
  let todos = [];

/* eslint-disable no-empty */

  try {
    todos = JSON.parse(stringTodos);
  } catch (err) {

  }

  return $.isArray(todos) ? todos : [];
};

export const filterTodos = (todos, showCompleted, searchText) => {
  let filteredTodos = todos;

/* eslint-disable arrow-body-style */

  filteredTodos = filteredTodos.filter((todo) => {
    return !todo.completed || showCompleted;
  });

  filteredTodos = filteredTodos.filter((todo) => {
    if (searchText) {
      const text = todo.text.toLowerCase();
      return text.includes(searchText.toLowerCase());
    }
    return true;
  });

  filteredTodos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } else if (a.completed && !b.completed) {
      return 1;
    }
    return 0;
  });

  return filteredTodos;
};
