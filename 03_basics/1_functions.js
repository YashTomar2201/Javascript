// Functions in JavaScript
function sayMyName(){
    console.log("My name is John");
}
sayMyName(); // My name is John


// Function with parameters
function addNumbers(num1, num2){
    return num1 + num2;
}
const result = addNumbers(5, 10);
console.log(result); // 15


// Function with default parameters
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!


function calculateCartPrice()