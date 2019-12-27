var time=new Date();
var color; 

if(time.getHours() == 9)
{
    color="green";
}
else if (time.getHours()== 15)
{
    color="red"
} else {color="yellow"}
var ayElement = document.getElementById("timecolor");
ayElement.style.backgroundColor = color


var userName = prompt("¿Cúal es tu nombre?");
document.getElementById("userName").innerHTML += userName;