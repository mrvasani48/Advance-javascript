

let result;

result = 'hello' - 'world';
console.log(result);
nan


result = String(2 + 4);
console.log(result);
//6
(function() {
    console.log(1);
    setTimeout(function() { console.log(2) }, 1000);
    setTimeout(function() { console.log(3) }, 0);
    console.log(4);
})();

//1432

// 1
// Here you need to write one common function which is give me output if I m calling below method


function sum(a,b){
    var add = function (b){return a+b;};
    if(typeof b =='undefined'){
        return add;
    }else{
        return add(b);
    }
}
console.log(sum(2, 3)); 
console.log(sum(2)(3));


