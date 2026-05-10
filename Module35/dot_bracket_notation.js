const person = {
    name: 'Alice',
    age: 30,
    city: 'Paris',
    bestFriends: ['Bob', 'Charlie', 'David'],
    family: {
        father: 'John',
        mother: 'Jane'
    },
    salary: 50000,
    10:"Secret Code"
}

const heroName = person.name;
console.log('Hero Name:', heroName);

const name = person['name'];
console.log('Name:', name);

// why we use dot notation and bracket notation?
// Dot notation is more concise and easier to read when accessing properties with valid identifiers (e.g., person.name). It is the preferred way to access properties in most cases. However, bracket notation is necessary when the property name is not a valid identifier (e.g., person['10']) or when the property name is stored in a variable (e.g., const propName = 'name'; person[propName]). Bracket notation also allows for dynamic property access, which can be useful in certain scenarios. Overall, dot notation is generally more straightforward and should be used when possible, while bracket notation provides flexibility for specific use cases.