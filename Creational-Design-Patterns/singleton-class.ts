class Singleton {
  private static instance: Singleton;
  private static count: number = 0;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public incrementCount(): number {
    return ++Singleton.count;
  }
}

// Using the Singleton
(function run() {
  let instanceOne = Singleton.getInstance();
  let instanceTwo = Singleton.getInstance();

  let instanceOneCount = instanceOne.incrementCount();
  console.log(instanceOneCount); // 1

  let instanceTwoCount = instanceTwo.incrementCount();
  console.log(instanceTwoCount); // 2

  console.log("Same instance? " + (instanceOne === instanceTwo)); // True
})();
