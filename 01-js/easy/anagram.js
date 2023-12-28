/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // firstly cleaning the string for comparisons
  const cleanStr1 = str1.replace(/\s/g,'').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g,'').toLowerCase();

  // sorting the strings for arrangement
  const sortedStr1  = cleanStr1.split('').sort().join('');
  const sortedStr2  = cleanStr2.split('').sort().join('');

  //checking if it is sorted or not
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
