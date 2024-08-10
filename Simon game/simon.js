let userseq = [];
let gameseq = [];
let btns =["yellow","red","green","pink"]

let started = false;
let level = 0;
let h5 = document.querySelector("h5")

document.addEventListener("keypress", function (){
    if(started == false){
        console.log("Game is Started")
        started = true;
        levelup();
    }
})

function levelup(){
    userseq=[];
    level++;
    h5.innerText = `Level ${level}`;
    randomColor();



}
function flashBtn(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");

    },250);

}
function randomColor(){
    let randomIdx = Math.floor(Math.random()*3)
    let randomClr = btns[randomIdx];
    gameseq.push(randomClr);
    let btn = document.querySelector(`.${randomClr}`)
    flashBtn(btn);
    console.log(gameseq);
}
function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            levelup();
        }
    }else{
        h5.innerHTML=`Game Over! Press any Key To Start Game <br> Your Score is ${level}`;
        let body = document.querySelector("body");
        body.classList.add("color")
        setTimeout(function (){
            body.classList.remove("color")
        },100)
        reset();
    }
    
}
function accesBtn(){
    let btn = this;
    flashBtn(btn);
    let id = btn.getAttribute("id");
    userseq.push(id);
    checkAns(userseq.length-1)
}
let allbtns = document.querySelectorAll(".box");
for(btn1 of allbtns){
    btn1.addEventListener("click",accesBtn)
}

function reset(){
    userseq=[];
    gameseq=[];
    level=0;
    started=false;
}

