var userInput; //initialize the variable so the loop below can run
var score = 0; //initialize the user's score to zero
var ties = 0; //initialize the user's ties to zero

var win_sound = new Audio('cheering.mp3');
var lose_sound = new Audio('piano_broken.mp3');

while (userInput != 'quit'){
	var options = ['rock', 'paper', 'scissors', 'string', 'macbook'];
	var randomComputerOption = options[Math.floor(Math.random() * options.length)];

	while ( (userInput != 'quit') && (options.indexOf(userInput) == -1)){
		userInput = prompt('Please choose one of these options: rock, paper, scissors, string, macbook. \n\n String beats rock and paper but gets beaten by scissors and macbook. \n\n Macbook beats paper and string but gets beaten by rock and scissors. If you want to stop playing, then please type in quit. \n\n Your score is currently ' + score + '.' + '. \n\n Your tied ' + ties + ' times.');
	}

	switch (userInput) {	
		case 'rock':
			switch (randomComputerOption) {
			case 'rock':
			alert('The computer picked ' + randomComputerOption + '. You tied!');
			ties++;
			userInput = undefined; //reset it
			break;
			case 'paper':
			alert('The computer picked ' + randomComputerOption + '. You lost!');
			score--;
			userInput = undefined; //reset it
			break;
			case 'scissors':
			alert('The computer picked ' + randomComputerOption + '. You won!');
			score++;
			userInput = undefined; //reset it
			break;
			case 'string':
			alert('The computer picked ' + randomComputerOption + '. You lose!');
			score--;
			userInput = undefined; //reset it
			break;
			case 'macbook':
			alert('The computer picked ' + randomComputerOption + '. You won!');
			score++;
			userInput = undefined; //reset it
			break;
			}
			break;
		case 'paper':
			switch (randomComputerOption) {
			 case 'rock':
				alert('The computer picked ' + randomComputerOption + '. You won!');
				score++;
				userInput = undefined; //reset it
				break;
			 case 'paper':
				alert('The computer picked ' + randomComputerOption + '. You tied!');
				ties++;
				userInput = undefined; //reset it
				break;
			 case 'scissors':
				alert('The computer picked ' + randomComputerOption + '. You lost!');
				score--;
				userInput = undefined; //reset it
				break;
			  case 'string':
				alert('The computer picked ' + randomComputerOption + '. You lose!');
				score--;
				userInput = undefined; //reset it
				break;
			  case 'macbook':
				alert('The computer picked ' + randomComputerOption + '. You lose!');
				score--;
				userInput = undefined; //reset it
				break;
			}
			break;
		case 'scissors':
			switch (randomComputerOption) {
			  case 'rock':
				alert('The computer picked ' + randomComputerOption + '. You lost!');
				score--;
				userInput = undefined; //reset it
				break;
			  case 'paper':
				alert('The computer picked ' + randomComputerOption + '. You won!');
				score++;
				userInput = undefined; //reset it
				break;
			  case 'scissors':
				alert('The computer picked ' + randomComputerOption + '. You tied!');
				ties++;
				userInput = undefined; //reset it
				break;
			  case 'string':
				alert('The computer picked ' + randomComputerOption + '. You won!');
				score++;
				userInput = undefined; //reset it
				break;
			  case 'macbook':
				alert('The computer picked ' + randomComputerOption + '. You won!');
				score++;
				userInput = undefined; //reset it
				break;
			}
			break;
		case 'string':
			switch (randomComputerOption) {
			  case 'rock':
				alert('The computer picked ' + randomComputerOption + '. You won!');
				score++;
				userInput = undefined; //reset it
				break;
			  case 'paper':
				alert('The computer picked ' + randomComputerOption + '. You won!');
				score++;
				userInput = undefined; //reset it
				break;
			  case 'scissors':
				alert('The computer picked ' + randomComputerOption + '. You lose!');
				score--;
				userInput = undefined; //reset it
				break;
			  case 'string':
				alert('The computer picked ' + randomComputerOption + '. You tied!');
				ties++;
				userInput = undefined; //reset it
				break;
			  case 'macbook':
				alert('The computer picked ' + randomComputerOption + '. You lose!');
				score--;
				userInput = undefined; //reset it
				break;
			}
			break;
		case 'macbook':
			switch (randomComputerOption) {
			  case 'rock':
				alert('The computer picked ' + randomComputerOption + '. You lose!');
				score--;
				userInput = undefined; //reset it
				break;
			  case 'paper':
				alert('The computer picked ' + randomComputerOption + '. You won!');
				score++;
				userInput = undefined; //reset it
				break;
			  case 'scissors':
				alert('The computer picked ' + randomComputerOption + '. You lose!');
				score--;
				userInput = undefined; //reset it
				break;
			  case 'string':
				alert('The computer picked ' + randomComputerOption + '. You won!');
				score++;
				userInput = undefined; //reset it
				break;
			  case 'macbook':
				alert('The computer picked ' + randomComputerOption + '. You tied!');
				ties++;
				userInput = undefined; //reset it
				break;
			}
			break;
	}


}

document.write('Your score for extreme rock papers scissors is ' + score + '. You tied ' + ties + ' times.');

if (score > 0){
	win_sound.play();
}else{
	lose_sound.play();
}