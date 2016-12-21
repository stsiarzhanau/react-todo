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


});
