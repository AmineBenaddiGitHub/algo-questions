/*
Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated
sequence of one or more dictionary words.
*/

function wordBreak(str, dict, state = { ctr: 0 }) {
  if (str.length === 0) state.ctr += 1;
  // We only loop if no solution found
  if (state.ctr === 0) {
    for (const word of dict) {
      if (str.indexOf(word) === 0) {
        wordBreak(str.substring(word.length), dict, state);
      }
    }
  }
  return state.ctr > 0;
}

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("catsandog", ["cat", "cats", "and", "sand", "dog"]));
console.log(wordBreak("aaaaaaaa", ["aa", "aaa"]));
