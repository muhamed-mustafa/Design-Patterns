const Singleton = (function () {
  let instance: Object;
  let count = 0;

  function createInstance() {
    return new Object('I am the instance');
  }

  return {
    getInstance: function () {
      if (!instance) instance = createInstance();
      return instance;
    },

    incrementCount: function () {
      return ++count;
    },
  };
})();

const run = (function () {
  let instanceOne = Singleton.getInstance();
  let instanceTwo = Singleton.getInstance();

  let instanceOneCount = Singleton.incrementCount();
  console.log(instanceOneCount);

  let instanceTwoCount = Singleton.incrementCount();
  console.log(instanceTwoCount);

  console.log('Same instance? ' + (instanceOne === instanceTwo)); // True
})();
