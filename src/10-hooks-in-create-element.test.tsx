import { render } from "@testing-library/react";
import { createElement } from "react";
import App, { Counter, HelloWorld } from "./10-hooks-in-create-element";

test("Counter doesn't work without passing to createElement", () => {
  expect(() => render(Counter())).toThrow();
});

test("App works", () => {
  render(<App />);
});

test("works inside a fragment? no", () => {
  expect(() => render(<>{Counter()}</>)).toThrow();
});

test("works with createElement", () => {
  render(createElement(Counter));
});

test("works with JSX", () => {
  render(<Counter />);
});

test("but all works if component doesn't have a hook", () => {
  render(HelloWorld());
});
