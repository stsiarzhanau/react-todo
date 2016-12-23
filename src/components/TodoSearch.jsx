import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

const propTypes = {
  dispatch: React.PropTypes.func,
  showCompleted: React.PropTypes.bool,
  searchText: React.PropTypes.string,
};

export class TodoSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, showCompleted, searchText } = this.props;
    return (
      <div className="container__header">
        <div>
          <input
            type="search"
            placeholder="Search todos"
            value={searchText}
            onChange={() => {
              const searchTextValue = this.searchTextInput.value;
              dispatch(actions.setSearchText(searchTextValue));
            }}
            ref={(c) => { this.searchTextInput = c; }}
          />
        </div>
        <div>
          <label htmlFor="completed">
            <input
              id="completed"
              type="checkbox"
              checked={showCompleted}
              onChange={() => { dispatch(actions.toggleShowCompleted()); }}
              ref={(c) => { this.showCompletedCheckbox = c; }}
            />
            Show completed todos
          </label>
        </div>

      </div>
    );
  }
}

TodoSearch.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText,
  };
}

export default connect(mapStateToProps)(TodoSearch);
