function largestCrossSum(matrix) {
    // your code here
    let a = []
    let b = []
    let c = []
    for(let i = 0 ;i<matrix.length;i++){
        let coin=0
        for(let k = 0 ;k<matrix[i].length;k++){
            coin+=matrix[i][k]
        }a.push(coin)
    }
    for(let i = 0 ;i<matrix[0].length;i++){
        let coin=0
        for(let k = 0 ;k<matrix.length;k++){
            coin+=matrix[k][i]
        }b.push(coin)
    }
    for(let i = 0 ;i<matrix[0].length;i++){
        let coin=0
        for(let k = 0 ;k<matrix.length;k++){
            coin+=matrix[k][i]
        }b.push(coin)
    }
    for(let i = 0 ;i<matrix.length;i++){
        for(let k = 0 ;k<matrix[i].length;k++){
            c.push(a[i]+b[k]-matrix[i][k])
        }
    }

    return Math.max(...c)
  }