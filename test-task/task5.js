function isPalindrome(string)
{
    var len = string.length;
    for (var i=0;i< len/2 ;i++)
    {
       if(string[i]==string[len-i-1])
       {  
        console.log(string +" is Palindrome");
        break;
       }
       else{
        console.log(string +" is not Palindrome");
        break;
       }
    }
}
isPalindrome("madam");


var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}

console.log(sum);