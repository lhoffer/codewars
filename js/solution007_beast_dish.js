function feast(beast, dish) {
  //assing first letter to var
    let firstLetterBeast = beast.slice(0,1)
    let lastLetterBeast = beast.slice(-1)
    let firstLetterDish = dish.slice(0,1)
    let lastLetterDish = dish.slice(-1)
    
    if (firstLetterBeast == firstLetterDish && lastLetterBeast == lastLetterDish){
      return true
    } else {
      return false
    }
  
    
  }