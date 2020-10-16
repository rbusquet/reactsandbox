```ts
import { App } from "./05-strict-mode";
import { StrictMode } from "react";
import { render } from "@testing-library/react";

test("restrict mode", () => {
  render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  expect(document).toMatchInlineSnapshot();
});
```
