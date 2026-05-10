// false values: false, 0, -0, 0n, "", null, undefined, NaN
// true values: all other values that are not false


if (0) {
    console.log('This will not be executed because 0 is a falsy value.');
}
else {
    console.log('This will be executed because 0 is a falsy value.');
}

// Ternary operator

const age = 18;
const isAdult = age >=18 ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);

const number = 5;
const result = number%2==0 ? 'Even' : 'Odd';
console.log(result);


const isActive = true;
const showUser =() => console.log('User is active');
const hideUser =() => console.log('User is inactive');

isActive ? showUser() : hideUser();

// Short circuit evaluation with AND (&&) and OR (||)

const isLoggedIn = true;
isLoggedIn && console.log('User is logged in'); // This will execute because isLoggedIn is true

const isAdmin = false;
isAdmin || console.log('User is not an admin'); // This will execute because isAdmin is false


// Short circuit evaluation with AND (&&) and OR (||) in a more complex example

const user = {
    name: 'Alice',
    age: 30,
    isAdmin: false
};  
user.isAdmin && console.log('User is an admin'); // This will not execute because user.isAdmin is false
user.isAdmin || console.log('User is not an admin'); // This will execute because user.isAdmin is false


let num = "10";

console.log(typeof num); // Output: string

//num = num * 1; // This will convert the string "10" to the number 10
num += 0; // This will also convert the string "10" to the number 10
num = +num; // This will also convert the string "10" to the number 10
num = Number(num); // This will also convert the string "10" to the number 10
num = parseInt(num); // This will also convert the string "10" to the number 10
num = parseFloat(num); // This will also convert the string "10" to the number 10
num = ~~num; // This will also convert the string "10" to the number 10
num = num - 0; // This will also convert the string "10" to the number 10
num = num / 1; // This will also convert the string "10" to the number 10
num = num * 1; // This will also convert the string "10" to the number 10   
num = num ** 1; // This will also convert the string "10" to the number 10
// any other way to convert a string to a number?
num = JSON.parse(num); // Another way using JSON.parse for numeric strings


console.log(typeof num); // Output: number

let str = 123;

console.log(typeof str); // Output: number

str = str + ""; // This will convert the number 123 to the string "123"
str = String(str); // This will also convert the number 123 to the string "123"
str = str.toString(); // This will also convert the number 123 to the string "123"
str = `${str}`; // This will also convert the number 123 to the string "123"
str = '' + str; // This will also convert the number 123 to the string "123"
str = str + ''; // This will also convert the number 123 to the string "123"
str = str / 1 + ''; // This will also convert the number 123 to the string "123"
str = str * 1 + ''; // This will also convert the number 123 to the string "123"
str = str - 0 + ''; // This will also convert the number 123 to the string "123"        
str = str ** 1 + ''; // This will also convert the number 123 to the string "123"
// any other way to convert a number to a string?
str = JSON.stringify(str); // Another way using JSON.stringify for numeric values


