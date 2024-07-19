// function z() {
//     let b=45;
//     function x() {
//         let a=7;
//         function y() {
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

// function inBetween(a,b){
//     return function(x) {
//         return x>=a && x<=b;
//     };  
// }

// function inArray(arr) {
//     return function(x){
//         return arr.includes(x);
//     }
// }

// let num=[1,2,3,4,5,6,7,8];
// let filteredArr=num.filter(inBetween(3,6));// Same as : num.filter((item)=>item>=3 && item<=6)
// console.log(filteredArr);
// let newArr=num.filter(inArray([42,8,16]));
// console.log(newArr);    

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(str) {
//     return function(a,b){
//         return (a[str] > b[str] ? 1:-1)
//     };
// }

// users.sort(byField('age'));
// console.log(users);
// //console.log(users.sort(byField('age')));

// function x() {{
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         year: 1960,
//         genres: ["Fiction", "Drama"]
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         year: 1949,
//         genres: ["Dystopian", "Science Fiction"]
//     },
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         year: 1925,
//         genres: ["Fiction", "Classic"]
//     }
//     var i=1;
//     setTimeout(function() {
//         console.log(i);
//     },3000);
//     console.log("hello");
// }
// let a=5;
// x();

// function x() {
//     for (var i = 1; i <=5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         },i*1000)
//     }
// }
// x();

// let i = 1;
// setInterval(function() {
//     console.log(i++);
// }, 1000);

// let arr=[2,4,1,8,5,6,9,7];
// let newArr=arr.reduce((accumaltor,item)=>{
//     accumaltor+item;
// });
// console.log(newArr);
// // console.log(dir());


// let str="helloworld";
// let sub=str.substr(1,4);
// console.log(str);
// console.log(sub);   

// let users=[
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" },
//     { name: "John", age: 20, surname: "Johnson" }
// ];

// let fullName=users.map((item)=>item.name+" "+item.surname);
// console.log(fullName);

// let countAge=users.reduce((acc,curr)=>{
//     acc[curr.age] ? acc[curr.age]+=1 : acc[curr.age]= 1;
//     return acc
// },{})
// console.log(countAge);

// let filterNames=users.reduce((acc,curr)=>{
//     if(curr.age<19){
//         acc.push(curr.name);
//     }
//     return acc;
// },[]);
// console.log(filterNames);

// let library = [
//     
// ];

// function addBook(arr,title,author,year,genres) {
//     arr.push({
//         title : title,
//         author : author,
//         year : year,
//         genres : genres
//     })
// }

// function findBooksByAuthor(library, author) {
//     return library.filter(book => book.author === author).map((item)=>item.title);
// }

// let orwellBooks = findBooksByAuthor(library, "George Orwell");
// console.log("Books by George Orwell:", orwellBooks);

// function listBooksByYear(library, year) {
//     return library.filter(book => book.year === year).map((item)=>item.title);
// }

// let books1949 = listBooksByYear(library, 1949);
// console.log("Books published in 1949:", books1949);

// addBook(library, "Brave New World", "Aldous Huxley", 1932, ["Dystopian", "Science Fiction"]);
// console.log("Complete lib : ",library);


