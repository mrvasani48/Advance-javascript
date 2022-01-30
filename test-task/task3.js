//3).Write a  function for below definition

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
console.log(sum(2, 3)); //5
console.log(sum(2)(3)); //5

// 2 :LONGEST WORD
function longestWord(text){
   let longest= text.split(" ");
   let result = "";
   for (i = 0; i < longest.length; i++) {
       if (longest[i].length > longest.length)
        {
           result = longest[i];
        }
    }
    
   console.log(result) ;
}
longestWord("hghjgh kishan vasaddddi sshhhhhhhhhj sjs");