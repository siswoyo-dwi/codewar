function backwardsPrime(start, stop){
    const prime = (n)=>{
      if(n<2||!(n%2)){return  false}
      for(let i = 3 ;i<=Math.sqrt(n) ; i++){
        if(n%i===0){return false}
      }return true
    }
    const backStr = (n)=>{
        let a = `${n}`
        let arr =[]
        for(let i = a.length-1;i>=0;i-- ){
            arr.push(a[i])
        }
        return +arr.join('')
      }
    
    let arr =[]
    for(let i = start ;i<stop ; i++){
      if(prime(i)){arr.push(i)}
    }
    let newArr =[]
    for(let i = 0 ;i<arr.length ; i++){
        if(prime(backStr(arr[i]))==true&&backStr(arr[i])!==arr[i]){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(backwardsPrime(1095000 ,1095403),'expected [ 1095047, 1095209, 1095319 ] to deeply equal [ 1095047, 1095209, 1095319, 1095403 ]')
