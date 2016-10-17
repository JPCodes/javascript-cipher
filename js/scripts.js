
var sentenceChanger = function(sentence) { // sentence is temporary
  var firstChar = sentence.charAt(0).toUpperCase();
  var lastChar = sentence.slice(-1).toUpperCase();
  return firstChar + " " + lastChar;
};

var userInput = prompt("Enter a sentence");
var sentenceChangerResult = sentenceChanger(userInput); // calling sC function and passing in userInput
console.log(sentenceChangerResult); // sending data to console


var reverseLetters = function(letters) {
  var input = letters;
  input = input.split("").reverse().join("");
  return input; // letters in reverse
};

var reverseLettersResult = reverseLetters(sentenceChangerResult);
// calling reverseLetters function and adding sentenceChangerResults from above and assinging to a var

console.log(reverseLettersResult);
