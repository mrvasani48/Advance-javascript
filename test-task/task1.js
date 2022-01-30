//1).What is Regular Expression to validate Email ?
function validate() 
{
var name =document.getElementById("email").value;
var pattern= /^([a-z][a-z 0-9][a-z 0-9]+)@([a-z][a-z]+).([a-z]{2}[a-z]+)$/;

if (!name.match(pattern))
{
  alert("enter valid email address example aaa@aa.com");
  return false;
} 
else{
   alert("data succesfuuly add")
}

}