function isValid(formula){
    let f = formula.sort()
    let count = 0
    for(let i = 0 ; i<f.length;i++){
      if(f[i]==1){f[i+1]!=2?count+=1:count+=0}
      if(f[i]==2){count+=1}
      if(f[i]==3){f[i+1]!=4?count+=1:count+=0}
      if(f[i]==4){count+=1}
      if(f[i]==5){f[i+1]==6?count+=1:count+=0}
      if(f[i]==6){f[i-1]==5?count+=1:count+=0}
      f[i]==7?count+=1:count+=0
      f[i]==8?count+=1:count+=0
    }
    return count>=f.length
  }
  console.log(isValid([2,7]),true)
console.log(isValid([1,3,7]),true)
console.log(isValid([7,1,2,3]),false)
console.log(isValid([1,3,5,7]),false)
console.log(isValid([1,5,6,7,3]),true)
console.log(isValid([5,6,7]),true)
console.log(isValid([5,6,7,8]),true)
console.log(isValid([6,7,8]),false)
console.log(isValid([7,8]),true)