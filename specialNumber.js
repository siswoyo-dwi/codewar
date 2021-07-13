function specialNumber(n){
    let b = `${n}`
    let count = 0 
        for(let i = 0 ;i<b.length ; i++){
           if(b[i]==0||b[i]== 1||b[i]== 2||b[i]== 3||b[i]== 4 ||b[i]== 5){
            count+=1
           }
        }
         
        return count===b.length?"Special!!":"NOT!!"
  }
  console.log(specialNumber(2),"Special!!");
  console.log(specialNumber(3),"Special!!");
  console.log(specialNumber(6),"NOT!!");
  console.log(specialNumber(9),"NOT!!");
  console.log(specialNumber(11),"Special!!");
  console.log(specialNumber(55),"Special!!");
  console.log(specialNumber(26),"NOT!!");
  console.log(specialNumber(92),"NOT!!");
  console.log(specialNumber(25432),"Special!!");
  console.log(specialNumber(2783),"NOT!!");
