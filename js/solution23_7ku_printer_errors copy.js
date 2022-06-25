function printerError(s) {
  // split string into an array
  const printerLetters = s.toString().split("");
  // filters letters outside of range
  let errorLetters = printerLetters.filter((letter) => {
  return ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].indexOf(letter) !== -1  
  })
  let errorCount = errorLetters.length
  console.log(printerLetters.length)
  return "printer_error(s) => " + errorCount + "/" + printerLetters.length

  // assign count to variable
  // get lenght of string and assing to a variable
}
printerError("aaaxbbbbyyhwawiwjjjwwm")

//// simpler function from codewars

function printerError(s) {
  // your code
  var count = 0;
  for(var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count+"/"+s.length;
}