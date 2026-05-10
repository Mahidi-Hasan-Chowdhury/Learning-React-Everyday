const products = [
    {name: 'Laptop', brand: 'Dell', price: 1000, colour: 'Silver'},
    {name: 'Phone', brand: 'Apple', price: 500, colour: 'Black'},
    {name: 'Tablet', brand: 'Samsung', price: 300, colour: 'White'},
    {name: 'Tablet', brand: 'Samsung', price: 900, colour: 'White'}
];

// Array Map 
const result = products.map(product=> product.price);
console.log('Array Map Result:', result);
// Without arrow function
const resultWithoutArrow = products.map(function(product){
    return product.price;
});
console.log('Array Map Result (Without Arrow Function):', resultWithoutArrow);
// Without map method
const resultWithoutMap = [];
for(let i=0; i<products.length; i++){
    resultWithoutMap.push(products[i].price);
}
console.log('Array Map Result (Without Map Method):', resultWithoutMap);

// For Each
products.forEach(product=> console.log('Product Price:', product.price));
// Without arrow function
products.forEach(function(product){
    console.log('Product Price (Without Arrow Function):', product.price);
});


const filteredBrands = products.filter(product => product.brand === 'Apple');
console.log('Filtered Brands:', filteredBrands);
// Without arrow function
const filteredBrandWithoutArrow = products.filter(function(product){
    return product.brand === 'Apple';
});
console.log("Filtered Brands (Without Arrow Function): ", filteredBrandWithoutArrow);

//Without filter method
const filteredBrandWithoutFilterMethod = [];
for (let i=0; i<products.length; i++){
    if(products[i].brand === 'Apple'){
        filteredBrandWithoutFilterMethod.push(products[i]);
    } 
}
console.log("Filtered Brands Without Filter Method: ", filteredBrandWithoutFilterMethod);



const foundProduct = products.find(product => product.colour === 'White');
console.log('Found Product:', foundProduct); 
// Without arrow function
const foundProductWithoutArrow = products.find(function(product){
    return product.colour === 'White';
});
console.log('Found Product (Without Arrow Function):', foundProductWithoutArrow);

// Without find method
let foundProductWithoutFindMethod = null;
for(let i=0; i<products.length; i++){
    if(products[i].colour === 'White'){
        foundProductWithoutFindMethod = products[i];
        break; // Exit the loop once the first match is found
    }   
}
console.log('Found Product (Without Find Method):', foundProductWithoutFindMethod);


// when undefined is returned by find method
const notFoundProduct = products.find(product => product.colour === 'Red');
console.log('Not Found Product:', notFoundProduct); // Output: Not Found Product: undefined


// Explanation of Array Map, Filter, Find, and ForEach

// Array Map: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. It is used to transform each element of an array and returns a new array with the transformed values.
// Array Filter: The filter() method creates a new array with all elements that pass the test implemented by the provided function. It is used to select elements from an array based on a condition.
// Array Find: The find() method returns the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
// Array ForEach: The forEach() method executes a provided function once for each array element. It is used to perform an action on each element of an array.