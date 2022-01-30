var obj = {
    name1: "kishan vasani",
    clg : "government engineering college rajkot",
    placement:"inexture solution llp",
    details: function(){
        return this.name1 +" from "+this.clg+" place " +this.placement;
    }
};

console.log(obj.details());

var obj1 = {
 age:54,
 id:45,
 get all(){
     return this.age +this.id;
 },
 set up(up){
   return this.age=up;
 } 
};
var y ="";
for (let x in obj1)
{
    y = y +obj1[x]+" ";
}

console.log(y)
console.log(obj1.all)
console.log(obj1.set=55)

const myArray = Object.values(obj1);
console.log(myArray);

let myString = JSON.stringify(obj1);
console.log(myString);

 
function marks(phy,mat,chem)
{
    this.physics=phy,
    this.maths=mat,
    this.chemistry=chem,
    this.pr = function(){
        return (kishan.physics+kishan.maths+ kishan.chemistry)/3;
    }
}

var kishan = new marks(86,87,66);
marks.prototype.topper="yes";
console.log("physics="+kishan.physics+" "+"maths="+kishan.maths+" "+"chemistry="+ kishan.chemistry);
console.log("percentange = "+kishan.pr() +"and he is toppper"+kishan.topper);

