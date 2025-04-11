// SALES BY MATCH
// ZIG ZAG SEQUENCE
// DRAWING BOOK
// TOWER BREAKERS
// CAESAR CIPHER
// MAX MIN
// DYNAMIC ARRAY
// GRID CHALLENGE
// PRIME DATES
// SHERLOCK AND ARRAY
// RECURSIVE DIGIT SUM
// COUNTER GAME
// SUM VS XOR
// MOCK TEST

// SALES BY MATCH (given array of ints, return the number of matching pairs)
// Method 1
// function sockMerchant(n, ar) {
//   let pairCount = 0;
//   // Use counting sort (see week 1) to get number of each int occurance (constraint is 1 <= int <= 100)
//   let frequency = [];
//   for (let i = 0; i <= 100; i++) {
//     frequency.push(0);
//   }
//   for (let i = 0; i < ar.length; i++) {
//     frequency[ar[i]]++;
//   }
//   // Iterate frequency array. if i is >=2, add number of pairs by using Math.floor(i/2) to round down to nearest integer (3 / 2 == 1.5 -> 1)
//   for (let i = 0; i < frequency.length; i++) {
//     if (frequency[i] >= 2) {
//       pairCount = pairCount + Math.floor(frequency[i] / 2);
//     }
//   }
//   return pairCount;
// }
// function altSockMerchant(n, ar) {
//   //Create object with array items as keys and occurances as values
//   const counts = {};
//   for (const color of ar) {
//     // If a color has already been found, add 1 to its count, else start its count at 1
//     counts[color] = counts[color] ? counts[color] + 1 : 1;
//   }
//   let totalPairs = 0;
//   // Iterate colors in counts object. If value is >=2, add number of pairs by using Math.floor(i/2) to round down to nearest integer (3 / 2 == 1.5 -> 1)
//   for (const color in counts) {
//     if (counts[color] >= 2) {
//       totalPairs = totalPairs + Math.floor(counts[color] / 2);
//     }
//   }
//   return totalPairs;
// }
// ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// n = ar.length;
// console.log(sockMerchant(n, ar));
// console.log(altSockMerchant(n, ar));

// ZIG ZAG SEQUENCE (Can't test JS solution in HackerRank, submitted Python instead)
// function findZigZagSequence(a, n) {
//   // Sort array to get median and greatest values in middle and last index
//   a.sort();
//   let mid = Math.floor(n / 2);
//   // Slice array ahead of median, reverse second half (greatest > median), return concat
//   let firstHalf = a.slice(0, mid);
//   let secondHalf = a.slice(mid).reverse();
//   return firstHalf.concat(secondHalf);
// }
// const a = [1, 2, 3, 4, 5, 6, 7];
// const n = 7;
// console.log(findZigZagSequence(a, n));

// DRAWING BOOK
// function pageCount(n, p) {
//   let frontTurns = 0;
//   let foundTurn = 0;
//   // Set last page as odd number
//   let last = n;
//   if (n % 2 == 0) {
//     last = n + 1;
//   }
//   // Starting from 0, iterate by 2 ([0,1],[2,3])
//   // Count page turns and mark turn when p is found. Don't count after reaching last page!
//   for (let i = 0; i + 1 <= last; i = i + 2) {
//     if (i == p || i + 1 == p) {
//       foundTurn = frontTurns;
//     }
//     if (i + 1 < last) {
//       frontTurns++;
//     }
//   }
//   // P was found in fewer than half of all page turns, return that amount, else return difference
//   if (foundTurn <= (frontTurns - 1) / 2) {
//     return foundTurn;
//   } else {
//     return frontTurns - foundTurn;
//   }
// }
// const n = 5;
// const p = 4;
// console.log(pageCount(n, p));

// TOWER BREAKERS (Given n towers of m height, 2 players can reduce a tower to height of y where (m & y = 0). First player with no valid moves (all towers at 1) loses.)
// function towerBreakers(n, m) {
//   // If tower(s) are height 1, player 1 has no starting move and immediately loses
//   if (m == 1) {
//     return 2;
//   } else {
//     // If even number of towers, 2 can match 1 and win. If odd, 1 can take first tower of play, then match 2 until 2 is out of moves.
//     return n % 2 == 0 ? 2 : 1;
//   }
// }

// function altTowerBreakers(n, m) {
//   // Single line version: 2 wins with tower height 1 or even number of towers, else 1 wins
//   return m == 1 || n % 2 == 0 ? 2 : 1;
// }
// const n = 1;
// const m = 4;
// console.log(towerBreakers(n, m));
// console.log(altTowerBreakers(n, m));

// CAESAR CIPHER (Encode string s by shifting each letter k spaces down the alphabet, wrapping as "Z" and preserving case)
// function caesarCipher(s, k) {
//   // Split text into array
//   let array = s.split("");
//   // For each letter char, subtract from ASCII to get 0-25 index, add key, get modulo of 26, add ASCII back to get ciphered char.
//   for (let i = 0; i < array.length; i++) {
//     if (/[A-Z]/g.test(array[i])) {
//       array[i] = String.fromCharCode(
//         ((array[i].charCodeAt() - 65 + k) % 26) + 65
//       );
//     }
//     if (/[a-z]/g.test(array[i])) {
//       array[i] = String.fromCharCode(
//         ((array[i].charCodeAt() - 97 + k) % 26) + 97
//       );
//     }
//   }
//   return array.join("");
// }

// function altCaesarCipher(s, k) {
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (char.match(/[a-z]/i)) {
//       const original = s.charCodeAt(i);
//       let encrypted;
//       if (65 <= original <= 90) {
//         encrypted = ((original - 65 + k) % 26) + 65;
//       } else if (97 <= original <= 122) {
//         encrypted = ((original - 97 + k) % 26) + 97;
//       }
//       char = String.fromCharCode(encrypted);
//     }
//     result += char;
//   }
//   return result;
// }

// s = "lcfd";
// k = 98;
// console.log(caesarCipher(s, k));

// MAX MIN (Given array of integers, find permutation of k length with lowest difference between min and mx values)
// function maxMin(k, arr) {
//   // Sort array least to greatest to get permutations with lowest unfairness
//   arr.sort((a, b) => a - b);
//   // Get iterable min and max for permutations of length k
//   let permMin = 0;
//   let permMax = k - 1;
//   // Problem parameter
//   let min = 1000000000;
//   let diff;
//   // Iterate through min and max values of permutaions. If difference is lowest yet, set as min
//   while (permMax < arr.length) {
//     diff = arr[permMax] - arr[permMin];
//     if (diff < min) {
//       min = diff;
//     }
//     permMin++;
//     permMax++;
//   }
//   return min;
// }

// arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
// k = 4;
// console.log(maxMin(k, arr));

// DYNAMIC ARRAY (empty 2D array of length n, and iterate through array of 3-digit string queries encoded as Type,X,Y)
// function dynamicArray(n, queries) {
//   // Create empty 2D array of n length, set lastAnswer and answers array
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr[i] = [];
//   }
//   let lastAnswer = 0;
//   let answers = [];

//   // Get each query's type, x, and y. Set idx using provided formula and branching operations based on problem description
//   for (let i = 0; i < queries.length; i++) {
//     let type = parseInt(queries[i][0]);
//     let x = parseInt(queries[i][1]);
//     let y = parseInt(queries[i][2]);

//     let idx = (x ^ lastAnswer) % n;

//     if (type == 1) {
//       arr[idx].push(y);
//     } else if (type == 2) {
//       lastAnswer = arr[idx][y % arr[idx].length];
//       answers.push(lastAnswer);
//     }
//   }

//   return answers;
// }
// const n = 2;
// const queries = ["105", "117", "103", "210", "211"];
// console.log(dynamicArray(n, queries));

// GRID CHALLENGE (given array of lower-case letter strings of equal length, sort strings into alphabetized rows, then determine if columns are alphabetical.)
// NOTE: Problem description says "Square grid", but actually provides array of strings, with string length not always equal to array length)
// function gridChallenge(grid) {
//   // Convert each string ("row") into alphabetically sorted array)
//   for (let i = 0; i < grid.length; i++) {
//     grid[i] = grid[i].split("").sort();
//   }
//   // Iterate through all but last row. If char code in next row, same column is lesser, return "NO". Else return "YES"
//   for (let i = 0; i < grid.length - 1; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       let currentChar = grid[i][j].charCodeAt();
//       let nextChar = grid[i + 1][j].charCodeAt();
//       if (nextChar < currentChar) {
//         return "NO";
//       }
//     }
//   }
//   return "YES";
// }
// const grid = ["abc", "hjk", "mpq", "rtv"];
// console.log(gridChallenge(grid));

// PRIME DATES (Code not present in JS, corrections required in Leap Year if-statement, multiplying X to concat MM and YYYY, X%4 OR X%7, and set month counter to 1 after 12)

// SHERLOCK AND ARRAY
// Faster than iterating through array and reducing slices!
// function balancedSums(arr) {
//   // Set left and right sums as 0 and total of array
//   let leftSum = 0;
//   let rightSum = arr.reduce((a, b) => a + b, 0);
//   // Check if leftSum equals rightSum - current index, array meets condition. If not, add index to left and subtract from right.
//   for (let i = 0; i < arr.length; i++) {
//     if (leftSum == rightSum - arr[i]) {
//       return "YES";
//     } else {
//       leftSum = leftSum + arr[i];
//       rightSum = rightSum - arr[i];
//     }
//   }
//   return "NO";
// }
// const arr = [5, 6, 8, 11];
// console.log(balancedSums(arr));

// RECURSIVE DIGIT SUM (Get super digit of integer (n concat k times): find sum of digits, repeat until single digit)
// function superDigit(n, k) {
//   // Super digit found
//   if (n.length == 1) {
//     return n;
//   }
//   // Get sum of all digits in string, multiplied by k to account for 1st time concatenation
//   let sum = 0;
//   for (const digit of n) {
//     sum += Number(digit) * k;
//   }
//   // Run result recursively with concatenation multiplier of 1 (non-factor)
//   return superDigit(sum.toString(), 1);
// }
// const n = "123";
// const k = 3;
// console.log(superDigit(n, k));

// COUNTER GAME
// function counterGame(n) {
//   let turn = 0;
//   while (n > 1) {
//     // If log2(n) % 1 == 0, n is a power of 2 so divide by 2. Else, subtract the nearest lower power of 2 (using Math.floor to round down to whole number)
//     n =
//       Math.log2(n) % 1 == 0 ? n / 2 : n - Math.pow(2, Math.floor(Math.log2(n)));
//     turn++;
//   }
//   // Louise wins if turn count is odd, Richard wins if even (including zero)
//   return turn % 2 == 0 ? "Richard" : "Louise";
// }
// const n = 4;
// console.log(counterGame(n));

// SUM VS XOR (for integer n, return each x where n+x = n^x (XOR operator))
// function sumXor(n) {
// Faster than iterating through n + i == n ^ i
// If n is zero, return 1. Else get the number of zeros in n's binary form, raise 2 to that number.
//   return n == 0
//     ? 1
//     : Math.pow(
//         2,
//         n
//           .toString(2)
//           .split("")
//           .filter((bit) => bit == "0").length
//       );
// }

// const n = 0;
// console.log(sumXor(n));

// MOCK TEST
// 1. PALINDROME INDEX (given string of lowercase letters, return index of letter to remove to make the string a palindrome)
// function palindromeIndex(s) {
//   // Declare nested function:
//   const remainingChars = (s, left, right) => {
//     while (left < right) {
//       if (s.charAt(left) !== s.charAt(right)) {
//         return false;
//       }
//       left++;
//       right--;
//     }
//     return true;
//   };

//   // String with length 1 is automatically a palindrome
//   if (s.length == 1) {
//     return -1;
//   }
//   // Iterate beginning and end chars, meet in middle of string
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     // If chars don't match, check remaining chars (minus left) for matches to determine if omitting left creates a palindrome
//     if (s.charAt(left) !== s.charAt(right)) {
//       if (remainingChars(s, left + 1, right)) {
//         return left;
//       } else {
//         return right;
//       }
//     }
//     left++;
//     right--;
//   }
//   // No mismatching chars found, string is already palindrome
//   return -1;
// }
// const s = "cabc";
// console.log(palindromeIndex(s));

// 2. BETWEEN TWO SETS (given arrays of ints a and b, return the number of integers of which all of a are factors, and which themselves are factors to all of b)
// function getTotalX(a, b) {
//   // Set counter at 0, get max from a and min from b for range on integers to test.
//   let counter = 0;
//   let start = Math.max(...a);
//   let end = Math.min(...b);
//   for (let i = start; i <= end; i++) {
//     // Check if int is a multiple of all values in a, and a factor of all values in b. Add 1 to counter if true.
//     if (a.every((j) => i % j == 0) && b.every((k) => k % i == 0)) {
//       counter++;
//     }
//   }
//   return counter;
// }
// const a = [2, 4];
// const b = [16, 32, 96];
// console.log(getTotalX(a, b));

// 3. ANAGRAM (given string of lowercase letters, return the minimum number of chars to change to the 1st and 2nd half of the string are anagrams of each other)
function anagram(s) {
  // Return -1 is string has odd number of chars
  if (s.length % 2 != 0) {
    return -1;
  }
  // Get midpoint of string length
  let midPoint = s.length / 2;
  // Declare array of 26 zeros to track letter frequency.
  let letterFreq = [];
  for (let i = 0; i < 26; i++) {
    letterFreq[i] = 0;
  }
  // Iterate though 1st and 2nd half of string. 
  // For each char in 1st half, add 1 to array. 
  // For each char in 2nd half, subtract 1. Chars with equal presence will balance to zero! 
  for (let i = 0; i < midPoint; i++) {
    letterFreq[s.charAt(i).charCodeAt() - 97]++;
    letterFreq[s.charAt(i + midPoint).charCodeAt() - 97]--;
  }
  // Count the total (either positive or negative) of letters which were not balanced.
  let counter = 0;
  for (let i = 0; i < letterFreq.length; i++) {
    if (letterFreq[i] > 0) {
      counter += letterFreq[i];
    }
  }
  return counter;
}
const s = "abccde";
console.log(anagram(s));

// function staircase(n) {
//   for (let i = 1; i <= n; i++) {
//     let string = " ".repeat(n-i) + "#".repeat(i);
//     console.log(string);
//   }
// }
// const n = 6;
// staircase(n);
