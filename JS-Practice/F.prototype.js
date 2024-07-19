let animal = {
    eats : true
};

function Rabbit(name){
    this.name=name;
}

Rabbit.prototype = animal;

let bunny = new Rabbit("White Rabbit");
console.log(bunny.name);
console.log(bunny.eats);

// Default F.Prototype : 
function Bird(){

}

console.log(Bird.prototype);

// Create a object using constructor 
function Car(name){
    this.name = name;
}
let bmw = new Car("BMW");
let audi = new bmw.constructor("Audi"); 

console.log(bmw .name);
console.log(audi.name);

function Rabbit() {}
Rabbit.prototype = {
eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;
console.log( rabbit.eats ); // ?