import React, { useState } from "react";

function UseStateWithArrays() {
  const [nums, setNums] = useState([1, 2, 3]);
  const addNums = () => {
    setNums([...nums, nums.length + 1]);
  };
  const removeNums = () => {
    setNums(nums.filter((num) => num !== nums.length));
  };
  return (
    <div>
      <button onClick={addNums}>Add Item</button>
      <button onClick={removeNums}>Remove Item</button>
      <ul>
        {nums.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateWithArrays;
