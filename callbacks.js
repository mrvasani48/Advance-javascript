function one(){
    console.log("test 1");
};

function two(){
    console.log("test 2");
};
two();
one();


function test3(){
    console.log("test 3");
};

function test4(){
    setTimeout(test3,2000);
    console.log("test 4");
};
setTimeout(test4,1000);


 var num= [1,2,3,8,9,48] 
  
   function squre (num,call)
  {
      num.push(52);
      call();
  }
squre(num,()=>{
        console.log(num);
})



function print(name){
    alert("heloo"+name);
}
function entername(callback){
    var name= prompt('please enter name ')
    callback(name);
  }
entername(print);


function plus(a,b){
   console.log(a+b);
}
function my(callback,a,b){
   callback(a,b)  
};
my(plus,45,55);

function sds(a,callback){
  callback(a);
};
sds(10,function  (a){
    console.log("kishan vasani" + a);
})

function logic(callback) {
    let b="20keys" ;
    setTimeout(()=>{
        callback(b) ;
    },3000);
  
}
logic(function  (b){
    console.log("there are many logic of the function key word like:" + b);
})
