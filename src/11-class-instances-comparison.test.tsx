export class Item {
  name: string;
  daysLeft: number;
  quality: number;
  constructor(name: string, daysLeft: number, quality: number) {
    this.name = name;
    this.daysLeft = daysLeft;
    this.quality = quality;
  }
}

export class Cheese extends Item {
  constructor(daysLeft: number, quality: number) {
    super("Cheese", daysLeft, quality);
  }
}

test("Cheese == Item???", () => {
  const cheeseItem = new Item("Cheese", 10, 10);
  const cheese = new Cheese(10, 10);
  expect(cheeseItem).toEqual(cheese);
});

test("Cheese != Item!", () => {
  const cheeseItem = new Item("Cheese", 10, 10);
  const cheese = new Cheese(10, 10);
  expect(() => expect(cheeseItem).toStrictEqual(cheese)).toThrow();
});
