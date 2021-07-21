function shiritori(words) {
    //insert code
  console.log(words)
    if(words.length<2&&words[0]!==undefined&&words[0]!==''){return words}
    let arr=[]
    for(let i = 0 ;i<words.length-1 ; i++){
      if(words[i][words[i].length-1]==words[i+1][0]){
          if(words[i]!==undefined&&words[i]!=='')
        arr.push(words[i])
        
      }else{ if(words[i]!==undefined&&words[i]!=='')
        arr.push(words[i])
      }
      if(words[i][words[i].length-1]!=words[i+1][0]){
        break
      }
    }
    if(arr.length>0&&words[arr.length-1][words[arr.length-1].length-1]==words[arr.length][0]){
        arr.push(words[arr.length])
      }
    return arr
  }