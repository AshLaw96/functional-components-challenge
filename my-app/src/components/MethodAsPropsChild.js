import React from "react";

function MethodAsPropsChild(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          <p>Welcome to the site! Please complete the steps below:</p>
          <ol>
            <li>Confirm your email</li>
            <li>Complete your profile</li>
            <li>Subscribe to the newsletter</li>
          </ol>
          <button onClick={props.ToggleSignInOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          <button onClick={props.ToggleSignInOut}>Sign in</button>
        </div>
      )}
    </div>
  );
}

export default MethodAsPropsChild;
