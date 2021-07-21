function duplicates(arr) {
    //TODO: return the array of duplicates from arr
  let array =new Set()
  for(let i = 0 ;i<arr.length ; i++){
      if(arr[i]==arr[i+1])
      array.add(arr[i])
  }
  for(let i = 0 ;i<arr.length ; i++){
        if(arr.indexOf(arr[i])!==arr.lastIndexOf(arr[i])){
            array.add(arr[i])
            }
    } 
    return [...array]
  }
  
  console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))