function sum(...arguments) {
    // return the sum of all arguments given.
    let total = 0 
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i]
    }
    return total
  }
console.log(sum(1, 2, 3)) // => 6
console.log(sum(8, 2)) // => 10
console.log(sum(1, 2, 3, 4, 5)) // => 15