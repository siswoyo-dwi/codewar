function histogram(results) {
    let a = ''
    for(let i = results.length-1 ;i>=0 ; i--){
            a+=`${i+1}|`
        for(let k = results[i] ;k>=0 ; k--){
            if(results[i]!==0){
                k==0?a+=` ${results[i]}\n`:a+='#'
            }else if(results[i]==0){
                a+=`\n`
            }
            
        }
    }
    return a
  }
console.log(histogram([7,3,10,1,0,5]))

