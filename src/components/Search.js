import React, { Component } from "react";

export default class Search extends Component {
  handleSearch = (e) => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}
