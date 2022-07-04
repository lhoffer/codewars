/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

function squareDigits(num){
  // this turns the integer into a string
  let numStr = num + ""
  // this total sets a the variable total 
  let total = ""
  // this loops through each character in the string
  for (let i in numStr) {
    // parseInt converts the string to an integer and then square each number and then concatenates back into a string
    total += (parseInt(numStr[i]) ** 2 + "")
  }
  
  return parseInt(total);
}

function squareDigits(num) {
  let numStr = num + ""
  let total = ""

  for (let i in numStr) {
    total += (parseInt(numStr[i]) ** 2 + "")
  }
  return parseInt(total);
}


squareDigits(34567)

// cleaner option

function squareDigits(num){
  // add num 
  // turns integer into a string
  // splits the string
  // maps a new array, takes temporary integer and squares the integer
  // joins each integer 
  return +num.toString().split('').map(i => i*i).join('');
}

