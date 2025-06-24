// stack(primitive) and heap(reference) memory in JavaScript

let a = 10; // stack memory
let b = a; // stack memory, b is a copy of a
console.log(a, b); // 10 10
a = 20; // change a, b remains unchanged
console.log(a, b); // 20 10

let obj1 = { value: 10 }; // heap memory
let obj2 = obj1; // stack memory, obj2 is a reference to obj1
console.log(obj1.value, obj2.value); // 10 10
obj1.value = 20; // change obj1, obj2 reflects the change
console.log(obj1.value, obj2.value); // 20 20