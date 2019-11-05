var score = document.getElementById("score-0");
var scoreTemp = document.getElementById("courent-0");
var score2 = document.getElementById("score-1");
var scoreTemp2 = document.getElementById("courent-1");
var joueur = document.querySelector(".panel-joueur-0");
var joueur2 = document.querySelector(".panel-joueur-1");
var btnNouveau = document.getElementsByClassName("btn-new")[0];
var deImage = document.querySelector(".de");

function init()
{
    score.innerHTML = "0";
    scoreTemp.innerHTML = "0";
    score2.innerHTML = "0";
    scoreTemp2.innerHTML = "0";
    joueur.setAttribute("class","panel-joueur-0 actif");
    joueur2.setAttribute("class","panel-joueur-1");
    deImage.setAttribute("style","display:none;");
}

