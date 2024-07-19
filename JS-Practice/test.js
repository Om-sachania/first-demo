//let arr =[{a:10},{b:20},{c:30},{d:40}];
// let val=arr.map((item)=>Object.values(item))
// console.log(val.flat(1).indexOf(30))

// let obj={
//     func1(){return 1},
//     func2(){return 2}
// };
// let ans = prompt("enter")   ;
// console.log(obj[ans]());

// class Parent{
//     constructor(name){
//         this.name = name;
//     }

//     bark(){
//         console.log(this.name);
//     }
// }

// class Child extends Parent {
//     constructor(name,id){
//         super(name)
//         this.id =id;
//     }

//     dark(){
//         super.bark();
//         console.log(this.id);
//     }
// }

// let parent = new Parent("aman")
// let child = new Child("jay",5);
// parent.bark();
// child.dark();

// class Animal{
//     constructor(name,voice){
//         this.name=name;
//         this.voice= voice;
//     }

//     speak(){
//         console.log(this.name);
//     }

//     sound(){
//         console.log(this.voice);
//     }
// }

// class Cat extends Animal{
//     constructor(name,voice,id){
//         super(name,voice);
//         this.id=id;
//     }

//     showDetails(){
//         console.log(this.id);
//     }

//     childSound(){
//         super.speak();
//         super.sound();
//     }
// }

// let pet = new Cat("abc","Meow",2);
// pet.showDetails();
// pet.childSound()

// let promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Task is completed!");
//         resolve();
//     },2000);
// })

// promiseOne.then(function(){
//     console.log("Promise 1 Consumed!!");
// })

// // Data consumption in promise :

// let promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({userName : "John123", userId:856});
//     },1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// // Returning specific values from the promise :

// let promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({name:"Maria",password : "abc123"});
//         }else{
//             reject('Error : Something Went Wrong');
//         }
//     },1000);
// })

// promiseFour
// .then(function(employee){
//     console.log(employee);
//     return employee.name;
// })
// .then(function(name){
//     console.log(name);
// })
// .catch(function(error){
//     console.log(error);
// })

// // Using Async await function in Promise : 
// let promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({name:"Peter",password : "abc123"});
//         }else{
//             reject('Error : Peter Went Wrong');
//         }
//     },1000);
// })

// async function promiseFiveConsumed(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// promiseFiveConsumed();

function delayHello(){
    return new Promise(function (resolve,reject){
        setTimeout(()=>{
            resolve("Hello !! 0");
        },2000);
    });
}

function delayHello1(){
    return new Promise(function (resolve,reject){
        setTimeout(()=>{
            resolve("Hello !! 1");
        },2000);
    });
}

// delayHello()
// .then(response => {
//     delayHello1().then(value =>{
//         console.log(value);
//     })
//     console.log(response);
// })

delayHello()
.then((value)=>{
    console.log(value);
    return delayHello1()
})
.then((value)=>{
    console.log(value);
})

function addString(){
    return new Promise((resolve,reject)=>{
        let str ="Num : "
        resolve(str);
    })
}
function hello(str){
    //console.log(str);
    return str + "1234";
}

addString()
.then(hello)
.then(val => console.log(val));