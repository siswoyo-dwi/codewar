function jumpingNumber(n){
    let count=0
    let str=`${n}`.split('')
    if(str.length==1){
        return "Jumping!!"
    }else if(str.length>1){
        for(let i =0;i<str.length;i++){
            if(+(str[i])+1==+(str[i+1])||+(str[i])-1==+(str[i+1])){
                count+=1
            }
        }
    }return count+1===str.length
  }
  console.log(jumpingNumber(1), "Jumping!!");
  console.log(jumpingNumber(7), "Jumping!!");
  console.log(jumpingNumber(9), "Jumping!!");
  console.log(jumpingNumber(23), "Jumping!!");
  console.log(jumpingNumber(32), "Jumping!!");
  console.log(jumpingNumber(79), "Not!!");
  console.log(jumpingNumber(98), "Jumping!!");
  console.log(jumpingNumber(8987), "Jumping!!");
  console.log(jumpingNumber(4343456), "Jumping!!");
  console.log(jumpingNumber(98789876), "Jumping!!");