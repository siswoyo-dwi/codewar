function duckDuckGoose(players, goose) {
    console.log(players, goose) 
  let arr=[]
  for (let i in players) {
      arr.push(players[i].name)
  }
      let x = goose%arr.length
      if(x-1<0){
        return arr[arr.length-1]
      }else{
        return arr[x-1]
      }
    }