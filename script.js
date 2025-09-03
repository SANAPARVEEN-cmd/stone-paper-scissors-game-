let userscore  = 0;
let compscore  = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user_score");
const compscorepara = document.querySelector("#comp_score");

const showWinner=(userwin,userchoice,compchoice)=>{
if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText  = `you win! your ${userchoice} beats ${compchoice}`;
    msg.style.background = "green";
}else{
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText  = `you lose!your  ${compchoice} beats  ${userchoice}`;
    msg.style.background = "Red";
}
};


const drawgame=()=>{
    msg.innerText  = "Game Drawn.Play Again";
    msg.style.background = "#081b31";
}

const getcompchoice=()=>{
const options = ["rock","paper","scissor"];
const randidx  =Math.floor(Math.random()*3);
return options[randidx];
}

const playGame = (userchoice) =>{
const compchoice = getcompchoice();
if(userchoice===compchoice){
    drawgame();
}else{
    let userwin = true;
    if(userchoice==="rock")
        // scissor , paper
   { 
    userwin = compchoice==="paper"?false:true;
  }else if(userchoice==="paper"){
    // scissor,rock
    userwin= compchoice==="scissor"?false:true;
}else{
    userwin = compchoice ==="rock"?false:true;
}
showWinner(userwin,userchoice,compchoice);
}

};

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");
playGame(userchoice);
});
});