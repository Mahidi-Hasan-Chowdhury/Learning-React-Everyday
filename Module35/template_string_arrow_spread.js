const fName = 'Mahidi'
const lName = 'Hasan'

console.log(fName+' '+lName) // Concatenation

const fullName = `${fName} ${lName}`; // Template string
console.log('Full Name:', fullName);

//Normal function example
function greet(name) {
    return 'Hello, ' + name + '!';
}
greet('Alice'); // Output: Hello, Alice!


// Arrow function example
const sum=(a,b) => a+b;
const result = sum(5, 3);
console.log('Sum:', result); // Output: Sum: 8

const multipleLineArrowFunction=(a,b) => {
    const sum = a + b;
    const product = a * b;
    return `Sum: ${sum}, Product: ${product}`;
}

const multiLineResult = multipleLineArrowFunction(5, 3);
console.log(multiLineResult); // Output: Sum: 8, Product: 15

// rest parameter example
const sumAll=(...numbers) => {
    console.log('Numbers:', numbers);
};
sumAll(1, 2, 3, 4, 5); // Output: Numbers: [1, 2, 3, 4, 5]

// Explain Arrow Function and Rest Parameter

// Arrow functions are a concise way to write functions in JavaScript. They do not have their own 'this' context and are often used for shorter functions or when you want to preserve the 'this' context of the enclosing scope. The syntax is more compact compared to traditional function expressions.
// For example, the arrow function `const sum = (a, b) => a + b;` is equivalent to the traditional function expression `function sum(a, b) { return a + b; }`.
// Arrow functions can also be used for multi-line functions, but they require curly braces and an explicit return statement if you want to return a value.
// For example:
// const multiLineArrowFunction = (a, b) => {
//     const sum = a + b;
//     const product = a * b;
//     return `Sum: ${sum}, Product: ${product}`;
// };
// Explain 'this' context in arrow functions:
// In traditional functions, the value of 'this' is determined by how the function is called. However, in arrow functions, 'this' is lexically bound, meaning it takes the value of 'this' from the surrounding code at the time the function is defined. This makes arrow functions particularly useful in situations where you want to maintain the context of 'this', such as in event handlers or when working with methods in classes.
// Explain what is this
// In JavaScript, 'this' is a special keyword that refers to the context in which a function is executed. The value of 'this' can vary depending on how a function is called. It can refer to the global object (in non-strict mode), the object that owns the method being called, or it can be explicitly set using methods like call(), apply(), or bind().
// This example
// const person = {
//     name: 'Alice',
//     greet: function() {      
//         console.log('Hello, ' + this.name + '!'); // 'this' refers to the person object
//     }
// };
// person.greet(); // Output: Hello, Alice!
// In this example, 'this.name' refers to the 'name' property of the 'person' object, which is 'Alice'. If we were to use an arrow function for the greet method, 'this' would not refer to the 'person' object, and we would not be able to access the 'name' property in the same way.
 

// Rest parameters allow a function to accept an indefinite number of arguments as an array. This is useful when you don't know how many arguments will be passed to the function.
// In the example `const sumAll = (...numbers) => { console.log('Numbers:', numbers); };`, the rest parameter `...numbers` collects all the arguments passed to the function into an array called `numbers`. When we call `sumAll(1, 2, 3, 4, 5);`, it logs `Numbers: [1, 2, 3, 4, 5]`, showing that all the arguments have been collected into the array. Rest parameters provide a convenient way to handle functions that can take a variable number of arguments without needing to use the `arguments` object.


// Spread operator example

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log('Array 1:', arr1);
console.log('Array 2:', arr2);
console.log('Spread Array 1:', ...arr1); // Output: Spread Array 1: 1 2 3
console.log('Spread Array 2:', ...arr2); // Output: Spread Array 2: 4 5 6
console.log('Spread combined:', ...arr1, ...arr2); // Output: Spread combined: 1 2 3 4 5 6
const combinedArray = [...arr1, ...arr2];
console.log('Combined Array:', combinedArray); // Output: Combined Array: [1, 2, 3, 4, 5, 6]
const obj1 = { name: 'Alice', age: 30 };
const obj2 = { city: 'Paris', country: 'France' };
const combinedObject = { ...obj1, ...obj2 };
console.log('Combined Object:', combinedObject); // Output: Combined Object: { name: 'Alice', age: 30, city: 'Paris', country: 'France' }   

// The spread operator (`...`) is a syntax in JavaScript that allows an iterable (like an array or object) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. It can also be used to create shallow copies of arrays or objects, and to merge arrays or objects together.
// In the example with arrays, `const combinedArray = [...arr1, ...arr2];` takes all the elements from `arr1` and `arr2` and combines them into a new array called `combinedArray`. This is a convenient way to merge two arrays without modifying the original arrays.
// In the example with objects, `const combinedObject = { ...obj1, ...obj2 };` creates a new object that contains all the properties from `obj1` and `obj2`. If there are any overlapping properties, the values from `obj2` will overwrite those from `obj1`. This is a common way to merge objects or to create a new object based on existing ones without mutating the original objects.

// Spread operator can also be used in function calls to expand an array of arguments into individual arguments. For example, if you have a function that takes multiple parameters, you can use the spread operator to pass an array of arguments to that function. This is particularly useful when you have a function that accepts a variable number of arguments, or when you want to pass an array of values as individual arguments to a function. For instance, if you have a function `function sum(a, b, c) { return a + b + c; }` and an array `const numbers = [1, 2, 3];`, you can call the function with the spread operator like this: `sum(...numbers);`, which will effectively call `sum(1, 2, 3);` and return the result.

// spread operator is what in a simple way to tell in an interview.
// The spread operator is a convenient syntax in JavaScript that allows you to expand an iterable (like an array or object) into individual elements or properties. It can be used to merge arrays, combine objects, or pass elements of an array as individual arguments to a function. For example, if you have two arrays and want to combine them, you can use the spread operator like this: `const combinedArray = [...array1, ...array2];`. This creates a new array that contains all the elements from both arrays without modifying the original arrays. Similarly, for objects, you can merge properties using the spread operator: `const combinedObject = { ...object1, ...object2 };`. This creates a new object that includes all properties from both objects. The spread operator is a powerful tool for working with collections of data in a more concise and readable way. 
