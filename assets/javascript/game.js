var wordList = [
	"chanel", 
	"givenchy", 
	"valentino", 
	"chloe", 
	"prada", 
	"gucci", 
	"balenciaga"
]

var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 10;

function startGame(){
	numGuesses = 10;
	blanksAndSuccesses = [];
	wrongGuesses = [];
	console.log(wordList);
	
	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	console.log(chosenWord);
	
	letterInChosenWord = chosenWord.split("");
	numBlanks = letterInChosenWord.length;
	console.log(chosenWord);
	console.log(numBlanks);

	for(var i = 0; i <numBlanks; i++){
		blanksAndSuccesses.push("_");
	}
	console.log(blanksAndSuccesses);
	document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('guesses-left').innerHTML = numGuesses;
	

}

function checkLetters(letter){

	var letterInWord = false;

	for (var i=0; i<numBlanks; i++){
		if(chosenWord[i] === letter){
			letterInWord = true;
		}
	}

	if(letterInWord){
		for(i=0; i<numBlanks; i++){
			if(chosenWord[i] === letter){
				blanksAndSuccesses[i] = letter;
			}
			console.log("inside our checkletter function", blanksAndSuccesses);
		}
	}else{
		numGuesses --;
		wrongGuesses.push(letter);
	}
	console.log("our wrong guesses in checkletter function", wrongGuesses)
}

function roundComplete(){

	document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('guesses-left').innerHTML = numGuesses;
	document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

	console.log(letterInChosenWord);
	console.log(blanksAndSuccesses);
	if(letterInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
		winCounter++
		alert("You are a FASHIONISTA");
		document.getElementById('win-counter').innerHTML = winCounter;
		startGame();
	}else if(numGuesses === 0){
		document.getElementById('loss-counter').innerHTML = lossCounter ++;
		alert("You can\'t sit with us!");
		startGame();

	}

}

startGame(); 
document.onkeyup = function(event){

	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("this is the letter we typed", letterGuessed)
	checkLetters(letterGuessed)
	roundComplete();

}