import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(cnt => cnt + 1)}>{count}</button>;
}

export function HelloWorld() {
  return <div>Hello world!</div>;
}

export default function App() {
  return Counter();
}
