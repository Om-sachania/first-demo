"use strict";
// This in global space : 
    console.log(this);  // OUTPUT : window or globalObject

// This in function space :
    function a() {
        // Value of this keyword depends on strict/non-strict mode
        console.log(this);
    }
    a(); /* OUTPUT : WITHOUT "USE STRICT" :- window or globalObject
                    WITH "USE STRICT" :- undefined
    */ 

/*
    If we use strict mode : 
        console.log(this); // window,globalObject
        function a() {
            console.log(this) // undefined
        }
    
    IN NON-STRICT MODE :
        if the this keyword is undefined or null then the this keyword
        will be replaced with the globalObject   
*/

// NOW EVERTHING WOULD BE DONE IN STRICT MODE : 

    // The value of this depends on how the function is called : 
    a(); // This will give undefined
    window.a() // the object from where it is called [Here it is WINDOW]

// This inside a Object's method :

/*
    Difference between method and an function :
        when an function is an part of a OBJECT then it is called as a METHOD.
        In below example : x is an METHOD
*/
    const obj={     
        a:10,
        x:function (){
            console.log(this); // returns the obj object
            console.log(this.a); // 10
        }
    };
    obj.x();

/*
    IMPORTANT NOTE : 
        IT CHECKS WHERE IT IS LEXICALLY ENCLOSED AND THEN POINTS TO THE PARENT OBJECT :
            SO IN ABOVE CONST OBJ = this IS LEXICALLY ENCLOSED inside x 
                SO THIS WILL REFER TO x's PARENT OBJ that is obj.
            
            IN BELOW = this is LEXIICALLY ENCLOSED inside n(OBJECT) 
                SO THIS WILL REFER TO n's PAREVT OBJ that is window

*/
    let n={
        b: 20,
        z :this
    };
    
    console.log(n);

// THIS Inside an ARROW FUNCTION : 
    let person={
        a :20,
        b : ()=>{
            console.log(this);
        }
    };
    person.b(); // window object

    /*
        THIS Keyword inside an arrow function works as : 
            let person={
                a :20,
                b :this;
            };
            console.log(person.b);
    */

// THIS Keyword in nested arrow function : 
    let person2={
        a : 50,
        c : function (){
            const d = ()=>{
                console.log(this);
            }
            d();
        }
    };
    person2.c(); // returns the person2 object

    /*
        THIS Keyword inside a nested arrow function works as : 
            let person2={
                a : 50,
                c : function (){
                    console.log(this);
                }
            };
            person2.c(); // returns the person2 object
    */