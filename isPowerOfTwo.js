function isPowerOfTwo(n){
    let i = 0
    let count=0
    let a=0
    do{
       a = Math.pow(2,i)
      i++
      if(n===a){count+=1}
    }while(n>a)
      return count>0
  }
console.log(isPowerOfTwo(2), true)
console.log(isPowerOfTwo(4096), true)
console.log(isPowerOfTwo(5), false)
