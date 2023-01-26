class User {
  constructor(
    public name: string,
    public age: number,
    public address: { name: string }
  ) {}

  static shallowClone(obj: User): User {
    return { ...obj };
  }

  static deepClone(obj: User): User {
    return structuredClone(obj);
  }
}

const userOne = new User('Mo', 22, { name: 'Egypt' });
const userTwo = User.shallowClone(userOne);

console.log(userOne);
console.log(userTwo);

userTwo.address.name = 'KSA';
console.log(userOne.address); // { name : "KSA" }
console.log(userTwo.address); // { name : "KSA" }

const userThree = new User('Mo', 22, { name: 'Egypt' });
const userFour = User.deepClone(userThree);

console.log(userThree);
console.log(userFour);

userFour.address.name = 'Syria';
console.log(userThree.address); // { name : "Egypt" }
console.log(userFour.address); // { name : "Syria" }
