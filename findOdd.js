function findOdd(A) {
    let arr=A.sort((a,b)=>(a-b))
    do{for(let i = 0 ;i<arr.length ; i++){
        if(arr[i]==arr[i+1]){
            arr.splice(i, 2)
            }
        }
    }while(arr.length>1)
    
        return arr
  }

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]),5)
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]),-1)
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]),5)
console.log(findOdd([10]),10)
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]),10)
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]),1)