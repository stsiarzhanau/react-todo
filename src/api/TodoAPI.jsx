export const setTodos = function (todos) {
  if ($.isArray(todos)) {
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
  return undefined;
};

export const getTodos = function () {
  const stringTodos = localStorage.getItem('todos');
  let todos = [];

/* eslint-disable no-empty */

  try {
    todos = JSON.parse(stringTodos);
  } catch (err) {

  }

  return $.isArray(todos) ? todos : [];
};
