// THE BOMBERMAN GAME
// NEW YEAR CHAOS
// SHERLOCK AND THE VALID STRING
// CLIMBING THE LEADERBOARD
// REVERSE A LINKED LIST
// REVERSE A DOUBLY LINKED LIST
// INSERT A NODE AT A SPECIFIC POSITION IN A LINKED LIST
// MERGE TWO SORTED LINKED LISTS
// ICE CREAM PARLOR
// QUEUE USING TWO STACKS
// BALANCED BRACKETS
// WAITER
// SIMPLE TEXT EDITOR
// MOCK TEST

// THE BOMBERMAN GAME

// NEW YEAR CHAOS

// SHERLOCK AND THE VALID STRING

// CLIMBING THE LEADERBOARD
// Optimized
function climbingLeaderboard(ranked, player) {
  //Declare nested function, binary search
  const binSearch = (uniqueRanked, score) => {
    let start = 0;
    let end = uniqueRanked.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (uniqueRanked[mid] == score) {
        return mid + 1;
      } else if (score > uniqueRanked[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return start + 1;
  };

  // Use Set to get only unique values from ranked
  const uniqueRanked = [...new Set(ranked)];
  // Check
  let result = [];
  player.map((score) => {
    result.push(binSearch(uniqueRanked, score));
    console.log(uniqueRanked);
  });
  return result;
}

// Original solution, unoptimized
// function altClimbingLeaderboard(ranked, player) {
//   let result = [];
//   for (let i = 0; i < player.length; i++) {
//     ranked.push(player[i]);
//     ranked.sort((a, b) => b - a);
//     let position = 0;
//     for (let j = 0; j < ranked.length; j++) {
//       if (ranked[j] !== ranked[j - 1]) {
//         position++;
//       }
//       if (player[i] == ranked[j]) {
//         result.push(position);
//         break;
//       }
//     }
//   }
//   return result;
// }

const ranked = [100, 90, 90, 80];
const player = [70, 80, 105];
console.log(climbingLeaderboard(ranked, player));
// console.log(altClimbingLeaderboard(ranked, player));

// REVERSE A LINKED LIST

// REVERSE A DOUBLY LINKED LIST

// INSERT A NODE AT A SPECIFIC POSITION IN A LINKED LIST

// MERGE TWO SORTED LINKED LISTS

// ICE CREAM PARLOR

// QUEUE USING TWO STACKS

// BALANCED BRACKETS

// WAITER

// SIMPLE TEXT EDITOR

// MOCK TEST
