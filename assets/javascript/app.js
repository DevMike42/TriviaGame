// Global variables

var panel = $('#quizArea');
var counterStartNum = 30;
var unanswerCount = 0;

var gameInfo = {
    questions:questions,
    currentQuestion: 0,
    counter:counterStartNum,
    correct: 0,
    incorrect: 0,   
}

// =======================================================

// Questions

var questions = [{
    question: "1. What is Ignacio's primary job at the monastery?",
    answers: ["A cook", 
    "An alter boy", 
    "A teacher", 
    "A maintenance worker"],
    correctAnswer: "A cook",
    image: "assets/images/eaglePowers.gif"
}, {
    question: "2. What special ingredient is added to the monastery's food that makes it flavorful?",
    answers: ["Chips", 
    "Chili peppers", 
    "Lemon pepper", 
    "Tortillas"],
    correctAnswer: "Chips",
    image: "assets/images/eaglePowers.gif"
}, {
    question: "3. Who says 'Do you not realize that I've had diarrheas since Easters?'",
    answers: ["One of the brother from the church", 
    "Ignacio", 
    "Sister Encarnation", 
    "Steven"],
    correctAnswer: "One of the brother from the church",
    image: "assets/images/eaglePowers.gif"
}, {
    question: "4. Who is Ignacio's tag-team partner in his quest for wrestling stardom?",
    answers: ["Enrique", 
    "Chancho", 
    "Steven", 
    "Ramses"],
    correctAnswer: "Steven",
    image: "assets/images/eaglePowers.gif"
}, {
    question: "5. What wrestling move does Nacho use to try and finish off his first opponent?",
    answers: ["Mexican crab lock", 
    "Camel clutch", 
    "Anaconda squeeze", 
    "Chicken hold"],
    correctAnswer: "Anaconda squeeze",
    image: "assets/images/eaglePowers.gif"
}, {
    question: "6. After loosing his wrestling matches, Ignacio is frustrated and gets some advice from Steven. What does Steven say will help Ignacio become a better wrestler?",
    answers: ["Poppy seeds", 
    "Goat milk", 
    "Eagle eggs", 
    "Badger meat"],
    correctAnswer: "Eagle eggs",
    image: "assets/images/eaglePowers.gif"
}, {
    question: "7. Ignacio and Steven decide to crash Ramses' party but only Steven is able to climb the wall and sneak into the house. How does Ignacio find his way into the house?",
    answers: ["He pays the security person 50 pesos to let him through", 
    "He climbs the roof and enters through an open window", 
    "He pretends to be one of the musicians and walks in", 
    "He puts on a robe and get in as one of the wrestlers"],
    correctAnswer: "He pretends to be on of the musicians and walks in",
    image: "assets/images/eaglePowers.gif"
}, {
    question: "8. Does Nacho win any wrestling matches during the movie?",
    answers: ["Yes", 
    "No"],
    correctAnswer: "Yes",
    image: "assets/images/eaglePowers.gif"
}, {
    question: "9. Ignacio is embarrassed by the trouble he has caused to the monastery and decides to leave to go into the wilderness. What does Chancho give Ignacio before he leaves?",
    answers: ["An eagle egg", 
    "His lucky machete", 
    "A loaded pistol", 
    "His lucky jade charm"],
    correctAnswer: "His lucky machete",
    image: "assets/images/eaglePowers.gif"
}, {
    question: "10. How does Steven find Ignacio after he has left for the wilderness?",
    answers: ["He tracks his footprints", 
    "He makes some phone calls", 
    "He scours the desert", 
    "He sees him from the village"],
    correctAnswer: "He sees him from the village",
    image: "assets/images/eaglePowers.gif"
}];    



// =======================================================

// Click Events

$(document).on('click', '#startOver', function (e) {
    gameInfo.reset();
});

$(document).on('click', '.answerButton', function (e) {
    gameInfo.clicked(e);
});

$(document).on('click', '#start', function (e) {
    $('#quizArea').prepend('<h2>Time Remaining: <span id="counterNum">30</span> Seconds</h2>');
    gameInfo.loadQuestion();
});

// =======================================================

// Functions

// Start timer
function runTimer(){
    if (!running) {
    intervalId = setInterval(decrement, 1000); 
    running = true;
    }
}

// Timer countdown
function decrement() {
	$("#timer-block").html("<h3>Time remaining: " + counterStartNum + "</h3>");
	counterStartNum --;

	//stop timer if reach 0
	if (counterStartNum === 0) {
		unanswerCount++;
		stop();
		$("#answer-block").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
		hidepicture();
	}	
}

// Timer stop
function stop() {
	running = false;
	clearInterval(intervalId);
}

function displayQuestion() {
    
// Had code completed. Must have made a mistake pushing to repo. 
// Will complete when I have time