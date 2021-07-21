function hasUniqueChars(str){
    // ...
  let z = new Set()
for(let i = 0 ;i<str.length ; i++){
    z.add(str[i])
  }
  return z.size==str.length
  }
  console.log(hasUniqueChars("  nAa"),false) // because there are two spaces ' '
console.log(hasUniqueChars("abcdef"),true)
console.log(hasUniqueChars("aA"),true) // case - sensitivity
console.log(hasUniqueChars("++-"),false) // because there are two '+'
