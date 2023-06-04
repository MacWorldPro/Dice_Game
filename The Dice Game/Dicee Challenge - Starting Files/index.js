//For Dice 1
var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
document.querySelectorAll("img")[0].setAttribute("src",(("images/dice")+randomNumber1+(".png")));

//For Dice 2
var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
document.querySelectorAll("img")[1].setAttribute("src",(("images/dice")+randomNumber2+(".png")));

//Changing the H1 Tag values
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="Player 1 Wins";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").textContent="Player 2 Wins";
}
else {
  document.querySelector("h1").textContent="Match Draws";
}
