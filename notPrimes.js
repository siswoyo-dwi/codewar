function notPrimes(a,b){
    let arr=[]
    let newArr=[]
    let finis=[]
    for(let i = a ;i<b ; i++ ){
        arr.push(i)
    }for(let i = 0 ;i<arr.length ; i++ ){
        let str=`${arr[i]}`
        let count =0
        for(let k = 0 ;k<str.length ; k++ ){
            if(str[k]==='2'||str[k]==='3'||str[k]==='5'||str[k]==='7'){
                count+=1
            }if(count==str.length&&str.length>1){
                
                newArr.push(+str)
            }
        }
    }

    for(let k = 0 ;k<newArr.length ; k++ ){
        let count = 0
        for(let i = 0 ;i<newArr[k] ; i++ ){
            if(newArr[k]%i==0){
                count+=1
            }
        }console.log(count,newArr[k])
        if(count>1){
            finis.push(newArr[k])
        }
    }return finis
  }
  console.log(notPrimes(500, 999), [522, 525, 527, 532, 533, 535, 537, 552, 553, 555, 572, 573, 575, 722, 723, 725, 732, 735, 737, 752, 753, 755, 772, 775, 777]);
