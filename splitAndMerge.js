function splitAndMerge(string, separator) {
    let a = string.split('')
    let arr=[]
    for(let i = 0 ;i<a.length ; i++){
        a[i]!=' '&&a[i+1]!=' '&&a[i+1]!=undefined?arr.push(a[i]+separator):arr.push(a[i])
    }return arr.join('')
  }
  console.log(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
  console.log(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
  console.log(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
  console.log(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");
