const balance = new Number(100.1866)
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));
console.log(balance.toPrecision(5));

const newNum = 1000000
console.log(newNum.toLocaleString('en-US')); // "1,000,000"
console.log(newNum.toLocaleString('en-IN')); // "10,00,000"


//----------------------MATHS----------------------

console.log(Math);
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(5.1)); // 6
console.log(Math.round(5.5)); // 6
console.log(Math.floor(5.9)); // 5
console.log(Math.max(1, 2, 3, 4, 5)); // 5

console.log(Math.random().toFixed(2)); // Random number between 0 and 1
console.log((Math.random() * 10).toFixed(2)); // Random number between 0 and 10

const min = 10
const max = 20
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // Random number between 10 and 20


