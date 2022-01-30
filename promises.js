const promisob =new Promise((resolve,reject)=>{
    var a=10;
    if(a<11)
    {
        resolve("succes");
    }
    else{
        reject("rejected")
    }
}).then(
    (value)=>{
        console.log(value);
    },
    (error)=>{
        console.log(error);
    }
)


const promiesonj2 = new Promise ((resolve,reject)=>{
    function my(){ 
        resolve("succes");
        reject(false);
    }
    setTimeout(my,2000)
    
}).then(
    (value)=>{console.log(value)}
).catch(
    (error)=>{console.log(error)}
).finally(
    ()=>{console.log("program completed")}
)


const promiesonj3 = new Promise ((resolve,reject)=>{
    var date =new Date();
    if(date.getMinutes()<30)
    {
        resolve("the minute is less then 30 minute ")
    }
    else
    {
        resolve("the minute is graterthen 30 minute ")
    }
}).then(
    (resolve)=>{
        console.log(resolve)    
    }
).catch(
    (error)=>{
        console.log(error)    
    }
).finally(
  ()=>  console.log("time is important ")
)

let promiesonj4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("resolve over promies")},4000);
    setTimeout(()=>{reject("reject over promies")},5000)
}).then(
    (value)=>{
        console.log(value);
    }
).catch(
    (error)=>{
        console.log(error);
    }
).finally(
       ()=> console.log("complete process ")
)