let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices =Object.fromEntries(Object.entries(prices).map((value)=>[value[0],value[1]*2]));
console.log(doublePrices);

// Task 1 :
function sumSalaries(salaries) {
    let sum=0;
    for (const iterator of Object.values(salaries)) {
        sum+=iterator;
    }
    return sum;
}
let salaries={
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log(sumSalaries(salaries));

// Task 2 :
function count(obj) {
    let arr=Object.keys(obj);
    return (arr.length);
}
let numOfProperties=count(salaries);
console.log("Number of Properties are : ",numOfProperties);
