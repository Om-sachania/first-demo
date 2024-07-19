let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null;
console.log(map);

// WeakMap :
    // Difference between WeakMap and Map() is that keys in WeakMap must be Objects

let weakMap= new WeakMap();
let obj={};
weakMap.set(obj,"ok"); // It will work successfully!!
//weakMap.set("No","done"); // Error : because "No" isn't an object
//console.log(weakMap);

/*
IMPORTANT NOTE :  
    If object has no reference then it will be removed from WEAKMAP(SEE BELOW) 
    In MAP it would'nt be removed(REFER TO LINE 1).

    WeakMap() does not support keys(),values(),entries() so there is no way of 
    getting keys & values
*/

let david ={name : "David"};
weakMap.set(david,"Name added");
console.log(weakMap);
david=null;
console.log(david); 
console.log(weakMap.get(david)); // It will return UNDEFINED.

// WeakSet : 
    // Difference between Set & WeakSet is that in WeakSet we can only add OBJECTS.
    // It does not suppport size, keys()
    // IMPORTANT : We cannot ITERATE WEAKSET.
    let visitedSet = new WeakSet();

    let micheal ={name : "Micheal"};
    let willam = {name : "Willam"};
    let fisher = {name : "Fisher"};

    visitedSet.add(micheal);
    visitedSet.add(willam);
    visitedSet.add(micheal);

    console.log(visitedSet);
    // Allthough the micheal is added twice in the visitedSet but it is added only
    // once in the set.

// Task 1 : 
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]); // It will not add again
console.log("Read Message 0: "+readMessages.has(messages[0]));
console.log("Read Message 1: "+readMessages.has(messages[1]));
messages.shift();
console.log("Read Message 0: "+readMessages.has(messages[0]));
console.log("Read Message 1: "+readMessages.has(messages[1]));