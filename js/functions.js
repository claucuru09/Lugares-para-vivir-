var time=new Date();
var color; 

if(time.getHours() ==13)
{
    color="green";
}
else if (time.getHours()== 15)
{
    color="red"
}
var ayElement = document.getElementById("timecolor");
ayElement.innerHTML = color;


var userName = prompt("¿Cúal es tu nombre?");
var element2 = document.getElementById("username").innerHTML = username;