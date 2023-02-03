import { flyWeightFactory, FlyWeight } from './fly-weight';

export class Computer {
  flyWeight: FlyWeight;

  constructor(
    make: string,
    model: string,
    processor: string,
    public memory: string,
    public tag: string
  ) {
    this.flyWeight = flyWeightFactory.get(make, model, processor);
  }
}

export function ComputerCollection() {
  let computers: { [key: string]: Computer } = {};
  let count = 0;

  return {
    add: function (
      make: string,
      model: string,
      processor: string,
      memory: string,
      tag: string
    ) {
      computers[tag] = new Computer(make, model, processor, memory, tag);
      count++;
    },

    get: function (tag: string) {
      return computers[tag];
    },

    getCount(): number {
      return count;
    },
  };
}
