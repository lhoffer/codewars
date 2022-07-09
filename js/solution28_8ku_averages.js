function find_average(array) {
  // add up the array
  totalArray = array.reduce((a, b) => a + b,0)
  
  // divide the total by the length of the array
  return totalArray / array.length
}

find_average([1,5,6])