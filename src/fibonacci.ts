// Fibonacci Sucession
// 0, 1, 1, 2, 3, 5, 8, 13, 21

const Fibonacci = (number) => {
  if (number === 0) {
    console.log(`F(0) is the number: 0`)
    return 0;
  }
  if (number === 1) {
    console.log(`F(1) is the number: 1`)
    return 1;
  }
  let i = 1
  let sum = 0
  let num1 = 0, num2 = 1
  while (i < number) {
    sum = num1 + num2
    if (i + 1 === number) console.log(`F(${i}) adding ${num1} and ${num2}`)
    num1 = num2
    num2 = sum
    i++
  }
  return sum
}

console.log('The fibonacci number is: ', Fibonacci(0))
console.log('The fibonacci number is: ', Fibonacci(1))
console.log('The fibonacci number is: ', Fibonacci(2))
console.log('The fibonacci number is: ', Fibonacci(3))
console.log('The fibonacci number is: ', Fibonacci(4))
console.log('The fibonacci number is: ', Fibonacci(5))
console.log('The fibonacci number is: ', Fibonacci(6))


