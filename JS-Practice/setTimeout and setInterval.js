// SetTimeOut : 
function sayHi() {
    console.log('Hiii');
}

//setTimeout(sayHi, 5000);

// Passing arguments to setTimeout :
function sayHello(phrase, who) {
    console.log(`${phrase}, ${who}`);
}

setTimeout(sayHi, 5000);
setTimeout(sayHello,3000,"Hello","Mark");

// This also works : 
setTimeout("console.log('This is an string')",4000);
/*
    Basically in the above setTimeout statement if the first argument is a string then JavaScript 
    creates an function
*/
clearTimeout();

// Nested setTimeout : 
// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimeout(tick, 2000); // (*)
// }, 2000);
// console.log(timerId);