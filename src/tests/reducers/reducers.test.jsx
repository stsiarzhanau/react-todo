import expect from 'expect';
import * as reducers from 'reducers';
import df from 'deep-freeze-strict';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text ', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog',
      };
      const result = reducers.searchTextReducer(df(''), df(action));

      expect(result).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should flip the showCompleted status', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      const result = reducers.showCompletedReducer(df(false), df(action));

      expect(result).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'New Todo'
      };

      const result = reducers.todosReducer(df([]), df(action));

      expect(result.length).toBe(1);
      expect(result[0].text).toBe(action.text);
    });

    it('should toggle todo completed status', () => {
      const action = {
        type: 'TOGGLE_TODO',
        id: '1'
      };

      const todos = [{
        text: 'Todo to toggle',
        id: '1',
        completed: true,
        createdAt: 123,
        completedAt: 125,
      }];

      const result = reducers.todosReducer(df(todos), df(action));

      expect(result[0].completed).toBe(false);
      expect(result[0].completedAt).toBe(undefined);
    });
  });
});
