 //! 1.Print the odd numbers in an array
 (function odd(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    console.log(result);
   })([11,12,13,14,15,16,17,18,19]); 

//! 3.sum of all numbers in an array
let arraySum = (function() {
    return function(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
          sum += arr[i];
        }
      }
      return sum;
    };
  })();
 let numbersArray = [10,20,30,40,50];
 let answer = arraySum(numbersArray);  
 console.log(answer); 

//! 5.Return all the palindromes in an array
const words = ['level', 'hello', 'racecar', 'world', 'madam', "rotator"];

const palindromes = (function() {
  const isPalindrome = word => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  };
  return words.filter(isPalindrome);
})();
console.log(palindromes); 

//! 7.Remove duplicates from an array
const array = [1, 2, 2, 3, 4, 4, 5, 5];

const uniqueArray = (function() {
  return Array.from(new Set(array));
})();
console.log(uniqueArray);