const person = {
    name: 'Alice',
    age: 30,
    city: ['Paris', 'London', 'New York'],
    bestFriends: ['Bob', 'Charlie', 'David'],
    family: {
        father: 'John',
        mother: 'Jane',
        siblings: ['Tom', 'Jerry']
    }
};

console.log("Person Object:", person);

// Accessing values using dot notation
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
console.log("Best Friends:", person.bestFriends);
console.log("Father:", person.family.father);
console.log("Mother:", person.family.mother);
console.log("Siblings:", person.family.siblings);

const jsonString = JSON.stringify(person);
console.log('JSON String:', jsonString);

const plainObject = JSON.parse(jsonString);
console.log('Plain Object:', plainObject);


// Fetch Example
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => { 
        console.log('Fetched Data:', data);
    });




const user = {
    name: 'Alice',
    email: "alice@example.com",
    address: {
        city: 'Paris',
        country: 'France'
    },
    hobbies: ['Reading', 'Traveling', 'Cooking'],
    friends: [
        { name: 'Bob', age: 28 },
        { name: 'Charlie', age: 32 },
        { name: 'David', age: 29 }
    ]
}

console.log('User Object:', user);

// Why fetched data is showing after user object?
// The fetched data is showing after the user object because the fetch operation is asynchronous. When the fetch function is called, it initiates a network request to retrieve data from the specified URL. However, while waiting for the response, the JavaScript engine continues executing the subsequent lines of code, which includes logging the user object. Once the fetch operation completes and the response is received, the .then() method is executed, logging the fetched data. This is why you see the user object first, followed by the fetched data once it becomes available.

const keys = Object.keys(user);
console.log('Keys:', keys);
const values = Object.values(user);
console.log('Values:', values);


const products = [
    {name: 'Laptop', brand: 'Dell', price: 1000, colour: 'Silver'},
    {name: 'Phone', brand: 'Apple', price: 500, colour: 'Black'},
    {name: 'Tablet', brand: 'Samsung', price: 300, colour: 'White'},
    {name: 'Tablet', brand: 'Samsung', price: 900, colour: 'White'}
];

const newData = {
    name: 'Headphones',
    brand: 'Sony',
    price: 200,
    colour: 'Black'
}

const updatedProducts = [...products, newData];
console.log('Updated Products:', updatedProducts);

const updatedProductsWithSpread = [...products, {name: 'Headphones', brand: 'Sony', price: 200, colour: 'Black'}];
console.log('Updated Products with Spread:', updatedProductsWithSpread);

const updatedProductsWithoutSpread = products.concat({name: 'Headphones', brand: 'Sony', price: 200, colour: 'Black'});
console.log('Updated Products without Spread:', updatedProductsWithoutSpread);

const updatedProductsWithoutSpreadMethod = [];
for(let i=0; i<products.length; i++){
    updatedProductsWithoutSpreadMethod.push(products[i]);
}
updatedProductsWithoutSpreadMethod.push({name: 'Headphones', brand: 'Sony', price: 200, colour: 'Black'});
console.log('Updated Products without Spread Method:', updatedProductsWithoutSpreadMethod);



const remainingProducts = products.filter(product => product.brand !== 'Samsung');
console.log('Remaining Products:', remainingProducts);

const remainingProductsWithoutFilter = [];
for(let i=0; i<products.length; i++){
    if(products[i].brand !== 'Samsung'){
        remainingProductsWithoutFilter.push(products[i]);
    }
}
console.log('Remaining Products without Filter Method:', remainingProductsWithoutFilter);  

const updatedProduct2 = [...remainingProducts, newData];
console.log('Updated Product 2:', updatedProduct2);