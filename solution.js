function solution(str, ending){
    let count =0
    for(let i =0;i<ending.length;i++){
      if(`${str[str.length-i-1]}`==`${ending[ending.length-i-1]}`){
        count+=1
      }
    }
    return count == ending.length
  }
  console.log(solution('abcde', 'cde'), true)
console.log(solution('sumo', 'omo'), false)