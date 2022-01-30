"use strict";

var arr= [45, 4, 9, 16, 25]
arr.forEach(va);
function va(value){
console.log(value);
}
var a= "   demo access string code";
console.log(a[0]+ a.charAt(5) + a.charCodeAt(1));

console.log(a.trim().length);
console.log(a.length);


console.log(Array.isArray(arr));

var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = numbers1.map(myFunction);

document.getElementById("demo").innerHTML = numbers2;

function myFunction(value, index, array) {
  return value * 2;
}

var numbers = [5, 4, 9, 6, 7,8,10,45];
  console.log(numbers.filter(m));
  function m (value){
  return  value > 15;
  };


var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value) {
  return total + value;
}

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;

function myFunction(value, index, array) {
  return value > 1;
}

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.some(myFunction);

document.getElementById("demo").innerHTML = "Some over 18 is " + allOver18;

function myFunction(value) {
  return value > 18;
}
var arra= ["a","b","c","d"]
console.log(arra.indexOf("a"));

var test1= [1,2,3,4,5,6,7,8,9];
console.log(test1.lastIndexOf(1));


var obj = {
  name:"kishan vasnai",
  year:"20222"
}
console.log(obj.name+obj.year)
console.log(JSON.stringify(obj))//json.Parse() use json to text in js
console.log(typeof(JSON.stringify(obj)));

var today = new Date(); 
console.log(today.getMonth()+1);  //1
console.log(Date.now() ); //1643016487926
console.log(today.toDateString() );//Mon Jan 24 2022
console.log(today.toISOString() );//2022-01-24T09:29:24.531Z
console.log(today.toJSON() )//2022-01-24T09:30:53.295Z


var person = {
  name :"kishan vasani",
  year : '2022',
  details : function (){
    return this.name +" "+ this.year ;
    }
    
  
};
console.log(person.details());

var person1 = {
  name :"kishan vasani 1",
  year : '2022 2',
  get detail(){
    return this.name +" "+ this.year ;
    }
    
  
};
console.log(person1.detail);

var person3 = {
  firstName: "John",
  lastName : "Doe",
  language : "no",
  
  set lang(value) {
     this.language=value;
  },
  

};
person3.lang="hindi";
console.log (person3.language);

var person4 = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
 
  set lang(value) {
   this.firstName = value;
  }
};
person4.firstName = "kd";
console.log(person4.firstName);




var person5 = {
  name : "amzon",
  year: 2022
}
Object.defineProperty(person5, "name",{
  get: function (){return name;},
  set: function (value){ name=value}
});
person5.name="kishan vasani";
console.log(person5.name);

var person6 = {
  name : "amzon",
  year: 2022
}
Object.defineProperty(person6, "name",{
  value: "gopal "
});
console.log(person6.name);

// Allowed:
//var person = {fname : "kishan",lname : "vasani"} ;

// Allowed:
//var person = '{"firstName":"John", "lastName":"Doe", "age":46}'
//JSON.parse(person)

// Not allowed:
//var person = '{"firstName":"John", "lastName":"Doe", "age":46,}'
//JSON.parse(person)
