// Array of objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35},
    { name: 'Paul', age:30}
];
// Using map to create a new array of names
const names = users.map(user => user.name);
// Output the new array

console.log(names); // ['Alice', 'Bob', 'Charlie']