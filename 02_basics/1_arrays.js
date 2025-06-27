const arr = [0, 1, 2, 3, 4, 5];

arr.push(6); // Adds 6 to the end of the array
arr.pop(); // Removes the last element (6)

console.log(arr.slice(1, 3)); // slice(start, end) returns elements from index 1 to 2 (end is exclusive)
console.log(arr.splice(1, 3)); // splice(start, deleteCount) removes 3 elements starting from index 1

console.log(arr); // Outputs the modified array [0, 4, 5]
