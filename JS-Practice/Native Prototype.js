let obj={};
console.log(obj)
// alert(obj)
console.log(String.prototype)

let arr=new Array(3);
let str=(arr.join("la"));
console.log(str)

// Borrowing properties : 
let newObj ={
    0 : "Hello",
    1 : "World",
    length : 2
}; 
newObj.join=Array.prototype.join;

console.log(newObj.join(","));


// Task 1 :
Function.prototype.defer=function(ms){
    return
    
}

// function f(){
//     console.log("HIII");
// }

// f.defer(1000);

// Task 2 : 
function sum(a,b){
    console.log(a+b);
}

sum.defer(3000)(1,2);
