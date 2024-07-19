let name={
    firstName : "John",
    lastName : "Attinkson",
};

let printFullName =function (country) {
    console.log(this.firstName + " " + this.lastName," from",country);
}

let name2={
    firstName : "Finn",
    lastName : "Allen"
};

printFullName.call(name,"USA")
printFullName.call(name2,"New Zealand");

// Apply Method : 
    // The only difference is that the arguments are passed in arrayList
printFullName.apply(name,["Australia"]);

// Bind Method : 
    // It returns a function which can be invoked or called later.
let myName=printFullName.bind(name2,"South Africa");
myName();
