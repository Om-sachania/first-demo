// REST Parameters (...rest) : The dots means it gathers the remaining params into array

function showName(firstName,lastName,...names) {
    console.log(firstName+' '+lastName);
    console.log(names[0]);
    console.log(names[1]);
    console.log(names.length);
}

showName("Julius", "Caesar", "Consul", "Imperator");

// Spread Parameter : It looks same as rest parameter but does completely opposite
// It expands the array .

    // Example : 
    let arr1=[3,5,1];
    console.log(Math.max(arr1)); // It will give NaN 

    // So to solve the above issue we will use the spread parameter : 
    console.log(Math.max(...arr1)); // OUTPUT : 5

// We can pass multiple iterables to it : 
let arr2=[2,9,4];
console.log(Math.max(...arr1,...arr2)); // OUTPUT : 9

// We can merge the values using spread operator : 
let merged = [0,...arr1,15,...arr2];
console.log(merged);// (0 ,Then arr1 items ,Then 15,Then arr2 items).

// Using it on strings : 
let str ="Hello";
console.log(...str);

// Copy an array/object : 
let arrCopy = [...arr1];
console.log(arrCopy);

// Modifying the original arr does not modify the copied arr : 
arr1.push(4);
console.log(arr1);
console.log(arrCopy);