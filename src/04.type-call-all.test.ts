import { callAll } from "./04.type-call-all";

test("callAll", () => {
  const fns = [jest.fn(), jest.fn()];

  callAll(...fns)("Hello World!");
  fns.forEach(mock => expect(mock).toHaveBeenCalledWith("Hello World!"));
});
