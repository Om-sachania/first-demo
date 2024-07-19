// Declaration of an Array : 
    // let arr=new Array();
    //let arr=[]; // Most commonly used

    let fruits=["apple","orange","strawberry"];

// Accessing the elements of array : 
    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[2]);

// Changing or Inserting values in array : 
    fruits[1]="pear"; // Updating the value.
    fruits[3]="blueberry"; // Inserting a new value.

// Length of Array : 
    console.log(fruits.length); // 4

// Array can contain elements of any type : 
    let ar=["Hello",{name:"David"},function() {console.log("This is a function");},5];
    console.log(ar[1].name); // David (As the element at index 1 is an object)
    ar[2](); // Function  OUTPUT : This is a function

// at method in array : 
    // To get the last element of the array : 
        console.log(fruits[fruits.length-1]);
        console.log(fruits[-1]); // undefined (as the -ve index is not valid in JS);

    // Using the array.at() method : 
        console.log(fruits.at(-1)); // blueberry (This works as .at() allows the -ve index)

// METHOD IN ARRAY : PUSH/POP and SHIFT/UNSHIFT : 
    // POP() : RETURNS THE LAST ELEMENT OF ARRAY AND ALSO REMOVES IT FROM ARRAY 
    console.log(fruits);
    console.log(fruits.pop()); // blueberry
    console.log(fruits);

    // PUSH() : ADD THE ELEMENT AT THE LAST INDEX OF ARRAY 
    fruits.push("banana");
    console.log(fruits);

    // SHIFT() : EXTRACTS THE FIRST ELEMENT OF THE ARRAY AND RETURNS IT 
    console.log(fruits.shift()); // apple 
    console.log(fruits);

    // UNSHIFT() : ADDS THE ELEMENT AT THE BEGINNING OF THE ARRAY 
    fruits.unshift("cherry");
    console.log(fruits);

    // PUSH() and UNSHIFT() can add multiple items at once : 
    fruits.push("apple","orange");
    fruits.unshift("peach","avacado");
    console.log(fruits);

// Performance : 
/*
    Push()/Pop() are faster.
    Shift()/Unshift() are slower :
        As the shift() removes the first element from the array so it needs to move each and every element
        to its left so it needs to change the index of every element.Update the length

        Where the pop() just removes the last element and it does not need to modify any element's index.
*/

// Loops in Array : 
    // Traditional FOR Loop : 
    for (let index = 0; index < fruits.length; index++) {
        console.log(fruits[index]);
    }

    // Special for-loop for Arrays : (FOR-OF)
    for (const iterator of fruits) {
        console.log(iterator);
    }

// More About Length of Array : 
    //The length property is writable 
    // We can increase it manually and it shows no difference but if we reduce it the array gets truncate.

    let a=[1,2,3,4,5];
    a.length=2;
    console.log(a); // [1,2]

    a.length=5;
    console.log(a[2]); // undefined (As the length gets restored but not the items.)

    // IMPORTANT NOTE : SIMPLEST WAY TO CLEAR A ARRAY IS : arr.length=0

// Multi-dimensional Array : It is basically array inside array
    let matrix=[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    console.log(matrix[1][2]); // 6

// toString : 
    let arr=[1,2,3];
    console.log(String(arr) === '1,2,3'); // true

    console.log([]+1); // "1" type: string
    console.log([1]+1); // "11"
    console.log([1,2]+1); // "1,21"

    /*
        So basically,
            [] becomes "" (an empty string)
            [1] becomes "1"
            [1,2] becomes "1,2"
    */

// TASK 1 :
    let styles=["Jazz","Blues"];
    console.log(styles);
    styles.push("Rock-n-Roll");
    console.log(styles);
    let middle=(Math.floor((styles.length)-1)/2);
    styles[middle]="Classics";
    console.log(styles);
    console.log(styles.shift());
    console.log(styles);
    styles.unshift("Rap","Reggae");
    console.log(styles);

// Task 2 :
    function sumInput() {
        let numbers =[];
        while(true){
            let num=prompt("Enter a num : ");
            if(num === "" || num === null || !isFinite(num)) break;

            numbers.push(+num);
        }

        let sum=0;
        for(let i of numbers){
            sum+=i;
        }
        return sum;
    }
    alert(sumInput());
