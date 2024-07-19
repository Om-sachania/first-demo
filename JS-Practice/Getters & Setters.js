// Getters : Denoted by get
    // If we want a fullName property which displays "Danny Smith" : 
    let user ={
        name : "Danny",
        surname : "Smith",

        get fullName(){
            return `${this.name} ${this.surname}`;
        }
    };
    console.log(user.fullName) // Danny Smith 

    // You cannot update it (as it is only getter) : 
    user.fullName="Hello";
    console.log(user.fullName); // Not Updated

// Setter : Denoted by set 
let employee = {
    name : "Sarah",
    id : 74,

    get userName(){
        return `${this.name} ${this.id}`
    },

    set userName(value){
        [this.name,this.id]= value.split(" ");
    }
}
console.log(employee.userName);
employee.userName="Larry 33";
console.log("Updated Name : ",employee.name);
console.log("Updated Id : ",employee.id);
for (const key in employee) {
    console.log(key);
}

/* NOTE : A Property can be either an ACCESSOR(has get/set methods) or a 
        DATA PROPERTY(has a value) not both.

// This will throw an error : 

Object.defineProperty({}, 'prop', {
    get() {
        return 1
    },

    value: 2
});
*/

// Smarter getters/setters : 
    // Example : If you do not want too names then we can setter 'name' and keep 
    // value in a separate property '_name'.

    let student ={
        get name(){
            return this._name;
        },

        set name(value){
            if(value.length<4){
                console.log("Name is too short, need atleast 4 characters");
                return;
            }
            this._name=value;
        }
    };

    student.name="Amy"; // Name is too short, need atleast 4 characters.
    student.name="Walter"; // It Works!!
    console.log(student.name);

// Using for Compatibility : 
    // function User(name,age){
    //     this.name=name;
    //     this.age=age;
    // }

    // let john=new User("John",29);
    // console.log(john.age);

    // function User(name,birthday){
    //     this.name=name;
    //     this.birthday=birthday;
    // }

    
    //let ricky=new User("Ricky",new Date(1991,7,8));
    function User(name, birthday) {
        this.name = name;
        this.birthday = birthday;
        // age is calculated from the current date and birthday
        Object.defineProperty(this, "age", {
            get() {
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear();
            }
        });
    }
    let david = new User("David", new Date(1992, 6, 10));

    console.log(david.name);
    console.log(david.birthday);
    console.log(david.age);