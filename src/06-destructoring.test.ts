import { nestedArrayAndObject } from "./06-destructoring";

test("nestedArrayAndObject returns expected string", () => {
  expect(nestedArrayAndObject()).toEqual(
    'Zelena (The Wicked Witch) is an enemy to Emma Swan in "Once Upon a Time"'
  );
});
