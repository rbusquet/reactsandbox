import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer();

async function tryIt() {
  const response = await fetch("/lalala");
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  return await Promise.reject(data);
}

beforeAll(() => server.listen());
afterAll(() => server.close());
beforeEach(() => server.resetHandlers());

test("with malformed json error", () => {
  server.use(
    rest.get("/lalala", (req, res, ctx) => {
      return res(ctx.text("Error message"), ctx.status(400));
    })
  );
  return tryIt().catch(e => {
    expect(e).toMatchInlineSnapshot(
      `[SyntaxError: Unexpected token E in JSON at position 0]`
    );
  });
});

test("with json error info", () => {
  server.use(
    rest.get("/lalala", (req, res, ctx) => {
      return res(ctx.json({ error: "Error message" }), ctx.status(400));
    })
  );
  return tryIt().catch(e => {
    expect(e).toEqual({
      error: "Error message",
    });
  });
});

test("with successful response", async () => {
  server.use(
    rest.get("/lalala", (req, res, ctx) => {
      return res(ctx.json({ status: "OK" }), ctx.status(200));
    })
  );
  expect(await tryIt()).toEqual({
    status: "OK",
  });
});
