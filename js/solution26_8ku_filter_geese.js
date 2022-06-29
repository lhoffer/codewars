function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  

   
  
 // negate geese from filtered array
  let noGeese = birds.filter(g => !geese.includes(g))
  return(noGeese)                           
    
  

}

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])