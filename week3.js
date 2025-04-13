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
function climbingLeaderboard(ranked, player) {
  let result = [];
  for (let i = 0; i < player.length; i++) {
    ranked.push(player[i]);
    ranked.sort((a, b) => b - a);
    let position = 0;
    for (let j = 0; j < ranked.length; j++) {
      if (ranked[j] !== ranked[j - 1]) {
        position++;
      }
      if (player[i] == ranked[j]) {
        result.push(position);
        break;
      }
    }
  }
  return result;
}
const ranked = [100, 90, 90, 80];
const player = [70, 80, 105];
console.log(climbingLeaderboard(ranked, player));

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
