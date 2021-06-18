const maxProfit = (numbers) => {
  console.log('\n')
  let i = 0
  let result = 0
  while (i < numbers.length) {
    let j = i + 1
    while (j < numbers.length) {
      console.log(`Day ${i} - Stock Prize ${numbers[i]}, Next Day - Stock Prize ${numbers[j]}`)
      console.log(`Profit Before ${result}, Profit Now ${numbers[j] - numbers[i]}`)
      if (result < (numbers[j] - numbers[i])) result = numbers[j] - numbers[i]
      j++
    }
    i++
  }
  return result
}

const MAX_PROFIT_TEST = [
  [2, 4, 2, 1],
  [1, 1],
  [7, 3, 6, 5, 6],
  [2, 3, 7, 9, 0],
  [10, 9, 8, 7]
]

console.log('The max profit is: ', maxProfit(MAX_PROFIT_TEST[0]))
console.log('The max profit is: ', maxProfit(MAX_PROFIT_TEST[1]))
console.log('The max profit is: ', maxProfit(MAX_PROFIT_TEST[2]))
console.log('The max profit is: ', maxProfit(MAX_PROFIT_TEST[3]))
console.log('The max profit is: ', maxProfit(MAX_PROFIT_TEST[4]))
