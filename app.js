function myFunction(){
var txt;
var person = prompt("Please enter your username:", "Harry Potter");
var check= false;
var x;
for (x=0;x<5;x++)
{

      if(json[x].name==person)
      check=true;

}

var i;
    for (i=0;i<pw.length;i++)
{

      if(pw[i].Username==person)
      {
          break;
      }

}
if(i==pw.length)
{
    document.getElementById("result").innerHTML="Please enter a valid username";
}

else
{
var pass = prompt("Please enter your password:");
  if(pw[i].Identifier==pass)
{if(check==true)

{

    document.getElementById("result").innerHTML="Click here";
    document.getElementById("result").href = "https://level3-8e8c7.web.app";

    // a.href = "https://www.geeksforgeeks.org";



}
else{

    document.getElementById("result").innerHTML="Click here";
    document.getElementById("result").href = "https://redirection-efa31.web.app";





}
}
else{
    document.getElementById("result").innerHTML="Wrong Password";
}

}
}
