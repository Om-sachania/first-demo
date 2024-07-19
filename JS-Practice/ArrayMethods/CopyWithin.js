const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1);

// Copies the elements from index 3(which is 'd') till the index 4(WHICH IS NOT INCLUDED) and replaces element at index 0 
console.log(array1.copyWithin(0, 3, 4)); 
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copies the elements from index 3 till the last index (WHICH ARE : 'd' & 'e') and replaces element from index 1.
console.log(array1.copyWithin(1, 3));

// NOTE : It modifies the original array