/* 
=>In JavaScript an iterator is an object which define
    s a sequence and potentially a return value upon its termination.
=>Specifically, an iterator is any object which implements the Iterator protocol
   by having a next() method that returns an object with two properties: 
*/

console.log("itertors in javasript");

function fruitsinterate(values){
   var i=0;
   return{
       next: function (){
           if(i<values.length)
           {  return {
                value:values[i++],
                done: false
               }
            }
          else 
               {
                   return {
                    done: true
                   } 
           }
       }
   }
}
const myarra=['mango','mango1','mango2'];
console.log(myarra);

const fruts = fruitsinterate(myarra);

console.log(fruts.next().value);
console.log(fruts.next().value);
console.log(fruts.next().value);

function interate(val){
    let  index=0;
    return{
        next :()=>{
            if (index<val.length)
            {
                return{
                    value: val[index++]         
                }
            }
            else
            {
                return{         
                }
            }
        }
    }
}
var  details= interate(['kishan vasani','180200107118','gecr']);
console.log(details.next().value)
console.log(details.next().value)
console.log(details.next().value)

/*It is an object that allows us to traverse over a list or collection.  
   Iterators' purpose is to define the sequences and implement the iterator protocol
    that returns an object by using a next() method that contains the value and done. 

done: It is a boolean value indicating whether any more elements in the sequence could be iterated upon.
value: It is the current element of the sequence.
*/