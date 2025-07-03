const tinderUser = new Object();   // singelton object
tinderUser.name = "Yash";
tinderUser.id = 122;

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Yash",
            lastname: "Tomar"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname); // Yash

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
// const obj3 = Object.assign({}, obj1, obj2); // Merges obj1 and obj2
const obj3 = {...obj1, ...obj2}; // Merges obj1 and obj2 using spread operator
console.log(obj3); // {1: "a", 2: "b", 3: "a", 4: "b"}

console.log(Object.keys(tinderUser)); // ["name", "id"]
console.log(Object.values(tinderUser)); // ["Yash", 122]


const course = {
    name: "JavaScript",
    price: 999,
    courseinstructor: "yash"
}

const {courseinstructor: instructor} = course; // Destructuring
console.log(instructor); // yash