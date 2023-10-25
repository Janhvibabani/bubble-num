function makeBubble(){
    let bubbles='';

    for (let index = 0; index < 65; index++) {
        let rn=Math.floor(Math.random()*10);
        bubbles +=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".game-section").innerHTML=bubbles;
    document.querySelector(".game-over").style.visibility="hidden"
}
makeBubble()


function startTimer(){
    let timer=60;
    var timeInt=setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
           
        }else{
            clearInterval(timeInt);
            document.querySelector(".game-section").innerHTML="<h1>Game Over</h1>";
            document.querySelector("#final-score").innerHTML=`<h1>Your score is ${score}</h1>`;
            document.querySelector(".game-over").style.visibility="";

        }
    },1000)
}
startTimer()

let newHit=Math.floor(Math.random()*10);

function getNewHit(){
    newHit=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=newHit;
}
getNewHit()


let score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}

document.querySelector(".game-section").addEventListener("click",(dets)=>{
    if(newHit==dets.target.textContent){
        increaseScore()
        getNewHit()
        makeBubble()
    }
})

document.getElementById("restart").addEventListener("click",()=>{
    makeBubble()
    startTimer()
    score=0;
    document.querySelector("#score").textContent=score;
    getNewHit()
})