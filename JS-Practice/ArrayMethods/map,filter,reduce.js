// Using filter() method :
let someUser=users.filter(item => item.id < 3);
console.log(someUser); // It will both the results(All matching results) that is JOHN,MICHEAL

// Using Filter on Array of objects : 
    let people = [
        {
            name : "Florin",
            age : 24
        },
        {
            name : "Ivan",
            age : 14
        },
        {
            name : "Jack",
            age : 46
        }
    ];

/*
Original array modified using filter function : 

let arr=[1,2,3,4,5,6];

arr.filter((x,i)=>{
    arr[i]=x*2;
    return arr;
})

console.log(arr);
*/

let adult=people.filter(person =>person.age>=18);
console.log(adult);

// arr.map() Method : It calls the function for each element of arr and returns arr of results
        // fruits=[plum,orange,plum,blueberry];
        let result=fruits.map(item=>item.length);
        console.log(result); // [4,6,4,9]

        // map() funtion on array of objects :
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

            let totalProductsCost=products.map((item)=>item.price*item.count);
            console.log(totalProductsCost);
        
        // Returning the array of objects as result in above example : 
        let totalProductsCost1=products.map((item)=>({
            name : item.name,
            totalValue : item.price*item.count}));
        console.log(totalProductsCost1);

        /*
            Converting the array of string into an array of numbers : 
                let strings =['1','2','3','4','5'];
                let numbers=strings.map(Number);
                console.log(numbers) // [1,2,3,4,5]
        */

// Reduce Method : Gives the result in single value.
        /*
        SYNTAX :
            arr.reduce(function(accumulator, item, index, array) {
                // ...
            }, [initial]);
        
        accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
        item – is the current array item.
        index – is its position.
        array – is the array.
        */
        let values=[1,2,3,4,5,6];
        let ans=values.reduce((a,b)=>a+b,0);
        console.log(ans); // 21 (1+2+3+4+5+6=21)
    
        /* EXECUTION OF REDUCE : 
                    a    b    ans
        1st   call  0    1     1
        2nd   call  1    2     3
        3rd   call  3    3     6
        4th   call  6    4     10
        5th   call  10   5     15
        6th   call  15   6     21
        */
        
        // Getting the maximum value : 
            let max=values.reduce((accumaltor,value)=>{
                if(accumaltor > value){
                    return accumaltor;
                }
                else{
                    return value;
                }
            },0);
    
            console.log(max);
        
        // Getting the total price of all products available in store : 
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
        
        let totalValueStore=products.reduce(
            (acc,item)=> acc + item.price * item.count
            ,0
        );
        console.log(totalValueStore);
