import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  InlineFunctions,
  VisualizingArguments,
} from "./01-visualizing-use-state";

test("InlineFunctions", () => {
  render(<InlineFunctions />);
  const button = screen.getByRole("button", { name: "0" });
  userEvent.click(button);
  expect(button).toHaveTextContent("1");
  userEvent.type(screen.getByRole("textbox"), "Hello World!");
  expect(localStorage.getItem("name")).toBe("Hello World!");
});

test("VisualizingArguments", () => {
  render(<VisualizingArguments />);
  const button = screen.getByRole("button", { name: "0" });
  userEvent.click(button);
  expect(button).toHaveTextContent("1");
  userEvent.type(screen.getByRole("textbox"), "Hello World!");
  expect(localStorage.getItem("name")).toBe("Hello World!");
});
