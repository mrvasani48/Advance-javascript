function validate() 
{
    var name =document.getElementById("name").value;
   
    var  pattern1  = /^[a-z A-Z]* $/;
    if (name.match(pattern1)) {
        alert("done");
        
    }
    else {
        alert("wrong enter name");
    }

    var email =document.getElementById("email").value;
    var  pattern  = /^ ([a-z 0-9]+)@([a-z]{2}).([a-z]{2,5}) $/;
    if (email.match(pattern)) {
        alert("done");
        
    }
    else {
        alert("wrong enter emaiil");
    }
     var pattern =/^[7-9][0-9]{9}$/; // number
     var pattern = /^ [a-z A-Z][a-z A-Z 0-9]{5,10}$/ //username
}
/* modifire 
g   Global search.	
i	Case-insensitive search.	
m	Multi-line search.

text.match(pattern)	The String method match()
text.search(pattern)	The String method search()
pattern.exec(text)	The RexExp method exec()
pattern.test(text)	The RegExp method test() 

/indicate regular expression/
^strat string
[a-z] small a to z
[A-z] small A to Z
[0-9]  0 to 9 number
{}
$ end string
*/ 

