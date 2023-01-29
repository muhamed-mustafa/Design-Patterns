// another example about decorator

// example 1
const logger = (message: string) => console.log(message);

function loggerDecorator(logger: { (message: string): void }) {
  return (message: string) => {
    logger(message);
    console.log(`Message logged at : ${new Date().toLocaleString()}`);
  };
}

const decoratedLogger = loggerDecorator(logger);
console.log(decoratedLogger('Hello, World'));

// example 2
let multiply = (...args: number[]) => {
  return args.reduce((a, b) => a * b);
};

const validator = (fn: Function) => {
  return (...args: number[]) => {
    const valid = args.every((arg) => Number.isInteger(arg));

    if (!valid) throw 'Argument cannot be a non-integer';

    return fn(...args);
  };
};

const multiplyValid = validator(multiply);
console.log(multiplyValid(2, 4, 6));

// example 3
class Person {
  constructor(public name: string, public age: number) {}

  getBio() {
    return `Name is : ${this.name}, Age is: ${this.age}`;
  }
}

const person = new Person('Mo', 24);

const loggerDecorate = (fn: Function) => {
  return () => {
    console.log(`${new Date().toLocaleString()}`);
    return fn();
  };
};

const loggerDecorated = loggerDecorate(person.getBio.bind(person));
console.log(loggerDecorated());
