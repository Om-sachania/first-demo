// arr.sort() : 
let digit=[9,14,1,8,2];
//digit.sort();
console.log(digit); // [1,14,2,8,9]
/* The above results is strange as 14 < 2 it is because all the elements are converted into string
and then they are sorted.
So to use our owm sorting method we need to pass a function inside the sort() method
*/
function compare(a,b) {
    // if(a > b) return 1;
    // if(a == b) return 0 ;
    // if(a < b) return -1 ;

    /*
        Conditions : 
            1. if(a-b) < 0 THEN a will come first.
            2. if(a-b) = 0 THEN no change will happen.
            3. if(a-b) > 0 THEN b will come first.
    */
    return a-b;
}
digit.sort(compare);
console.log(digit);

// arr.sort() on array of objects : 
/*
    let products=[
        {
            name : "Laptop",
            price : 1000,
            count : 6
        },
        {
            name : "Desktop",
            price : 1500,
            count : 3
        },
        {
            name : "Mobile",
            price : 500,
            count : 10
        }
    ];
*/
products.sort((a,b) => a.price-b.price);
console.log(products);

