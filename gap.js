function prime(n) {
    if(n===2){return true}
    if(n<2||!(n%2)){return  false}
    for(let i = 3 ;i<=Math.sqrt(n) ; i++){
      if(n%i===0){return false}
    }return true
  }
  
  
  
  function gap(g, m, n) {
    
    let arr=[]
        for(let i = m ;i<=n;i++){
                if(prime(i)==true&&prime(i+g)==true&&(i+g)<n){
                  let count = 0
                  for(let k = i+1 ;k<i+g-1 ; k++){
                      if(prime(k)==true){
                          count+=1
                      }
                }if(count==0){
                  arr.push([i,i+g])
                  break
                }
              }
            }
    return  arr[0]!==undefined?arr[0]:null
          }
  
  console.log(gap(2,100,110), [101, 103]);
  console.log(gap(4,100,110), [103, 107]);
  console.log(gap(6,100,110), null);
  console.log(gap(8,300,400), [359, 367]);
  console.log(gap(10,300,400), [337, 347]);
  
  
  
  