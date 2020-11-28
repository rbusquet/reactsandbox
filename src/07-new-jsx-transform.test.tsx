import { render, screen } from "@testing-library/react";
import { App } from "./07-new-jsx-transform";

test("it should just work without importing React", () => {
  render(<App />);
  expect(screen.getByText(/i'm the body!/i)).toBeDefined();
});
