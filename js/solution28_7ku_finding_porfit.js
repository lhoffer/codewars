function minMax(arr){
  
  // loop through the array
  // find the highest value print it to new array
  // find the lowest value print it to a new arary
let maxProfit = arr.sort((a,b) => b-a)[0]
let minPrice = arr.sort((a,b) => a-b)[0]
return [minPrice,maxProfit]
}

minMax([1,2,3,4,5])


// codewars one line solution
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}