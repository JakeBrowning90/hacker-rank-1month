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
function pageCount(n, p) {
  let frontTurns = 0;
  let foundTurn = 0;
  // Set last page as odd number
  let last = n;
  if (n % 2 == 0) {
    last = n + 1;
  }
  // Starting from 0, iterate by 2 ([0,1],[2,3])
  // Count page turns and mark turn when p is found. Don't count after reaching last page!
  for (let i = 0; i + 1 <= last; i = i + 2) {
    if (i == p || i + 1 == p) {
      foundTurn = frontTurns;
    }
    if (i + 1 < last) {
      frontTurns++;
    }
  }
  // P was found in fewer than half of all page turns, return that amount, else return difference
  if (foundTurn <= (frontTurns - 1) / 2) {
    return foundTurn;
  } else {
    return frontTurns - foundTurn;
  }
}
const n = 5;
const p = 4;
console.log(pageCount(n, p));

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
