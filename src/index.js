let computerChoice = 0;
let a= 0;
const wl=document.getElementById("wl");
let wlt=[0,0,0];
let tries=0;
const W= document.getElementById("wins");
const L= document.getElementById("lose");
const T= document.getElementById("ties");
const Tr= document.getElementById("try");
const Total= document.getElementById("total");

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function AnimateComp(objc) {
    console.log("anim")
    document.getElementById(objc).classList.add("selectedC");
    setTimeout(function () {
        document.getElementById(objc).classList.remove("selectedC");
    }, 3000); // Remove the "selectedC" class after 1000 milliseconds (1 second)
}

function determineWinner(userChoice, computerChoice) {
    computerChoice= a
    
    if (userChoice === computerChoice) {
        wl.innerHTML="ITS A TIE";
        wlt[2]+=1;
    } else if ((userChoice===3 && computerChoice===1)||(userChoice===2 && computerChoice===3)||(userChoice===1 && computerChoice===2)){
        wl.innerHTML="YOU WONN!";
        wlt[0]+=1;
    } else {
        wl.innerHTML="YOU LOSEE!";
        wlt[1]+=1;
    }
    setTimeout(function () {
        tries+=1;
        Tr.innerHTML=tries;
        if(tries===5){
            if(wlt[0]===wlt[1]){
                Total.innerHTML="\nTIE"
            }
            if(wlt[0]>wlt[1]){
                Total.innerHTML="\nUSER"
            }
            if(wlt[0]<wlt[1]){
                Total.innerHTML="\nCOMP"
            }
        }
        wl.innerHTML="";
        W.innerHTML=wlt[0];
        L.innerHTML=wlt[1];
        T.innerHTML=wlt[2];
    }, 700);
}

function userChoiceHandler(userChoice) {
    setTimeout(function () {
       determineWinner(userChoice, computerChoice);
    }, 4000);
}

document.getElementById("b1").addEventListener("click", function () {
    animateSelection("b1");
    setTimeout(function () {
        userChoiceHandler(1);
    }, 1000); // Delay for 1000 milliseconds (1 second)
});

document.getElementById("b2").addEventListener("click", function () {
    animateSelection("b2");
    setTimeout(function () {
        userChoiceHandler(2);
    }, 1000); // Delay for 1000 milliseconds (1 second)
});

document.getElementById("b3").addEventListener("click", function () {
    animateSelection("b3");
    setTimeout(function () {
        userChoiceHandler(3);
    }, 1000); // Delay for 1000 milliseconds (1 second)
});

function animateSelection(obj) {

    computerChoice = getComputerChoice();
    if(computerChoice===1){a= computerChoice;AnimateComp("c1")}
    else if(computerChoice===2){a=computerChoice;AnimateComp("c2")}
    else{a=computerChoice;AnimateComp("c3")} 

    document.getElementById(obj).classList.add("selected");
    setTimeout(function () {
        document.getElementById(obj).classList.remove("selected");
    }, 3000); // Remove the "selected" class after 1000 milliseconds (1 second)
}
function reset(){
    wlt=[0,0,0];
    tries=0;
    wl.innerHTML="";
    W.innerHTML=wlt[0];
    L.innerHTML=wlt[1];
    T.innerHTML=wlt[2];
    Tr.innerHTML=tries;
    Total.innerHTML=""
}