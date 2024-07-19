// Writing billion in JavaScript (BASIC METHOD):
    //let billion=1000000000;
    //console.log(billion);

// Using UnderScore (_) to write billion : 

let billion=1_000_000_000;
console.log(billion);

// Using (e) to write billion :

let a=1e9; // It Literally means : 1 and 9 zeroes ;
console.log(a);

let b=7.3e9
console.log(b); // It Literally means : 7.3 billons(7_300_000_000) ;

/*
    1e3 === 1*1000 // e3 means *1000
    1.23e6 === 1.23 * 1000000 // e6 means *1000000
*/

// Now writing 1 micro second(1-millionth of a second)
// BASIC METHOD : 

let mcs=0.000001;

// Using e : 

let x=1e-6; // five zeroes to the left from 1

/*
    1e-3 === 1/1000; //0.001
    1.23e-6 === 1.23/1000000 // 0.00000123
*/

// ROUNDING OFF THE NUMBERS : 
console.log(Math.floor(4.2)); // It ROUNDS DOWN : (4.2) becomes 4
console.log(Math.floor(-4.2)); // It ROUNDS DOWN : (-4.2) becomes -5

console.log(Math.ceil(2.1)); // It ROUNDS UP : (2.1) becomes 3
console.log(Math.ceil(-2.1)); // It ROUNDS UP : (-2.1) becomes -2

console.log(Math.round(2.1)); // It ROUNDS to the nearest integer : (2.1) becomes 2
console.log(Math.round(2.6)); // It ROUNDS to the nearest integer : (2.6) becomes 3
console.log(Math.round(2.5)); // It ROUNDS to the nearest integer : (2.5) becomes 3 

console.log(Math.trunc(8.1)); // It removes anything after the decimal point[.] : (8.1) becomes 8

// Rounding off to certain digits after the decimal point(.)

// Suppose we have 1.2345 and i want to round it off till 2 digits after the decimal point ==> (1.2345) =(1.23)

// First way :
    let num=1.2345;
    console.log(Math.round(num*100) / 100);
    /*
        The above example works like this : 
            (num*100) == 1.2345*100 => 123.45
            (Math.round(num*100)) == Math.round(123.45) => 123
            (Math.round(num*100) / 100) == 123/100 => 1.23
    */
// Second Way : using toFixed method 

// It rounds up to the n digits after the point and returns the result in form of STRING

num=26.1642;
console.log(num.toFixed(1)) // It rounds off to nearst integer OUTPUT [26.2]

// IMPRECISE CALCULATIONS : 

/*
    As Per IEEE-754 a number is represented is 64 bit format 
        64 bits : 
            52 bits : Storing a number
            11 bits : Position of decimal point
            1 bit : Sign
*/

console.log(1e500); // Infinity

// A Strange Thing : 

console.log(0.1 + 0.2 == 0.3); // It will be FALSE

// Reason of the above statement to be FALSE is that :

console.log(0.1 + 0.2); // 0.30000000000000004

// To solve this problem :

let sum=(0.1+0.2);
console.log(sum.toFixed(2)); // But this will give us a string 

// Use Unary Operator(+) to convert it to number :
console.log(+sum.toFixed(2));

// TESTS : ISFINITE AND ISNAN

    // isNaN(value) : It converts the arguments to a number and tests it  
    console.log(isNaN(NaN)) // true
    console.log(isNaN("str")) // true

    // Using the '===' operator :
    console.log(NaN === NaN); // false : As NaN is a special value so it does not equals anything

    // isFinite(value) : It converts it arguments to a number and returns true if it's a regular number
    console.log(isFinite("45")); // true
    console.log(isFinite("str")); // false because it is a special value : NaN
    console.log(isFinite(Infinity)); // false because it is a special value : Infinity

// parseInt and parseFloat : 

console.log(+"100px"); // Output : NaN

// parseInt(value) it extracts INTEGER value from the string and returns it 
// parseFloat(value) it extracts FLOATING value from the string and returns it

console.log(parseInt("100px")); // Output : 100
console.log(parseFloat("12.3em")); // Output : 12.3
console.log(parseInt("11.3")); // Output : 11 only the integer part is returned
console.log(parseInt("10.4.6")); // Output : 10.4 stops reading when second point(.) occurs

// A Situation when the parseInt/parseFloat will return NaN :
console.log(parseInt('a145')); // Output : NaN   When an alphabet or non-numeric value occurs it stops working

// Math.random() FUNCTION : Returns a value between 0 to 1 (not including 1)
console.log(Math.random());

// Math.max(values) and Math.min(values) : Returns the greatest and smallest number of arguments 
console.log(Math.max(1,-3,7,5)); // Output : 7
console.log(Math.min(1,-3,7,5)); // Output : -3 

// Task 1 :
/*
    let num1= prompt("Enter num1 : ");
    let num2= prompt("Enter num2 : ");

    let ans= alert(parseInt(num1) + parseInt(num2));
*/
// Task 2 :
/*
function readNumber() {
    let z;
    do {
        z= prompt("Enter a number : ");
    } while ( !isFinite(z));
    if(z === null || z === "")
        {
            return null;
        }
    return +z;
}

alert(`Value : ${readNumber()}`);
*/

// Task 3 :

function random(min,max) {
    console.log( Math.round(min+ Math.random() *(max-min)));
}

(random(1,5));
(random(1,5));
(random(1,5));