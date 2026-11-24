import React, { useState,useMemo } from "react";
function calcFibo(num) {
  if (num <= 1) return num;
  return calcFibo(num - 1) + calcFibo(num - 2);
}
export default function UseMemoHookEx() {
  const [num, setNum] = useState(10);
  const [count, setCount] = useState(0);
  const result = useMemo(() => calcFibo(num), [num]);
  const increment = () => {
    setNum(num + 1);
  };
  const decrement = () => {
    setNum(num - 1);
  };
  const incrementCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>useMemo example</h1>
      <p>
        Number = {num} Fibonacci value is : {result}
      </p>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
      <hr />
      <p>Counter = {count}</p>
      <button onClick={incrementCounter}>Increase Counter</button>{" "}
    </div>
  );
}
