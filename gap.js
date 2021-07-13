function prime(n) {
    if(n<3||!(n%2)){return  false}
    for(let i = 3 ;i<=Math.sqrt(n) ; i++){
      if(n%i===0){return false}
    }return true
  }


function gap(g, m, n) {
    
    let arr=[]
    let a= 0
        for(let i = m ;i<=n;i++){
            
            a=(i+g)
                if(i+g==a&&prime(i)==true&&prime(a)==true&&a<n){
                    arr.push([i,a]) 
                
                }
        }
        let newArr=[]
    for(let i = 0 ;i<arr.length ; i++){
        let count = 0
        for(let k = (arr[i][0])+1 ;k<(arr[i][1]) ; k++){
            if(prime(k)==true){
                count+=1
            }
        } if(count==0){
            newArr.push(arr[i])
            break
        }
    }
    return newArr[0]!==undefined?newArr[0]:null
}


console.log(gap(2,100,110), [101, 103]);
console.log(gap(4,100,110), [103, 107]);
console.log(gap(6,100,110), null);
console.log(gap(8,300,400), [359, 367]);
console.log(gap(10,300,400), [337, 347]);



