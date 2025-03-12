import React, { useState, useEffect } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log(`Count: ${count}`);
    document.title = `Count: ${count}`;
  }, [count]);
  useEffect(() => {
    console.log("Creating interval");
    const interval = setInterval(() => {
      console.log("Setting time");
      setTime((time) => time + 1);
    }, 1000);
    return () => {
      console.log("Clearing interval");
      clearInterval(interval);
    };
  }, []);
  //   const [count2, setCount2] = useState(0);
  //   useEffect(() => {
  //     console.log(`Count2: ${count2}`);
  //     document.title = `Count2: ${count2}`;
  //   }, [count2]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <h2>Time is {time}</h2>
      {/* <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button> */}
    </div>
  );
}

export default UseEffectCounter;
