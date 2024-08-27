let score;
let questionNum;

function StartGame(){
score=0;
questionNum=1;
}


function EndGame(){
if(score==questionNum){
    fullVictory();
} else if (score>=(questionNum/2)){
    halfVictory();
} else if (score>0 && score<(questionNum/2)){
    lowVictory();
} else if (score==0){
    Lose();
}
}


function fullVictory(){
    document.getElementById("").innerHTML="כל הכבוד! הצלחתם לענות על כל השאלות"
}
function halfVictory(){
    document.getElementById("").innerHTML="יפה מאוד! ההבנה שלכם בטריוויה מרשימה"
}
function lowVictory(){
    document.getElementById("").innerHTML="לא רע, יש מקום לשיפור"
}
function Lose(){
    document.getElementById("").innerHTML="אין נקודות, אולי תצליחו יותר בפעם הבאה"
}


if(questionNum>10){
    EndGame();
}

if(right==true){
    score++;
    questionNum++;
    right=false;
}

if(wrong==true){
    questionNum++;
    wrong=false;
}

