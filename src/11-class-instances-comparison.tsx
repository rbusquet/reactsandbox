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
