// Map : is a collection of keyed data items. Difference between object and Map is
        // it allows the keys of any type.

// Creating a Map :
let map = new Map();

// Adding values in the Map : 
map.set('1',"String"); // STRING KEY
map.set(1,"Number"); // Numeric Key
map.set(true ,"Bool"); // Boolean key

// Using a object as key : 
/*
    NOTE : One of the main difference between the Object & Map is that we can use
            an object as a key in map but not in object.x
*/
let john ={name : "John"};
map.set(john,123);

let recipe = new Map([['Tomato',200],['Onion',100],['Potato',50]]);

// Iterate over keys(vegetables)
for (const vegetable of recipe.keys()) {
    console.log(vegetable);
}

// Iterate over values(amounts)
for (const amount of recipe.values()) {
    console.log(amount);
}

// Iterate over [key,value]
for (const entry of recipe) {
    console.log(entry);
}

// Built-in forEach loop : 
recipe.forEach((value,key)=>{
    console.log(`${key} : ${value}`);
});

/*
    NOTE : We can pass array with key,value pairs for initialization 
    For Example : let recipe = new Map([['Tomato',200],['Onion',100],['Potato',50]]);
*/

// Creating a Map from an Object : 
// Object.entries() is an built-in method that returns a array of key,value pairs.

let obj ={
    name : "John",
    age : 20
};


let newMap = new Map(Object.entries(obj));
console.log(newMap.get('age'));

// Creating a Object from an Map : 
// Object.fromEntries() is also an built-in method that takes an array and returns obj

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

console.log(prices);
// Object.fromEntries() basically gives an object from Map.

/*
    ANOTHER WAY : USING Map.entries() :-
    let map = new Map();
    map.set('banana', 1);
    map.set('orange', 2);
    map.set('meat', 4);

    let obj = Object.fromEntries(map.entries());
    //obj ={ banana : 1, orange : 2, meat : 4 }

    alert(obj.orange);
*/

// SET : It is a special type of collection - contains values(not keys) 
        // BUT ONLY ONCE.

// MAIN FEATURE : Repeating the set.add() with same value DO NOTHING.

let set =new Set();

let david={name : "David"};
let mary={name : "Mary"};
let peter={name : "Peter"};

set.add(david);
set.add(mary);
set.add(peter);
set.add(david);
set.add(mary);

console.log(set.size) // Output : 3

// Iteration Of Set : 

for (const user of set) {
    console.log(user.name); // David , Peter , Mary
}

// Using forEach Loop : 
set.forEach((names)=>{
    console.log(names);
})

// Task 1 : 
function unique(arr) {
    let set =new Set(arr);
    return set;
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));

// Task 2 : 
function aClean(arr){
    let map =new Map();
    for (const word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted,word);
    }
    return Array.from(map.values());
}

let arr=["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aClean(arr));

// Task 3 : 
let newmap = new Map();

newmap.set("name", "John");

let keys = Array.from(newmap.keys());

// Error: keys.push is not a function
keys.push("more");
console.log(keys);

// More tasks : 
let myMap=new Map();
myMap.set('a',1);
myMap.set('b',2);
myMap.set('c',3);

console.log(myMap.size);
console.log(myMap.has('d'));

let arr1=Object.entries(myMap);
console.log(arr1)
// let arr1=[];
// for (const iterator of myMap.entries()) {
//     arr1.push(iterator);
// }
// console.log(arr1);

let mapArr=[['key1','val1'],['key2','val2']].flat(1);
let taskMap=new Map();
for (let i = 0; i < mapArr.length; i++) {
    taskMap.set(mapArr[i],mapArr[i+1]);
    i++;
}
console.log(taskMap);

// Advance Task(MAP) : 
function countWords(str){
    let countMap = new Map();
    for (const letter of str) {
        if (!countMap.has(letter)) {
            countMap.set(letter,0);
        }
        countMap.set(letter,countMap.get(letter)+1)
    }
    console.log(countMap);
}
countWords("I am tommy")

// MORE TASKS (SET) :
let mySet=new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);

mySet.forEach((item)=>console.log(item));

let otherSet = new Set();
otherSet.add(3);
otherSet.add(4);
otherSet.add(5);
otherSet.add(6);

function union(set,set1) {
    let unionSet=new Set();
    set.forEach((item)=>unionSet.add(item));
    set1.forEach((item)=>unionSet.add(item));
    console.log(unionSet);
}

union(mySet,otherSet);

function intersection(set,set1){
    let intersectedSet=new Set();
    set.forEach((item)=>{
        if(set.has(item) == set1.has(item)){
            intersectedSet.add(item);
        }
    });
    console.log(intersectedSet);
}

intersection(mySet,otherSet);