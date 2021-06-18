
const lengthOfLongestSubstring = (s) => {
  let result = 0
  let hash_map = new Map()
  let i = 0
  for (let j in s) {
    if (hash_map.has(s[j])) {
      console.log('The letter refound is', s[j])
      i = Math.max(hash_map.get(s[j]), i)
    }
    console.log(`The result can be either: ${result} or ${parseInt(j) - i + 1}`)
    result = Math.max(result, parseInt(j) - i + 1)
    console.log(`The real result is: ${result}`)
    hash_map.set(s[j], parseInt(j) + 1)
    console.log(hash_map, '\n')
  }
  return result
};

const LONGESTSUBSTRING_CASES = [
  "abcabcbb",
  "bdfowgdiowem",
  " ",
  "c",
  "ywobdudboewhgaomnsldhjkmf"
]

console.log('The longest substring length: ', lengthOfLongestSubstring(LONGESTSUBSTRING_CASES[0]))
console.log('The longest substring length: ', lengthOfLongestSubstring(LONGESTSUBSTRING_CASES[1]))
console.log('The longest substring length: ', lengthOfLongestSubstring(LONGESTSUBSTRING_CASES[2]))
console.log('The longest substring length: ', lengthOfLongestSubstring(LONGESTSUBSTRING_CASES[3]))
console.log('The longest substring length: ', lengthOfLongestSubstring(LONGESTSUBSTRING_CASES[4]))
