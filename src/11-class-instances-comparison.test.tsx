import { Item, Cheese } from "./11-class-instances-comparison";

test("Cheese == Item???", () => {
  const cheeseItem = new Item("Cheese", 10, 10);
  const cheese = new Cheese(10, 10);
  expect(cheeseItem).toEqual(cheese);
});
