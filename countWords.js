function countWords(str) {
    if(str.length==0){return 0}
    let a = (str.split(/\s/g))
    let arr=[]
    for(let i =0;i<a.length;i++){
        if(a[i]!=''){
            arr.push(a[i])
        }
    }
    return arr.length
  }
  console.log(countWords("Dear   Victoria, I love  to press   space button."), 8);
  console.log(countWords(" Arthur "), 1);
  console.log(countWords(" David"), 1);
  console.log(countWords("Nelson "), 1);
  console.log(countWords("  Hello Gomer  "), 2);
  console.log(countWords("  Hello     Bart  "), 2);
  console.log(countWords("﻿Hello﻿World "), 2);
  console.log(countWords("Hello﻿World"), 2);