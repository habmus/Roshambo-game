function getComputerChoice(){
    let array = ["Rock","Paper","Scissors"];
    let randomValue = array[Math.floor(Math.random() * array.length)];
    return randomValue;
  }
  
  function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      return "DRAW"
    }else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      return "You lose! Paper beats Rock";
    }else if(playerSelection.toLowerCase() ==="paper" && computerSelection.toLowerCase() === "scissors"){
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      return "You lose! Scissors beats Paper";
    }else if(playerSelection.toLowerCase() ==="scissors" && computerSelection.toLowerCase() === "rock"){
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      return "You lose! Rock beats Scissors";
    }else if(playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors"){
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      return "Invalid";
    }else{
      console.log(playerSelection.toLowerCase())
      console.log(computerSelection.toLowerCase())
      return "You win!!!!!!!!!!"
    }
  }
  
  
  function playGame(){
      for(i = 0; i<5; i++){
      const playerSelection = prompt();
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    }
  }
  
  playGame();
  
  