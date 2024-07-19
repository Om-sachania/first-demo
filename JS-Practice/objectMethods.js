// Method in Object : When a function is a property of the object it is called METHOD.
/*
    let user = {
        name : "David",
        age : 55
    };

    user.sayHi = function() { // Function Expression
        console.log("Hello");
    }

    user.sayHi(); // sayHi is a method.
*/
// Another Method : Pre-declaring a function.

let fruit = {};

function helloFruit() {
    console.log("Hii");
}

fruit.helloFruit=helloFruit;

fruit.helloFruit();

// Method Short-Hand 

let car ={
    hello() { // No need to write 'fuction()' keyword
        console.log("Yo!!!"); 
    }
};

// This Keyword in Method : 
/*
let user = {
    name: "Willam",
    age : 45,
    sayHi() {
        console.log(this.name); // "this" means the current object
    }
};
user.sayHi();
*/

// Without THIS keyword : 

let user = {
    name: "Willam",
    age : 45,
    sayHi() {
        console.log(user.name);
    }
};

user.sayHi();

// When we copy the user to another variable then it doesn't work : 
/*
    let employee = {
        name: "John",
        age : 45,
        sayHello() {
            console.log(employee.name);
        }
    };

    let admin=employee;
    employee=null

    admin.sayHello(); // This will throw an error
*/
// But when we use THIS keyword in the above code then : 

let employee = {
    name: "John",
    age : 45,
    sayHello() {
        console.log(this.name); // The only difference is THIS is used instead of employee.
    }
};

let admin=employee;
employee=null

admin.sayHello(); // It works OUTPUT[John]

// Advantage of using THIS : 

let square ={name : "Square"};
let rect ={name : "Rectangle"};

function nameCall() {
    console.log(this.name);
}

square.func=nameCall;
rect.func=nameCall;

square.func(); // Square (THIS == Square)
rect.func();  // Rectangle (THIS == Rectangle)
