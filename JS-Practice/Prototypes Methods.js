// Object.getPrototypeOf(obj) :- returns the [[Prototype]] of object.
// Object.setPrototypeOf(obj,proto) :- sets the [[Prototype]] of object to proto.

let animal = {
    eats : true
};

let rabbit = Object.create(animal); // same as {__proto__ : animal}
console.log(rabbit.eats) // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true
Object.setPrototypeOf(rabbit,{});
console.log(Object.getPrototypeOf(rabbit)); // An Empty Object ({}).

rabbit=Object.create(animal,{
    jumps : {
        value : true
    }
});

// The above line of code sets the property (jumps : true) in object rabbit.

console.log(rabbit.jumps)
console.log("Rabbit : ",rabbit) // {jumps : true}

// Cloning an Object : A better way than copying an object
let clone = Object.create(
    Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptor(rabbit)
);

console.log("Clone : ",clone); // NOTE : It does not copy/clone the additional properties (jumps) of rabbit

let obj = {};
console.log("Before Obj : ",obj);
obj=Object.create(null);
console.log("After Obj : ",obj)

// Task 1 : 
let dictionary = Object.create(null,{
    toString : {value(){return Object.keys(this).join();}}
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (const key in dictionary) {
    console.log(key);
}
console.log(dictionary)
//alert(dictionary);