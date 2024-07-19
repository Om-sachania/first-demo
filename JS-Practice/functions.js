// Local Variable in function : 
/*
function showMessage() {
    let msg="Hello";
    alert(msg);
}

showMessage();
alert(msg); // Error as the msg is local variable.
*/

//Outer Varible in function :
/*
let userName="John";

function showMessage() {
    userName="Bob"; //Outer Variable is updated.
    
    let message="Hello " + userName;
    alert(message);
}

alert(userName); // John as this alert is before the function called.

showMessage();

alert(userName); // Bob as the this alert is after the function called.
*/

// Another Example : 
/*
let userName = 'John';

function showMessage() {
    let userName = "Bob"; // declare a local variable

    let message = 'Hello, ' + userName; // Bob
    alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable
*/

// Parameters in Function :
/*
    function showMessage(from, text) { // from and text are te parameters
        alert(from+" : "+text);
    }

    showMessage('David','Hello'); //David and Hello are the arguments 
    showMessage("David","How are you?");
*/

/* 
    Important Point :
        Parameters : Values defined at Declaration Time.
        Arguments : Values defined at Call Time.

        In the above example :
            Parameters : from , text
            Arguments : David , Hello
*/

// Default Value
/*
    function showMessage(from, text='no text') {
        alert(from+" : "+text);
    }

    showMessage('David');

    // Another way using the default value :

    function showCount(count) {
        alert(count ?? "unknown");
    }
    showCount(1);
    showCount(null);
    showCount(undefined);
*/

// Returning a Value : 
/*
    function sum(a,b) {
        return(a+b);
    }

    let ans=sum(4,5);
    console.log(ans);

// Multiple returns in a single function : 

    function canDrive(age) {
        if (age>18) {
            return true;
        } else {
            return confirm("Do you know driving?");
        }
    }

    let age=prompt("Enter your age : ");

    if(canDrive(age)){
        console.log("You can drive!!");
    }
    else{
        console.log("No!! You can't drive");
    }
*/

// Function == Comments

/*
    function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i))
        {
            continue;
        }
        alert(i);  // a prime
        }
    }

    function isPrime(n) {
        for (let i = 2; i < n; i++) {
            if ( n % i == 0)
            {   
                return false;
            }
        }
        return true;
    }

    showPrimes(10);
*/

//Tasks

// Using ?
function checkAge(age) {
    return (age>18) ? true : confirm("Did you ask your parents ?")
}

// Using OR Operator(||)

function checkAge(age) {
    return (age>18) || confirm("Did you ask your parents ?")
}

// Returning minimum value

function min(a,b){
    if (a<b) {
        return a;
    } else {
        return b;
    }
}

let minValue=min(-1,5);
console.log(minValue);

//pow function

function pow(x,n) {
    let result=x;// result=2
    for (let i = 1; i < n; i++) {
        result*=x; // result=result*x
    }
    return result;
}

let ans=pow(2,3);
console.log(ans);

/*
    Working of above pow function :
        result=2
        When i=1,
            result=result*x ; result=2*2
        result=4;
        When i=2,
            result=result*x; result=4*2
        result=8;
    return result(8);
*/

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
    welcome();
    function welcome() {
    alert("Hello!");
}

} 
else {
    welcome();
function welcome() {
    alert("Greetings!");
}

}

// ...use it later
//welcome(); // Error: welcome 