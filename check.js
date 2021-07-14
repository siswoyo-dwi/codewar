function check(a,x){
    console.log(a,x)
    let count=0
    for(let i=0;i<a.length;i++){
      if(a[i]===x){
        count+=1
      }
    }
    return count==0?false:true
  };
  console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);