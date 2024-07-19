// Splice Method : syntax : arr.splice(startIndex,deleteCount,elem1,elem2,..)

let arr=["I","study","javascript"];
console.log(arr);
arr.splice(1,1) // It removes (study) as it starts form index : 1 and deletes 1 element
console.log(arr);

let fruits=["apple","banana","strawberry","blueberry"];
console.log(fruits);
fruits.splice(0,3,"plum","orange","plum");
console.log(fruits);

/*
    IMPORTANT NOTE : DIFFERENCE BETWEEN SPLICE() AND SLICE() 
        let arr=[1,2,3,4,5,6];
        console.log(arr); // [1,2,3,4,5,6]

        console.log(arr.slice(1,3)); // [2,3] (IT STARTS FROM 1st INDEX AND DO NOT INCLUDE 3rd INDEX)
        console.log(arr); // [1,2,3,4,5,6] 
        
        console.log(arr.splice(1,3)); // [2,3,4] (IT STARTS FROM 1st INDEX AND REMOVES 3 ELEMENTS)
        console.log(arr); // [1,5,6]

        NOTE : SLICE = DOES NOT MODIFY THE ORIGINAL ARRAY
                SPLICE = MODIFIES THE ORIGINAL ARRAY
        
*/

//Inserting items using splice without deleting any item : 
    arr.splice(1,0,"Hello","World");
    console.log(arr);