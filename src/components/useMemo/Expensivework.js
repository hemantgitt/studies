import React from "react";
import { useState, useMemo } from "react";

const Expensivework = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const ExpensiveCount = (num) => {
    for (let i = 0; i < 100000; i++) {
      num = num + 1;
    }
    return num;
  };

  const memoizedValue = useMemo(() => ExpensiveCount(count), [count]);
  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Expensive Calculation Result: {memoizedValue}</p>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={text}
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
        />
        <p>Text: {text}</p>
      </div>
    </div>
  );
};

export default Expensivework;
