export var  test = " import and export succesfully completed";

 export function details (name,age,clg){
     return "name :"+name+" age : "+age+ " clg :"+clg;
 }

 export var obj = {
     name:"kishan vasani",
     age:"21",
     all: function(){
         return this.name+" " +this.age
     }
 };