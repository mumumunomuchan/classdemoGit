let nIntervId;

function changeColor(){
       if(!nIntervId){
              nIntervId= setInterval(flashText, 1000);
       }
}

function flashText(){
       const flash = document.getElementById("word");
       flash.className = flash.className === "go" ? "stop": "go";
}

function stopTextColor(){
       clearInterval(nIntervId);
       nIntervId = null;

}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);