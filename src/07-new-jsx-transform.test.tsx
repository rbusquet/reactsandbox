import { render, screen } from "@testing-library/react";
import { App } from "./07-new-jsx-transform";

test("it should just work without importing React", () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<App />);
  expect(screen.getByText(/0/i)).toBeDefined();
});
