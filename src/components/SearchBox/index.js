import React from "react";

class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <input
          value={this.props.filter}
          placeholder="Search for your robot"
          onChange={(e) => this.props.handleChange(e)}
        ></input>
      </div>
    );
  }
}

export default SearchBox;
