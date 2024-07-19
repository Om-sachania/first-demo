// Array Destructing : 
let arr=["John","Smith"];

let [firstName,lastName]=arr;
console.log(firstName);
console.log(lastName); 

// Ignoring Elements using commas(,) :
let[surname,,title]=["Julius","Sears","Perry"];
console.log(title); // Perry.

//It works with iterable items (RIGHT side) : 
let [a,b,c]="abc";  
console.log(a);

// We can use ANYTHING on LEFT side : 
let user={};
[user.name,user.surname]="Larry Bird".split(' ');
console.log(user);

// Looping with.entries()
for (const [key,value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}

// Swapping tricks using the destructing assignment : 
let guest = "Jane";
let admin = "Pete";
[guest,admin]=[admin,guest];
console.log("Guest : ",guest); // Pete
console.log("Admin : ",admin); // Jane

// Using REST Operator(...rest) : 
let [name1,name2,...rest]=["David","Mark","Indus","Emily"];
console.log(name1);
console.log(name2);
console.log(rest); // Rest is array which stores the remaining items.
// Above rest statement gives output : ['Indus','Emily']
// WE CAN USE ANY OTHER NAME INSTEAD OF REST.

// Default Values : 
let [aName,bName]=[];
console.log(aName); // undefined (No Errors Found);

let [newName="Fin",oldName="Yatch"]=["King"];
console.log(newName); // King (Taken from array)
console.log(oldName); // Yatch (Default Value)

// Object Destructing : 

let options = {
    head : "Menu",
    height : 100,
    width : 200
};
let {head,height,width}=options;
console.log(head); // It works like : head = options.head
console.log(height); // It works like : head = options.height
console.log(width); // It works like : head = options.width

// Ww can assign object properties to a variable also : 
let {width : w,height : h}=options;
console.log(w); // 200
console.log(h); // 100

// The colon (:) shows what : goes where 
// In above width goes to w and height goes to h

// Rest pattern in objects : 
let fruit={
    name : "orange",
    price : 50,
    weight : 2
};

let {name,...details}=fruit
console.log(name);
console.log(details.price); // 50
console.log(details.weight); // 2

// Nested Destructing : 
let vegetables={
    size : {
        weight : 5,
        height : 10
    },
    items : ["Tomato","Onion"],
    extra : true
};
let {
    size :{
        weight,
        height :s
    },
    items : [item1,item2],
}=vegetables;

console.log(weight);
console.log(s);
console.log(item1);
console.log(item2);

// Task 1 : 
let newUser={
    name : "Alice",
    years : 25
};
let {name:userName,years : age,isAdmin=false}=newUser;
console.log(userName);
console.log(age);
console.log(isAdmin);

let salaries={  
    "John":100,
    "Pete":800,
    "Mary":300
};
function topSalary(salaries) {
    let maxSalary=0;
    let maxName=null;
    for (const [name,salary] of Object.entries(salaries)) {
        if(salary>maxSalary){
            maxSalary=salary;
            maxName=name
        }
    }
    return maxName;
}
let employeeName=topSalary(salaries);
console.log(employeeName);