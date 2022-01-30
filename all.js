
// MDN 
// array prototype 

var array1 =[1,2,3,4,56,78,9];
console.log(array1[0]);
console.log(array1.length);

 array1.forEach(val)
 function val(value){console.log(value)};
 for (let x in array1){
   document.write(x)
 };

 var arr= [1,2,3,4,5,6];
arr.forEach(
  (value)=>{
    console.log(value);
  }
)

 console.log(array1.indexOf(56));
 var removearr1=array1.splice(4,5)
 console.log( removearr1);
 console.log(array1);
var dub= [...array1];
var dub1= dub;
console.log(dub);
console.log(dub1);

let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(years['2'] != years['02']);//true

let fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3
fruits[4]="annanas";  
console.log(fruits[4]);
console.log(Object.keys(fruits));
console.log(fruits.length) //5

/*Several of the built-in array methods (e.g., join(), slice(), indexOf(), etc.) take into account the value of an array's length property when they're called.
length(),slice(),splice(),push(),pop(),shift(),unshift(),indexOF(),Object.keys(),map(),reduce(),reduceright(),every(),some(),filter(),stringify(),parse()
Other methods (e.g., push(), splice(), etc.) also result in updates to an array's length property.*/

var dub3=Array.from(fruits);
console.log(dub3);//['banana', 'apple', 'peach', undefined, 'annanas']
var dub4 =JSON.parse(JSON.stringify(fruits));
console.log(dub4);//['banana', 'apple', 'peach', null, 'annanas']

//array letructor
var tests2= new Array("joe","roy");
tests2.push("bidden")
console.log(tests2.length);
console.log(tests2);


var tests3= Array.from("abcde");
console.log(tests3);
/*
class tests4 extends tests2 (){
  static get [Symbol.species]() { return Array; }
}*/

//static method

var test2 = Array.from("kishan");
console.log(test2)//k,i,s,h,a,n
console.log(Array.isArray(test2));//true
console.log(Array.of(1,2,3,4,5));//1,2,3,4,5
console.log(Array(5));//create empty arrray length is 5

//at
let test3 = [5, 12, 8, 130, 44];
console.log(test3.at(1)); //12
console.log(test3.at(4)); //44

//concat
 let test4 =["car","bike","ebike"];
 let test5 =["tata nano","splender","oreva"];
 console.log(test4.concat(test5));

//copywithin  (target start end)
let test6= ['a', 'x', 'c', 'y', 'e'];
console.log(test6.copyWithin(0,3,4));//['y', 'e', 'c', 'y', 'e']
console.log(test6.copyWithin(0,3)); // ['y', 'x', 'c', 'y', 'e']

//entries()

let test7 = ['a', 'b', 'c'];
let iterator1 = test7.entries();
console.log(iterator1.next().value); // [0, "a"]
console.log(iterator1.next().value);// [1, "b"]

//every
let test8 = [45, 12, 121];
console.log(test8.every((value)=>{return value>100 }));//false

//some
console.log(test8.some((value)=>{return value>100 }));//false

//fill  fill(value, start, end)
console.log(test8.fill("kishan")); //['kishan', 'kishan', 'kishan']

//filter
let test9 = [45, 15,35,45,74,9,12, 121];
console.log(test9.filter((value)=>{
  return (value>12);
}));  //[45, 15, 35, 45, 74, 121]

//find
console.log(test9.find((value)=>{
  return (value>120);
}));  //121

//findindex
console.log(test9.findIndex((val)=>{return (val>120);}));  //7
console.log(test9.indexOf(121));//7
console.log(test9.at(7));//121

//flat   decrease 1 depth of arrays   
let test01 = [0, 1, 2, [3, 4]];
console.log(test01.flat()); //  [0, 1, 2, 3, 4]
let test02 = [0, 1, 2, [[[3, 4]]]];
console.log(test02.flat(3)); // [0, 1, 2, [3, 4]]

//for Each
let test03 = ["abcd","rtyu","mnbo","hjkl"];
test03.forEach((value)=>{
  console.log(value);
});

//include
let test04 = [1, 2, 3];
console.log(test04.includes(2));//true
console.log(test04.includes(8));//false

//indexOf
var animal= ["cat" ,"munkey","dog"]
console.log(animal.indexOf("dog")); //2

//join
var birds= ["owl" ,"parrot"]
console.log(birds.join("*"));//owl*parrot

//keys
var cars=["tata-nano","audi","honda"];
var carskey1 = cars.keys();
for (let y of carskey1  ){
  console.log(y)
;
}
//lastIndexOf
var cars1=["tata-nano","audi","honda"];
console.log(cars1.lastIndexOf("audi"));

//map
console.log(test04.map((value)=>{return value*2}));
//pop
console.log(test04);
console.log(test04.pop());
console.log(test04);
//push
test04.push(14)
console.log(test04);
//shift
test04.shift()
console.log(test04);
//unshift
test04.unshift(13)
console.log(test04);

//reduce
console.log(test04);
console.log(test04.reduce((previousValue, currentValue)=>{return previousValue+ currentValue}));

//reduceleft
console.log(test04.reduceRight((previousValue, currentValue)=>{return previousValue+ currentValue}));

//splice
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);

//sort 
console.log(months.sort());

//slice
console.log(months.slice(0,2));

//values
const abc = ['a', 'b', 'c'];
const iterator = abc.values();

for (const value of iterator) {
  console.log(value);
}
//tolocalstring
const date1 = [ new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = date1.toLocaleString();
console.log(localeString);

//
console.log(date1.toString());