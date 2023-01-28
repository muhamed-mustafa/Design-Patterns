// another example about proxy

const user = {
  name: 'Mo',
  age: 24,
  nationality: 'Egyptian',
};

const proxy = new Proxy(user, {
  get: (obj, prop: string) => {
    if (!Reflect.get(obj, prop))
      console.log(`Hmmm.. this property doesn't seem to exist`);
    else console.log(`The Value Of ${prop} is ${Reflect.get(obj, prop)}`);
  },

  set: (obj, prop: string, value) => {
    if (prop === 'age' && typeof value !== 'number')
      console.log(`Sorry, you can only pass numeric values for age`);
    else if (prop === 'name' && value.length < 2)
      console.log(`You need to provide a valid name`);
    else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      Reflect.set(obj, prop, value);
    }
    return true;
  },
});

console.log(proxy.name);
console.log((proxy.name = 'Hamza'));
