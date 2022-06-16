function filter_list(l) {
  // use filter to filter only integers
  // return integers
  return l.filter(value => typeof value === 'number')
  
}

filter_list([1,2,'a','b'])
