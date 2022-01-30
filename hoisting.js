let test = "javasctipt hoisting";
console.log(test);

console.log(test1);
var test1= "javasctipt ";

function myfunction(){
    console.log(test1);
    console.log(test2);
    var test2 = "javasctipt not hoited";
};
myfunction();

//use strict 

