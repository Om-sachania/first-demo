let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

// Finding the Total Salary of Company(The above Object) : 
function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev,curr)=>prev+curr.salary,0);
    } else {
        let sum = 0;
        for (const subDept of Object.values(department)) {
            sum+=sumSalaries(subDept);
        }
        return sum;
    }
}
console.log(sumSalaries(company));

// Linked List : 
let list={
    value : 1,
    next : {
        value : 2,
        next : {
            value : 3,
            next : {
                value : 4,
                next : null 
            }
        }
    }
};

/* ALTERNATIVE WAY OF CREATING LIST : 
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
*/

// Spilting the list : 
let secondList = list.next.next;
list.next.next= null;

console.log("First List : ",list);
console.log("Second List : ",secondList);

//Joining the List : 
list.next.next=secondList;
console.log("Updated List : ",list)

// Adding Item at the begining (Index 0)
list={value : "New Item",next :list}
console.log("Prepended value : ",list)

// Removing the value from middle (block with VALUE = 2)
list.next.next=list.next.next.next;
console.log("Removed value : ",list)

// Task : 1

// Solution : 1 (Using for-loop)
function sumTo(n) {
    let sum=0;
    for (let i = 1; i <= n; i++) {
        sum+=i
    }
    return sum;
}
console.log("For-Loop : ",sumTo(4));

// Solution : 2 (Using Recursion)
function sumTo(n) {
    let sum=0;
    if (n==1) {
        return n;
    } 
    return sum=n+sumTo(n-1);
}

console.log("Recursion : ",sumTo(8978));

// Task 2 : 
function factorial(n) {
    if (n==1) {
        return 1;
    }
    return n*factorial(n-1);
}

console.log("TASK-2 : ",factorial(4));

// Task 3 : 
function fib(n){
    return n<=1 ? n : fib(n-1)+fib(n-2);
}
console.log(fib(3));
/* ALTERNATIVE SOLUTION : 
    function fib(n) {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
*/

// Task 4 : 
let newList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list) {
    let temp =list;

    while(temp){
        console.log(temp.value)
        temp=temp.next;
    }
}
printList(newList)