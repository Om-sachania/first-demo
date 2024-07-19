function slow(x) {
    // there can be a heavy CPU-intensive job here
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {    // if there's such key in cache
            return cache.get(x); // read the result from it
        }
        let result = func(x);  // otherwise call func
        cache.set(x, result);  // and cache (remember) the result
        return result;
    };
}

let wrapperSlow = cachingDecorator(slow);

console.log( wrapperSlow(1) ); // slow(1) is cached and the result returned
console.log( "Again: " + wrapperSlow(1) ); // slow(1) result returned from cache

console.log( wrapperSlow(2) ); // slow(2) is cached and the result returned
console.log( "Again: " + wrapperSlow(2) ); // slow(2) result returned from cache

function CallMe(name){
    this.name=name;
}

function createUser(userName,age){
    this.age=age;
    CallMe(userName);
};

let newUser= new createUser("John",25);
console.log(newUser);