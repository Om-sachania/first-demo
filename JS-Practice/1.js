// let arr=[{name : "hi"},{name : "ab"},{name : "hi"},{name : "ef"}];
// let str="abcdef";
// console.log(arr.findLastIndex((x)=>x.name==""))

// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
// ];

// function isCherries(fruit) {
//     return fruit.quantity > 15;
// }

// console.log(inventory.find(isCherries));

const array1 = [1,2, 3, 4];
let keys=array1.keys()
for (const iterator of keys) {
    console.log(iterator);
}
console.log(Object.keys(array1));

array1.map((x)=>[x*2])
// Output : [[2],[4],[6],[8]]

array1.flatMap((x)=>[x*2])
// Output : [2,4,6,8]

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false

arr.push(array1);
console.log(arr.length);

const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
};
Array.prototype.push.call(arrayLike, "helo", "hii");
console.log(arrayLike);

let names=["Garry"];
let newName=names.reduce((acc,curr)=>acc);
console.log(newName);

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
(accumulator, currentValue) => {return accumulator.x + currentValue.x}
);
console.log(sum);

//const array1 = [1,2, 3, 4]
console.log(array1.slice(-5,2));

const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
};
const cat1 = {
    name : 'Kitty',
    breed : 'Termic',
    color : 'white',
};
function Greeting(name,breed) {
    this.name=name,
    this.breed=breed,
    this.greeting=function(){
        console.log(`Hello,said ${name} the ${breed}.`)
    }
}

let bertie = new Greeting(cat.name,cat.breed);
bertie.greeting();

let kitty = new Greeting(cat1.name,cat1.breed);
kitty.greeting();

// let myArray=["Cat","Dog","Birds"]
// myArray[0]="Tiger";
// myArray[1]="Crocodile";
// myArray.unshift("Bear");
// console.log(myArray);

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
let myArray = myString.split("+");
// console.log(myArray);
// let arrayLength = myArray.length;
// let lastItem = myArray.at(arrayLength-1)
// console.log(arrayLength);
// console.log(lastItem);

myArray.pop();
myArray.push("Peter","Bob");
console.log(myArray);
let newArray=myArray.map((item,index)=>(item+"("+index+")"));
let myNewString=newArray.join("-");

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
let Eagle=birds.indexOf("Eagles");
birds.splice(Eagle,1);
let eBirds=birds.filter((item)=>item.startsWith("E"));
console.log(eBirds);

function marry(man,woman) {
    man.wife=woman;
    woman.husband=man;
    return{
        father : man,
        mother : woman
    }
}
let family=marry({
    name : "David",
    },
    {
        name : "Emily"
    }
);
family=null;   
//console.log(husband.name)

function User(name){
    this.name =name,
    this.isAdmin = false
}
let Jack=new User("Jack");
console.log(Jack.name);
console.log(Jack.isAdmin);

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

function Accumulator(startingValue){
    this.value=startingValue;
    this.read=function(){
        this.num=+prompt("Enter the number : ");
        this.value+=this.num;
    };
}

let accumulator=new Accumulator(2);
console.log(accumulator.value); 
//accumulator.read();
//accumulator.read();
console.log(accumulator.value)

let id =Symbol("id");
//alert(id.toString());
console.log(id);
console.log(id.description);

let car={
    name : "Abc"
};

car[id]=3;
console.log(car);

let num=Number(car);
console.log(num);