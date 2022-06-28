function correct(string)
{
//use replace with regular expression filter
  const replacedString = string
  .replace(/5/gi, 'S')
  .replace(/0/gi, 'O')
  .replace(/1/gi, 'I')

  // return replaced string
  return replacedString
  
}

correct('IF-RUDYARD K1PL1NG')