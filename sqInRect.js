function sqInRect(lng, wdth){
    if(lng===wdth){return null}
    let arr=[]
    while(lng!== wdth){  
            let cubeA = lng>wdth?wdth:lng
            let cubeB = lng<wdth?wdth:lng
            arr.push(cubeA)
            wdth = cubeA
            lng = cubeB-cubeA
            
    }arr.push(wdth)
    return arr
  }

  
console.log(sqInRect(5, 5), null)
console.log(sqInRect(5, 3), [3, 2, 1, 1])
console.log(sqInRect(3, 5), [3, 2, 1, 1])
console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])
