function promptUser(c, w){
  var totalChances = w.length + 4;
  var chancesLeft = totalChances - c;

  var l = prompt( "So far you have: " + displayWord + ". Guess a letter please. Type 'quit' to quit playing. You have " + chancesLeft + " chances left!" );

  return l;
}

function initialSetupForDisplayWord (wrd){
  var cword = '';
  for ( var i = 0; i < wrd.length; i++){
    cword = cword + '_';
  }

  return cword;
}

function setRandomWord(){
   return words[ Math.floor(Math.random()* words.length) ];
}

function rebuildDisplayWord (index, wrd, dispwrd){

  var letter = wrd[index];

  //how we replace a particular part of a string with a letter in javascript
  //we do this because in javascript strings are immutable
  dispwrd = dispwrd.split('');
  dispwrd[index] = letter;
  dispwrd = dispwrd.join('');
  debugger;
  return dispwrd;
}

var words = ["cat", "bat", "sat", "mat", "meow"];
var word, 
  displayWord, 
  continuePlay = true,
  chancesUsed = 0, //how many times was the user wrong?
  correct = 0, //how many did user get correct - useful when user loses
  totalChances = 0;

word = setRandomWord();
lettersOfWord = word.split(''); //creates an array of the letters of the word
displayWord = initialSetupForDisplayWord(word);
totalChances = word.length + 4;

while( displayWord != word ){

  //prompt the user
  var guess = promptUser(chancesUsed, word);

  //make sure we can exit the loop
  if( guess === "quit" ){
    continuePlay = false;

    alert("Later bro.")

    break;
  }

  //make sure the user put in a letter
  while( guess.length > 1 ){
    alert("You need to type in a single letter!");
    var guess = promptUser(chancesUsed, word);
  }

  if (chancesUsed == (word.length + 4)){
    alert("You guessed wrong too many times. You lost bro.");
    break;
  }

  //get the index of the guess
  var i = lettersOfWord.indexOf(guess);

  //will be -1 if guess is incorrect
  if(i !== -1){

    //get rid of the guess from lettersOfWord array
    lettersOfWord.splice(i, 1);

    //for a correct guess, set the display word to include this new letter
    debugger;
    displayWord = rebuildDisplayWord (word.indexOf(guess), word, displayWord); //we can't use i here because we need to replace the correct number in displayWord and i won't be that number because lettersOfWord constantly gets letters taken out.
    correct++;
  }else{
    chancesUsed++;
  }

  if (correct == word.length){
    continuePlay == true;
  }
  
}

if (continuePlay == true){
  if( correct == word.length ){
    alert( "You Are correct: it was: " + word);
    var playAgain = confirm('Would you like to play again?');
  }else{
    alert( "You lost it was actually: " + word);
    var playAgain = confirm('Would you like to play again?');
  }

  if (playAgain){
    location.reload();
  }
}