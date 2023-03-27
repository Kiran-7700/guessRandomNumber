let computerGuess;
let userGuess=[];
let userGuessUpdate=document.getElementById("textOutPut");
let userNumberUpdate=document.getElementById("inputBox");
let audio=new Audio("./audio/Message.mp3");
const init=()=>{
        computerGuess=Math.floor(Math.random()*100);
       // console.log(computerGuess)
       document.getElementById("newGameButton").style.display="none";
       document.getElementById("gameArea").style.display="none";
};

const startGame=()=>{
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
   
}
// new game start
const newGameBegin=()=>{
    audio.play();
    window.location.reload();
}

const startNewGame=()=>{
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute("disabled",true)
}

const compareGuess=()=>{
    let userNO=document.getElementById("inputBox").value;
    userGuess=[...userGuess,userNO];
    document.getElementById("guesses").innerHTML=userGuess;

  if(userGuess.length < maxGuess){
    if(userNO > computerGuess){
        userGuessUpdate.innerHTML="your guess is High";
        userNumberUpdate.value="";
    }
    else if(userNO < computerGuess){
        userGuessUpdate.innerHTML="your guess is Low";
        userNumberUpdate.value="";
    }
    else{
        userGuessUpdate.innerHTML="It's Correct";
        userNumberUpdate.value="";
        startNewGame();
    }
  }
  else{
    if(userNO > computerGuess){
        userGuessUpdate.innerHTML=`You loose !! correct Number is ${computerGuess}`;
        userNumberUpdate.value="";
        startNewGame();
    }
    else if(userNO < computerGuess){
        userGuessUpdate.innerHTML=`You loose !! correct Number is ${computerGuess}`;
        userNumberUpdate.value="";
        startNewGame();
    }
    else{
        userGuessUpdate.innerHTML="It's Correct";
        userNumberUpdate.value="";
        startNewGame();
    }
  }
    document.getElementById("attempts").innerHTML=userGuess.length;
}

const easyMode=()=>{
    audio.play();
    maxGuess=10;
    startGame();
}
const hardMode=()=>{
    audio.play();
    maxGuess=5;
    startGame();
}
