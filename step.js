function prime(n) {
    if(n<3||!(n%2)){return  false}
    for(let i = 3 ;i<=Math.sqrt(n) ; i++){
      if(n%i===0){return false}
    }return true
  }


function step(g, m, n) {
    
    let arr=[]
    let a= 0
        for(let i = m ;i<=n;i++){
            
            a=(i+g)
                if(i+g==a&&prime(i)==true&&prime(a)==true){
                    arr.push([i,a]) 
                break
                }
        }
    return arr[0]!==undefined?arr[0]:null
}
console.log(step(2,10000000000000000,11000000000000000000000000000000000000000000000000), [101, 103])
console.log(step(4,100,110), [103, 107])
console.log(step(6,100,110), [101, 107])
console.log(step(8,300,400), [359, 367])
console.log(step(10,300,400), [307, 317])



