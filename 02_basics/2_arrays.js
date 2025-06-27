const marvelCharacters = ["spiderMan", "ironMan"];
const dcCharacters = ["superman", "batman"];

console.log(marvelCharacters.concat(dcCharacters)); // Combines both arrays into a new array
console.log(marvelCharacters.join(" ")); // Joins elements of the array into a string with spaces
const newCharacters = [...marvelCharacters, ...dcCharacters]; // Spreads elements of both arrays into a new array
console.log(newCharacters); // Outputs the new array with all characters

const arr2 = [0, 1, [2, 3], [4, 5, [6, 7]]];
const flattenedArr = arr2.flat(2); // Flattens the array to a depth of 2
console.log(flattenedArr); // Outputs the flattened array [0, 1, 2, 3, 4, 5, 6, 7]

console.log(Array.isArray(marvelCharacters)); // Checks if marvelCharacters is an array, returns true
console.log(Array.from("hello")); // Converts a string to an array of characters ['h', 'e', 'l', 'l', 'o']

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3)); // Creates a new array with the scores [100, 200, 300]


