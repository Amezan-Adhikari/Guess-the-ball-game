let ball = document.getElementById('ball');
let shuffle = document.getElementById('Shuffle');
let lock = document.getElementById('LockPosition');
let result = document.getElementById('result');
let currentCup;
let lockedAnswer;
let isAnswerLocked = false;
let nowGuess=false;
let random;
let playAgain =false;

function cupclicked(id){
    if(nowGuess){
        Guess(id);
    }
    else{
    if(isAnswerLocked)return
    let cup = document.getElementById(`cup${id}`).getBoundingClientRect();
    if(id==1){ball.style = `top:${cup.top+32}px;left:${cup.left+32}px`};
    if(id==2){ball.style = `top:${cup.top+32}px;left:${cup.left+32}px`};
    if(id==3){ball.style = `top:${cup.top+32}px;left:${cup.left+32}px`};
    currentCup=id;
    lock.disabled =false;}
}

function lockAnswer(){
    lockedAnswer=currentCup;
    removeBall();
    lock.disabled=true;
    isAnswerLocked=true;
    shuffle.disabled=false;
}

function Shuffle(){
    for(let i=0;i<3;i++){
    document.getElementsByClassName('cup')[i].style = 'animation: shuffle 0.4s ease 5;'}
    shuffle.disabled=true;
    setTimeout(()=> {result.style ="display:grid";document.getElementsByTagName('h2')[0].innerHTML='Guess a cup';
    document.getElementsByTagName('button')[2].innerHTML='Guess';nowGuess=true},2500);
    random = Math.floor(Math.random()*3)+1;
    let cup = document.getElementById(`cup${random}`).getBoundingClientRect();
    ball.style = `top:${cup.top+32}px;left:${cup.left+32}px;display:none`;
    
    
}
function Guess(num){
    if(random == num){
        document.getElementById(`cup${random}`).style = "opacity:0";
        let cup = document.getElementById(`cup${random}`).getBoundingClientRect();
        ball.style = `top:${cup.top+50}px;left:${cup.left+40}px;display:block`;
        {
        result.style = "display:grid";
        document.getElementsByTagName('h2')[0].innerHTML=`Thats great XD`;
        document.getElementsByTagName('button')[2].innerHTML='Play';
        playAgain=true;
        }
    }
    else{
        for(let i=1;i<=3;i++){
        document.getElementById(`cup${i}`).style = "opacity:0.4";}
        let cup = document.getElementById(`cup${random}`).getBoundingClientRect();
        ball.style = `top:${cup.top+50}px;left:${cup.left+40}px;display:block`;
        isAnswerLocked=true;
        setTimeout(()=>
        {
        result.style = "display:grid";
        document.getElementsByTagName('h2')[0].innerHTML='Ops thats wrong Play Again';
        document.getElementsByTagName('button')[2].innerHTML='Play Again';
        playAgain=true;
    },500);}
}
function guessNow(){
    result.style ="display:none"
    if(playAgain){
        playAgain=false;
        nowGuess=false;
        isAnswerLocked=false;
        ball.style = `top:50%;left:47%;display:block`;
        for(let i=1;i<=3;i++){
            document.getElementById(`cup${i}`).style = "opacity:1";}
    }
}
function removeBall(){
    ball.style = "display:none";
}

function startGameInfo(){
        result.style = "display:grid";
        document.getElementsByTagName('h2')[0].innerHTML='Click the cup to put the ball';
        document.getElementsByTagName('button')[2].innerHTML='OK';
}
startGameInfo();