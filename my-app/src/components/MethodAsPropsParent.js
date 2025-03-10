import React, { Component } from "react";
import MethodAsPropsChild from "./MethodAsPropsChild";

class MethodAsPropsParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  ToggleSignInOut = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  //   handleSignIn = () => {
  //     this.setState({
  //       isLoggedIn: true,
  //     });
  //     console.log(this);
  //   }

  //   handleSignOut = () => {
  //     this.setState({
  //       isLoggedIn: false,
  //     });
  //     console.log(this);
  //   };

  render() {
    return (
      <div>
        <MethodAsPropsChild
          isLoggedIn={this.state.isLoggedIn}
          ToggleSignInOut={this.ToggleSignInOut}
          //   handleSignIn={this.handleSignIn}
          //   handleSignOut={this.handleSignOut}
        />
      </div>
    );
  }
}

export default MethodAsPropsParent;
