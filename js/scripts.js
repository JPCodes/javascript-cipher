$(document).ready(function() {
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
  // calling reverseLetters function and adding sentenceChangerResults from above and assigning to a var

  console.log(reverseLettersResult);

  // Incorporates last two functions inside single function

  var changerReverse = function(sentenceInput) {
    var firstFunction = sentenceChanger(sentenceInput);
    console.log(firstFunction);

    var secondFunction = reverseLetters(firstFunction);
    console.log(secondFunction);

    return sentenceInput + secondFunction;
  };

  // var userInputTwo = prompt("Enter a second sentence");
  console.log(changerReverse(userInputTwo));

  // Fourth Function: counts # of letters, divides by 2, rounds down, output letter at that index, concatenates that letter at the beginning of the original sentence
  // Bonus: take final result and reverse it
  // Use jQuery, make 2 clickable imgs, one img original sentence, second img ciphered sentence

  var letterCounter = function(sentence) {
    var count = sentence.length;
    count = parseInt(count / 2);
    count = sentence.charAt(count);
    var result = count + sentence;
    result = result.split("").reverse().join("");
    return result;
  };

  console.log(letterCounter("temporary"));

  $("#img1").click(function() {
    alert(userInput);
  });

  $("#img2").click(function() {
    var output = reverseLetters(userInput);
    alert(output);
  });

});
