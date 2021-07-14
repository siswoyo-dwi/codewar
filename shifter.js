function shifter(s){
    let result =0
    let shif = ["H", "I", "N", "O", "S", "X", "Z", "M" , "W"]
    let arr=s.split(' ')

    if(arr.length>1){
        arr=[...new Set(arr)]    
    }
    for(let i = 0 ;i<arr.length ; i++){
        let count =0
        for(let k = 0 ;k<arr[i].length ; k++){
            shif.includes(arr[i][k])?count+=1:count+=0
            if(count == arr[i].length){result+=1}
        }
    }
    return result
  }
console.log(shifter("ON"), 1, "Wrong result. It should be 1" );
console.log(shifter("OS IS UPDATED"), 2, "Wrong result. It should be 2" );
console.log(shifter("WHO IS WHO"), 2, "Wrong result. It should be 2" );
console.log(shifter("JS"), 0, "Wrong result. It should be 0" );
console.log(shifter("I III I III"), 2, "Wrong result. It should be 2" );
console.log(shifter(""), 0, "Wrong result. It should be 0" );