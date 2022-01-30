var test = "javascript its funnny";
function myfunction(){
    console.log(test);
    var test1 ="its run";
    function nestedfunction(){
        console.log(test1);
    };
    nestedfunction();
};
myfunction();
console.log(test1);