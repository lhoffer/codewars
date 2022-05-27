function sumTwoSmallestNumbers(numbers) {  
  sumSmallest = numbers.sort((a, b) => a - b).slice(0,2)
  return sumSmallest.reduce((x, y) => (x + y))
  
}
sumTwoSmallestNumbers([2,2,4,4])