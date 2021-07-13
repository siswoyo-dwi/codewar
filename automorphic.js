function automorphic(n){
    let a = `${n}`
    let b = `${n**2 }` 
    console.log(a,b)
    let count=0
    for(let i = a.length-1;i>=0;i--){
        a[i]===b[i+(b.length-a.length)]?count+=1:count+=0
    } 
    return count===a.length?"Automorphic":"Not!!"
  }
  console.log(automorphic(1),"Automorphic");
  console.log(automorphic(3),"Not!!");
  console.log(automorphic(6),"Automorphic");
  console.log(automorphic(9),"Not!!");
  console.log(automorphic(25),"Automorphic");
  console.log(automorphic(53),"Not!!");
  console.log(automorphic(76),"Automorphic");
  console.log(automorphic(95),"Not!!");
  console.log(automorphic(625),"Automorphic");
  console.log(automorphic(225),"Not!!");
