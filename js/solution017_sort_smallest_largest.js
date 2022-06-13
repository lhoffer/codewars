class SmallestIntegerFinder {
  findSmallestInt(args) {
    // sort arguments smallest to largest compare each value
    // return first element in the array at index of 0 
    return args.sort((a,b) => a-b)[0]
  }
}

