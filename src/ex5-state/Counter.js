import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };

  const resethandler = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <h3>Counter: {count}</h3>
      <button
        onClick={incrementHandler}
        type="button"
        className="btn btn-success"
      >
        Increment
      </button>
      <button
        onClick={decrementHandler}
        type="button"
        className="btn btn-danger"
      >
        Decrement
      </button>
      <button
        onClick={resethandler}
        type="button"
        className="btn btn-secondary"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
