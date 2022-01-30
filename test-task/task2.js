//.What is the output of below code ?

// 1
let result;

result = 'hello' - 'world';
console.log(result);
// output NAN


// 2

result = String(2 + 4);
console.log(result);

// output 6 


// 3

console.log("test1");
setTimeout(()=>{
    console.log("test1");
},2000)

setTimeout(()=>{
    console.log("test3");
},3000)

setTimeout(()=>{
    console.log("test4");
},1000)
setTimeout(()=>{
    console.log("test5");
},0000)
    console.log("test6");

//output 1 6 5 4 1 3