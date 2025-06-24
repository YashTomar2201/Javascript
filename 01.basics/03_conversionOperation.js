let score = null

console.log(typeof score);

let valInNumber = Number(score)
console.log(typeof valInNumber);  // number
console.log(valInNumber);       // NaN


// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0
// null => 0

// ***************** Operations *******************

console.log("1" + 2);       //12
console.log(1 + "2");       //12
console.log("1" + 2 + 2);   //122
console.log(1 + 2 + "2");   //32

// better to use brackets to define which operation should be performed first!!!!