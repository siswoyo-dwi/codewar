var vampire_test = function(a, b){
    if(a<0&&b<0){return false}
    let c = Array.from(`${a*b}`).sort((a,b)=>(a-b))
    let d =  Array.from(`${a}`+`${b}`).sort((a,b)=>(a-b))
    let count=0
    for(let i = 0 ;i<c.length ; i++){
      if(c[i]==d[i]){
        count+=1
      }
    }console.log(count , c)
    return c
  }
  console.log(vampire_test(30,-51) , true, "One Negative: 30 * -51 = -1530 should return true")
  console.log(vampire_test(-246,-510) , false, "Double Negatives: -246 * -510 = 125460 should return false (The negative signs aren't present on the product)")
   
