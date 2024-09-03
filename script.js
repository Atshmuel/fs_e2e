const allQuestionArr = [
    {
        "question": "מהי בירת ישראל?",
        "options": [
            "ירושלים",
            "תל אביב",
            "חיפה",
            "באר שבע"
        ],
        "correct_answer": "ירושלים"
    },
    {
        "question": "מהו המספר הראשוני הקטן ביותר?",
        "options": [
            "1",
            "2",
            "3",
            "5"
        ],
        "correct_answer": "2"
    },
    {
        "question": "איזו חיה נחשבת למלך החיות?",
        "options": [
            "פיל",
            "אריה",
            "נמר",
            "דוב"
        ],
        "correct_answer": "אריה"
    },
    {
        "question": "באיזו שנה הוקמה מדינת ישראל?",
        "options": [
            "1948",
            "1967",
            "1956",
            "1945"
        ],
        "correct_answer": "1948"
    },
    {
        "question": "מי כתב את הספר 'הארי פוטר'?",
        "options": [
            "ג'.ק. רולינג",
            "ג'.ר.ר. טולקין",
            "ג'ורג' ר.ר. מרטין",
            "סטיבן קינג"
        ],
        "correct_answer": "ג'.ק. רולינג"
    },
    {
        "question": "מהי השפה המדוברת ביותר בעולם?",
        "options": [
            "אנגלית",
            "ספרדית",
            "סינית",
            "הינדי"
        ],
        "correct_answer": "סינית"
    },
    {
        "question": "איזה כוכב לכת הוא הקרוב ביותר לשמש?",
        "options": [
            "נוגה",
            "כדור הארץ",
            "מאדים",
            "כוכב חמה"
        ],
        "correct_answer": "כוכב חמה"
    },
    {
        "question": "מהו הים הגדול ביותר בעולם?",
        "options": [
            "הים התיכון",
            "הים האדום",
            "הים הכספי",
            "האוקיינוס השקט"
        ],
        "correct_answer": "האוקיינוס השקט"
    },
    {
        "question": "מהי הנוסחה הכימית של מים?",
        "options": [
            "H2O",
            "CO2",
            "O2",
            "CH4"
        ],
        "correct_answer": "H2O"
    },
    {
        "question": "מהו שמה של המדינה הקטנה ביותר בעולם?",
        "options": [
            "ליכטנשטיין",
            "מונקו",
            "סאן מרינו",
            "וותיקן"
        ],
        "correct_answer": "וותיקן"
    },
    {
        "question": "מי צייר את המונה ליזה?",
        "options": [
            "לאונרדו דה וינצ'י",
            "פבלו פיקאסו",
            "וינסנט ואן גוך",
            "רפאל"
        ],
        "correct_answer": "לאונרדו דה וינצ'י"
    },
    {
        "question": "באיזו שנה נחתה לראשונה אדם על הירח?",
        "options": [
            "1965",
            "1969",
            "1972",
            "1959"
        ],
        "correct_answer": "1969"
    },
    {
        "question": "מי המציא את הטלפון?",
        "options": [
            "אלברט איינשטיין",
            "תומס אדיסון",
            "אלכסנדר גרהם בל",
            "ניקולה טסלה"
        ],
        "correct_answer": "אלכסנדר גרהם בל"
    },
    {
        "question": "באיזו מדינה נמצאת העיר פריז?",
        "options": [
            "צרפת",
            "איטליה",
            "ספרד",
            "גרמניה"
        ],
        "correct_answer": "צרפת"
    },
    {
        "question": "מהו המאכל המסורתי בחג הפסח?",
        "options": [
            "פלאפל",
            "חלה",
            "מצה",
            "סופגניה"
        ],
        "correct_answer": "מצה"
    },
    {
        "question": "איזו יבשת היא הגדולה ביותר בשטח?",
        "options": [
            "אפריקה",
            "אסיה",
            "אירופה",
            "אמריקה הצפונית"
        ],
        "correct_answer": "אסיה"
    },
    {
        "question": "מהו מספר העצמות בגוף האדם הבוגר?",
        "options": [
            "206",
            "201",
            "220",
            "186"
        ],
        "correct_answer": "206"
    },
    {
        "question": "איזה חיה היא היונק הגדול ביותר בעולם?",
        "options": [
            "פיל",
            "כריש לוויתן",
            "לוויתן כחול",
            "ג'ירפה"
        ],
        "correct_answer": "לוויתן כחול"
    },
    {
        "question": "מהי עיר הבירה של איטליה?",
        "options": [
            "מילאנו",
            "רומא",
            "ונציה",
            "פירנצה"
        ],
        "correct_answer": "רומא"
    },
    {
        "question": "מהי המדינה המזרחית ביותר בעולם?",
        "options": [
            "יפן",
            "ניו זילנד",
            "אוסטרליה",
            "סין"
        ],
        "correct_answer": "ניו זילנד"
    },
    {
        "question": "מי היה ראש הממשלה הראשון של ישראל?",
        "options": [
            "דוד בן-גוריון",
            "גולדה מאיר",
            "יצחק רבין",
            "מנחם בגין"
        ],
        "correct_answer": "דוד בן-גוריון"
    },
    {
        "question": "מהו הר הגעש הגבוה ביותר בעולם?",
        "options": [
            "הר הגעש אתנה",
            "הר פוג'י",
            "מאונה קיאה",
            "הר הגעש קילוואיה"
        ],
        "correct_answer": "מאונה קיאה"
    },
    {
        "question": "מהי שפת התכנות הפופולרית ביותר בעולם?",
        "options": [
            "Python",
            "Java",
            "C#",
            "JavaScript"
        ],
        "correct_answer": "JavaScript"
    },
    {
        "question": "מי כתב את המחזה 'המלט'?",
        "options": [
            "וויליאם שייקספיר",
            "ג'ורג' אורוול",
            "צ'ארלס דיקנס",
            "ליאו טולסטוי"
        ],
        "correct_answer": "וויליאם שייקספיר"
    },
    {
        "question": "מהי החיה המהירה ביותר בעולם?",
        "options": [
            "ברדלס",
            "נץ",
            "סוס",
            "דולפין"
        ],
        "correct_answer": "נץ"
    },
    {
        "question": "באיזו מדינה נמצאת העיר ניו יורק?",
        "options": [
            "ארצות הברית",
            "קנדה",
            "אנגליה",
            "מקסיקו"
        ],
        "correct_answer": "ארצות הברית"
    },
    {
        "question": "מהו המטבע הרשמי של יפן?",
        "options": [
            "דולר",
            "אירו",
            "ין",
            "פאונד"
        ],
        "correct_answer": "ין"
    },
    {
        "question": "באיזה יבשת נמצאת מצרים?",
        "options": [
            "אסיה",
            "אפריקה",
            "אירופה",
            "אמריקה הדרומית"
        ],
        "correct_answer": "אפריקה"
    },
    {
        "question": "באיזו שנה התרחש רצח רבין?",
        "options": [
            "1992",
            "1995",
            "1998",
            "2000"
        ],
        "correct_answer": "1995"
    },
    {
        "question": "מי היה איינשטיין?",
        "options": [
            "סופר",
            "מוזיקאי",
            "פיזיקאי",
            "צייר"
        ],
        "correct_answer": "פיזיקאי"
    },
    {
        "question": "מהו השיר הישראלי שזכה באירוויזיון הראשון?",
        "options": [
            "הללויה",
            "אבניבי",
            "דיווה",
            "טוי"
        ],
        "correct_answer": "אבניבי"
    },
    {
        "question": "מהו מקור נהר הנילוס?",
        "options": [
            "אגם ויקטוריה",
            "הים התיכון",
            "אגם טנגניקה",
            "הרי האטלס"
        ],
        "correct_answer": "אגם ויקטוריה"
    },
    {
        "question": "איזו חיה היא החזקה ביותר בעולם ביחס לגודלה?",
        "options": [
            "הנמלה",
            "פיל",
            "דוב גריזלי",
            "אריה"
        ],
        "correct_answer": "הנמלה"
    },
    {
        "question": "באיזו מדינה הומצאה הפיצה?",
        "options": [
            "איטליה",
            "צרפת",
            "ארצות הברית",
            "ספרד"
        ],
        "correct_answer": "איטליה"
    },
    {
        "question": "מהו הספר הכי נמכר בעולם?",
        "options": [
            "הארי פוטר",
            "תנ\"ך",
            "מלחמה ושלום",
            "שר הטבעות"
        ],
        "correct_answer": "תנ\"ך"
    },
    {
        "question": "איזה אמן כתב את השיר 'היי ג'וד'?",
        "options": [
            "הביטלס",
            "האלביס פרסלי",
            "בוב דילן",
            "ג'ון לנון"
        ],
        "correct_answer": "הביטלס"
    }
]

const initialState = {
    gameState: 'init',
    time: 15,
    questionCnt: 1,
    corrAnswersCnt: 0,
    name: "",
    score: getBestPlayer(),
    questionData: {},
}


function shuffleQuestions() {
    for (let i = allQuestionArr.length - 1; i > 0; i--) {
        let rnd = Math.floor(Math.random() * (i + 1))
        let temp = allQuestionArr[i]
        allQuestionArr[i] = allQuestionArr[rnd]
        allQuestionArr[rnd] = temp
    }
}

function setLocalStorage(keyName, data) {
    localStorage.setItem(keyName, JSON.stringify(data));
}
function getLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}
function getById(elId) {
    return document.getElementById(elId)
}
function getAllByClass(className) {
    return document.querySelectorAll(`.${className}`)
}
function getBestPlayer() {
    let bScore = 0
    const gamesInfo = getLocalStorage('games-info')
    if (!gamesInfo) return bScore
        gamesInfo.map((el) => {
            bScore = Math.max(bScore, el.score)
        }
    )
    return bScore
}

function toggleTimeAlert() {
    timer.classList.toggle('low-time')
}

function getQuestion(num){
    return allQuestion[num-1];
}
function handleKeyDown(e) {
    switch (e.key) {
        // case 'a' && 'b':
        //     if (initialState.gameState !== 'init') return
        // modalContainer.remove()
        // startGame()
        // break;
        case 'a':
            checkAnswer(0)
            break;
        case 'b':
            checkAnswer(1)
            break;
        case 'c':
            checkAnswer(2)
            break;
        case 'd':
            checkAnswer(3)
            break;
        default:
            break;
    }

}
function checkAnswer(pressedBtnNum) {
    let isCorr = false
    if (initialState.questionData.options[pressedBtnNum] === initialState.questionData.correct_answer) {
        initialState.questionCnt++;
        initialState.corrAnswersCnt++;
        initialState.score += 10;
        isCorr = true;
        initialState.questionData = getQuestion(initialState.questionCnt)
        console.log(initialState.questionData);

        allSquaresEl[pressedBtnNum].classList.add('correct')
        allAnswersContainers[pressedBtnNum].classList.add('correct-answer')
    } else {
        initialState.questionCnt++
        allAnswersContainers[pressedBtnNum].classList.add('wrong')
    }
    // updateUi(pressedBtnNum, isCorr)

}
function countDown() {
    let lowerThenTen
    if (initialState.gameState === 'running') {
        const timeHandler = setInterval(() => {
            let min = Math.floor(initialState.time / 60)
            let sec = (initialState.time % 60)

            timer.innerText = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
            if (initialState.time <= 10 && !lowerThenTen) {
                toggleTimeAlert()
                lowerThenTen = true
            }
            if (!min && !sec && initialState.gameState !== 'end-game') {
                clearInterval(timeHandler)
               //Need to reset game
            }
            else {
                initialState.time--;
            }
        }, 1000)
    }
}

function endGameModal() {
    const modalElement = `
                    <div id="dialog-container">
                        <dialog id="dialog" open>
                        <h3>המשחק נגמר</h3>
                        <p>הצלחת לענות על ${"corrAnswersCnt"} מתוך ${initialState.questionCnt}</p>
                        <p>כל הכבוד ${initialState.name}, הצלחת לצבור ${initialState.score}</p>
                        <button id="dialog-btn" onclick="resetGame">שחק שוב</button>
                        </dialog>
                        </div>
                        `

    document.body.insertAdjacentHTML("beforebegin", modalElement)
}

document.addEventListener('keydown', handleKeyDown)

const bestScoreEl = getById('best-score');
const bestPlayerEl = getById('best-player');
const currPlayerEl = getById('curr-player')
const currScoreEl = getById('curr-score')

const questionEl = getById('question')
const questionNumEl = getById('question-number')
const allAnswersEl = getAllByClass('answers')
const allSquaresEl = getAllByClass('square')
const allAnswersContainers = getAllByClass('answer-container')

const timer = getById('timer')

const modal = getById('dialog')
const modalContainer = getById('dialog-container')



// function startGame() {
//     shuffleQuestions()
    initialState.questionData = getQuestion(initialState.questionCnt)
//     showBestGame();
//     currPlayerEl.innerText = "ישראל ישראלי"
//     currScoreEl.innerText = 0
//     initialState.gameState = 'running'
//     modalContainer.remove()
//     countDown()

// }


function startGame(){
//const myTimeout = setTimeout(Times_Up, 5000);
score=-1;
questionNum=0;
}


function endGame(){
if(score==questionNum){
    fullVictory();
} else if (score>=(questionNum/2)){
    halfVictory();
} else if (score>0 && score<(questionNum/2)){
    lowVictory();
} else if (score==0){
    lose();
}
}


function fullVictory(){
    document.getElementById("announcmentOfScore").innerHTML="כל הכבוד! הצלחתם לענות על כל השאלות"
}
function halfVictory(){
    document.getElementById("announcmentOfScore").innerHTML="יפה מאוד! ההבנה שלכם בטריוויה מרשימה"
}
function lowVictory(){
    document.getElementById("announcmentOfScore").innerHTML="לא רע, יש מקום לשיפור"
}
function lose(){
    document.getElementById("announcmentOfScore").innerHTML="אין נקודות, אולי תצליחו יותר בפעם הבאה"
}



if("a"==0 && "b"==0){
//document.getElementById("").addEventListener("click",startGame);
endGame();
}








let rightAnswer=true;
function handleAnswer(){
    if(rightAnswer===true){
        initialState.questionCnt++;
        initialState.corrAnswerCnt++;
        initialState.score+=10;
    } else {
        initialState.questionCnt++;
        //initialState.score-=10;
    }
}

function updateUi(pressedNum,isCorrect){
    if(isCorrect){
        allSquaresEl[pressedNum].classList.remove('correct');
        allAnswerContainers[pressedBtnNum].classList.remove('correct-answer')
    } else {
        //allSquaresEl[pressedNum].classList.remove('wrong');
        allAnswerContainers[pressedBtnNum].classList.remove('wrong')
    }
    document.getElementById("curr-score").innerHTML=initialState.score;
    document.getElementById("quesstion-number").innerHTML=initialState.questionCnt;
}





function noPoint(){
    if(score==-1){
        score++;
    }
    questionNum++;
    document.getElementById("curr-score").innerHTML=score;
    document.getElementById("quesstion-number").innerHTML=questionNum;
    if(questionNum==11){
        document.getElementById("quesstion-number").innerHTML="";
        showAnnouncment();
        startGame();
    } else {
        document.getElementById("announcmentOfScore").innerHTML="";
    }
}

function showAnnouncment(){
if(score==10){
    fullVictory();
    //startGame();
} 
else if (score>=5 && score<10){
    halfVictory();
} 
else if (score>0 && score<5){
    lowVictory();
} 
else if (score==0){
    lose();
}
}

/*const myTimeout = setTimeout(Times_Up, 5000);

function Times_Up() {
  showAnnouncment();
}*/