// Primitives: number, string, boolean, any (any = any type at all)
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
// let age: number = 24; // this is also allowed

age = "12";
age = 12;

let userName: string;
userName = "Max";
userName = 12;

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[]; // array of strings
hobbies = ["a", "b", "1", "2", 3]; // Note that the number is red-underlined as invalid

// person is an object with a name field that holds a string, and an age field that holds a number
let person: {
  name: string;
  age: number;
};
person = {
  name: "Max",
  age: 32,
};
// person = {
//   isEmployee: true; // not valid - isEmployee is not a field and no field accepts a boolean
// }

let people: {
  name: string;
  age: number;
}[]; // people is an array of objects that are the same as the person object defined above

// Type Inference

let myString = "I'm a string";
myString = 12;
// TypeScript 'inferred' that myString should be a 'string' type,
//    so assigning it to 12 (a number) will throw an error
// Take advantage of this feature whenever possible, it is best practice

// Union types - For when you want to allow more than one type to be assigned

let value: string | number = "5";
value = "hello";
value = 7;
// All of the above are fine.
// Seperate each valid type with a '|'
// string | string[] would allow either a string or array of strings

// Type aliases - "custom" types

type Person = {
  name: string;
  age: Number;
};

let newPerson: Person;
// newPerson now has the same requirement as person above
let newPeople: Person[];
// newPeople now has to be an array of objects that match the type definition of Person

// Functions & types

// line 81 shows how to declare the return type rather than using type inference
// function add(a: number, b: number) {
function add(a: number, b: number): number | string {
  return a + b;
} // parameters a and b must be a number
// TypeScript uses type inference to determine the return value is a number
//

function print(value: any) {
  console.log(value);
}
// This function does not return anything, which makes it a 'void' type
