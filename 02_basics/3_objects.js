// object literals
const mysym = Symbol("key");
const person = {
    name: "Yash",
    age: 21,
    [mysym]: "This is a symbol",
}
// 2 ways to access object properties

console.log(person.name); // Yash
console.log(person["name"]); // Yash
console.log(person[mysym]); // This is a symbol
console.log(typeof mysym); // symbol
// Object.freeze(person); // Prevents any changes to the object
console.log(person);

person.greeting = function() {
    console.log(`Hello, my name is ${this.name}`);
}
person.greeting(); // Hello, my name is Yash





