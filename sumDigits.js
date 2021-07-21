function sumDigits(number) {
    let x = number.toString()
    let count = 0
    for(let i = 0 ;i<x.length ; i++){
        if(x[i]!=='-'){count +=(+x[i])}
    }
return count
}
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
