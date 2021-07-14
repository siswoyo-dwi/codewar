function multiples(s1,s2,s3){
    let alp = [s1,s2].sort((a,b)=>(a-b))
    let arr=[]
    let newArr=[]
    let i = 1
    let multi =0
    let k = 0
    if(s1>s2){
         s1%s2!=0?multi=(s1*s2):multi=s2
    }
    if(s1<s2){
        s2%s1!=0?multi=(s2*s1):multi=s1
   }
    do{
        k=multi*i
        i++
        arr.push(k)
    }while(k<s3)
    arr.pop()
    if(alp[1]%alp[0]===0){
        for(let i = 0 ; i < arr.length;i++){
            if(arr[i]%s2==0){newArr.push(arr[i])}
        }return newArr
    }
    
    return arr;
  }    
  console.log(multiples(2,4,40), [4, 8, 12, 16, 20, 24, 28, 32, 36]);
  console.log(multiples(13,5,800), [65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780]);
  console.log(multiples(13,15,800), [195, 390, 585, 780]);
  console.log(multiples(17,15,800), [255, 510, 765]);
  console.log(multiples(27,29,2000), [783, 1566]);
  console.log(multiples(27 ,30 ,1176), [ 270, 540, 810, 1080 ])
  console.log(multiples(16 ,30 ,1563), [ 240, 480, 720, 960, 1200, 1440 ])