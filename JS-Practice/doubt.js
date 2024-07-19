let p = new Promise((res, rej) => {
    res(1);
});
async function asyncReturn() {
    return p;
}
function basicReturn() {
    return Promise.resolve(p);
}

console.log("P Promise : ",p)
console.log("Async : ",asyncReturn())
console.log("Basic : ",basicReturn());

// Q-2: 
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