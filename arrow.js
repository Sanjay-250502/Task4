//! 1.Print the odd numbers in an array
 const odd = (arr) => {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    return result;
   };
   console.log(odd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//! 2.Convert all the strings to title caps in a string array
const arr = ['hello', 'world', 'javascript'];

const convertToTitleCase = (arr) => {
  return arr.map(item => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
};

const titleCaseArr = convertToTitleCase(arr);
console.log(titleCaseArr);

//! 3.Sum of all numbers in an array
const array = [1, 2, 3, 4, 5];

const sumArray = (array) => array.reduce((sum, num) => sum + num, 0);

const sum = sumArray(array);
console.log(sum);

//! 4.Return all the prime numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers); 

//! 5.Return all the palindromes in an array
const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
 };
  
 const findPalindromesInArray = arr => arr.filter(item => isPalindrome(item));  
 const inputArray = ['madam', 'hello', 'level', 'javascript', 'radar', 'examples', 'civic', 'world', 'rotator'];
 const palindromesArray = findPalindromesInArray(inputArray);
 console.log(palindromesArray);  
