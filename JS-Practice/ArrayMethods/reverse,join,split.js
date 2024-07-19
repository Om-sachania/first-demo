// arr.reverse() method : 
    // digit = [1,2,8,9,14]
    digit.reverse();
    console.log(digit); // [14,9,8,2,1]

// Split Method : It splits a string into an array .  
    let str="Mike,John,Henry";
    let names=str.split(',');
    console.log(names);
        // We can give length as an parameter also : 
        let str1="Garry,Fin,Kingston".split(',',2);
        console.log(str1); // [Gary,Fin]

// Join Method : It does the reverse of Split() Method , it converts a array into a string 
    // names=["Mike","John","Henry"]
    let newStr=names.join(',');
    console.log(newStr); // String : Mike,John,Henry
