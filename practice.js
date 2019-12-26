var x=Math.random();
x=x*6 + 1;
x=Math.floor(x);

var y=Math.random();
y=y*6 + 1;
y=Math.floor(y);

if(x>y)
{
  document.getElementById('resultboard').innerText="Player One is Win !";
}
else if(x==y)
{
  document.getElementById('resultboard').innerText="Match is Tie !";
}
else {
  document.getElementById('resultboard').innerText="Player Two is Win !";
}
var x1="dice"+x+".png";
var x2="dice"+y+".png";
document.getElementById('image1').setAttribute("src",x1);
document.getElementById('image2').setAttribute("src",x2);
