document.addEventListener('DOMContentLoaded', function() {
  function getComputerChoice(){
    let array = ["Rock","Paper","Scissors"];
    let randomValue = array[Math.floor(Math.random() * array.length)];
    return randomValue;
  }

  let runningScore1 = 0;
  let runningScore2 = 0;


  function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      runningScore1 = runningScore1;
      runningScore2 = runningScore2;
      return "DRAW"
    }else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      runningScore2++
      return "You lose! Paper beats Rock";
    }else if(playerSelection.toLowerCase() ==="paper" && computerSelection.toLowerCase() === "scissors"){
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      runningScore2++

      return "You lose! Scissors beats Paper";
    }else if(playerSelection.toLowerCase() ==="scissors" && computerSelection.toLowerCase() === "rock"){
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      runningScore2++

      return "You lose! Rock beats Scissors";
    }else if(playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors"){
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      runningScore1 = runningScore1;
      runningScore2 = runningScore2;
      return "Invalid";
    }else{
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      runningScore1++
      return "You win!!!!!!!!!!"
    }
  }

  const rock =document.getElementById("rock")
  const paper =document.getElementById("paper")
  const scissors = document.getElementById("scissors")
  const resultDiv = document.getElementById("resultDiv")
  const myScore = document.getElementById("myScore")
  const aiScore = document.getElementById("aiScore")

  
  rock.addEventListener("click", function () {
    if ((runningScore1 || runningScore2) === 5) {
      if (runningScore1 > runningScore2) {
        resultDiv.textContent = 'You are the winner after 5 rounds'
        runningScore1 = 0;
        runningScore2 = 0;
      } else if (runningScore2 > runningScore1) {
        resultDiv.textContent = 'AI is the winner after 5 rounds'
        runningScore1 = 0;
        runningScore2 = 0;
      }
    } else {
      const play = playRound("rock", getComputerChoice())
      resultDiv.textContent = play;
      myScore.textContent = runningScore1
      aiScore.textContent = runningScore2
      
    }

  })

  paper.addEventListener("click", function() {
    if ((runningScore1 || runningScore2) === 5) {
      if (runningScore1 > runningScore2) {
        resultDiv.textContent = 'You are the winner after 5 rounds'
        runningScore1 = 0;
        runningScore2 = 0;
      } else if (runningScore2 > runningScore1) {
        resultDiv.textContent = 'AI is the winner after 5 rounds'
        runningScore1 = 0;
        runningScore2 = 0;
      }
    } else {
      const play = playRound("paper", getComputerChoice())
      resultDiv.textContent = play;
      myScore.textContent = runningScore1
      aiScore.textContent = runningScore2
      
    }
  })

  scissors.addEventListener("click", function (){
    if ((runningScore1 || runningScore2) === 5) {
      if (runningScore1 > runningScore2) {
        resultDiv.textContent = 'You are the winner after 5 rounds'
        runningScore1 = 0;
        runningScore2 = 0;
      } else if (runningScore2 > runningScore1) {
        resultDiv.textContent = 'AI is the winner after 5 rounds'
        runningScore1 = 0;
        runningScore2 = 0;
      }
    } else {
      const play = playRound("scissors", getComputerChoice())
      resultDiv.textContent = play;
      myScore.textContent = runningScore1
      aiScore.textContent = runningScore2
      
    }

  });
});