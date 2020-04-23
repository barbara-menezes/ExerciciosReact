import React, { useState } from "react";

function Counter({ initialCount } : { initialCount : number }) {

  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);

  return (
    <div className="details">
      <button data-test="buttonCounter" onClick={increment}>Scold!</button>
      <p>You clicked {count} times</p>
    </div>
  );
}


export default Counter;