function SeriesSum(n){
    let plus = 1 
for(let i = 2 ;i<=n ; i++){
    i==2?plus+=(1/4):plus+=(1/(4+(3*(i-2))))
}return plus.toFixed(2)
}
console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")
console.log(SeriesSum(4), "1.49")