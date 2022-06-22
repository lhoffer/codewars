function finalGrade (exam, projects) {
  // set conditional statements for each final grade
  if (exam > 90 || projects > 10 ) {
    return 100
  } else if (exam > 75 && projects >= 5 ) {
    return 90
  } else if (exam > 50 && projects >= 2 ) {
    return 75
  } else {
    return 0
  }
}

finalGrade(75, 2)

// shorter example solution from codewars

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 & projects >= 5) return 90;
  if(exam > 50 & projects >= 2) return 75;
  return 0;
}
