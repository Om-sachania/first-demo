// Losing 'this' : When we pass object methods as callbacks then this problem occurs
let user={
    firstName : "John",
    sayHi(){
        console.log(`Hello,${this.firstName}`);
    }
};

setTimeout(user.sayHi,1000); // Hello, undefined

// Solution 1 : A Wrapper 

    setTimeout(function(){
        user.sayHi();
    },1000);

    /* A Shorter version : 
        setTimeout(() => user.sayHi(), 1000); // Hello, John!
    */

    // If we change the value before the setTimeout triggers : 
    user ={
        sayHi(){console.log("Another setTimeout")} 
    };  

    // As we saw that it changes the value so this is not okay

// Solution 2 : Bind
    // It returns an special function-like exotic object
    let fruit={
        name : "Orange"
    };

    function func() {
        console.log(this.name);
    }

    let funcFruit=func.bind(fruit);
    funcFruit();

    // Trying it with the Object Method : 
    let vehicle={
        type : "Car",
        desc(){
            console.log(`${this.type},has 4 wheels`);
        }
    };

    let description= vehicle.desc.bind(vehicle);
    description(); // Car,has 4 wheels

    vehicle={
        desc(){console.log("This car has 8 wheels")}
    };

// Partial Functions : 
    function mul(a,b) {
        return a*b;
    }

    let double = mul.bind(null,2);
    console.log(double(4)); // 8
    console.log(double(7)); // 14

