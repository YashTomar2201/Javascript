const name = "yash"
const age = 20

console.log(`My name is ${name} and I am ${age} years old.`);

const gameName = new String("Counter-Strike");
console.log(gameName[0]);
console.log(gameName.__proto__); // String.prototype
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const str = gameName.substring(0, 5);
console.log(str);
console.log(gameName.slice(-6));