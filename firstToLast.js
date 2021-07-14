function firstToLast(str,c){
    let a = str.indexOf(c)
    let b = str.lastIndexOf(c)
    return a!=-1?b-a:-1
  }
  console.log(firstToLast("ababc","a") , 2);
  console.log(firstToLast("ababc","c") , 0);
  console.log(firstToLast("ababc","d") , -1);