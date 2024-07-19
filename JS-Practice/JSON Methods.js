// JSON.stringify() : It converts the objects into JSON
let student ={
    name : "John",
    age : 28,
    isAdmin : false,
    course : ['html','css','js'],
    spouse : null
};

let json=JSON.stringify(student);
console.log(typeof json); // string
console.log(json);

// The above JSON.stringify() takes the object as parameter and converts it to string
/*
    NOTE : Strings in JSON uses double quotes("") only. So it converts
    single quotes('') or backticks(``) to double quotes.

    Object property names also are double quoted . For example : 
    age : 28 becomes "age":28
*/

// Some JavaScript specific object properties are skipped by JSON.stringify like :
// Function Properties(methods).
// Symbolic keys & values.
// properties that store undefined

let user = {
    sayHi() { // ignored
        alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};
console.log(JSON.stringify(user)); // OUTPUT : {} Empty Object

// Nested Objects : 
let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};
console.log(JSON.stringify(meetup));

// Excluding & Transforming : replacer
let room = {
    number: 23
};

let meetup1 = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup1 references room
};

room.occupiedBy = meetup1; // room references meetup1

console.log(JSON.stringify(meetup1,['title','participants']));
// It will only stringfy the 'title' & 'participants' properties

console.log(JSON.stringify(meetup1,['title', 'participants', 'place', 'name', 'number']));

// Using function() rather than an long array:
console.log(JSON.stringify(meetup1,function repalcer(key,value) {
    console.log(key," : ",value);
    return (key == 'occupiedBy') ? undefined : value
},2))

// toJSON : Like toString , an object may provide method toJSON

let flat={
    number : 19,
    toJSON(){
        return this.number;
    }
}

let house={
    title : "Home",
    flat
};
console.log(JSON.stringify(flat)); // 19
console.log(JSON.stringify(house));

// JSON.parse : 
let numbers = "[0, 1, 2, 3]"; // stringified array

numbers = JSON.parse(numbers);
console.log(numbers); // gives an array [0,1,2,3]

// For nested objects : 
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let newUser = JSON.parse(userData);
console.log(newUser); // Gives an object
console.log(newUser.age)

// Task 1 : 
let fruit={
    name : "Apple",
    count : 10
};

let jsonFruit=JSON.stringify(fruit);
console.log(jsonFruit)

let newFruit=JSON.parse(jsonFruit);
console.log(newFruit);  

// Task 2 : 
let newRoom = {
    number: 23
};

let newMeetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: newRoom
};
newRoom.occupiedBy = newMeetup;
newMeetup.self = newMeetup;
console.log(JSON.stringify(newMeetup,function repalcer(key,value){
    return (key!='' && value==newMeetup) ? undefined : value
},1))
