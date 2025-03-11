import React, { Component } from "react";
import LifeCycleCDMChild from "./LifeCycleCDMChild";

export class LifeCycleCDM extends Component {
  constructor(props) {
    console.log("Constructor Called");
    super(props);

    this.state = {
      data: "Loading...",
    };
  }

  getData() {
    console.log("getData() called");
    setTimeout(() => {
      console.log("Data fetched!");
      this.setState({
        data: "Loaded!",
      });
    }, 3000);
  }

  componentDidMount() {
    console.log("Component mounted");
    this.getData();
  }

  render() {
    console.log("Render method called");
    return (
      <div>
        <h1>{this.state.data}</h1>
        <LifeCycleCDMChild />
      </div>
    );
  }
}

export default LifeCycleCDM;
