let score;
let questionNum;
let right=0;
let wrong=0;

function startGame(){
score=0;
questionNum=1;
}


function endGame(){
if(score==questionNum){
    //document.getElementById("").addEventListener("click",fullVictory);
    fullVictory();
} else if (score>=(questionNum/2)){
    //document.getElementById("").addEventListener("click",halfVictory);
    halfVictory();
} else if (score>0 && score<(questionNum/2)){
    //document.getElementById("").addEventListener("click",lowVictory);
    lowVictory();
} else if (score==0){
    //document.getElementById("").addEventListener("click",lose);
    lose();
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
function lose(){
    document.getElementById("").innerHTML="אין נקודות, אולי תצליחו יותר בפעם הבאה"
}


if(questionNum>10){//(questionNum==9){
    //document.getElementById("").addEventListener("click",endGame);
    endGame();
}

function checkAnswer(){
    let answer;
    answer=__;
    if(__==__){
        right=1;
        checkRightOrWrong();
    } else {
        wrong=1;
        checkRightOrWrong();
    }
//document.getElementById("").addEventListener("click",checkRightOrWrong);
}

function checkRightOrWrong(){
if(right!=0){//()
    score++;
    questionNum++;
    right=0;
}

if(wrong!=0){
    questionNum++;
    wrong=0;
}
}

if("a"==0 && "b"==0){
//document.getElementById("").addEventListener("click",startGame);
endGame();
}