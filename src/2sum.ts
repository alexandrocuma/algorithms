const twoSum = (nums, target) => {
  let i = 0
  while (i < nums.length) {
    let j = i + 1
    while (j < nums.length) {
      if (nums[i] + nums[j] === target) return [i, j]
      j++
    }
    i++
  }
  return -1
}

const twoSum_alt = (nums, target) => {
  let i = 0
  while (i < nums.length) {
    let remain = Math.abs(nums[i] - target)
    let index = nums.findIndex(value => remain === value)
    if (index > -1) return [i, index]
    i++
  }
  return -1
}

const TWOSUM_TESTS = [
  {
    nums: [1, 2, 4, 6], target: 10
  },
  {
    nums: [4, 8, 6, 10], target: 14
  },
  {
    nums: [4, 8, 6, 10], target: 22
  }
]

console.log('The indexes of the 2sum are:', twoSum(TWOSUM_TESTS[0].nums, TWOSUM_TESTS[0].target))
console.log('The indexes of the 2sum are:', twoSum(TWOSUM_TESTS[1].nums, TWOSUM_TESTS[1].target))
console.log('The indexes of the 2sum are:', twoSum(TWOSUM_TESTS[2].nums, TWOSUM_TESTS[2].target))

console.log('\nAlternative for the 2Sum')
console.log('The indexes of the 2sum are:', twoSum_alt(TWOSUM_TESTS[0].nums, TWOSUM_TESTS[0].target))
console.log('The indexes of the 2sum are:', twoSum_alt(TWOSUM_TESTS[1].nums, TWOSUM_TESTS[1].target))
console.log('The indexes of the 2sum are:', twoSum_alt(TWOSUM_TESTS[2].nums, TWOSUM_TESTS[2].target))