// Constructor Function : They are regular functions 
// It starts with Capital letter & It should be executed the 'new' operator

function User(name){
    this.name = name,
    this.isAdmin = false
}

let user=new User("Fisher");
console.log(user.name);
console.log(user.isAdmin);

// You can create multiple users using constructors.

/* The new User looks like : 
    function User(name) {
    // this = {};  (internally)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (internally)
}
*/

// Return from Constructors : 
    // 1. If RETURN is called with a OBJECT then that OBJECT is returned
    // 2. If RETURN is called with a PRIMITIVE then it is IGNORED.
    // 3. IN SIMPLE WORDS : return called with object it returns object in other 
    //    cases it returns this.

function BigUser(){
    this.name="John";   
    return { name : "Big Monster"};
}

console.log(new BigUser().name); // Big Monster

function SmallUser(){
    this.name="John";   
    return ;
}

console.log(new SmallUser().name); // John

// Methods In Constructors : 

function Employee(name){
    this.name=name;

    this.sayHi = function(){
        console.log(`Hiii , ${this.name}`);
    };
}

let garry = new Employee("Garry");
garry.sayHi();

// Task 1 : 
// function Calculator(){
//     this.read=function() {
//         this.a=+prompt("Enter a : ");;
//         this.b=+prompt("Enter b : ");;
//     };
//     this.sum=function(){
//         return (this.a + this.b);
//     };
//     this.multiply=function(){
//         return (this.a*this.b);
//     };
// };

// let calc=new Calculator();
// calc.read();
// console.log(`The sum is : `,calc.sum());
// console.log(`The product is : `,calc.multiply());

// Task 2 :

function Accumulator(startingValue){
    this.value=startingValue;
    this.read=function(){
        this.num=+prompt("Enter the number : ");
        this.value+=this.num;
    };
}
let accumulator=new Accumulator(2);
console.log(accumulator.value); 
accumulator.read();
accumulator.read();
console.log(accumulator.value)