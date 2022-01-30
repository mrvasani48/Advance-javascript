const promiesonj2 = new Promise ((resolve)=>{
    setTimeout(()=>{  resolve("hello world");},3000)
    
}).then(
    (value)=>{console.log(value)}
).catch(
    ()=>{console.log("error")}
).finally(
    ()=>{console.log("process completed")}
)