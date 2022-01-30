function num(...rest){
   return rest.reduce((sum,num)=>{
            return sum+num
       })
}
;
console.log( num(5,6,7));
console.log( num(1006,5441,45,65,95,7))