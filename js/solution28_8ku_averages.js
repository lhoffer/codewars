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

function index(array, n) {
  if (array.length < n) {
          return -1
      }  else if (array.length >= n ) { 
          for (let i = 0; i < array.length; i++) {
              if (array.indexOf(i) == n) {
              return i**n
              } 
          }
      }
  }   
  index([4,2],2)

  function index(array, n) {
  console.log(array.length)
  console.log(n)
  }
  index([4,2],2)

  function index(array, n) {
   if (n > array.length) {
        return -1
    }
  }
  index([4,2],2)

 