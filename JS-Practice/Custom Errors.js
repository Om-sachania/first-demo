// Creating our Error and Extending it from ERROR class : 
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name="Validation Error";
    }
}

function test(){
    throw new ValidationError("OHHO!!");
}

try {
    test()
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

// Example of Validation Error : 
function readUser(json) {
    let user = JSON.parse(json);

    if(!user.age){
        throw new ValidationError("No Field : age");
    }
    if (!user.name) {
        throw new ValidationError("No Field : name");
    }

    return user;    
}

try {
    readUser('{"name":"John"}');
} catch (error) {
    if(error instanceof ValidationError){
        console.log("Invalid data : "+error.message)
    }
    else if(error instanceof SyntaxError){
        console.log("JSON Syntax Error :"+error.message);
    }
    else{
        throw error;
    }
}

// The above code handles the both our ValidationError & built-in SyntaxError 
// from JSON.parse 

// Further Inheritance of Validation Error : 
class PropertyRequiredError extends ValidationError {
    constructor(property){
        super(property);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}

function newUser(json) {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
    if(!user.age) {
        throw new PropertyRequiredError("age");
    }

    return user;
}

try {
    newUser('{"name": "Walter"}');
}catch(err){
    if (err instanceof ValidationError) {
        console.log("Invalid data : "+err.message);
        console.log(err.name);
        console.log(err.property);
        //console.log(err.stack);
    }
    else if(err instanceof SyntaxError) {
        console.log("JSON Syntax Error : "+err.message);
    }
    else{
        throw err;
    }
}

class FormatError extends SyntaxError {
    constructor(message){
        super(message);
        this.name="FormatError";
        //this.message="formatting error";
    }
}

let err= new FormatError("formatting error");
console.log(err.name);
console.log(err.message);
console.log(err.stack);

console.log(err instanceof SyntaxError);