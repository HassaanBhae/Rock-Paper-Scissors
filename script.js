// console.log("Code Started");
// function getComputerChoice(){
//     computerChoice=Math.floor(Math.random()*3);
//     return;
// }
// function getHumanChoice(){
//     humanChoice=parseInt(prompt("Enter:\n[0] for Rock\n[1] for Paper \n[2] for Scissor"));
//     return;
// }
// function checkChoice(choice){
//     if(choice==0){
//         console.log("rock");
//     }
//     else if(choice==1){
//         console.log("paper");
//     }
//     else if(choice==2){
//         console.log("scissor");
//     }
//     else{
//         console.log("Invalid Number!");
//     }
// }
// function checkWin(){
//     if(humanChoice==computerChoice){
//         console.log("Draw!")
//     }
//     else if(humanChoice==0 && computerChoice==2){
//         console.log("Human Wins!")
//         humanWin();
//     }
//     else if(humanChoice==1 && computerChoice==0){
//         console.log("Human Wins!")
//         humanWin();
//     }
//     else if(humanChoice==2 && computerChoice==1){
//         console.log("Human Wins!")
//         humanWin();
//     }
//     else {
//         console.log("Computer Wins!")
//         computerWin();
//     }
// }
// function computerWin(){
//     computerScore++;
// }
// function humanWin(){
//     humanScore++;
// }
// function totalScore(){
//     console.log("Human Score:"+humanScore);
//     console.log("Computer Score:"+computerScore);
//     if(humanScore==computerScore){
//         console.log("Match Draw!")
//     }
//     else if(humanScore>computerScore){
//         console.log("Human Wins the Match!")
//     }
//     else if(humanScore<computerScore){
//         console.log("Computer Wins the Match!")
//     }
// }
// function plaground(){
//     for(i=1;i<=5;i++){
//         console.log("Round"+i+"!");
//         getComputerChoice();
//         getHumanChoice();
//         console.log("Computer chose:");
//         checkChoice(computerChoice);
//         console.log("Human chose:")
//         checkChoice(humanChoice);
//         checkWin();
//     }
//     totalScore();
// }
// let computerChoice=0;
// let humanChoice=0;
// let computerScore=0;
// let humanScore=0;
// plaground();

////////////////////////////////////////////////////////////***********/////////////////////////////////////////////////////////////////////////////////
//Ui Elemnts
const weapons = document.querySelectorAll(".weapon");
const rings = document.querySelectorAll(".ring");
const choice = document.getElementById("choice");
const menu = document.getElementById("menu");
const leaves = document.querySelectorAll(".leaf");
const slideshow = document.getElementById("slideshow");
const weaponHolder = document.getElementById("weapon-holder");

//Load The Images Before Hand
for (let i = 1; i <= 57; i++) {
    const img = document.createElement('img');
    img.src = `./images/png-bg/frame-${i}.png`;
    img.alt = `Image ${i}`;
    //Scaling With respect to Width of the Screen
    // if(screen.availWidth){
        //max 
        img.style.transform = "scale(1.3)";
        img.style.zIndex = "100";
        //less tha 1100
        // img.style.transform = "scale(1.4)";
        //less tha 1000
        // img.style.transform = "scale(1.5)";

    // }
    slideshow.appendChild(img);
}

let currentIndex = 0; 

//Grab The loaded Images
const images = document.querySelectorAll('.slideshow img'); 

//TO Show images
function showNextImage(intervalId) {
    images[currentIndex].classList.remove('active'); 
    currentIndex = (currentIndex + 1) % images.length; 
    images[currentIndex].classList.add('active'); 
    if(currentIndex === 56) {
            console.log("Finished Gif!",currentIndex);
            clearInterval(intervalId);
            return;
    }
}

//Call The Splash Screen
function splashScreen(){
    leaves.forEach(leaf => {
        leaf.style.zIndex = "1";
    });
    const intervalId = setInterval(() => showNextImage(intervalId), 30); 
    console.log('Splash Screen Done!')
}

//Add Listener For Each Weapon
weapons.forEach(weapon => {
    weapon.addEventListener("click", () => {
        //Ring
        const circle = weapon.children[1]; // Get the second child
        const head = weapon.children[0];
        circle.style.transform = "scale(0)"; // Shrinks to center
        circle.style.opacity = "0"; // Optional for fade effect
        head.style.transform= "scale(0)";
        head.style.opacity = "0"; // Optional for fade effect
        choice.textContent = weapon.children[0].textContent;
        // choice.textContent = choice.textContent.toUpperCase();
        setTimeout(() => {
            circle.style.transform = "scale(30)"; // Shrinks to center
            circle.style.opacity = "0.6"; // Optional for fade effect
            menu.style.transition = "1s";
            menu.style.opacity = 0;
            weaponHolder.style.transition = "1s";
            weaponHolder.style.opacity = 0;
            choice.style.transform = "scale(15)"; // Grows
            choice.style.opacity = "0.8"; // Optional for fade effect
            choice.style.transition = "transform 0.5s ease-in-out";
        }, 500); // Match this duration with the CSS transition time
        setTimeout(() => {
            console.log("Calling Splash Screen!");
            splashScreen(); // Call your desired function here
        }, 1500); // Function will execute after 1500 ms
    });
});

