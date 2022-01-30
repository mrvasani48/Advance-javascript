try{
   function sum(a,b)
   {
       return a+b;
   }
   throw(sum(7,7));
}
catch(error)
{
    console.log(error);
}
finally{
    console.log("completed all process");
}

try{
    function number(a)
    {
       if(a>10) throw" number is big";
       else if (a<10) throw "number is so low ";
       else throw "nothing bro";
    }
   number(7)
 }
 catch(error)
 {
     console.log(error);
 }
 finally{
     console.log("completed all process");
 }