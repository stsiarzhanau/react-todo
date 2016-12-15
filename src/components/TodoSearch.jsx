import React, { Component } from 'react';

const propTypes = {
  onSearch: React.PropTypes.func,
};

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const showCompleted = this.showCompleted.checked;
    const searchText = this.searchText.value;
    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div className="container__header">
        <div>
          <input
            type="search"
            placeholder="Search todos"
            onChange={this.handleSearch}
            ref={(c) => { this.searchText = c; }}
          />
        </div>
        <div>
          <label htmlFor="completed">
            <input
              id="completed"
              type="checkbox"
              onChange={this.handleSearch}
              ref={(c) => { this.showCompleted = c; }}
            />
            Show completed todos
          </label>
        </div>

      </div>
    );
  }
}

TodoSearch.propTypes = propTypes;

export default TodoSearch;
