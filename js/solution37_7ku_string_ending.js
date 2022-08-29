function solution(str, ending){
  // set both strings as variables
  let strA = str.toLowerCase()
  let strB = ending.toLowerCase()
  // use endswith to check if strA endswith strB
return  (strA.endsWith(strB))
}
solution('ails', 'fails')

