const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Array destructuring
const [firstFriend, secondFriend, ...otherFriends] = friends;
console.log('First Friend:', firstFriend);
console.log('Second Friend:', secondFriend);
console.log('Other Friends:', otherFriends);


// Object destructuring
const person = {
    name: 'Alice',
    age: 30,
    city: ['Paris', 'London', 'New York'],
    bestFriends: ['Bob', 'Charlie', 'David']
};
const { name, age, city, bestFriends } = person;
console.log('Name:', name);
console.log('Age:', age);
console.log('City:', city);
console.log('Best Friends:', bestFriends);

// Nested destructuring
const nestedPerson = {
    personName: 'Alice',
    personAge: 30,
    address: {
        personCity: 'Paris',
        country: 'France'
    },
    personBestFriends: ['Bob', 'Charlie', 'David']
};
const { personName, personAge, address: { personCity, country }, personBestFriends } = nestedPerson;
console.log('Name:', personName);
console.log('Age:', personAge);
console.log('City:', personCity);
console.log('Country:', country);
console.log('Best Friends:', personBestFriends);


// Array of objects destructuring
const products = [
    {name: 'Phone', brand: 'Apple', price: 500, colour: 'Black'},
    {name: 'Tablet', brand: 'Samsung', price: 300, colour: 'White'},
    {name: 'Laptop', brand: 'Dell', price: 800, colour: 'Silver'},
    {name: 'Headphones', brand: 'Sony', price: 200, colour: 'Black'}
];
const [firstProduct, secondProduct] = products;
console.log('First Product:', firstProduct);
console.log('Second Product:', secondProduct);

// Explain and Summary
// Destructuring is a convenient way to extract values from arrays or properties from objects and assign them to variables. It allows for cleaner and more readable code by reducing the need for multiple lines of code to access individual elements or properties. In array destructuring, you can use square brackets to unpack values from an array into distinct variables. In object destructuring, you can use curly braces to unpack properties from an object into distinct variables. Nested destructuring allows you to extract values from nested objects or arrays in a single statement. Destructuring can also be used with arrays of objects, making it easier to access specific properties of objects within an array. Overall, destructuring enhances code clarity and reduces the amount of boilerplate code needed to access data structures in JavaScript.