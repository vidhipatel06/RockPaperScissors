let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userScorePara  = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked!",userChoice);
        playGame(userChoice);
    });
});

const genCompChoice=()=>{
     const options = ["rock","paper","scissors"]
     const radIdx = Math.floor(Math.random()*3);
     return options[radIdx];


}

const drawGame = ()=>{
    msg.innerText = "Draw Game.Play again.";
    msg.style.backgroundColor = "#081b31";
}

playGame=(userChoice)=>{
    console.log("user choice is = ",userChoice);   
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false:true;
        }else{
            userWin = compChoice ==="rock" ?false:true;
        }
        showWinner(userWin);
    }
};

 const showWinner=(userWin)=>{

    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText="You win.";
        msg.style.backgroundColor = "green";
        }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText="You loss."
        msg.style.backgroundColor="red";
    }
 }


 
