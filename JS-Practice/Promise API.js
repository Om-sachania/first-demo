// Promise.all() : 
console.log("1. PROMISE.ALL : ")
    // All Success (RESOLVED) case : 

// let p1 = new Promise(function(resolve,reject){
//     setTimeout(()=>resolve("P1 Success"),2000);
//     //setTimeout(()=>reject("P1 Fail"),2000);
// });

// let p2 = new Promise(function(resolve,reject){
//     setTimeout(()=>reject("P2 Success"),3000);
//     //setTimeout(()=>reject("P2 Fail"),3000);
// });

// let p3 = new Promise(function(resolve,reject){
//     setTimeout(()=>resolve("P3 Success"),1000);
//     //setTimeout(()=>reject("P3 Fail"),1000);
// });

// let resultOfPromiseAll = Promise.all([p1,p2,p3]);
// resultOfPromiseAll
// .then((result)=>console.log(result))
// .catch((err)=>console.error(err));

    // REJECT case : 

// let p1 = new Promise(function(resolve,reject){
//     //setTimeout(()=>resolve("P1 Success"),2000);
//     setTimeout(()=>reject("P1 Fail"),2000);
// });

// let p2 = new Promise(function(resolve,reject){
//     //setTimeout(()=>resolve("P2 Success"),3000);
//     setTimeout(()=>reject("P2 Fail"),3000);
// });

// let p3 = new Promise(function(resolve,reject){
//     setTimeout(()=>resolve("P3 Success"),1000);
//     //setTimeout(()=>reject("P3 Fail"),1000);
// });

// let resultOfPromiseAll = Promise.all([p1,p2,p3]);
// resultOfPromiseAll
// .then((result)=>console.log(result))
// .catch((err)=>console.error(err));

/*
    IMPORTANT NOTE : 
        If all promises fail then the FIRST FAILED will be returned.
        If anyone fails then the FIRST one failed gets returned.
*/

// Promise.allSettled : 

console.log("2. PROMISE.ALLSETTLED");

    // All Success Case : It is same as Promise.all()

    // Reject Case : 
    // let p1 = new Promise(function(resolve,reject){
    //     //setTimeout(()=>resolve("P1 Success"),2000);
    //     setTimeout(()=>reject("P1 Fail"),2000);
    // });
    
    // let p2 = new Promise(function(resolve,reject){
    //     setTimeout(()=>resolve("P2 Success"),3000);
    //     //setTimeout(()=>reject("P2 Fail"),3000);
    // });
    
    // let p3 = new Promise(function(resolve,reject){
    //     setTimeout(()=>resolve("P3 Success"),1000);
    //     //setTimeout(()=>reject("P3 Fail"),1000);
    // });
    
    // let resultOfPromiseAllSettled = Promise.allSettled([p1,p2,p3]);
    // resultOfPromiseAllSettled
    // .then((result)=>console.log(result))
    // .catch((err)=>console.error(err));

/*
    IMPORTANT NOTE :
        In rejected case it waits for all promise to get settle and then returns
        an array of results of all promises.

        So in the above example it returns :
        [
            {status : 'reject' , reason : 'P1 Fail'},
            {status : 'fulfilled' , value : 'P2 Success'},
            {status : 'fulfilled' , value : 'P1 Success'}
        ];
*/

// Promise.race() 

    // RESOLVE CASE :

    let p1 = new Promise(function(resolve,reject){
        //setTimeout(()=>resolve("P1 Success"),2000);
        setTimeout(()=>reject("P1 Fail"),2000);
    });
    
    let p2 = new Promise(function(resolve,reject){
        setTimeout(()=>resolve("P2 Success"),3000);
        //setTimeout(()=>reject("P2 Fail"),3000);
    });
    
    let p3 = new Promise(function(resolve,reject){
        //setTimeout(()=>resolve("P3 Success"),1000);
        setTimeout(()=>reject("P3 Fail"),1000);
    });
    
    let resultOfPromiseRace = Promise.race([p1,p2,p3]);
    resultOfPromiseRace
    .then((result)=>console.log(result))
    .catch((err)=>console.error(err));

/*
    IMPORTANT NOTE : 
        It returns the result of first settled promise :
            If the first one is rejected then error is returned
            If the first one is resolved then the value is returned
*/

// Promise.any() 

    // RESOLVE CASE :  

// let p1 = new Promise(function(resolve,reject){
//     //setTimeout(()=>resolve("P1 Success"),2000);
//     setTimeout(()=>reject("P1 Fail"),2000);
// });

// let p2 = new Promise(function(resolve,reject){
//     setTimeout(()=>resolve("P2 Success"),3000);
//     //setTimeout(()=>reject("P2 Fail"),3000);
// });

// let p3 = new Promise(function(resolve,reject){
//     //setTimeout(()=>resolve("P3 Success"),1000);
//     setTimeout(()=>reject("P3 Fail"),1000);
// });

// let resultOfPromiseAny = Promise.any([p1,p2,p3]);
// resultOfPromiseAny
// .then((result)=>console.log(result))
// .catch((err)=>console.error(err));

    // ALL REJECT CASE : 
    // let p1 = new Promise(function(resolve,reject){
    //     //setTimeout(()=>resolve("P1 Success"),2000);
    //     setTimeout(()=>reject("P1 Fail"),2000);
    // });
    
    // let p2 = new Promise(function(resolve,reject){
    //     //setTimeout(()=>resolve("P2 Success"),3000);
    //     setTimeout(()=>reject("P2 Fail"),3000);
    // });
    
    // let p3 = new Promise(function(resolve,reject){
    //     //setTimeout(()=>resolve("P3 Success"),1000);
    //     setTimeout(()=>reject("P3 Fail"),1000);
    // });
    
    // let resultOfPromiseAny = Promise.any([p1,p2,p3]);
    // resultOfPromiseAny
    // .then((result)=>console.log(result))
    // .catch((err)=>{
    //     console.error(err);
    //     console.log(err.errors)
    // });

/*
    IMPORTANT NOTE :
        It searches for the first resolved promise and returns the value of it

        If all are REJECTED :
            It returns an Aggregate Error(In above example after 3secs the output
            is shown).
        
            If we want the array of results(Failed promises) then use 
            console.log(err.errors); in catch statement.
*/

