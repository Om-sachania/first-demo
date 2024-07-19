// Public Properties/Methods : Can be accessed from outside the class also

class CoffeeMachine {
    waterAmount = 0;

    constructor(power){
        this.power=power;
        console.log(`Created a coffee machine ,Power : ${power}`);
    }
}

let coffeeMachine = new CoffeeMachine(50);

// Adding Water : 
coffeeMachine.waterAmount=200;
console.log(coffeeMachine.waterAmount); // 200

// Protected Properties/Methods : Can be accessed by class members and extended 
// class members . NOTE : Usually they are prefixed by UNDERSCORE(_).

class TeaMachine {
    _waterAmount = 0;

    set waterAmount(value){
        if(value<0){
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount(){
        return this._waterAmount;
    }

    constructor(power){
        this._power = power;
    }
}

let teaMachine = new TeaMachine(75);
teaMachine.waterAmount = -50;
console.log(teaMachine.waterAmount); // it will be 0 not -50

// Private Properties/Methods : They are accessed from inside the class ONLY.
// NOTE : They are prefixed with an HASHTAG(#).

class SoftDrinkMachine{
    #waterLimit = 150;

    #fixWaterAmount(value){
        if(value<0) return 0;
        if(value>this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value){
        this.#waterLimit= this.#fixWaterAmount(value);
    }
}

let softDrink = new SoftDrinkMachine();
//softDrink.#fixWaterAmount(453); // Error
