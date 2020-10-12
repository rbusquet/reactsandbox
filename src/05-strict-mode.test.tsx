import { App } from "./05-strict-mode";
import React from "react";
import { render } from "@testing-library/react";

test("restrict mode", () => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
