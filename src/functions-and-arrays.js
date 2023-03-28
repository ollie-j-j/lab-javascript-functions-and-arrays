// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  }

  else if (number2 > number1) {
    return number2;
  }

  else {
    return number1 || number2;
  }
}

console.log(maxOfTwoNumbers(6, 3));

// Iteration #2: Find longest word

// Step 1: Store longest word in a variable
// Step 2: Loop through the array
// Step 3: Create a condition where if the word in the array is longest than the word stored in the variable, make it the longest word stored
// Step 4: Return longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordArray) {
  let longestWord = "";
  if (wordArray.length === 0) {
    return null;
  }

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longestWord.length) {
      longestWord = wordArray[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(words)); // returns "crocodile"


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArray) {
  sum1 = 0;
  for (let i = 0; i < numberArray.length; i++) {
      sum1 += numberArray[i];
  }
  return sum1;
}

console.log(sumNumbers(numbers));

// Iteration #3.2 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// Step 1: Store sum in a variable
// Step 2: Create a new array to store integers (existing & converted)
// Step 3: Loop through the mixed array and check for numbers using typeof operator (if there, add to new array using push method)
// Step 4: Loop through mixed array and check for booleans, using typeof operator (if true, add 1 to new array using push method)
// Step 5: Loop through mixed array and check for strings using typeof operator (if true, store length of the string in a variable and add it to new aray using push method)

function sum(mixedArray) {

  let sum2 = 0;

  let newArray = [];

  for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number") {
      newArray.push(mixedArray[i]);
    }
    else if (typeof mixedArray[i] === "boolean") {
      if (mixedArray[i] === true) {
        newArray.push(1);
      }
      
    }
    else if (typeof mixedArray[i] === "string") {
      let stringLength = mixedArray[i].length;
      newArray.push(stringLength);
    }
    else if (typeof mixedArray[i] === "object" || "array") {
      console.log("Objects & Arrays are unsupported data types");
    }
  }

  for (let j = 0; j < newArray.length; j++) {
    sum2 += newArray[j];
  }

  return sum2;
}

console.log(sum(mixedArr));


// Iteration #4: Calculate the average
// Level 1: Array of numbers (Iteration 4.1)
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(average) {
  let sum3 = 0;
  if (average.length === 0) {
    return null;
  }
  else if (average.length === 1) {
    return average[0];
  }
  for (i = 0; i < average.length; i ++) {
    sum3 += average[i];
  }
  return sum3/average.length;
}

console.log(averageNumbers(numbersAvg));


// Level 2: Array of strings (Iteration 4.2)

// Step 1: Create a variable to store total number of characters in all strings
// Step 2: Create a new array to store the converted strings as numbers
// Step 3: Loop through the array of words, and add their length to the new array using the .length and .push method
// Step 4: Calculate average of the new array of numbers

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];



let sum4 = 0;

let stringsToNumbersArray = [];

function averageWordLength(averageStrings) { 

  if (averageStrings.length === 0) {
    return null;
  }

  else if (averageStrings.length === 1) {
    return averageStrings[0].length;
    }

  for (let i = 0; i < averageStrings.length; i++) {
 
    stringsToNumbersArray.push(averageStrings[i].length);
  }

  for (j = 0; j < stringsToNumbersArray.length; j ++) {
    sum4 += stringsToNumbersArray[j];
  }
  return sum4/stringsToNumbersArray.length;

}

console.log(averageWordLength(wordsArr));


// Bonus - Iteration #4.3
// Same logic as bonus iteration 3.2, then taking the average

function avg(arr) {

  let sum5 = 0;

  let newArray2 = [];

  if (arr.length === 0) {
    return null;
  }

  for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number") {
      newArray2.push(mixedArray[i]);
    }
    else if (typeof mixedArray[i] === "boolean") {
      if (mixedArray[i] === true) {
        newArray2.push(1);
      }
    
    }
    else if (typeof mixedArray[i] === "string") {
      let stringLength = mixedArray[i].length;
      newArray2.push(stringLength);
    }
  }

  for (let j = 0; j < newArray2.length; j++) {
    sum5 += newArray2[j];
  }

  return sum5/mewArray2.length;
}

console.log(sum(mixedArr));


// Iteration #5: Unique arrays

const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];


function uniquifyArray(arrayOfWords) {
  const noRepeatWords = [];
  if (arrayOfWords.length === 0) {
    return null;
  }
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (noRepeatWords.indexOf(arrayOfWords[i]) === -1) {
      noRepeatWords.push(arrayOfWords[i]);
    }
  }
  return noRepeatWords;
}

console.log(uniquifyArray(wordsUnique));


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrayInput, wordInput) {
    if (arrayInput.length === 0) {
      return null;
    }
    for (let i = 0; i < wordsFind.length; i++) {
      if (arrayInput.includes(wordInput)) {
        return true;
      }
      else {
        return false;
      }
    }
}

console.log(doesWordExist(wordsFind, "machine"));



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arrayInputCount, wordInputCount) {
  let count = 0;

  for (let i = 0; i < arrayInputCount.length; i ++) {
    if (wordInputCount === arrayInputCount[i]) {
      count ++;
    }
    else if (wordInputCount === arrayInputCount[i]) {
      return 1;
    }
  }
  return count;
}

console.log(howManyTimes(wordsCount, "matter"));



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
