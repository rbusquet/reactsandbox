import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("*", (req, res, ctx) => {
    return res(ctx.text("Error message"), ctx.status(400));
  })
);

function tryIt() {
  return fetch("/lalala").then(async response => {
    const data = await response.json();
    console.log({ data });
    if (response.ok) {
      return data;
    }
    return Promise.reject(data);
  });
}

test("json parser", async () => {
  server.listen();
  console.log(await tryIt());
});
