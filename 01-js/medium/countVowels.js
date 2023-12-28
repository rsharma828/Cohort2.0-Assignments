/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   //creating new set of elements of vowels
   const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);

   //firstly making the str to array to which filtering the elements of vowels then making 
   //a seperate array of vowels and finding its length
    const arrayLength = str.split('').filter(char => vowels.has(char)).length;

    return arrayLength;
}

module.exports = countVowels;