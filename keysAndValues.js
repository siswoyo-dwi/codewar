function keysAndValues(data){
    // TODO: complete

    let arr1=[]
    let arr2=[]
    for (const i in data) {
        arr2.push(data[i])
        arr1.push(i)
      }
return [arr1,arr2]
  }
  console.log(keysAndValues({a: 1, b: 2, c: 3}))
  // should return [['a', 'b', 'c'], [1, 2, 3]]