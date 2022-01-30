async function test(){

let asaw = new Promise ((resolve,reject)=>{
    var date = new Date();
    if(date.getMinutes()<30 )
    {
        resolve("minutes is lessthen 30 ");
    }
    else
    {
        resolve("minutes is graterthen 30 ");
    }
})

 let res=await asaw;
 asaw.then(
     (value=>{
         console.log(value)
     })
  ) .catch (
      (error=>{
          console.log(error);
      })
  ) .finally(
      ()=>{console.log("complete the process")}
  )
   return res;
}
test();


 function  callafter2minut(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
              resolve("solved")
         },2000)
     })
 }

 async function test1(){
     console.log("strating");
     var result = await  callafter2minut();
    console.log(result);
 }
 test1();

 async function test2(){
     var a1= await new Promise((resolve)=>{
         setTimeout(()=>{resolve("1")},3000  )
     })
     var a2= await new Promise((resolve)=>{
        setTimeout(()=>{resolve("2")},2000  )
    });
    return a1 ,a2 ;
 }
 test2().then(
     (resolve)=>{console.log(resolve)}
 ).catch(
    (error)=>{console.log(error)}
).finally(
    ()=>{console.log("complete process")}
)


//async return always return promise and
// await fun. wait the promies resolve or reject