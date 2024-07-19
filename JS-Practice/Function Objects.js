// Accessing a function's name : 
function sayHi() {
    console.log("Hii!!!");
}
console.log(sayHi.name); // OUTPUT : sayHi

// Object methods also has names : 
let user={
    sayHi(){

    },
    sayBye : function(){

    }
};
console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye

// Incase of no name it returns empty string : 
let arr=[function (){}];
console.log(arr[0].name) // Empty String

// Length property : It returns the number of parameters in a function 
function f1(a){};
function f2(a,b){};
console.log("Length of f1 : ",f1.length);
console.log("Length of f2 : ",f2.length);

// Custom Property : We can add properties of our own 
function hello() {
    console.log("HELLO!!");
    hello.counter++;
}
hello.counter=0;

hello();
hello();
hello();
console.log(`Called ${hello.counter} times`);

// Using Closures
function makeCounter() {
    function counter() {
        return counter.count++;
    };
    counter.count = 0;
    return counter;
}

let counter = makeCounter();
console.log( counter() ); // 0
console.log( counter() ); // 1

// Named Function Expression : 
let sayHello=function(who){
    console.log(`Hello , ${who}`);
}
sayHello("john");

// Task 1 : 
function updateCounter(){
    let count=0;
    function counter() {
        return count++;
    }
    counter.set = value => count=value;
    counter.decrease = () => count--;

    return counter;
}

let newCounter= updateCounter();
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter.set(85));
// console.log(newCounter.decrease());
// console.log(newCounter.decrease());

//
function sum(a) {

let currentSum = a;
function f(b) {
    currentSum += b;
    //console.log(currentSum);
    return f;
}
return f;
}
sum(5)(4);
console.log(sum(3)(2)(1));
console.log(sum(-2)(4));