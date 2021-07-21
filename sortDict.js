function sortDict(dict){
    // ...
    let arr=[]
    for(i in dict){
      if(isNaN(i)==false){arr.push([+i,dict[i]])}
      else{arr.push([i,dict[i]])}
    }
    
    return arr.sort(([, a], [, b]) => b - a)
  }
console.log(sortDict({1:3,2:2,3:1}),          [[1,3],[2,2],[3,1]]);
console.log(sortDict({1:2,2:4,3:6}),          [[3,6],[2,4],[1,2]]);
console.log(sortDict({'A':2,'K':4,'Z':6}),          [['Z',6],['K',4],['A',2]]);
