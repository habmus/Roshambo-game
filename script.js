function getComputerChoice(){
    let array = ["Rock","Paper","Scissors"];
    let randomValue = array[Math.floor(Math.random() * array.length)];
    return randomValue;
}
console.log(getComputerChoice());
