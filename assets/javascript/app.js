// Initialize variables
var questionCount = 0, correctAnswers = 0, incorrectAnswers = 0, unanswered = 0, countdown = 13;
var correct = false;
$('.results').hide();
$('#multipleChoice').hide();

// Create trivia object to hold questions
// ==================================================
var trivia = {
	"questions" : [
		{
			"question" : "What is the nickname given to Paul Pierce?",
			"answer" : "The+Truth",
			"multipleChoice" : [
				"The Truth", "The Answer", "The Process", "The Game", "The Man"
			]
		},
		{
			"question" : "Which player is known as 'The Logo' of the NBA?",
			"answer" : "Jerry West",
			"multipleChoice" : [
				"Elgin Baylor", "Charles Barkley", "Jerry West", "Michael+Jordan", "Bill+Walton"
			]
		},
		{
			"question" : "How many points does a football team receive for a field goal? ",
			"answer" : "3",
			"multipleChoice" : [
				"7", "4", "1", "3", "6"
			]
		},
		{
			"question" : "How many minutes are there in a half of a college football game?",
			"answer" : "30",
			"multipleChoice" : [
				"12", "30", "48", "60", "5"
			]
		},
		{
			"question" : "What is the name of the professional baseball team in Atlanta, GA?",
			"answer" : "Braves",
			"multipleChoice" : [
				"Falcons", "Hawks", "Thrashers", "Bananas", "Braves"
			]
		},
		{
			"question" : "Who was the number 1 overall pick in the 2017 NBA Draft?",
			"answer" : "Markelle Fultz",
			"multipleChoice" : [
				"Lonzo Ball", "Jason Tatum", "Markelle Fultz", "Josh Jackson"
			]
		},
		{
			"question" : "What is the Deion Sander's nickname?",
			"answer" : "Prime Time",
			"multipleChoice" : [
				"Prime Time", "Show Time", "Downtown", "Human Highlight", "Ace"
			]
		},
		{
			"question" : "How many teams are currently in the NFL?",
			"answer" : "32",
			"multipleChoice" : [
				"10", "24", "18", "32", "23"
			]
		},
		{
			"question" : "How many professional baseball teams are currently in Major League Baseball?",
			"answer" : "30",
			"multipleChoice" : [
				"15", "18", "20", "25", "30"
			]
		},
		{
			"question" : "Who is considered the Greatest of all Time in Basketball?",
			"answer" : "Michael Jordan",
			"multipleChoice" : [
				"Magic Johnson", "Michael Jordan", "LeBron James", "Kareem Abdul Jabbar", "Larry Bird"
			]
		}
	]
}
		

// Function to display results at the end of the game
// ==================================================
function results () {
	
	$('#triviaQuestion').hide();
	$('.choices').hide();
	$('.results').show();
	$('#correct').html("Correctly Answered " + correctAnswers);
	$('#wrong').html("Wrongly Answered " + incorrectAnswers);
	$('#unanswered').html("Unanswered " + unanswered);


	}	

// Function to start game
// ==================================================
function start() {

	//Ask First Question
	askQuestion(questionCount);
	//console.log(trivia.questions[questionCount].question);

	counter = setInterval(countDownToNextQuestion,1000);
	
}




// Function to display questions
// ==================================================
function askQuestion(questionCount) {
	countdown = 13;
	$('#multipleChoice').show();
	if( questionCount < 10 ) {
		console.log(trivia.questions[questionCount].question);
		$('#triviaQuestion').html(trivia.questions[questionCount].question);

		//Display multiple choices
		$('#a').html(trivia.questions[questionCount].multipleChoice[0]);
		$('#b').html(trivia.questions[questionCount].multipleChoice[1]);
		$('#c').html(trivia.questions[questionCount].multipleChoice[2]);
		$('#d').html(trivia.questions[questionCount].multipleChoice[3]);
		$('#e').html(trivia.questions[questionCount].multipleChoice[4]);
	}

	else {
		clearInterval(counter);
		results();
	}
}


// Function to check of answer to question is correct
// ==================================================
function checkIfCorrect(guessed) {
	if( guessed === trivia.questions[questionCount].answer) {
		return true;
	}

	else {
		return false;
	}
}

// Button Listener to start the game
$('.startButton').on('click', function(){
		$('.startButton').hide();
		questionCount = 0, correctAnswers = 0, incorrectAnswers = 0, unanswered = 0, countdown = 13;

		start();
});

//Button listener to listen for answers
$('.list-group-item').on('click', function(){

	if (checkIfCorrect($(this).html()) === true) {
		correctAnswers++;
		console.log(" # of Correct Answers: " + correctAnswers);
		questionCount++;
		askQuestion(questionCount);
	}

	else if (checkIfCorrect($(this).html()) === false){
		incorrectAnswers++;
		console.log(" # of Incorrect Answers: " + incorrectAnswers);
		questionCount++;
		askQuestion(questionCount);
	}
});


// Function to time each question until next question
// ==================================================
function countDownToNextQuestion() {
	countdown--;

	// Show the countdown in the #show-countdown tag.
    $('#showCountDown').html('<h4>Time Remaining: ' + countdown + ' seconds</h4>');

    // Once countdown hits zero...
    if (countdown === 0){

        // stop countdown.
        clearInterval(counter);

        // Alert the user that time is up.
        unanswered++;
        console.log(" # of Unanswered: " + unanswered);
        console.log('Time Up!')

        // Update question count
        questionCount++;

        // If all questions, have been asked, display results
        if ( questionCount == 10 ) {
        	clearInterval(counter);
        	results();
        }

        else {
	       	// go to next question
	        askQuestion(questionCount);

	        // Update counter
	        countdown = 13;

	        // Countdown to 0
	        counter = setInterval(countDownToNextQuestion,1000);
        }

       

    }
}

