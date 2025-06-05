// Array of objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35},
    { name: 'Paul', age: 29},
    { name: 'Ramashia', age:53}
];
// Using map to create a new array of names
const names = users.map(user => user.name);

//Retreieving multiple objects with map concept using and => fuction
const namesAndages= users.map(vato=>{
const[ name, age]= vato;
return{name,age}
});

// Output the new array

console.log(names); // [output single property]
console.log (namesAndages);//[output multiple properties]