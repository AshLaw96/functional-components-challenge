import React, { Component } from "react";
import importedNames from "./Names";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: importedNames,
    };
  }

  handleChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    console.log(searchQuery);
    const filteredNames = importedNames.filter((name) => {
      return name.toLowerCase().includes(searchQuery);
    });
    this.setState({
      names: filteredNames,
    });
  };

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>matching names found: {this.state.names.length}</p>
        <form>
          <input
            type="text"
            placeholder="search names..."
            onChange={(e) => this.handleChange(e)}
          />
        </form>
        <div style={{ margin: "auto" }}>
          {this.state.names.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </div>
      </div>
    );
  }
}
