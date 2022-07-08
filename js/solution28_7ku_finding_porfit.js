function isIsogram(str){
  
  //split the string
  // check that there are no duplicate letters
  // check that there are no consecutive letters
  // return true or false if both conditions are true
let isoGramCheck = (str) => str.split("").every((c, i) => str.indexOf(c) == i )
return (isoGramCheck(str))

}
isIsogram("abcdefghijklmnopqrstuvwxyzK")