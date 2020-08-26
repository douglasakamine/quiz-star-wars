class Quiz {

    constructor() {

        this.countQuestions = 0;

        this.rightAnswers = 0;

        this.wrongAnswers = 0;

        this.displayQuestion = document.getElementById('question');

        this.displayAnswers = [];

        this.display = document.getElementById('display');

        this.button = document.getElementById("button").addEventListener('click', () => {
            this.display.innerHTML = "Question number: " + (this.countQuestions + 1);
            this.display.setAttribute("id", "display");   
            this.nextQuestion();
        });

        this.createQuiz();

        $('#table').on('click', () => {  //Using Jquery here
            this.parseAnswer();
        });
    }

    createQuiz() {

        this.displayQuestion.innerHTML = this.questions[this.countQuestions].question;

        for(let i = 0; i < 4; i++) {

            this.displayAnswers.push(document.getElementsByTagName("td")[i]);

            this.displayAnswers[i].innerHTML = this.questions[this.countQuestions].answers[i]; 
        }
 
    }

    parseAnswer() {

        if(event.target.id.split('-')[1] == this.questions[this.countQuestions].correctIndex) {
            this.countQuestions++;
            this.rightAnswers++;
            this.display.innerHTML = "Correct!"
            this.display.setAttribute("id","displayGreen"); 
        } else {
            this.countQuestions++;
            this.wrongAnswers++;
            this.display.innerHTML = "Wrong answer!";
            this.display.setAttribute("id","displayRed"); 
        }

        $('#table').off('click');
    
        if(this.countQuestions >= this.questions.length) {
            
        this.finish();

        }
       
    }

    nextQuestion() {

        $('#table').on('click', () => {  //Using Jquery here
            this.parseAnswer();
        });

        this.displayQuestion.innerHTML = this.questions[this.countQuestions].question;

        for(let i = 0; i < 4; i++) {
            this.displayAnswers[i].innerHTML = this.questions[this.countQuestions].answers[i]; 
        }

    }

    finish() {
        document.getElementById('question').remove();
        document.getElementById('table').remove();
        document.getElementById('button').remove();

        this.display.innerHTML = `
            <h2>You have finished!</h2>
            <p> Correct answers: ${this.rightAnswers} </p>
            <p> Wrong answers: ${this.wrongAnswers} </p>
        `;
        this.display.setAttribute("id","display");

    }




// Array of Questions bellow

    questions = [{
        "question": "What is the name of Han Solo's starship?",
        "answers": [
        "Enterprise",
        "Millenium Falcon",
        "X-wing fighter",
        "Light-speed"
        ],
        "correctIndex": 1
        },
        {
        "question": " Where did Anakin first meet Padme?",
        "answers": [
        "Tatooine",
        "Coruscant",
        "Naboo",
        "Geonisis"
        ],
        "correctIndex": 0
        },
        {
        "question": "Who played the role of Anakin Skywalker in Episode 2 and 3?",
        "answers": [
        "Mark Hamil",
        "Ewan Mcgregor",
        "Hayden Christensen",
        "Carrie Fisher"
        ],
        "correctIndex": 2
        },
        {
        "question": "Who composed the Star Wars music??",
        "answers": [
        "Leonard Leopold",
        "Bethoven",
        "John Williams",
        "Paul Maccartney"
        ],
        "correctIndex": 2
        },
        {
        "question": "What was the name of the other creature that was the same as Yoda's species?",
        "answers": [
        "Yoda",
        "Chewbaca",
        "Yaddle",
        "Hatt"
        ],
        "correctIndex": 2
        },
        {
        "question": "Who executed order 66??",
        "answers": [
        "Darth Vader",
        "Emperor Palpatine",
        "Anakin Skywalker",
        "Jango Feet"
        ],
        "correctIndex": 1
        },
        {
        "question": "Who played Wicket the Ewok??",
        "answers": [
        "Mark Hamil",
        "William defoe",
        "Warwick Davis",
        "Harrison Ford"
        ],
        "correctIndex": 2
        },
        {
        "question": "What was the name of the clone who got the order from Palpatine to execute Order 66?",
        "answers": [
        "Commander Cody",
        "Jar Jar Binks",
        "Jango Feet",
        "Commander Lody"
        ],
        "correctIndex": 0
        },
        {
        "question": "who is Darth Vader?",
        "answers": [
        "Darth Sidius",
        "Mace Windu",
        "Darth Bane",
        "Anakin Skywalker"
        ],
        "correctIndex": 3
        },
        {
        "question": "who is Han Solo's partner?",
        "answers": [
        "Lea",
        "Luke Skywalker",
        "Chewbacca",
        "Boba Feet"
        ],
        "correctIndex": 2
        },
        {
        "question": "who is Darth Vader's master?",
        "answers": [
        "Darth Maul",
        "Darth Sidius",
        "Darth Bane",
        "Anakin Skywalker"
        ],
        "correctIndex": 1
        }]   
}

let quiz = new Quiz();