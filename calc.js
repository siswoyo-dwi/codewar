var calc = function(a) {
    const alp = a.map((k) =>k>0?k*k:k)
    .map((k,i)=>{if((i+1)%3===0)return k*3 
        return k})
    .map((k,i)=>{if((i+1)%5===0)return k*-1 
        return k}) 
    .reduce((a,b)=>a+b)
    return alp
  }
  console.log(calc([ 0, 2, 1, -6, -3, 3 ]), 31);
  console.log(calc([ 0 ]), 0);
 console.log(calc([ 1, 1, 1, 1, 1 ]), 5);
 var calc = function(a) {
    return a.map((v,i)=>v>0?v*v:v).map((v,i)=>{
      if ((i+1)%3===0) return v*3
      return v
    }).map((v,i)=>{
      if ((i+1)%5===0) return v*-1
      return v
    }).reduce((a,b)=>a+b,0)
  }