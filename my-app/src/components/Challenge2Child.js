import React from "react";

function Challenge2Child(props) {
  return props.isLoggedIn ? (
    <button onClick={props.handleClick}>Login</button>
  ) : (
    <form>
      <label htmlFor="username">Username:</label>
      <input placeholder="username" id="username" />

      <label htmlFor="password">Password:</label>
      <input placeholder="password" id="password" />
      <button onClick={props.handleClick}>Submit</button>
    </form>
  );
}

export default Challenge2Child;
