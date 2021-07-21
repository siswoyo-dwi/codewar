var flatten = function (array){
    // TODO: Program me
    let arr =[]
    for(let i = 0 ;i<array.length ; i++){
      if(typeof array[i]!=='object'){arr.push(array[i])}
      else{for(let k = 0 ;k<array[i].length ; k++){
                arr.push(array[i][k])
            }
        }
    }return arr
  }
console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]), [1, 2, 3, "a", "b", "c", 1, 2, 3]);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [3, 4, 5, [9, 9, 9], "a,b,c"]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
