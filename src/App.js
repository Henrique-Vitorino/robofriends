import React from "react";
import Cardlist from "./components/Cardlist";
import SearchBox from "./components/SearchBox";
import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "",
    };
  }

  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  };
  render() {
    return (
      <div className="flex flex-column bg-light-blue justify-center items-center h-100">
        <h1>RoboFriends</h1>
        <SearchBox data={robots} handleChange={this.handleChange}></SearchBox>
        <Cardlist cards={robots} filter={this.state.filter}></Cardlist>
      </div>
    );
  }
}

export default App;
