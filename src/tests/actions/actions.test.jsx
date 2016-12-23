import expect from 'expect';
import * as actions from 'actions';

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      searchText: 'Some search text',
      type: 'SET_SEARCH_TEXT',
    };

    const result = actions.setSearchText(action.searchText);

    expect(result).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      text: 'Walk dog',
      type: 'ADD_TODO',
    };

    const result = actions.addTodo(action.text);

    expect(result).toEqual(action);
  });

  it('should generate add todos action', () => {
    const action = {
      todos: ['Dummy todo'],
      type: 'ADD_TODOS',
    };

    const result = actions.addTodos(action.todos);

    expect(result).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    const result = actions.toggleShowCompleted();

    expect(result).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    const action = {
      id: '2',
      type: 'TOGGLE_TODO',
    };

    const result = actions.toggleTodo(action.id);

    expect(result).toEqual(action);
  });
});
