function areYouPlayingBanjo(name) {
  // set string to lowercase
  // adding first letter to value
  let CharFirst = name.slice(0,1).toLowerCase()
  if (CharFirst == "r") {
    return name + " plays banjo" 
  } else {
    return name + " does not play banjo"
  }
}
areYouPlayingBanjo("rohulio")

// shorter codewars solution 
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}