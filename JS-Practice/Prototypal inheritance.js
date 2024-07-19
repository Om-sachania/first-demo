// [[Prototype]] : It is special hidden property in Objects which is either null
// or reference another object. The object is known as "a prototype".

let animal = {
    eats : true,
    walk(){
        console.log(`Animal walk`)
    }
};

let rabbit = {
    jumps : true
};

rabbit.__proto__= animal; // Sets rabbit.[[Prototype]] = animal
console.log(rabbit.jumps); // true
console.log(rabbit.eats); // true
rabbit.walk();

/* When console.log() tries to read the property rabbit.eats and it is not in 
    rabbit. So JavaScript follows the [[Prototype]] reference and finds it in animal

THEREFORE we can say that "animal is the prototype of rabbit"
*/

// All the properties & methods of animal gets inherited in rabbit

// Prototype chain : 
let longEar = {
    earLength : 10,
    __proto__ : rabbit
};

longEar.walk();
console.log(longEar.jumps); // From rabbit

// Using accessor properties with __proto__
let user={
    name : "John",
    surname : "Smith",

    set fullName(value){
        [this.name,this.surname]=value.split(" ");
    },

    get fullName(){
        return `${this.name} ${this.surname}`;
    }
};

let admin={
    __proto__ : user,
    isAdmin : true
};

console.log(admin.fullName);
admin.fullName = "Sarah Jordan";

console.log(admin.fullName);
console.log(user.fullName);

// Value of THIS : 
let animal1 = {
    walk() {
        if (!this.isSleeping) {
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit1 = {
    name: "White Rabbit",
    __proto__: animal1
};

  // modifies rabbit.isSleeping
rabbit1.sleep();
console.log(rabbit1.isSleeping);
console.log(animal1.isSleeping);

// For-in loop : 
console.log(Object.keys(rabbit)); // Object.keys() only returns own keys

for (const key in rabbit) {
    console.log(key); // jumps, eats, walk
}

// If we want to differentiate the properties that which are its OWN & which are 
// INHERITED then we can use obj.hasOwnProperty(key).

for (const key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key);

    if(isOwn){
        console.log(`Our Prop : ${key}`);
    }
    else{
        console.log(`Inherited Prop : ${key}`);
    }
}

// TASK : (IMPORTANT)
/*
    let hamster = {
        stomach: [],
        eat(food) {
            this.stomach.push(food);
        }
    };

    let speedy = {
        __proto__: hamster
    };

    let lazy = {
        __proto__: hamster
    };

    // This one found the food
    speedy.eat("apple");
    console.log( speedy.stomach ); // apple

    // This one also has it, why? fix please.
    console.log( lazy.stomach ); // apple

*/

// SOLUTION :

let hamster = {
    stomach: [],
    eat(food) {
        // CHANGE IS HERE : this.stomach instead of this.stomach.push
        this.stomach=[food];
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple