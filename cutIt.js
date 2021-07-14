function cutIt(arr){
    let a=[]
    let newArr=[]
    for(let i = 0 ;i<arr.length ; i++){
      a.push(arr[i].length)
    }
     a.sort((a,b)=>(a-b))
    for(let i = 0 ;i<arr.length  ; i++){
        let b = arr[i].split('')
        let c = []
        for(let k = 0 ;k<a[0];k++ ){
          c.push(b[k])
        }newArr.push(c.join(''))
    }return newArr
  }
  console.log(cutIt(["ab","cde","fgh"]) , ["ab","cd","fg"]);
  console.log(cutIt(["abc","defgh","ijklmn"]) , ["abc","def","ijk"]);
  console.log(cutIt(["codewars","javascript","java"]) , ["code","java","java"]);
