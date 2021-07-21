function sumTriangularNumbers(n) {
    let total = 0
    if(n<=0)return 0;
    else{
        for(let i = 1 ;i<=n ; i++){
            for(let k = 1 ;k<=i ; k++){
                total+=k
            }
        }
    }return total
  }
console.log(sumTriangularNumbers(6), 56);
console.log(sumTriangularNumbers(34), 7140);
console.log(sumTriangularNumbers(-291), 0);
console.log(sumTriangularNumbers(943), 140205240);
console.log(sumTriangularNumbers(-971), 0);