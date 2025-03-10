import React from "react";

function EventFunctional() {
  function clickHandler() {
    console.log("Button clicked - functional component");
  }

  return (
    <div>
      <button onClick={clickHandler}>click me - functional component</button>
    </div>
  );
}

export default EventFunctional;
