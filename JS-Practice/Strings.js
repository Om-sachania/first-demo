// Backticks (`) : 
    let backticks=`backticks`;

    // It allows to embed any expression in it : 
    function sum(a,b) {
        return a+b;
    }
    console.log(`${sum(4,5)}`);

    // Another advantage is that you can use multiple lines into a variable string : 
    let guest=`Guests : 
    Harry
    Matthew
    John
    `;
    console.log(guest);

    // Using single quotes('') and double quotes("") will give error : 
        /*
        let a="Guests : 
        Harry "
        */

// Special Characters : 

    // It is possible to create multi-line string with single quotes('') and double quotes("") :
    let a="Guests : \n John\n Ricky\n";
    console.log(a);
    
    // Quotes : \',\",\`
    console.log("HELLO \""); // Output : HELLO "

    // Backslash : \\
    console.log("backslash\\"); // Output : backslash\

    // Tab : \t 
    console.log("Hello\tWorld"); // Output : Hello  World

// String length property : 

    console.log("Ab\n".length); // Output : 3
    //NOTE : \n is also a character that's why the length is 3

// Accessing the Characters : 

    let str="Hello";
    console.log(str[0]); // H  Using [] we can access the character
    console.log(str.at(1)); // e  Using .at() function we can access the character

    console.log(str[str.length-1]); // o
    console.log(str.at(-1)); // o 
    // NOTE : In the above statement if the position is -ve then it starts from the end.

    // Important catch :
    console.log(str[-1]); // undefined 
    // Using -ve value in [] always will give undefined.

    // Using for-of loop to iterate the characters of a string :
    for (const char of "ABCD") {
        console.log(char);
    }

    /*
        IMPORTANT NOTE : DIFFERENCE BETWEEN str.at() & str.charAt()
            .at() method allows NEGATIVE index inside it
            .charAt() method doesnot allow NEGATIVE index inside it.
    */

// String are Immutable : Means Strings can't be changed is JS

    let x="World";
    x[0]='p';
    console.log(x[0]);  // It doesn't works OUTPUT : W

// Changing The Case : 

    console.log("Passing".toUpperCase()); // PASSING
    console.log("Passing".toLowerCase()); // passing

    // Changing the case of single character :
    console.log("Passing"[3].toUpperCase()); // S

// Searching for a Sub-String : 

    // 1. str.indexOf() :
    let z="Good Morning oo";
    console.log(z.indexOf('Good')); // 0 because 'Good' is found at beginning
    console.log(z.indexOf('good')); // -1 because not found and search is case-sensitive

    console.log(z.indexOf('oo')); // 1 , 'oo' is found at index 1 ".ood Morning oo"

        //Using the optional second parameter : Allows us to start search from that point 
        console.log(z.indexOf('oo',2)); // 13 , as it starts searching 2nd index.

        // str.indexOf() in IF Statement :  
        if(z.indexOf("Good")){
            alert("Found it"); // It doesn't work 
        }
        // The above statement doesn't work as the str.indexOf("Good") gives 0 which is correct but if(0) takes it as false 

        if(z.indexOf("Good" !=-1)){
            console.log("Found it"); // Now it works
        }
    
    // 2. str.includes() : It returns a boolean value.
    console.log(z.includes("Morning")); // true
    console.log(z.includes("Bad")); // false

    console.log(z.includes("od")); // true
    console.log(z.includes("od",3)); // false as it starts search from 3 index

    // 3. str.startsWith() and str.endsWith() :
    console.log(z.startsWith("G")); // true
    console.log(z.endsWith("o")); // true

// Getting a substring : 

    let b="stringify";

    // 1. str.slice()

    console.log(b.slice(0,4)); // OUTPUT : stri 
    // It returns a substring where it starts from 0th index and goes till 4(which is not included).
    console.log(b.slice(0,2)); // OUTPUT : st as 2(not included)

    console.log(b.slice(3)); // ingify (it starts from 3 and goes till the last index)

    console.log(b.slice(-4,-1)); // gif (as -ve index are provided so it searches in reverse order and -1 will not be included)

    // 2. str.substring() : NEGATIVE INDEX ARE NOT SUPPORTED.

    console.log(b.substring(0,4)); // stri (same as slice the 4th index not included)

    //IMPORTANT : it allows start index to be greater than the end index(In that case it swaps the values)
    console.log(b.substring(4,0)); // stri
    /* 
        The above statement works like this :
            b.substring(4,0) == b.substring(0,4) : IT SWAPS THE START INDEX AND END INDEX
    */

    // 3. str.substr(startIndex, Length) 

    console.log(b.substr(1,4)); // trin (it starts from 1 and gives 4 characters).
    console.log(b.substr(-4,2)); // gi (-ve index are allowed)

// Task 1 : 
/*
    function ucFirst(str) {
        if(!str) return str;

        return(str[0].toUpperCase()+str.slice(1));
    }
    console.log(ucFirst("perry"));
*/

// Task 2 :
    function checkSpam(val) {
        let str=val.toLowerCase();

        if(!str) return str;

        return (str.includes('viagra') || str.includes('xxx'))
    }
    console.log(checkSpam("buy viAgRa "));
    console.log(checkSpam("xxxXXXXxX "));
    console.log(checkSpam("No Spam"));

// Task 3 : 
    function truncate(str,maxLength) {
        if (str.length<maxLength) {
            return str;
        } else {
            return(str.slice(0,maxLength-1)+"...");
        }
    }
    console.log(truncate("Hello World",4));