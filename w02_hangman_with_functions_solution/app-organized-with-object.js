var game = {

	words : ["cat", "bat", "sat", "mat", "meow"],
	word : "",
	lettersOfWord : [],
	displayWord: "",
	continuePlay : true,
	chancesUsed : 0, //how many times can this user be wrong?
	correct : 0, //how many did user get correct - useful when user loses
	guess : '',
	totalChances : 0,

	promptUser : function(){
	  var chancesLeft = this.totalChances - this.chancesUsed;

	  this.guess = prompt( "So far you have: " + this.displayWord + ". Guess a letter please. Type 'quit' to quit playing. You have " + chancesLeft + " chances left!" );
	},

	setRandomWord : function(){
	   this.word = this.words[ Math.floor(Math.random()* this.words.length) ];
	},

	setLettersofWord : function() {
		this.lettersOfWord = this.word.split(''); //creates an array of the letters of the word
	},

	initialSetupForDisplayWord : function (){
	  var cword = '';
	  for ( var i = 0; i < this.word.length; i++){
	    cword = cword + '_';
	  }

	  this.displayWord = cword;
	},

	rebuildDisplayWord : function (){
	  var index = this.word.indexOf(this.guess);

	  //how we replace a particular part of a string with a letter in javascript
	  //we do this because in javascript strings are immutable
	  dispwrd = this.displayWord.split('');
	  dispwrd[index] = this.guess;
	  dispwrd = dispwrd.join('');

	  this.displayWord = dispwrd;
	},

	play : function(){
		this.setRandomWord();
		this.setLettersofWord();
		this.initialSetupForDisplayWord();
		this.totalChances = this.word.length + 4;

		while( this.displayWord != this.word ){

		  //prompt the user
		  this.promptUser();

		  //make sure we can exit the loop
		  if( this.guess === "quit" ){
		    this.continuePlay = false;

		    alert("Later bro.")

		    break;
		  }

		  //make sure the user put in a letter
		  while( this.guess.length > 1 ){
		    alert("You need to type in a single letter!");
		    this.promptUser();
		  }

		  if (this.chancesUsed == this.totalChances){
		    alert("You guessed wrong too many times. You lost bro.");
		    break;
		  }

		  //get the index of the guess
		  var i = this.lettersOfWord.indexOf(this.guess);

		  //will be -1 if guess is incorrect
		  if(i !== -1){
		    //for a correct guess, set the display word to include this new letter
		    this.rebuildDisplayWord ();

		    //get rid of the guess from lettersOfWord array
		    this.lettersOfWord.splice(i, 1);

		    this.correct++;
		  }else{
		    this.chancesUsed++;
		  }

		  if (this.correct == this.word.length){
		    this.continuePlay == true;
		  }
		  
		}

		if (this.continuePlay == true){
		  if( this.correct == this.word.length ){
		    alert( "You Are correct: it was: " + this.word);
		    var playAgain = confirm('Would you like to play again?');
		  }else{
		    alert( "You lost it was actually: " + this.word);
		    var playAgain = confirm('Would you like to play again?');
		  }

		  if (playAgain){
		    location.reload();
		  }
		}
	}
}

game.play();