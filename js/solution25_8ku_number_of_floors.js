function getRealFloor(n) {
  if (n >= 1 && n < 13) {
    return n - 1 
  } else if (n >= 13) {
    return n - 2
  } else {
    return n
  } 

}

getRealFloor(12)

// one line solution from codewars
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}