// find() method : It takes a function as an argument and returns the element itself.
let users =[
    {id : 1, name : "John"},
    {id : 2, name : "Micheal"},
    {id : 3, name : "David"},
    {id : 4, name : "John"}
];

let user=users.find(item => item.id == 2);
console.log(user.name); // Micheal

// findIndex() method : It takes a function as an argument and returns the index of that element.
console.log(users.findIndex(user => user.name == 'John')); // 0 (Index of first John)

// findLastIndex() method :
console.log(users.findLastIndex(user => user.name == 'John')); // 3 (Index of last John)