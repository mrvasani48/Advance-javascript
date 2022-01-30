function* num(){

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
var numbers = num();
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);

function* nums(){

   let i=0;
  while(true)
   {
    yield i++; 
   }
   
}
var numbers1 = nums();
console.log(numbers1.next().value);
console.log(numbers1.next().value);
console.log(numbers1.next().value);
console.log(numbers1.next().value);
console.log(numbers1.next().value);
console.log(numbers1.next().value);
console.log(numbers1.next().value);
console.log(numbers1.next().value);
console.log(numbers1.next().value);

/*
We already know how to declare a normal function. So, the syntax of declaring the generator function is quite similar to traditional functions. We declare a generator function by using the * ( asterisk ) operator after the function keyword:

Yield:-
The yield keyword pauses the generator function execution, and the value of the expression following the yield keyword is returned to the generator's caller. It acts as a generator-based version of the return keyword. In the following example, to pause the generator's execution, and we use the statement yield.: */