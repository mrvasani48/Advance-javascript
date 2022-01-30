var array =[6,11,12,3,4,5,6,7,8,9];
for(x of array)
{
    console.log(x);
}


var duplicatearray = [...array];
duplicatearray.forEach(element => {
    console.log(element);
});

var obj ={};
obj.name="kishan vasni";
obj.number=9265171523;
console.log(obj);

var duplicateobj = {...obj};
console.log(duplicateobj);
