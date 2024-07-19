// Callback : It means when an fuction is passed as an argument to another function
// then that passed function is known as callback function.

function printSum(arg){
    console.log(arg);
}

function sum(a,b,printSum){
    let sum = +a + +b;
    printSum(sum);
    printSum(sum)
}

sum(5,4,printSum);  

// Callback in Callback :

let subject = ["eng","maths","sci"];

exam(subjects, function (marks){

    result(marks, function (totalMarks){

        percentage(totalMarks, function (percentValue){

            meritList(percentValue, function(){

            })
        })
    })
})

// The above code is called as callback hell/Pyramid of Doom it is difficult to
// manage the code.

