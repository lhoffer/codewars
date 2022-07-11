function find_average(array) {
  // add up the array
  
  if (array.length !== 0) {
  totalArray = array.reduce((a, b) => a + b,0)
  
  // divide the total by the length of the array
  return totalArray / array.length
  } else if (array.length === 0)  { 
    return 0
  }  
}
find_average([1,5,6])
