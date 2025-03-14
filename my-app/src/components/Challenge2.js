import React from "react";
import css from "./css/NavBarForm.module.css";
import Challenge2Child from "./Challenge2Child";

class NavBarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  handleClick() {
    this.setState(
      (prevState) => ({
        isLoggedIn: prevState.isLoggedIn ? false : true,
      }),
      () => {
        console.log(this.state.isLoggedIn);
      }
    );
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {/* {this.state.isLoggedIn ? (
          <button onClick={() => this.handleButtonClick()}>Login</button>
        ) : (
          <form>
            <label htmlFor="username">Username:</label>
            <input placeholder="username" id="username" />

            <label htmlFor="password">Password:</label>
            <input placeholder="password" id="password" />
            <button onClick={() => this.handleButtonClick()}>Submit</button>
          </form>
        )} */}
        <Challenge2Child
          isLoggedIn={this.state.isLoggedIn}
          handleClick={() => this.handleClick()}
        />
      </div>
    );
  }
}

export default NavBarForm;
