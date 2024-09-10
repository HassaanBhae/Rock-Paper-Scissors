console.log("Code Started");
function getComputerChoice(){
    computerChoice=Math.floor(Math.random()*3);
    return;
}
function getHumanChoice(){
    humanChoice=parseInt(prompt("Enter:\n[0] for Rock\n[1] for Paper \n[2] for Scissor"));
    return;
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
        humanWin();
    }
    else if(humanChoice==1 && computerChoice==0){
        console.log("Human Wins!")
        humanWin();
    }
    else if(humanChoice==2 && computerChoice==1){
        console.log("Human Wins!")
        humanWin();
    }
    else {
        console.log("Computer Wins!")
        computerWin();
    }
}
function computerWin(){
    computerScore++;
}
function humanWin(){
    humanScore++;
}
function totalScore(){
    console.log("Human Score:"+humanScore);
    console.log("Computer Score:"+computerScore);
    if(humanScore==computerScore){
        console.log("Match Draw!")
    }
    else if(humanScore>computerScore){
        console.log("Human Wins the Match!")
    }
    else if(humanScore<computerScore){
        console.log("Computer Wins the Match!")
    }
}
function plaground(){
    for(i=1;i<=5;i++){
        console.log("Round"+i+"!");
        getComputerChoice();
        getHumanChoice();
        console.log("Computer chose:");
        checkChoice(computerChoice);
        console.log("Human chose:")
        checkChoice(humanChoice);
        checkWin();
    }
    totalScore();
}
let computerChoice=0;
let humanChoice=0;
let computerScore=0;
let humanScore=0;
plaground();
