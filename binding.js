var  test1 = {
    name:"tets one",
    run:"yes"
}
var  test2 = {
    name:"tets two",
    run:"yes"
}
var  test3 = {
    name:"tets three",
    run:"no"
}

function alldetail() {
    return "name = "+ this.name +" run =" +this.run
}
var print1=alldetail.bind(test1);
console.log(print1());

var print2=alldetail.bind(test2);
console.log(print2());

var print3=alldetail.bind(test3);
console.log(print3());

//The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.