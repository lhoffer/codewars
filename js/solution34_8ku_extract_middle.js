function getMiddle(s) {
  // set variables for position and length
  var position
  var length
  // check if word is evern or odd
  if (s.length % 2 == 0) {
  // find the middle characters in a string
   position = s.length / 2 -1  
   length = 2
  } else {
    position = s.length / 2 
    length = 1
  }
  return s.substring(position, position + length)
}
getMiddle("test")