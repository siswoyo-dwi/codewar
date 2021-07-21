function solution(pairs){
    // TODO: complete
    let str =''
    for(const i in pairs){

        str+=i+' = '+pairs[i]+','
    }
    return str.substring(0,str.length-1)
  }
  console.log(solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
  )