function called(){
    console.log("hello word")
}
  function test(callback){
     setTimeout(()=>{callback()},2000) 
  }
test(called)  ;