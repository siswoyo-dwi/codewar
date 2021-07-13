function giveMeFive(obj){
    let arr=[]
    if(typeof obj==='object'){
      for( i in obj){
          if(i.length==5){arr.push(i)}
          if(obj[i].length==5){arr.push(obj[i])}
      }
    }return arr
  }
  console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
  console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
  console.log(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);
