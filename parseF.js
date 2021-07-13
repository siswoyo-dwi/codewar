function parseF(s) {
    if(s!=true&&s!=false){
        let a = Number(s)
    return a>-100000000000000000000000000000000000?+(a.toFixed(1)):null;
    }
    return null
  }
  console.log(parseF(true), 1);