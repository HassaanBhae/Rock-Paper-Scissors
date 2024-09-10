console.log("Code Started");
function getComputerChoice(){
    computerChoice=Math.floor(Math.random()*3);
    console.log(computerChoice);
    checkChoice(computerChoice);
    return computerChoice;
}
function getHumanChoice(){
    humanChoice=parseInt(prompt("Enter:\n[0] for Rock\n[1] for Paper \n[2] for Scissor"));
    console.log(humanChoice);
    checkChoice(humanChoice);
    return humanChoice;
}
function checkChoice(choice){
    if(choice==0){
        console.log("rock");
    }
    else if(choice==1){
        console.log("paper");
    }
    else if(choice==2){
        console.log("scissor");
    }
    else{
        console.log("Invalid Number!");
    }
}
function checkWin(){
    if(humanChoice==computerChoice){
        console.log("Draw!")
    }
    else if(humanChoice==0 && computerChoice==2){
        console.log("Human Wins!")
    }
    else if(humanChoice==1 && computerChoice==0){
        console.log("Human Wins!")
    }
    else if(humanChoice==2 && computerChoice==1){
        console.log("Human Wins!")
    }
    else {
        console.log("Computer Wins!")
    }
}
let computerChoice=0;
let humanChoice=0;
getComputerChoice();
getHumanChoice();
checkWin();
