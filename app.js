let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
function getComputerChoice()
{
	const choices=['r','p','s'];

	const randomNumber=Math.floor(Math.random()*3);
	return choices[randomNumber];
}
//console.log(getComputerChoice());
function ctw(letter)
{
	if(letter==="r") return "Rock";
	else if(letter==="p") return "Paper";
return "Scissors";
}
function win(user,comp)
{
 userScore++;
 userScore_span.innerHTML=userScore;
 computerScore_span.innerHTML=computerScore;
 result_p.innerHTML=ctw(user)+"(user) beats "+ctw(comp)+"(computer).You win!";
}
function cwin(user,comp)
{
 computerScore++;
 userScore_span.innerHTML=userScore;
 computerScore_span.innerHTML=computerScore;
 result_p.innerHTML=ctw(comp)+"(computer) beats "+ctw(user)+"(user).Computer wins...";

}
function tie(user,comp)
{ 
 userScore_span.innerHTML=userScore;
 computerScore_span.innerHTML=computerScore;
 result_p.innerHTML="ITS A DRAW.YOU AND THE COMPUTER CHOSE "+ctw(user);
}
function game(userChoice)
{ 
  computerChoice=getComputerChoice();
  switch(userChoice+computerChoice)
  {
  	case "rs":
  	case "pr":
  	case "sp":
  	win(userChoice,computerChoice);break;
  	break;
  	case "rp":
  	case "ps":
  	case "sr":
  	cwin(userChoice,computerChoice);break;
  	break;
  	case "rr":
  	case "pp":
  	case "ss":
  	tie(userChoice,computerChoice);break;
  }
}
//game("c");
function main(){
 rock_div.addEventListener('click',function(){
	game("r");
 })
 paper_div.addEventListener('click',function(){
	game("p");
 })
 scissors_div.addEventListener('click',function(){
	game("s");
 })
}
main();