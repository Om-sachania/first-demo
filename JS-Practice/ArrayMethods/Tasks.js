// Task 1 : 
function camelize(str) {
    return str.split('-').map((word,index)=> index==0 ? word : word[0].toUpperCase()+word.slice(1)).join('');
}
console.log(camelize("hello-world"));
console.log(camelize("-webkit-transition"));
console.log(camelize("good-transition-done"));

// Task 2 : 
function filterRange(arr,a,b) {
    return arr.filter((item)=> item>=a && item<=b);
}
let arr1=[5,3,8,1];
let newValue=filterRange(arr1,1,4);
console.log(newValue);
console.log(arr1);

// Task 3 :
function filterRangeInPlace(arr,a,b) {
    let newArr=arr.filter(item=> item>=a && item<=b);
    arr.length=0;
    for (const i of newArr) {
        arr.push(i);
    }
}
let z=[5,3,8,1];
console.log(z);
filterRangeInPlace(z,1,4);
console.log(z); 

/* ALTERNATE SOLUTION : 
    function filterRangeInPlace(arr, a, b) {
        for (let i = 0; i < arr.length; i++) {
            let val = arr[i];
            if (val < a || val > b) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
*/

// Task 4 : 
let b=[5,2,1,-10,8];
b.sort((a,b)=>b-a);
console.log(b);

// Task 5 : 
function copySorted(arr) {
    return arr.map(item=>item).sort();
}
let lang=["HTML","JavaScript","CSS"];
let sortLang=copySorted(lang);
console.log(sortLang);
console.log(lang);
/*
    ALTERNATE SOLUTION : 
        function copySorted(arr) {
            return arr.slice().sort();
        }
*/

// Task 6 :
function Calculator(){
    let methods =[
        {name : '+' , fumc :(a+b)},
        {name : '+' , fumc :(a+b)},
    ]
    this.calculate=function(str) {
        let arr=str.split(' ');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '+') {
                console.log(+arr[i-1] + +arr[i+1]);
            }
            else if(arr[i] == '-'){

            }
        }
    }

    this.addMethod=function(name,func) {
        let arr=str.split(' ');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '+') {
                console.log(+arr[i-1] + +arr[i+1]);
            }
        }
    }
}

/*
    ALTERNATE METHOD : 
    function Calculator() {
        this.methods = {
            "-": (a, b) => a - b,
            "+": (a, b) => a + b
        };

        this.calculate = function(str) {
            let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

            if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

            return this.methods[op](a, b);
        };

        this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}
*/

// Task : 7
let john={name : "John", age : 25};
let pete={name : "Pete", age : 35};
let mary={name : "Mary", age : 20};

let userName=[john,pete,mary];
let name=userName.map(item=>item.name);
console.log(name);

// Task 8 : 
let kane={name : "Kane", surname : "Smith", id:"kane"};
let perry={name : "Perry", surname : "Hunt", id:"perry"};
let mark={name : "Mark", surname : "Key", id:"mark"};

let newUsers =[kane,perry,mark];
let userMapped=newUsers.map(item=>({
    fullName :`${item.name} ${item.surname}`,
    id : item.id
}));
console.log(userMapped);

// Task 9 : 
function sortByAge(arr){
    arr.sort((a,b) => a.age - b.age);
}

sortByAge(userName);
console.log(userName[0].name);
console.log(userName[1].name);
console.log(userName[2].name);

// Task 10 :
function getAvgAge(arr){
    return arr.reduce((prev,curr)=>prev+curr.age,0)/arr.length;
    // NOTE : prev is the result of previous valu
}
console.log(getAvgAge(userName));

// Task 11 : 
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}
console.log(groupById(newUsers));