function findNeedle(haystack) {
  // save strign to variable
  let needle = "needle"
  // use indexOf to check for equality with string and return the index 
  let index = haystack.indexOf(needle)
  return `found the needle at position ${index}`
  
}
findNeedle(['hay','banana','hotdog','needle'])