// PLUS MINUS
// MINI-MAX SUM
// TIME CONVERSION
// SPARSE ARRAYS
// LONELY INTEGER
// FLIPPING BITS
// DIAGONAL DIFFERENCE
// COUNTING SORT 1
// PANGRAMS
// PERMUTING TWO ARRAYS
// SUBARRAY DIVISION 1
// XOR STRINGS 2
// MOCK TEST

// PLUS MINUS (print ratio to 6 decimal places of positive, negative, and zero integers in an array)
// function plusMinus(arr) {
//   const positive = arr.filter((x) => x > 0);
//   const negative = arr.filter((x) => x < 0);
//   const zero = arr.filter((x) => x == 0);

//   console.log((positive.length / arr.length).toFixed(6));
//   console.log((negative.length / arr.length).toFixed(6));
//   console.log((zero.length / arr.length).toFixed(6));
// }
// function altPlusMinus(arr) {
//   let positive = 0;
//   let negative = 0;
//   let zero = 0;
//   // Iterate through array, add 1 to appropriate counters
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > 0) {
//       positive++;
//     } else if (arr[i] < 0) {
//       negative++;
//     } else if (arr[i] == 0) {
//       zero++;
//     }
//   }
//   // Print counter / array length, to 6 decimal places
//   console.log((positive / arr.length).toFixed(6));
//   console.log((negative / arr.length).toFixed(6));
//   console.log((zero / arr.length).toFixed(6));
// }

// const arr = [-4, 3, -9, 0, 4, 1];
// plusMinus(arr);
// altPlusMinus(arr);

// MINI-MAX SUM (print min and max sum of 4 out of 5 integers in an array)
// function miniMaxSum(arr) {
//   // Sort array least to greatest
//   const sortedArr = arr.sort((a, b) => a - b);
//   // Initial value required for reduce function
//   const init = 0;
//   // Slice 4 lowest from array, reduce to minSum
//   const minSum = sortedArr.slice(0, -1).reduce((x, y) => x + y, init);
//   // Slice 4 highest from array, reduce to maxSum
//   const maxSum = sortedArr.slice(1).reduce((x, y) => x + y, init);
//   console.log(minSum, maxSum);
// }

// function altMiniMaxSum(arr) {
//   // Problem constrains arr[i] between 1 and 1000000000
//   let sum = 0;
//   let min = 1000000000;
//   let max = 0;
//   // Iterate through array, add item to sum, set item as new min or max if < or > previous value
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   //   Return sum - max and sum - min
//   console.log(sum - max + " " + (sum - min));
// }
// function miniMaxSum(arr) {
//   arr.sort((a, b) => a + b);
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   let total = arr.reduce((a, b) => a + b, 0);
//   console.log(total - max + " " + (total - min));
// }

// const arr = [1, 3, 5, 7, 9];
// miniMaxSum(arr);
// altMiniMaxSum(arr);

// TIME CONVERSION (convert 12-hr time string to 24-hr time string)
// function timeConversion(s) {
//   let convertedTime;
//   // Check for AM or PM, get 2nd-last char
//   const dayHalf = s.charAt(s.length - 2);
//   const hoursString = (s.charAt(0) + s.charAt(1)).toString();
//   if (dayHalf == "A") {
//     // if 12:MM, replace with 00:MM
//     if (hoursString == "12") {
//       convertedTime = "00" + s.substring(2);
//     } else {
//       convertedTime = s;
//     }
//   } else if (dayHalf == "P") {
//     // Add 12 to HHs 01 - 11
//     if (hoursString != "12") {
//       let hours = (parseInt(hoursString) + 12).toString();
//       convertedTime = hours + s.substring(2);
//     } else {
//       convertedTime = s;
//     }
//   }
//   // Trim "AM/PM" from remaining string
//   let trimmedTime = convertedTime.substring(0, s.length - 2);
//   return trimmedTime;
// }
// const s = "02:34:50PM";
// console.log(timeConversion(s));

// SPARSE ARRAYS (return array showing # of times items in queries array match items in strings array)
// function matchingStrings(strings, queries) {
//   let results = [];
// //   Iterate through queries
//   for (let i = 0; i < queries.length; i++) {
//     // Filter strings by query
//     let searchCount = strings.filter((string) => string == queries[i]);
//     // Push length of filtered strings to results
//     results.push(searchCount.length);
//   }
//   return results;
// }
// const strings = ["ab", "ab", "abc"];
// const queries = ["ab", "abc", "bc"];
// console.log(matchingStrings(strings, queries));

// LONELY INTEGER (return unique integer from array where all other integers occur twice)
// function lonelyinteger(a) {
//   let result;
//   for (let i = 0; i < a.length; i++) {
//     // Filter array for instances of integer, break if result length is 1.
//     let check = a.filter((x) => x == a[i]);
//     if (check.length == 1) {
//       result = a[i];
//       break;
//     }
//   }
//   return result;
// }

// const a = [1, 2, 3, 4, 3, 2, 1];
// console.log(lonelyinteger(a));

// FLIPPING BITS (convert integer to 32-bit binary, flip 0s and 1s, and return new integer)
// function flippingBits(n) {
//   // Get binary of n and split into array
//   let initBin = (n >>> 0).toString(2).split("");
//   // Create 32-bit base array
//   let thirtyTwoBitTemp = [];
//   for (let i = 0; i <= 31; i++) {
//     thirtyTwoBitTemp[i] = "0";
//   }
//   // Concat argument to end of base and slice to make "n" 32 bit
//   let thirtyTwoBitBase = thirtyTwoBitTemp.concat(initBin).slice(-32);
//   //   Iterate through 32-bit n array, flip 0s and 1s
//   for (let i = 0; i < thirtyTwoBitBase.length; i++) {
//     if (thirtyTwoBitBase[i] == "0") {
//       thirtyTwoBitBase[i] = "1";
//     } else if (thirtyTwoBitBase[i] == "1") {
//       thirtyTwoBitBase[i] = "0";
//     }
//   }
//   //   Join flipping digits as string and parse integer, use radix 2
//   const flippedBits = parseInt(thirtyTwoBitBase.join(""), 2);
//   return flippedBits;
// }

// function altFlippingBits(n) {
//   // ~ flips bits, >>> treats as unsigned 32-bit integer
//   return ~n >>> 0;
// }

// const n = 3;
// const o = 2147483647;
// const p = 1;
// const q = 0;
// console.log(flippingBits(n));
// console.log(altFlippingBits(n));
// console.log(flippingBits(o));
// console.log(altFlippingBits(o));
// console.log(flippingBits(p));
// console.log(altFlippingBits(p));
// console.log(flippingBits(q));
// console.log(altFlippingBits(q));

// DIAGONAL DIFFERENCE (Sum diagonal values in a matrix, then return the absolute value of their difference)
// function diagonalDifference(arr) {
//   //   Add integers from i row and column to diag1 (same for both)
//   let diag1 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     diag1 = diag1 + arr[i][i];
//   }
//   //   Add integers from i row and "last - i" column to diag2 (working backwards)
//   let diag2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     diag2 = diag2 + arr[i][arr.length - 1 - i];
//   }
//   //   Use Math.abs() method to get absolute value of difference
//   return Math.abs(diag1 - diag2);
// }

// const arr = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ];
// console.log(diagonalDifference(arr));

// COUNTING SORT 1 (given an unsorted array of integers between 1-100, return an array that tallies by index each instance of the unsorted integers)
// function countingSort(arr) {
//   // Set array of 100 zeros
//   let frequency = [];
//   for (let i = 0; i <= 99; i++) {
//     frequency.push(0);
//   }
//   // Iterate through arr, for each value, add one to its associated index in frequency
//   for (let i = 0; i < arr.length; i++) {
//     frequency[arr[i]]++;
//   }
//   return frequency;
// }

// const arr = [1, 1, 3, 2, 1];
// console.log(countingSort(arr));

// PANGRAMS (determine if a string contains all letters A-Z, case insensitive)
// function pangrams(s) {
//   // Convert string to all lowercase and remove spaces, split to array
//   let stringToArray = s.toLowerCase().replace(/\s/g, "").split("");
//   // Iterate through ASCII codes a-z converted to letters.
//   // If not found, return "not pangram", else return "pangram"
//   for (let i = 97; i <= 122; i++) {
//     if (!stringToArray.find((letter) => letter == String.fromCharCode(i))) {
//       return "not pangram";
//     }
//   }
//   return "pangram";
// }

// const sample1 = "We promptly judged antique ivory buckles for the next prize";
// const sample2 = "We promptly judged antique ivory buckles for the prize";
// console.log(pangrams(sample1));
// console.log(pangrams(sample2));

// PERMUTING TWO ARRAYS (Given integer k and arrays A & B, determine if permutations for arrays exist where A[i] + B[i] >= k)
// function twoArrays(k, A, B) {
//   // Ascend sort A, Descend sort B to add lowest and highest possible values
//   const sortedA = A.sort((a, b) => a - b);
//   const sortedB = B.sort((a, b) => b - a);
//   // Check if sum of same-indexed numbers in each array is >= k. If not, return "NO"
//   for (let i = 0; i < A.length; i++) {
//     if (sortedA[i] + sortedB[i] < k) {
//       return "NO";
//     }
//   }
//   return "YES";
// }

// const k = 10;
// const A = [2, 1, 3];
// const B = [7, 8, 9];
// console.log(twoArrays(k, A, B));
// const l = 5;
// const C = [1, 2, 2, 1];
// const D = [3, 3, 3, 4];
// console.log(twoArrays(l, C, D));

// SUBARRAY DIVISION 1 (given array s, return the number of subarrays of length m with an integer sum d)
// function birthday(s, d, m) {
//   let result = 0;
//   let init = 0;
//   // Iterate through s getting subarrays of m length
//   for (let i = 0; i < s.length - (m - 1); i++) {
//     let subarray = s.slice(i, i + m);
//     // If sum of subarray integers equals d, add to result
//     if (subarray.reduce((x, y) => x + y, init) == d) {
//       result++;
//     }
//   }
//   return result;
// }

// const s = [2, 2, 1, 3, 2];
// const d = 4;
// const m = 2;
// console.log(birthday(s, d, m));

// XOR STRINGS 2 (Debug existing code, but JS problem was bugged. Solved in Python and Java 7 by correcting = / == issue)

// MOCK TEST
// 1. FIND THE MEDIAN (given array of odd length, sort and return middle-index value)

// function findMedian(arr) {
//   // Sort ascending
//   const sortedArr = arr.sort((a, b) => a - b);
//   // Get length to slice from array and leave single item in middle
//   const trimLength = (arr.length - 1) / 2;
//   return sortedArr.slice(trimLength, trimLength * -1)[0];
// }
// const arr = [5, 3, 1, 2, 4];
// console.log(findMedian(arr));

// 2. FLIPPING THE MATRIX (for square matrix of even length, and able to reverse rows and columns, return maximal sum of ints upper-left quadrant )
// function flippingMatrix(matrix) {
//   let n = matrix.length;
//   let sum = 0;
//   // Iterate through ints in upper left quadrant
//   for (let i = 0; i < n / 2; i++) {
//     for (let j = 0; j < n / 2; j++) {
//       // Int can only be swapped with its X, Y, and XY inverses, get max value of these 4
//       let quartet = [
//         matrix[i][j],
//         matrix[n - i - 1][j],
//         matrix[n - i - 1][n - j - 1],
//         matrix[i][n - j - 1],
//       ];
//       // Add max to sum
//       sum = sum + Math.max(...quartet);
//     }
//   }
//   return sum;
// }
// const matrix = [
//   [112, 42, 83, 119],
//   [56, 125, 56, 49],
//   [15, 78, 101, 43],
//   [62, 98, 114, 108],
// ];

// const matrix2 = [
//   [107, 54, 128, 15],
//   [12, 75, 110, 138],
//   [100, 96, 34, 85],
//   [75, 15, 28, 112],
// ];
// console.log(flippingMatrix(matrix));
// console.log(flippingMatrix(matrix2));
