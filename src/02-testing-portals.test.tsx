import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import App from "./02-testing-portals.component";

test("renders in portal", () => {
  // 1. Create portal root in jsdom document
  const portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "portal-root");
  document.body.append(portalRoot);

  // 2. Render component
  const { container } = render(<App />);

  // 3. the container returned by `render` will not have any children.
  // This is a root created by react-testing-library
  expect(container).toHaveTextContent("");

  // 3. Assert using `screen`
  screen.getByText(/hello world! i'm in a portal!/i);

  // 4. Full document markup
  expect(document.body).toMatchInlineSnapshot(`
    <body>
      <div
        id="portal-root"
      >
        <div>
          Hello world! I'm in a portal!
        </div>
      </div>
      <div />
    </body>
  `);
});
