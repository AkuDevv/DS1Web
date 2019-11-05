// Baha Eddine Ourahou , Safi Sif Eddine , machine : 24;


var score = document.getElementById("score-0");
var scoreTemp = document.getElementById("courent-0");
var score2 = document.getElementById("score-1");
var scoreTemp2 = document.getElementById("courent-1");
var joueur = document.querySelector(".panel-joueur-0");
var joueur2 = document.querySelector(".panel-joueur-1");
var btnNouveau = document.querySelector(".btn-new");
var deImage = document.querySelector(".de");
var btnLancer = document.querySelector(".btn-lancer");
var btnPasser = document.querySelector(".btn-passe");

var tempScore = 0;
var scoreTotal1=0;
var scoreTotal2=0;
var joueurActif = 0;

function switchPlayer()
{
    if(joueurActif == 0) 
    {
    joueurActif=1;
    joueur.setAttribute("class","panel-joueur-0");
    joueur2.setAttribute("class","panel-joueur-1 actif");
    deImage.setAttribute("style","display:none;");
    }
    else 
    {
    joueurActif = 0;
    joueur.setAttribute("class","panel-joueur-0 actif");
    joueur2.setAttribute("class","panel-joueur-1");
    deImage.setAttribute("style","display:none;");
    }
}

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

function lancer()
{
    if(joueurActif==0){
    var val = Math.floor((Math.random()*6)+1);
    if(val != 1)
    {
        deImage.setAttribute("style","");
        deImage.setAttribute("src","de-"+val+".png");
        tempScore = tempScore+val;
        scoreTemp.innerHTML = tempScore;
    }
    else
    {
        tempScore = 0;
        joueurSuivant();
    }
}
    if(joueurActif==1){
    var val = Math.floor((Math.random()*6)+1);
    if(val != 1)
    {
        deImage.setAttribute("style","");
        deImage.setAttribute("src","de-"+val+".png");
        tempScore = tempScore+val;
        scoreTemp2.innerHTML = tempScore;
    }
    else
    {
        tempScore = 0;
        joueurSuivant();
    }
}
}

function joueurSuivant()
{
    if(joueurActif == 0)
    {
        scoreTotal1 = scoreTotal1+tempScore;
        score.innerHTML = scoreTotal1;
        switchPlayer();
        tempScore = 0;
        scoreTemp.innerHTML = "0";
    }
    else
    {
        scoreTotal2 = scoreTotal2+tempScore;
        score2.innerHTML = scoreTotal2;
        switchPlayer();
        tempScore = 0;
        scoreTemp2.innerHTML = "0";
    }
}




btnNouveau.addEventListener("click",init);
btnLancer.addEventListener("click",lancer);
btnPasser.addEventListener("click",joueurSuivant);

