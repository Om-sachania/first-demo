// Creating an Object : 

let user = { // an object
    name : "David", // Key : name , value : "David"
    age : 25 // Key : age , value : 25
};

//Displaying the object :

//console.log(user);

// getting the property values of the object :

//alert(user.name);
//alert(user.age);

// Adding the property in object : 

user.isAdmin=true;
//console.log(user);

// Deleting the property in object : 

delete user.isAdmin;
//console.log(user);

// Multi-word property name : 

let employee = {
    "Employee Name" : "Jerry",
    Id : 24,
    salary : 45000
};

//console.log(employee);


// Square Brackets 

    //employee."Employee Name" // This is will give an error 
    //console.log(employee["Employee Name"]); // This is an correct way to access

    let car={};

    // Basic Method of creating a multi-word key :

    car["top speed"]=300;
    //console.log(car["top speed"]);

    // Other method of creating a mullti-word key :
    /*
        let key="top speed";
        car[key]=200;

        console.log(car[key]);
    */

    // Another Use of square brackets :
    //let key=prompt("Enter what do you want to know about employee : ");
    //console.log(employee[key]);
    //console.log(employee.key); // This will give undefined  

// Computed Properties : 
/*
    let fruit=prompt("Which fruit :");

    let bag = {
        [fruit] : 10, // [fruit] will take value from the variable fruit
        //fruit : 4 // This create a new property in object & not take value from the variable fruit.
    }

    console.log(bag[fruit]); // Correct way of accessing it.
    console.log(bag.fruit); // Wrong way of accessing it. Output : undefined
*/

//Property value shorthand
/*
    function makeHuman(name,age) {
        return {
            name : name,
            age : age
        };
    }

    let human= makeHuman("Joe",42);
    console.log(human);
*/

// A better way of using it : 

function makeHuman(name,age) {
    return {
        name,
        age,
    };
}

let human= makeHuman("Willam",28);
console.log(human);

// Property name limitations :
/*
let obj ={
    for : 4,
    let : 5,
    return : 11
}

console.log(obj);
*/
// As per the above example there are no limitations in naming the properties of object.

// Property Existence test & 'in' operator
/*
    let bike = {
        name : "BMW",
        mileage : 50
    };

    console.log(bike.speed); // This will not give error [Output : undefined]

    // Using 'in' operator 

    console.log("name" in bike); // Note: "name" will give TRUE & name will give FALSE
*/

// FOR - IN Loop [USED FOR OBJECTS]
/*
    let fruit= {
        name : "apple",
        color : "red",
        weight : 1
    };

// Printing keys of fruit object : 
    for (const key in fruit) {
        console.log(key); // Output : name,color,weight
    }

// Printing values of fruit object : 
    for (const key in fruit) {
        console.log(fruit[key]); // Output : apple,red,1
    }

// Order in object : 

    let codes = {
        "49": "Germany",
        "41": "Switzerland",
        "44": "Great Britain",
        // ..,
        "1": "USA"
    };

    for (let code in codes) {
        console.log(code); // 1, 41, 44, 49
    }
// The above example(codes) shows that as the codes are integer values so the output will be in ascending order
*/

// Constructors in Objects : 


// Tasks 1 :

let admin = {};
//admin.name="John";
//admin.surname="Smith";
//admin.name="Pete";
//delete admin.name;

// Tasks 2 :

function isEmpty(obj){
    for (const key in obj) {
        return false
    }
    return true
}

console.log(isEmpty(admin));

// Task 3 :
let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130
};
let sum=0;
for (const key in salaries) {
    sum+=salaries[key];
}
console.log(sum);

// Task 4 :

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu);

function a(menu) {
    for (const key in menu) {
        if(typeof(menu[key])== 'number'){
            menu[key]*=2;
        }
    }
}

a(menu);
console.log(menu);
