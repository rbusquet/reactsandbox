import { fireEvent } from "@testing-library/react";

test("is expect a type guard?", () => {
  const root = document.getElementById("root");

  expect(root).toBeDefined();

  fireEvent.click(root as HTMLElement);
});
