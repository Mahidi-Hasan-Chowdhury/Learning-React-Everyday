// Simple JavaScript examples of var, let, and const

// var can be redeclared and updated
var name = 'Alice';
console.log('var name initial:', name);
var name = 'Bob';
console.log('var name redeclared:', name);
name = 'Carol';
console.log('var name updated:', name);

// let can be updated but not redeclared in the same scope
let age = 25;
console.log('let age initial:', age);
age = 26;
console.log('let age updated:', age);

// const cannot be reassigned
const city = 'Paris';
console.log('const city:', city);
// city = 'London'; // This would throw an error

// const with objects can still mutate properties
const person = { firstName: 'Alice', lastName: 'Smith' };
console.log('const person before:', person);
person.lastName = 'Johnson';
console.log('const person after:', person);

// simple if else example
const score = 80;
if (score >= 60) {
  console.log('You passed the exam.');
} else {
  console.log('You need to study more.');
}


const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log('Friends:', friends);
console.log(friends[0]); // Accessing first friend
friends.push('Frank'); // Adding a new friend
console.log('Updated Friends:', friends);
friends.pop(); // Removing the last friend
console.log('After removing last friend:', friends);
friends.unshift('Eve'); // Adding a friend at the beginning
console.log('After adding friend at the beginning:', friends);
friends.shift(); // Removing the first friend
console.log('After removing first friend:', friends);
console.log('Friends from index 2 to 3:', friends.slice(2, 4));
console.log(friends.splice(2,4)); // Removing friends from index 2 to 3
console.log('Friends after splice:', friends);


for(let i=0; i<5; i++){
    console.log('For loop iteration:', i);
} 
for (let index=0; index<friends.length; index++){
    console.log('Friend at index', index, ':', friends[index]);
}

function sum(a,b){
    return a + b;
}

console.log(sum(5, 10)); // Returns 15


const personInfo={
  name: 'Alice',
  age: 30,
  friends: friends
}
console.log('Person object:', personInfo); 
console.log(personInfo.friends[1]); // Accessing Bob from the friends array in personInfo
personInfo.age = 22; // Updating age property 
console.log('Updated person object:', personInfo);