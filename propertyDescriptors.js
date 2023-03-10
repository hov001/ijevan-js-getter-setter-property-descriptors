const person = {
  _firstName: "Hovhannes",
};

console.log(Object.getOwnPropertyDescriptor(person, "_firstName"));

Object.defineProperty(person, "_firstName", {
  value: "Samson",
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(person, "_firstName"));

person._firstName = "Hovhannes";

console.log(person);

Object.defineProperty(person, "_firstName", {
  configurable: false,
});

Object.defineProperty(person, "_firstName", {
  writable: true,
});

person._firstName = 5;

console.log(Object.getOwnPropertyDescriptor(person, "_firstName"));
