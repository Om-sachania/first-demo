// Bulit-in classes like Array, Map and other are extendable also : 

class PowerArray extends Array{
    isEmpty(){
        return this.length == 0;
    }
}

let arr = new PowerArray(1,2,5,8,9);
console.log(arr.isEmpty()); // false

let filteredArr=arr.filter((item)=>item>5);
console.log(filteredArr); // It returns an PowerArray   

let num = new PowerArray();
console.log(num.isEmpty()); // true

