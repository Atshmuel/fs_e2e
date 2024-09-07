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
    },
    {
        "question": "באיזו מדינה נמצאת העיר ברלין?",
        "options": [
            "גרמניה",
            "צרפת",
            "איטליה",
            "הולנד"
        ],
        "correct_answer": "גרמניה"
    },
    {
        "question": "כמה צבעים יש בקשת?",
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "correct_answer": "7"
    },
    {
        "question": "מהי תוחלת החיים של צב יבשה ענק?",
        "options": [
            "50 שנה",
            "75 שנה",
            "100 שנה",
            "150 שנה"
        ],
        "correct_answer": "150 שנה"
    },
    {
        "question": "באיזו שנה התחילה מלחמת העולם השנייה?",
        "options": [
            "1914",
            "1939",
            "1945",
            "1923"
        ],
        "correct_answer": "1939"
    },
    {
        "question": "מי זכה בכדור הזהב לשחקן הטוב בעולם בשנת 2022?",
        "options": [
            "ליאו מסי",
            "כריסטיאנו רונאלדו",
            "קיליאן אמבפה",
            "קרים בנזמה"
        ],
        "correct_answer": "קרים בנזמה"
    },
    {
        "question": "מהי המדינה הגדולה ביותר בעולם בשטח?",
        "options": [
            "ארצות הברית",
            "קנדה",
            "רוסיה",
            "ברזיל"
        ],
        "correct_answer": "רוסיה"
    },
    {
        "question": "כמה דקות יש בשעה?",
        "options": [
            "50",
            "60",
            "70",
            "80"
        ],
        "correct_answer": "60"
    },
    {
        "question": "איזו שפה היא הרשמית באיראן?",
        "options": [
            "ערבית",
            "טורקית",
            "פרסית",
            "עברית"
        ],
        "correct_answer": "פרסית"
    },
    {
        "question": "מהי המדינה הדרומית ביותר בעולם?",
        "options": [
            "אוסטרליה",
            "דרום אפריקה",
            "צ'ילה",
            "ארגנטינה"
        ],
        "correct_answer": "ארגנטינה"
    },
    {
        "question": "מהו הפרי הלאומי של ישראל?",
        "options": [
            "תפוז",
            "תמר",
            "זית",
            "רימון"
        ],
        "correct_answer": "תמר"
    },
    {
        "question": "מהו הים שנמצא לחופי תל אביב?",
        "options": [
            "הים האדום",
            "הים התיכון",
            "הים הכספי",
            "הים השחור"
        ],
        "correct_answer": "הים התיכון"
    },
    {
        "question": "באיזו יבשת נמצאת ברזיל?",
        "options": [
            "אמריקה הצפונית",
            "אסיה",
            "אמריקה הדרומית",
            "אפריקה"
        ],
        "correct_answer": "אמריקה הדרומית"
    },
    {
        "question": "מהו המשקה הפופולרי ביותר בעולם?",
        "options": [
            "תה",
            "קפה",
            "מים",
            "מיץ תפוזים"
        ],
        "correct_answer": "מים"
    },
    {
        "question": "כמה ימים יש בשנה רגילה?",
        "options": [
            "356",
            "365",
            "366",
            "364"
        ],
        "correct_answer": "365"
    },
    {
        "question": "באיזו שנה הוקם האינטרנט?",
        "options": [
            "1989",
            "1991",
            "1969",
            "2000"
        ],
        "correct_answer": "1989"
    },
    {
        "question": "מהו המאכל הלאומי של יוון?",
        "options": [
            "פיצה",
            "פלאפל",
            "מוסקה",
            "קוסקוס"
        ],
        "correct_answer": "מוסקה"
    },
    {
        "question": "מהו ההר הגבוה ביותר באפריקה?",
        "options": [
            "הרי האטלס",
            "הר פוג'י",
            "הר קילימנג'רו",
            "הר קניה"
        ],
        "correct_answer": "הר קילימנג'רו"
    },
    {
        "question": "מהו שמה של העיר העתיקה ביותר בעולם שנמצאת בישראל?",
        "options": [
            "תל אביב",
            "חיפה",
            "ירושלים",
            "יריחו"
        ],
        "correct_answer": "יריחו"
    },
    {
        "question": "מהי העיר הראשונה שהוקמה בישראל לאחר קום המדינה?",
        "options": [
            "אשדוד",
            "בת ים",
            "כרמיאל",
            "אילת"
        ],
        "correct_answer": "אשדוד"
    },
    {
        "question": "איזה אגם נמצא בצפון ישראל?",
        "options": [
            "הכנרת",
            "ים המלח",
            "ים התיכון",
            "ים סוף"
        ],
        "correct_answer": "הכנרת"
    },
    {
        "question": "באיזו שנה נחתם הסכם השלום בין ישראל למצרים?",
        "options": [
            "1973",
            "1979",
            "1981",
            "1993"
        ],
        "correct_answer": "1979"
    },
    {
        "question": "מי היה נשיאה השישי של מדינת ישראל?",
        "options": [
            "חיים הרצוג",
            "אפרים קציר",
            "יצחק נבון",
            "עזר ויצמן"
        ],
        "correct_answer": "חיים הרצוג"
    },
    {
        "question": "איזה גוף מים מהווה את הנקודה הנמוכה ביותר בעולם?",
        "options": [
            "הים התיכון",
            "הכנרת",
            "הים השחור",
            "ים המלח"
        ],
        "correct_answer": "ים המלח"
    },
    {
        "question": "מהו השם של המנהרה הארוכה ביותר בישראל?",
        "options": [
            "מנהרות הכרמל",
            "מנהרת הר הצופים",
            "מנהרת חוצה ישראל",
            "מנהרת גילה"
        ],
        "correct_answer": "מנהרות הכרמל"
    },
    {
        "question": "באיזו עיר נמצא מוזיאון ישראל?",
        "options": [
            "תל אביב",
            "ירושלים",
            "חיפה",
            "באר שבע"
        ],
        "correct_answer": "ירושלים"
    },
    {
        "question": "באיזו שנה הוקמה מכללת כינרת?",
        "options": [
            "1965",
            "1970",
            "1975",
            "1985"
        ],
        "correct_answer": "1965"
    },
    {
        "question": "באיזה תחום ידועה במיוחד מכללת כינרת?",
        "options": [
            "הנדסה",
            "ניהול תיירות",
            "מדעי המחשב",
            "תקשורת"
        ],
        "correct_answer": "ניהול תיירות"
    },
    {
        "question": "באיזו עיר ממוקמת מכללת כינרת?",
        "options": [
            "טבריה",
            "עפולה",
            "קריית שמונה",
            "עמק הירדן"
        ],
        "correct_answer": "עמק הירדן"
    },
    {
        "question": "ליד איזה אגם נמצאת מכללת כינרת?",
        "options": [
            "ים המלח",
            "הכנרת",
            "הים התיכון",
            "ים סוף"
        ],
        "correct_answer": "הכנרת"
    },
    {
        "question": "מהו שמה המלא של מכללת כינרת?",
        "options": [
            "המכללה האקדמית כינרת בעמק הירדן",
            "המכללה האזורית כינרת",
            "המכללה הטכנולוגית כינרת",
            "מכללת כינרת למדעים"
        ],
        "correct_answer": "המכללה האקדמית כינרת בעמק הירדן"
    },
    {
        "question": "כמה פקולטות יש במכללת כינרת?",
        "options": [
            "3",
            "4",
            "5",
            "6"
        ],
        "correct_answer": "5"
    },
    {
        "question": "מהו צבע הלוגו של מכללת כינרת?",
        "options": [
            "כחול",
            "אדום",
            "ירוק",
            "צהוב"
        ],
        "correct_answer": "כחול"
    },
    {
        "question": "איזו פקולטה חדשה נפתחה במכללת כינרת בשנת 2020?",
        "options": [
            "מדעי המחשב",
            "הנדסת חשמל",
            "ניהול מערכות בריאות",
            "פסיכולוגיה"
        ],
        "correct_answer": "ניהול מערכות בריאות"
    },
    {
        "question": "באיזו רמה אקדמית מציעה מכללת כינרת תארים?",
        "options": [
            "תואר ראשון בלבד",
            "תואר ראשון ושני",
            "תואר ראשון, שני ושלישי",
            "לימודי תעודה בלבד"
        ],
        "correct_answer": "תואר ראשון ושני"
    },
    {
        "question": "מהו שמה של הספרייה המרכזית במכללת כינרת?",
        "options": [
            "ספריית כינרת",
            "הספרייה המרכזית ע״ש אריק איינשטיין",
            "ספריית עמק הירדן",
            "הספרייה המרכזית ע״ש לוי אשכול"
        ],
        "correct_answer": "הספרייה המרכזית ע״ש אריק איינשטיין"
    },
    {
        "question": "מהו צבע הדם של בני אדם?",
        "options": ["אדום", "כחול", "ירוק", "צהוב"],
        "correct_answer": "אדום"
    },
    {
        "question": "מהי השפה המדוברת ביותר בעולם?",
        "options": ["אנגלית", "ספרדית", "סינית", "צרפתית"],
        "correct_answer": "סינית"
    },
    {
        "question": "מי היה אלברט איינשטיין?",
        "options": ["פיזיקאי", "משורר", "מוזיקאי", "צייר"],
        "correct_answer": "פיזיקאי"
    },
    {
        "question": "כמה ימים יש בשבוע?",
        "options": ["5", "6", "7", "8"],
        "correct_answer": "7"
    },
    {
        "question": "באיזו יבשת נמצאת מדינת ישראל?",
        "options": ["אירופה", "אפריקה", "אסיה", "אמריקה"],
        "correct_answer": "אסיה"
    },
    {
        "question": "איזה פרי הוא הכתום ביותר?",
        "options": ["בננה", "תפוז", "תפוח", "אבטיח"],
        "correct_answer": "תפוז"
    },
    {
        "question": "מהי המדינה הגדולה ביותר בעולם בשטח?",
        "options": ["רוסיה", "סין", "ארצות הברית", "קנדה"],
        "correct_answer": "רוסיה"
    },
    {
        "question": "מהו הגוף השמיימי הקרוב ביותר לכדור הארץ?",
        "options": ["הירח", "מאדים", "נוגה", "שמש"],
        "correct_answer": "הירח"
    },
    {
        "question": "כמה חודשים יש בשנה?",
        "options": ["10", "11", "12", "13"],
        "correct_answer": "12"
    },
    {
        "question": "מי המציא את נורת החשמל?",
        "options": ["תומס אדיסון", "אלברט איינשטיין", "ניקולה טסלה", "אלכסנדר גרהם בל"],
        "correct_answer": "תומס אדיסון"
    },
    {
        "question": "מהי עיר הבירה של צרפת?",
        "options": ["רומא", "לונדון", "פריז", "ברלין"],
        "correct_answer": "פריז"
    },
    {
        "question": "איזו חיה נחשבת למלך החיות?",
        "options": ["אריה", "פיל", "נמר", "דוב"],
        "correct_answer": "אריה"
    },
    {
        "question": "איזו יבשת היא הקטנה ביותר בשטח?",
        "options": ["אפריקה", "אסיה", "אוסטרליה", "אירופה"],
        "correct_answer": "אוסטרליה"
    },
    {
        "question": "איזו חיה היא הגדולה ביותר בעולם?",
        "options": ["כריש לוויתן", "פיל", "לוויתן כחול", "ג'ירפה"],
        "correct_answer": "לוויתן כחול"
    },
    {
        "question": "מהו המטבע הרשמי של יפן?",
        "options": ["דולר", "ין", "אירו", "פאונד"],
        "correct_answer": "ין"
    },
    {
        "question": "מהי המדינה המזרחית ביותר בעולם?",
        "options": ["ניו זילנד", "יפן", "אוסטרליה", "סין"],
        "correct_answer": "ניו זילנד"
    },
    {
        "question": "כמה יבשות יש בעולם?",
        "options": ["4", "5", "6", "7"],
        "correct_answer": "7"
    },
    {
        "question": "מהי עיר הבירה של אנגליה?",
        "options": ["פריז", "מדריד", "לונדון", "ברלין"],
        "correct_answer": "לונדון"
    },
    {
        "question": "איזו מתכת נמשכת למגנט?",
        "options": ["ברזל", "כסף", "זהב", "אלומיניום"],
        "correct_answer": "ברזל"
    },
    {
        "question": "איזה ים הוא המלוח ביותר בעולם?",
        "options": ["הים התיכון", "הים האדום", "ים המלח", "הים השחור"],
        "correct_answer": "ים המלח"
    }
]

const initialState = {
    gameState: 'init',
    time: 90,
    questionCnt: 1,
    corrAnswersCnt: 0,
    name: "",
    score: getBestPlayer(),
    questionData: {},
    isPressed: false,
    resetTimeout: 3
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




const bestScoreEl = getById('best-score');
const bestPlayerEl = getById('best-player');
const currPlayerEl = getById('curr-player')
const currScoreEl = getById('curr-score')

const questionEl = getById('question')
const questionNumEl = getById('question-number')
const allAnswersEl = getAllByClass('answers')
const allSquaresEl = getAllByClass('square')
const allAnswersContainers = getAllByClass('answer-container')

const modal = getById('dialog')
let modalContainer = getById('dialog-container')

const timer = getById('timer')

document.addEventListener('keypress', initPress)
function initPress(e) {
    document.removeEventListener('keypress', initPress)
    modalContainer.remove()
    startGame();
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

function getQuestion(num) {
    return allQuestionArr[num - 1];
}

function handleKeyDown(e) {
    switch (e.key) {
        case 'a':
            //need to fix btn
            initialState.gameState !== 'init' && !initialState.isPressed && checkAnswer(0)
            initialState.gameState === 'init' && startGame()
            break;
        case 'b':
            initialState.gameState !== 'init' && !initialState.isPressed && checkAnswer(1)
            break;
        case 'c':
            initialState.gameState !== 'init' && !initialState.isPressed && checkAnswer(2)
            break;
        case 'd':
            initialState.gameState !== 'init' && !initialState.isPressed && checkAnswer(3)
            break;
        default:
            break;
    }

}
function checkAnswer(pressedBtnNum) {
    let isCorr = false
    initialState.isPressed = true;
    if (initialState.questionData.options[pressedBtnNum] === initialState.questionData.correct_answer) {
        initialState.corrAnswersCnt++;
        initialState.score += 10;
        isCorr = true;
        allSquaresEl[pressedBtnNum].classList.add('correct')
        allAnswersContainers[pressedBtnNum].classList.add('correct-answer')
    } else {
        allAnswersContainers[pressedBtnNum].classList.add('wrong')
    }
    initialState.questionCnt++;

    initialState.questionData = getQuestion(initialState.questionCnt)

    updateUi(pressedBtnNum, isCorr)

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
                endGame();

            }
            else {
                initialState.time--;
            }
        }, 1000)
    }
}

function endGameModal(text) {
    const modalElement = `
                        <div id="dialog-container">
                        <dialog id="dialog" open>
                        <h3>המשחק נגמר</h3>
                        <p class="dialog-p">
                        ${initialState.questionCnt > 1 ?
            `הצלחתם לענות על ${initialState.corrAnswersCnt} מתוך ${initialState.questionCnt - 1}`
            :
            `הצלחתם לענות על ${initialState.corrAnswersCnt} מתוך ${initialState.questionCnt}`
        }
                        </p>
                        <p class="dialog-p">${text}</p>
                        <button id="dialog-btn" onclick="initPress"> שחק שוב
                        <span id="reset-timeout">בעוד ${initialState.resetTimeout}</span> </button>
                        </dialog>
                        </div>
                        `

    document.body.insertAdjacentHTML("afterbegin", modalElement)
    modalContainer = getById("dialog-container")
}


function startGame() {
    document.addEventListener('keypress', handleKeyDown)
    shuffleQuestions()
    initialState.questionData = getQuestion(initialState.questionCnt)
    showQuestion()
    currPlayerEl.innerText = "ישראל ישראלי"
    currScoreEl.innerText = 0
    initialState.gameState = 'running'
    countDown()

}


function showQuestion() {
    questionNumEl.innerHTML = initialState.questionCnt
    questionEl.innerHTML = initialState.questionData.question
    allAnswersEl.forEach((el, i) => el.innerHTML = initialState.questionData.options[i])
}

function endGame() {
    if ((initialState.corrAnswersCnt === initialState.questionCnt - 1) && initialState.questionCnt > 1) {
        endGameModal(`מדהים! עניתם על כל השאלות בהצלחה 🤓, צברתם ${initialState.score} נקודות`)
    }
    if (initialState.corrAnswersCnt > 0 && initialState.corrAnswersCnt < (initialState.questionCnt / 2) + 1) {
        endGameModal(`נחמד מאוד, הידע הכללי שלכם מרשים הצלחתם לצברתם ${initialState.score} נקודות`)
    }
    if (initialState.corrAnswersCnt === 0) {
        endGameModal(`לא כל כך מוצלח הא? אולי בפעם הבאה`)
    }

    toggleTimeAlert()
    initialState.gameState = 'init'
    initialState.time = 90
    initialState.questionCnt = 1
    initialState.corrAnswersCnt = 0
    initialState.name = ""
    initialState.score = getBestPlayer()
    initialState.questionData = {
        "question": ".",
        "options": [
            ".",
            ".",
            ".",
            "."
        ],
        "correct_answer": "."
    }
    initialState.isPressed = false

    document.removeEventListener('keypress', handleKeyDown)
    updateUi([0, 1, 2, 3], false)

    const resetTimeoutEl = getById("reset-timeout")
    const timeoutBtn = setInterval(() => {
        if (initialState.resetTimeout === 0) {
            document.addEventListener('keypress', initPress)
            clearInterval(timeoutBtn)
        }
        if (initialState.resetTimeout > 0) {
            initialState.resetTimeout--
        }
        resetTimeoutEl.innerHTML = initialState.resetTimeout > 0 ? `בעוד ${initialState.resetTimeout}` : ''
    }, 1000)
}

function updateUi(pressedNum = [], isCorrect, timeOut = 1000) {
    setTimeout(() => {
        initialState.isPressed = false;
        if (isCorrect && !pressedNum.length) {
            allSquaresEl[pressedNum].classList.remove('correct');
            allAnswersContainers[pressedNum].classList.remove('correct-answer')
            currScoreEl.innerHTML = initialState.score;
        }
        if (!isCorrect && !pressedNum.length) {
            allAnswersContainers[pressedNum].classList.remove('wrong')
        }
        if (pressedNum.length) {
            allSquaresEl.forEach(el => el.classList.remove('correct'))
            allAnswersContainers.forEach(el => {
                el.classList.remove('correct-answer')
                el.classList.remove('wrong')
            })
            timer.innerHTML = '01:30'
        }
        showQuestion()
    }, timeOut)

}
