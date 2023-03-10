// Encapsulation

// Interface

const person = {
  _firstName: "Hovhannes",
  _secondName: "Kocharyan",
  age: 26,

  get firstName() {
    return `${person._firstName.slice(0, 3)}****`;
  },
  set firstName(value) {
    if (typeof value === "string" && value.length > 3) {
      person._firstName = value;
    }
  },
};

// console.log("before:::", person);

// person.firstName = 5;

// const a = person.getFirstName();

// console.log(person.firstName);

// person.firstName = "Samson";

// console.log(person.firstName);

person._firstName = 5;

console.log(person);

// console.log("after:::", person);

// const res = str.split("").reverse().join("");
