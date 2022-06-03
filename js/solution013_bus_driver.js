function enough(cap, on, wait) {
  if (on + wait > cap){
    return (on + wait)-cap
  } else {
    return 0
  }
  
}
enough(10, 5, 2)