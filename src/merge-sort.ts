const MergeSort = (array) => {
  console.log(array)
  if (array.length === 1) return array
  const half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half)
  let secondHalf = array.slice(half)
  if (firstHalf.length > 1) {
    firstHalf = MergeSort(firstHalf)
    console.log(firstHalf)
  }
  if (secondHalf.length > 1) {
    secondHalf = MergeSort(secondHalf)
    console.log(secondHalf)
  }
  return merge(firstHalf, secondHalf)
}

const merge = (first, second) => {
  let newArray = []
  console.log(first, second)
  while (first.length > 0 && second.length > 0) {
    if (first[0] < second[0]) {
      newArray.push(first.shift());
    } else {
      newArray.push(second.shift());
    }
  }
  return [...newArray, ...first, ...second]
}

const MERGE_SORT_TEST = [
  [9, 1, 2, 4, 6, 5],
  [3, 5, 2],
  [5, 3, 9, 2, 0],
  [1],
  [2, 1, 2, 1, 3]
]

console.log(`The result for ${MERGE_SORT_TEST[0]} is: `, MergeSort(MERGE_SORT_TEST[0]))
console.log(`The result for ${MERGE_SORT_TEST[1]} is: `, MergeSort(MERGE_SORT_TEST[1]))
console.log(`The result for ${MERGE_SORT_TEST[2]} is: `, MergeSort(MERGE_SORT_TEST[2]))
console.log(`The result for ${MERGE_SORT_TEST[2]} is: `, MergeSort(MERGE_SORT_TEST[3]))
console.log(`The result for ${MERGE_SORT_TEST[2]} is: `, MergeSort(MERGE_SORT_TEST[4]))


