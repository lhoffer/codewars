function nameShuffler(str){
  //Shuffle It
  let splitString = str.split(' ')
  let reverseString = splitString.reverse()
  let joinString = reverseString.join(' ')
  console.log(splitString)
  return joinString
}
nameShuffler("McClane john")