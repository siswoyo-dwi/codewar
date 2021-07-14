function passTheDoorMan (word){
    let a = 0
      for(let i = 0 ;i<word.length-1 ; i++){
        if(word[i]==word[i+1]){
          a+=word.charCodeAt(i+1)
        }
      }
    return (a-96)*3
  }
  console.log( passTheDoorMan("lettuce") , 60);
  console.log( passTheDoorMan("hill"), 36);
  console.log( passTheDoorMan("apple"), 48);
