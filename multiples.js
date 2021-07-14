function multiples(s1,s2,s3){
    let alp = [s1,s2].sort((a,b)=>(a-b))
    let arr =[]
    let newArr=[]
    let i = 1
    do{total = i*alp[0]
        i++
        arr.push(total)
    }while(total<s3)
    for(let i = 0 ;i<arr.length ; i++){
        if(arr[i]%s1===0&&arr[i]%s2===0){
            newArr.push(arr[i])
        }
    }
    if(newArr[newArr.length-1]>=s3){newArr.pop()}
    return newArr;
  }    
  console.log(multiples(2,4,40), [4, 8, 12, 16, 20, 24, 28, 32, 36]);
  console.log(multiples(13,5,800), [65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780]);
  console.log(multiples(13,15,800), [195, 390, 585, 780]);
  console.log(multiples(17,15,800), [255, 510, 765]);
  console.log(multiples(27,29,2000), [783, 1566]);
  console.log(multiples(27 ,30 ,1176), [ 270, 540, 810, 1080 ])
  console.log(multiples(16 ,30 ,1563), [ 240, 480, 720, 960, 1200, 1440 ])
  console.log(multiples(30 ,25 ,2529), [ 150,
    300,
    450,
    600,
    750,
    900,
    1050,
    1200,
    1350,
    1500,
    1650,
    1800,
    1950,
    2100,
    2250,
    2400 ])