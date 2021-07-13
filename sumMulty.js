function sumMul(n,m){
    let count = 0
    let total = 0
    let arr=[]
    for(let i = 0; i<Math.floor(m/n) ; i++ ){
      arr.push(count+=n)
    }
    for(let i = 0; i<arr.length; i++ ){
        total+=arr[i]
      }return arr.length>0?total:"INVALID"
    }
console.log(sumMul(0,0),"INVALID");
console.log(sumMul(2,9),20);
console.log(sumMul(4,-7),"INVALID");
 