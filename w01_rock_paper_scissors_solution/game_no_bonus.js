var userInput; //initialize the variable so the loop below can run
var score = 0; //initialize the user's score to zero

while (userInput != 'quit'){
	var options = ['rock', 'paper', 'scissors'];
	var randomComputerOption = options[Math.floor(Math.random() * options.length)];

	userInput = prompt('Please choose one of these options: rock, paper scissors. If you want to stop playing, then please type in quit. Your score is currently ' + score + '.');

	switch (userInput) {	
	  case 'rock':
	    switch (randomComputerOption) {
	      case 'rock':
	      	alert('The computer picked ' + randomComputerOption + '. You tied!');
	      	break;
	      case 'paper':
	      	alert('The computer picked ' + randomComputerOption + '. You lost!');
	      	score--;
	      	break;
	      case 'scissors':
	      	alert('The computer picked ' + randomComputerOption + '. You won!');
	      	score++;
	      	break;
	    }
	    break;
	  case 'paper':
	   switch (randomComputerOption) {
	     case 'rock':
	     	alert('The computer picked ' + randomComputerOption + '. You won!');
	     	score++;
	     	break;
	     case 'paper':
	     	alert('The computer picked ' + randomComputerOption + '. You tied!');
	     	break;
	     case 'scissors':
	     	alert('The computer picked ' + randomComputerOption + '. You lost!');
	     	score--;
	     	break;
	   }
	   break;
	  case 'scissors':
	    switch (randomComputerOption) {
	      case 'rock':
	      	alert('The computer picked ' + randomComputerOption + '. You lost!');
	      	score--;
	      	break;
	      case 'paper':
	      	alert('The computer picked ' + randomComputerOption + '. You won!');
	      	score++;
	      	break;
	      case 'scissors':
	      	alert('The computer picked ' + randomComputerOption + '. You tied!');
	      	break;
	    }
	    break;
	}

}

document.write('Your score for extreme rock papers scissors is ' + score);