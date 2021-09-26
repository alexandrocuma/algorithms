const LowestNumberNotinArray = (array) => {
  const newArr = array.sort(function (a, b) { return a - b })
  let number = 0
  console.log(newArr)
  for (let numb of newArr) {
    console.log(`The number in the array is: ${numb}`)
    if (numb - number > 1) { break; }
    if (numb > 0) number = +numb
    console.log(`The number assigned to answer now is: ${number}`)
  }
  console.log(`The number assigned should have a +1 to be the number`)
  return `The result is ${number + 1} \n`
}
console.log("The result should be 1")
console.log(LowestNumberNotinArray([-1, -3]))
console.log("The result should be 3")
console.log(LowestNumberNotinArray([4, 2, 1, 6, 7]))
console.log("The result should be 4")
console.log(LowestNumberNotinArray([-4, -2, 1, 5, 2, 0, -10, 8, 3, 6, 7]))