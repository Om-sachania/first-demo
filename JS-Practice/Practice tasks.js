/*
// Given an array of numbers, filter out all numbers that are less than 5 
    and then map the remaining numbers to their squares.

let num=[1,4,8,9,3,7,6,5,2,7,10];

let numLessThanFive=num.filter((item)=>item<5);
console.log(numLessThanFive);

let square=num.filter((item)=>item>5).map((item)=>item*item);
console.log(square);
*/

/*
// Write a function that takes an array of strings and returns the total number 
    of characters across all strings. Then, sort the original array based on the 
    length of each string (shortest to longest).

let words=["Apple","Cow","Orange","Ball","Waterfall"];

let totalChar=words.map((item)=>item.length).reduce((acc,curr)=>acc+curr,0);
console.log(totalChar);

let sortArr=words.sort((a,b)=>a.length-b.length);
console.log(sortArr);
*/

/*
// Given an array of objects representing students (each object has properties 
    name and age), find the student with the highest age using the reduce method. 
    After finding this student, update their age to be 1 year older.

let students =[
    {
        name : "Harry",
        age : 21
    },
    {
        name : "John",
        age : 19
    },
    {
        name : "Garry",
        age : 17
    },
    {
        name : "Mickey",
        age : 20
    },
    {
        name : "Walton",
        age : 18
    }
];

let ages=students.map((item)=>item.age).reduce((max,curr)=>{
    if (max<curr) {
        max=curr
    }
    return max;
});

console.log(ages);
students.filter((x,i)=>{
    if (students[i].age == ages) {
        students[i].age = 1;
    }
})
console.log(students);
*/

let obj = {
    a: [{x:10}, {x:20}],
    b: [{x:30}, {x:40}],
    c: [{x:50}, {x:60}],
    d: [{x:70}, {x:80}],
    e: [{x:90}, {x:100}],
    f: [{x:110}, {x:120}],
}

// Solution 1 : not much recommended
/*
    let arr=[];
    for (const key in obj) {
        arr.push(obj[key]);
    }
    arr=arr.flat();
    let x=[];
    for (let i = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
                x.push(arr[i][key]);
            }
        }
    console.log(x.indexOf(80));
*/

// Solution 2 : A better solution 
let arr=[];
    for (const key in obj) {
        arr.push(obj[key]);
    }
    arr=arr.flat();
    for(let i = 0; i< arr.length;i++){
        if(arr[i].x == 80){
            console.log(i);
        }
    }

// Solution 3 : One line solution (Short Cut Trick)
/*
let arr=[];
    for (const key in obj) {
        arr.push(obj[key]);
    }
    arr=arr.flat();
console.log(arr.findIndex((y) => y.x == 80));
*/

// let arr=[
//     [1,2,3,4],
//     [3,4,5,6],
//     [3,7,8,9]
// ];
// let num=arr.flat(1);
// num.sort((a,b)=>a-b);
// let count=1,max=0,element;

// for (let i = 0; i < num.length; i++) {
//     if(num[i] == num[i+1]){
//         count++;
//     }
//     else{
//         count=1;
//     }
//     if (count>max) {
//         max=count;
//         element=[i];
//     }
// }

// console.log(element);

/*
let arr=[1,2,3,4,5];

function printTriangle(A,n)
    {
        if(n<1){
            return; 
        }
        let temp = new Array(n - 1);
        for (let i = 0; i < n - 1; i++)
        {
            let x = A[i] + A[i + 1];
            temp[i] = x;
        }
        //console.log(temp); // 1. temp=[3,5,7,9] //
        printTriangle(temp, n - 1);

        if(n==1){
            console.log(A);
        }
    }
    printTriangle(arr,5);
*/

/*
// Given an array of transactions (objects with properties type and amount), 
    use reduce to create an object that summarizes the total amount for each 
    transaction type (income and expense).

let transactions =[
    {
        type : "income",
        amount : 1000
    },
    {
        type : "expense",
        amount : 500
    },
    {
        type : "income",
        amount : 5000
    },
    {
        type : "expense",
        amount : 2000
    }
];

let sum=transactions.reduce((acc,curr)=>{
    if(curr.type == "income"){
        acc.income=(acc.income || 0) + curr.amount;
    }
    else if(curr.type == "expense"){
        acc.expense=(acc.expense || 0) + curr.amount;
    }
    return acc;
},{})
console.log(sum);

*/
let books=[
    {
        title: "cab",
        author: "Harper Lee",
    },
    {
        title: "zab",
        author: "George Orwell",
    },
    {
        title: "abc",
        author: "F. Scott Fitzgerald"
    }
];

function compare_to_sort(x, y) {
    // Check if the title of book x is less than the title of book y
    if (x.title < y.title) return -1;
    // Check if the title of book x is greater than the title of book y
    if (x.title > y.title) return 1;
    // If titles are equal, return 0
    return 0;
}
  // Output the sorted library array based on the compare_to_sort function
console.log(books.sort(compare_to_sort));

/* 
    Given an array of objects representing orders 
    (each object contains orderId, customerId, and amount properties), 
    write a function that groups orders by customerId and calculates the total 
    amount spent by each customer.


let orders=[
    {
        orderId : 1,
        customerId : 1,
        amount : 200
    },
    {
        orderId : 2,
        customerId : 2,
        amount : 400
    },
    {
        orderId : 3,
        customerId : 1,
        amount : 500
    },
    {
        orderId : 4,
        customerId : 2,
        amount : 100
    },
    {
        orderId : 5,
        customerId : 1,
        amount : 300
    }
];

let obj = {}
orders.forEach(v => {
    if(obj[v.customerId]) {
        obj[v.customerId] += v.amount
    }else {
        obj[v.customerId] = v.amount
    }
});
console.log(obj);
*/

/*
Implement a function that finds a specific object in an array of objects 
representing employees (each object has id, name, and department properties) 
based on id and updates its department property to a new value.

let employee =[
    {
        Id : 101,
        name : "John",
        Dept : "IT"
    },
    {
        Id : 102,
        name : "Danny",
        Dept : "HR"
    },
    {
        Id : 103,
        name : "Micheal",
        Dept : "Logistics"
    },
    {
        Id : 104,
        name : "Willam",
        Dept : "Transport"
    }
];

function findEmployee(id) {
    for (const iterator of employee) {
        if(iterator.Id==id){
            console.log(iterator.name);
            iterator.Dept="Transport";
        }
    }
}
console.log(employee);
findEmployee(102);
console.log(employee);
*/

// let words=["Apple","Cow","Orange","Ball","Waterfall"];
// let str=words.reduce((acc,curr)=>{
//     return acc+','+curr;
// })
// console.log(str);

// let num=12;
// function isPrime(num) {
//     if(num<=1){
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num%i==0) {
//             return false;
//         }
//         return true;
//     }
// }
// let ans=isPrime(num);

// if (ans == true) {
//     console.log(`${num} is a prime number`);
// } else {
//     console.log(`${num} is not a prime number`);
// }