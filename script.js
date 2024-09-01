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
    time: 60,
    questionCnt: 1,
    name: getBestPlayer().name,
    score: getBestPlayer().score
}


// localStorage.setItem('games-info', JSON.stringify([{ player: 'שמואל', score: 200 }, { player: 'אבי', score: 100 }, { player: 'נתי', score: 300 }, { player: 'אלי', score: 200 }, { player: 'חיים', score: 420 }, { player: 'שלי', score: 200 }]))
document.addEventListener('keydown', handleKeyDown)

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


function getBestPlayer() {
    let score = 0
    let name = ""
    const gamesInfo = getLocalStorage('games-info')
    if (!gamesInfo) return { name, score }
    gamesInfo.map((el) => {
        let temp = score
        score = Math.max(score, el.score)
        if (temp !== score) {
            name = el.player
        }
    }
    )
    return { name, score }

}
function startGame() {
    // showBestGame();
    currPlayerEl.innerText = "ישראל ישראלי"
    currScoreEl.innerText = 0

}
function toggleTimeAlert() {
    timer.classList.toggle('low-time')
}
function updateCounter() {
    questionCnt++;
}
function clearCorrectAnswers() {
    allAnswersContainers.forEach((answer, i) => {
        allSquaresEl[i].classList.remove('correct')
        allAnswersContainers[i].classList.remove('correct-answer')

    })
}
function handleKeyDown(e) {
    switch (e.key) {
        case 'a':
            console.log(e.key)
            break;
        case 'b':
            console.log(e.key)
            break;
        case 'c':
            console.log(e.key)
            break;
        case 'd':
            console.log(e.key)
            break;
        default:
            break;
    }

}
function checkCorrect(correctAnswer, answersArr) {
    const corrAnswerIndex = answersArr.indexOf(correctAnswer)
    allSquaresEl[corrAnswerIndex].classList.add('correct')
    allAnswersContainers[corrAnswerIndex].classList.add('correct-answer')

}

function showBestGame() {
    bestPlayerEl.innerHTML = initialState.name
    bestScoreEl.innerHTML = initialState.score
}
function handleQuestionChange(questionObj, questionNum) {
    const { question, options, correct_answer } = questionObj[questionNum]
    questionEl.innerText = question
    allAnswersEl.forEach((answer, i) => answer.innerHTML = options[i])
    questionNumEl.innerHTML = questionNum - 1
}

// handleQuestionChange(allQuestionArr, questionCnt)
// startGame()
// checkCorrect(allQuestionArr[0].correct_answer, allQuestionArr[0].options)
// clearCorrectAnswers()

