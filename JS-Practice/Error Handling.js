// Try & Catch : It is an type of syntax which helps to catch errors so that script
// can't dye.

// Example : 
try{
    console.log("Start of try runs");

    // .... no error code

    console.log("End of try runs!!!")
}
catch(err){
    console.log("Catch is ignored as there are no errors");
}

// As the output shows first 2 console logs only as there are no error so CATCH 
// block is ignored.

// Example of Catch block execution : 
try {
    console.log("Start of try runs");

    falkfalkmlk;

    console.log("End of try runs!!!");
} catch (err) {
    console.log("Error Handled Successfully!!!")
}

// As the above example shows that in (line : 23) there is an unexpected error so
// it is handled by the Catch block & Error Handled Successfully!!! is printed.

// Try & Catch will not work if it is syntactically wrong : 

/*
try {
    {{{{{{{{{{{{
} catch (err) {
    alert("The engine can't understand this code, it's invalid");
}
*/

try {
    setTimeout(function(){
        NOvariable 
    },1000);
} catch (err) {
    console.log("Won't Work!!")
}

// The above will not work because the function itself is executed later, when the 
// engine has already left the try...catch construct.

// To work it the try catch should be inside the function : 
setTimeout(function() {
    try {
      noSuchVariable; // try...catch handles the error!
    } catch {
        console.log( "error is caught here!" );
    }
}, 1000);

// Error Object : 
try{
    lalals;
}catch(err){
    console.log("Error Name : ",err.name); // ReferenceError
    console.log("Error Msg : ",err.message); // lalals is not defined
    console.log("Error Stack : ",err.stack); // ReferenceError: lalals is not defined
    // at http://127.0.0.1:5500/Error%20Handling.js:65:5
}

// A better example of the try & catch :n
let json ="{ Not Ideal JSON }";

try {
    let user = JSON.parse(json);
    console.log(user.name);
} catch (error) {
    console.log("Our apologies, the data has errors, we'll try to request it one more time.");
    console.log(error.name);
    console.log(error.message);
}

// Throwing our own Error : 
let person = '{"age : 25"}';
try {
    let user= JSON.parse(person);
    console.log(user);
} catch (error) {
    console.log("Doesn't Execute!!");
}

let error = new Error("USER BUILT ERROR!");
console.log("User Built Error Name :- ",error.name);
console.log("User Built Error Msg :- ",error.message);

let newJson = '{"age": 30}';
try {
    let user = JSON.parse(newJson);
    if(!user.name){
        throw new SyntaxError("Income data : no name");
    }
    console.log(user.name);
}catch (err) {
    console.log("JSON Error : "+ err.message);
}

// Main use of FINALLY Keyword : 

let a=5;
let b=6;
let sum = +a + +b;
function call(){
    try {
        console.log("The sum is : ",sum*x);
        return true;
    } catch (error) {
        console.log("Error!!")
        return false;
    }finally{
        console.log("Finally Block executed!!!");
    }
}
call();

// The above code shows the main use of FINALLY as it works after the return 
// statement inside a function. If there is no FINALLY then that line of code will
// not work.

