class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs at a speed of ${this.speed}`)
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still.`)
    }
}

class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} hides!!`);
    }
}

let rabbit = new Rabbit("Bunny");
console.log(rabbit.name); // Bunny
rabbit.run(15); // Bunny runs at a speed of 15
rabbit.hide(); // Bunny hides!!
rabbit.stop(); // Bunny stands still

// Overiding a method : 

class Camel extends Animal {
    stop(){
        super.stop(); // It calls the parent(Animal)'s method
    }
}

let camel = new Camel("Uuth");
camel.stop(); // camel's stop method which calls parents stop method

// Arrow function does not have super : 
class Dog extends Animal {
    stop(){
        setTimeout(()=>super.stop(),1000); // It takes stop from outer func.
        //setTimeout(function(){super.stop()},1000) // This gives error 
    }
}

let dog = new Dog("Tommy");
dog.stop()

// Overriding Constructor : 

/*
    if a class extends another class and has no constructor, then the following 
    “empty” constructor is generated.

    class Rabbit extends Animal {
    // generated for extending classes without own constructors
        constructor(...args) {
            super(...args);
        }
    }
    As we can see that it calls its parents constructor as it does not have its 
    own.
*/

    // Now creating an own constructor :
class Cat extends Animal{
    constructor(name,earLength){
        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
    }
}

//let cat = new Cat("Meow",10); // This will get an ERROR!!!!

/*
    To use this cosntructor the child child constuctor should first call the parent
    class cosntructor.

    This is because : 
        The child class(CAT) constructor is DERIVED constructor and it works 
        differently with the new keyword.

        When a regular function is executed with new, it creates an empty object 
        and assigns it to this.

        But when a derived constructor runs, it doesn’t do this. It expects the 
        parent constructor to do this job.
*/

// The solution is here : 

class Fish extends Animal {
    constructor(name, eyes){
        super(name);
        this.eyes=eyes;
    }
}

let fish = new Fish("Nemo",2);
console.log(fish.name);
console.log(fish.eyes);

    // Overriding class fields : A Tricky Part 
    class Vehicle {
        name = "Vehicle";
        constructor(){
            console.log(this.name);
        }
    }

    class Car extends Vehicle {
        name = "Car";
    }

    new Vehicle(); // Vehicle
    new Car(); // Vehicle 

    /* 
    In our case, Car is the derived class. There’s no constructor() in it. As said 
    previously, that’s the same as if there was an empty constructor with only 
    super(...args).
    
    So, new Car() calls super(), thus executing the parent constructor, and 
    (per the rule for derived classes) only after that its class fields are 
    initialized. At the time of the parent constructor execution, there are no 
    Car class fields yet, that’s why Vehicle fields are used.
    */

// Task 
class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock{
    constructor(options){
        super(options);
        let {precision = 1000}=options;
        this.precision = precision
    }

    start(){
        this.render();
        this.timer= setInterval(()=> this.render(),this.precision)
    }
}

let exClock = new ExtendedClock({template : 'h:m:s'})
//exClock.start();