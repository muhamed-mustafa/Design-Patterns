export class FlyWeight {
  constructor(
    public make: string,
    public model: string,
    public processor: string
  ) {}
}

export const flyWeightFactory = (() => {
  const flyWeights: { [key: string]: FlyWeight } = {};

  return {
    get: function (make: string, model: string, processor: string) {
      if (!flyWeights[make + model]) {
        flyWeights[make + model] = new FlyWeight(make, model, processor);
      }

      return flyWeights[make + model];
    },

    getCount: function (): number {
      return Object.keys(flyWeights).length;
    },
  };
})();
