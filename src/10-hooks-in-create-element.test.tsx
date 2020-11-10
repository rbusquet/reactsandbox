import { render } from "@testing-library/react";
import { createElement } from "react";
import App, { Counter } from "./10-hooks-in-create-element";

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
