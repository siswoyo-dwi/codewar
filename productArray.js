function productArray(numbers){
    //your code here
    let  arr=[]
    let a = 1
    for(let i = 0 ;i<numbers.length ; i++){
        a*=numbers[i]
    }
    for(let i = 0 ;i<numbers.length ; i++){
        arr.push(a/numbers[i])}
    return arr
  }
  console.log(productArray([12,20]), [20,12]);
  console.log(productArray([12,20]), [20,12]);
  console.log(productArray([3,27,4,2]), [216,24,162,324]);
  console.log(productArray([13,10,5,2,9]), [900,1170,2340,5850,1300]);
  console.log(productArray([16,17,4,3,5,2]), [2040,1920,8160,10880,6528,16320]);
