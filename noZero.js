function noBoringZeros(n) {
    let a = `${n}`
    let b = Array.from(a)
    let c=[]
    let d = []
    for(let i = b.length-1;i>=0;i--){
        if(b[i]!='0'){c.push(i)}
    }
    for(let i = 0;i<=c[0];i++){
        d.push(b[i])
    }
    return +(d.join(''))
  }
  console.log(noBoringZeros(1450), 145)
  console.log(noBoringZeros(960000), 96)
  console.log(noBoringZeros(1050), 105)
  console.log(noBoringZeros(-1050), -105)
  console.log(noBoringZeros(-105), -105)
  console.log(noBoringZeros(0), 0)