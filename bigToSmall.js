function bigToSmall(arr){
    //coding here...
    let a = []
    for(let i=0;i<arr.length ; i++){
        for(let k=0;k<arr[i].length ; k++){
            a.push(arr[i][k])
        }
    }return a.sort((a,b)=>(b-a)).join('>')
  }
  console.log(bigToSmall([[1,2],[3,4],[5,6]]) , "6>5>4>3>2>1");
  console.log(bigToSmall([[1,3,5],[2,4,6]]) , "6>5>4>3>2>1");
  console.log(bigToSmall([[1,1],[1],[1,1]]) , "1>1>1>1>1");