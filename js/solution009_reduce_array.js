// Sum Numbers
function sum (numbers) {
  let sumNum = numbers.reduce((x, y) => (x + y),0)
  if(sumNum == 0) {
    return 0
  } else if (sumNum !== null) {
    return sumNum
  } else if (sumNum == null) {
    return 0
  }
}
sum([4,4,4,4])