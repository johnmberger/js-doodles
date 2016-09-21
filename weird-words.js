// Weird Words: Write a function weirdWords that takes a string and changes every letter to the next letter in the alphabet and then returns the result. Note: spaces and special characters should remain the same. Capital letters should remain capitalized.

function weirdWords(sentence) {
  return sentence.replace(/[a-zA-Z]/g, function(char) {
    if (char === 'Z') {
      return 'A';
    } if (char === 'z') {
      return 'a';
    }
    return String.fromCharCode(char.charCodeAt(0)+1);
  });
}

console.log('----- Regex -----');
console.log('Input: Want to go to the #1 Zoo?!');
console.log('Output:', weirdWords('Want to go to the #1 Zoo?!'));
