import React, { Component } from "react";
import LifeCyclesCDUChild from "./LifeCycleCDUChild";

export class LifeCyclesCDU extends Component {
  constructor(props) {
    console.log("Constructor called");
    super(props);
    this.state = {
      greeting: "Hello!",
    };
  }

  updateGreeting = () => {
    console.log("updateGreeting called");
    this.setState((prevState) => {
      return {
        greeting: prevState.greeting === "Hello!" ? "Goodbye" : "Hello!",
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated!");
  }

  render() {
    console.log("Render method called");
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
        <LifeCyclesCDUChild parentGreeting={this.state.greeting} />
      </div>
    );
  }
}

export default LifeCyclesCDU;
