//! 2.convert all the strings to title caps in a string array
const toTitleCase = function(str) {
    let result = '';
    let capitalizeNext = true;
     
    for (let i = 0; i < str.length; i++) {
         const char = str[i];
     
         if (capitalizeNext && char !== ' ') {
           result += char.toUpperCase();
           capitalizeNext = false;
         } else {
           result += char.toLowerCase();
         }
     
         capitalizeNext = char === ' ';
       }
     
       return result;
     };
     const inputString = 'hello world this is my first task';
     const titleCasedString = toTitleCase(inputString);
     
     console.log(titleCasedString); 

//! 4.Return all the prime numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = numbers.filter(function(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});

console.log(primeNumbers); 

//! 6.Return median of two sorted arrays of the same size.
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const findMedian = (function() {
  const combinedArray = array1.concat(array2).sort((a, b) => a - b);
  const length = combinedArray.length;
  if (length % 2 === 0) {
    const midIndex = length / 2;
    return (combinedArray[midIndex - 1] + combinedArray[midIndex]) / 2;
  } else {
    const midIndex = Math.floor(length / 2);
    return combinedArray[midIndex];
  }
})();
console.log(findMedian); 

//! 8.Rotate an array by k times
const array = [1, 2, 3, 4, 5];
const rotateBy = 3;

const rotateArray = (function() {
  const k = rotateBy % array.length;

  const rotated = array.slice(k).concat(array.slice(0, k));
  
  return rotated;
})();
console.log(rotateArray);