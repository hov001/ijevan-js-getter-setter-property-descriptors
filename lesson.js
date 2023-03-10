const person = {};

Object.defineProperties(person, {
  _firstName: {
    value: "Guest",
    writable: true,
  },
  age: {
    value: 26,
    writable: true,
    enumerable: true,
  },
  firstName: {
    enumerable: true,
    get() {
      return person._firstName;
    },
    set(value) {
      if (typeof value === "string") {
        person._firstName = value;
      }
    },
  },
});

for (let key in person) {
  console.log(person[key]);
}

person.firstName = "Hovhannes";

delete person._firstName;

for (let key in person) {
  console.log(person[key]);
}

// console.log(Object.getOwnPropertyDescriptors(person));
