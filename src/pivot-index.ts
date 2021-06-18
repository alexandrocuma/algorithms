const pivotIndex = (numbers) => {
  let total = 0
  let sum = 0
  for (let num of numbers) total += num
  console.log(`\nTotal: ${total}`)
  for (let i in numbers) {
    console.log(`Iteration ${i}, Iteration Number ${numbers[i]}, Sum Done: ${sum}, If condition: ${total - sum - numbers[i]}`)
    if (sum === total - sum - numbers[i]) return i
    sum += numbers[i]
  }
  return -1
}

const PIVOT_INDEX_TESTS = [
  [1, 2, 4, 2, 1],
  [1, 1],
  [1, 7, 3, 6, 5, 6],
  [1, 2, 3]
]

console.log('The index answer is: ', pivotIndex(PIVOT_INDEX_TESTS[0]))
console.log('The index answer is: ', pivotIndex(PIVOT_INDEX_TESTS[1]))
console.log('The index answer is: ', pivotIndex(PIVOT_INDEX_TESTS[2]))
console.log('The index answer is: ', pivotIndex(PIVOT_INDEX_TESTS[3]))
