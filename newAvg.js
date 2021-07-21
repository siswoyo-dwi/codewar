function newAvg(arr, newavg) {
    console.log(arr, newavg)
      // your code 
    let total = 0
    for(let i = 0 ;i<arr.length ; i++){
      total+=arr[i]
    }console.log(total)
     if(total/arr.length<newavg){
      return Math.ceil(newavg*(arr.length+1)-total)
    }else{
      return ERROR
    }
  }
  console.log(newAvg([], 90), 628);