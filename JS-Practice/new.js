// let promise1 = ()=> new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("P1 Resolved Successfully!!");
//     },10000)
// });

// let promise2 = () => new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("P2 Resolved Successfully !!");
//     },20000);
// });

// async function handlePromise(){
//     console.log("Start");
//     let val = await promise1();
//     console.log("Hello");
//     console.log(val);

//     let val2 = await promise2();
//     console.log("Hii");
//     console.log(val2)
// }

// handlePromise();

// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }

// async function loadJson(url){
//     let fetchData = await fetch(url);
//     if(fetchData.status == 200){
//         let jsonData = await fetchData.json();
//         return (jsonData);  
//     }
//     throw new Error(fetchData.status);
// }

//loadJson('https://javascript.info/no-such-user.json').catch(err => console.log(err))

// async function demoGithubUser() {
//     while (true){
//         let name = prompt("Enter a name?", "iliakan");
//         try{
//             let user = await loadJson(`https://api.github.com/users/${name}`);
//             break;
//         }
//         catch(err){
//             if (err instanceof HttpError && err.response.status == 404) {
//                 alert("No such user, please reenter.");
//             } else {
//                 throw err;
//             }
//         }
//     }
//     console.log(`Name : ${user.name}`);
//     return user;
// }
//demoGithubUser();

// let prom = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         //resolve("Resolved");
//         reject("Rejected");
//     },3000);
// });

// prom.then(null, (val2)=>console.log(val2));
//prom.catch((val)=>console.log(val));

// Note : That .then() takes 2 arguments 
//console.log(p)
// let p = new Promise((res, rej) => {
//     res(1);
// });
// async function asyncReturn() {
//     return p;
// }
// function basicReturn() {
//     return Promise.resolve(p);
// }

// console.log("P Promise : ",p)
// console.log("Async : ",asyncReturn())
// console.log("Basic : ",basicReturn());

// console.log("P = Basic", p == basicReturn())
// console.log("P = Async",p == asyncReturn)

function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("slow");
            console.log("slow promise is done");
        }, 10000);
    });
}
//resolveAfter2Seconds().then((val)=>console.log(val))    
function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("fast");
            console.log("fast promise is done");
        }, 5000);
    });
}

// async function sequentialStart() {
//     console.log("== sequentialStart starts ==");

//     // 1. Start a timer, log after it's done
//     const slow = resolveAfter2Seconds();
//     console.log(await slow);

//     // 2. Start the next timer after waiting for the previous one
//     const fast = resolveAfter1Second();
//     console.log(await fast);

//     console.log("== sequentialStart done ==");
// }
  
  async function sequentialWait() {
    console.log("== sequentialWait starts ==");
  
    // 1. Start two timers without waiting for each other
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
  
    // 2. Wait for the slow timer to complete, and then log the result
    console.log(await slow);
    // 3. Wait for the fast timer to complete, and then log the result
    console.log(await fast);

    console.log("== sequentialWait done ==");
  }
  
//   async function concurrent1() {
//     console.log("== concurrent1 starts ==");
  
//     // 1. Start two timers concurrently and wait for both to complete
//     const results = await Promise.all([
//       resolveAfter2Seconds(),
//       resolveAfter1Second(),
//     ]);
//     // 2. Log the results together
//     console.log(results[0]);
//     console.log(results[1]);
  
//     console.log("== concurrent1 done ==");
//   }

  async function concurrent2() {
    console.log("== concurrent2 starts ==");

    // 1. Start two timers concurrently, log immediately after each one is done
    await Promise.all([
      (async () => console.log(await resolveAfter2Seconds()))(),
      (async () => console.log(await resolveAfter1Second()))(),
    ]);
    console.log("== concurrent2 done ==");
  }
  
  //sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
  
  // wait above to finish
    //setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"
  
//   // wait again
   //setTimeout(concurrent1, 0); // same as sequentialWait
  
//   // wait again
//setTimeout(concurrent2, 0); // after 1 second, logs "fast", then after 1 more second, "slow"
