// Property Flags : Other than "value" there are 3 special attributes :-
    // 1. Writable : if TRUE, the value can be changed other wise it is read-only
    // 2. Enumerable : if TRUE, then listed in loops, otherwise not
    // 3. Configurable : if TRUE, the property can be deleted & modified otherwise not

// Description of a Property : 
let user = {
    name : "David"
};

let description = Object.getOwnPropertyDescriptor(user,'name'); // It returns an object
console.log(description); // It shows the properties of NAME property in USER object
/* 
    NOTE : When we create a 'simple/normal' property the property flags are by 
            default TRUE.
*/


// Defining a Property (CHANGING A FLAG) : 
let fruit={};
Object.defineProperty(fruit,"name",{
    value : "Apple",
});
/*
    When we create a property using "defineProperty" then if the property exists 
    it UPDATES the FLAGS. Otherwise if property does not exists then it is created 
    with given value and flags , if FLAGS are not mentioned then flags are assumed
    to be FALSE.
*/
let desc=Object.getOwnPropertyDescriptor(fruit,'name');
console.log(JSON.stringify(desc,null,2));

// Non-Writable (You cannot change/reassign the value): 
Object.defineProperty(user,'name',{
    writable : false
});

user.name="John"; // Error : cannot change the name as writable is false
console.log(user.name) // David (As writable is FALSE)

// Non-enumerable : 
let newUser={
    name : "Emily",
    toString(){
        return this.name;
    }
};

for (const key in newUser) {
    console.log("BEFORE : ",key) // name , toString
}

Object.defineProperty(newUser,"toString",{
    enumerable : false
});

for (const key in newUser) {
    console.log("AFTER : ",key) // name
}

// Non-Configurable : 
Object.defineProperty(newUser,"name",{
    configurable : false
})

newUser.name="Danny";
delete newUser.name; // Not Possible!!
console.log(newUser);

// Sealing an Object Globally : 

    // Object.preventExtensions(obj) : Does not allow addtion of new property
    Object.preventExtensions(newUser);
    newUser.age=24;
    console.log(newUser);
    
    // Obeject.seal(obj) : Does not allow adding/removing of properties. 
    // It sets configurable : false. for all properties

    // Object.freeze(obj) : Sets configurable : false & writable : false
    Object.freeze(user);

    // Object.isExtensible(obj) : Returns FALSE if adding properties is not allowed
    // Otherwise it returns TRUE.
    console.log(Object.isExtensible(user));

    // Object.isSealed(obj) : Returns TRUE , if adding/removing properties is not allowed
    console.log(Object.isSealed(user));