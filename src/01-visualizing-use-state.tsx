import React, { useState, useEffect } from "react";

import "./App.css";

function InlineFunctions() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(() => localStorage.getItem("name") || "");

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
      <input onChange={ev => setName(ev.target.value)} />
    </>
  );
}

function VisualizingArguments() {
  // Visualizing these two lines separate, it's clear that they are executed
  // every handler.

  // 0 is assigined to initialCount every render,
  // but only really used on mount.
  const initialCount = 0;

  // initialName is a **function**. It's only executed once on mount.
  // But we're creating it every render
  const initialName = () => localStorage.getItem("name") || "";

  // We're passing the values above, but again, they are only ever used once.
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState(initialName);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
      <input onChange={ev => setName(ev.target.value)} />
    </>
  );
}

export { InlineFunctions, VisualizingArguments };
