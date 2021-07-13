function isOpposite(s1,s2){
  let count=0
  for(let i = 0 ;i<s1.length ; i++){
    if(s1.charAt(i)!=s2[i]){
      count+=1
    }
  }
  return s1.length>0&&count==s1.length&&s1.length==s2.length
}
console.log(isOpposite("ab","AB") , true);
console.log(isOpposite("aB","Ab") , true);
console.log(isOpposite("aBcd","AbCD") , true);
console.log(isOpposite("aBcde","AbCD") , false);
console.log(isOpposite("AB","Ab") , false);
console.log(isOpposite("AA","AA") , false);