var greet = function(name) {
    let y = ''
    for(let i = 0 ; i<name.length;i++){
      if(i==0){
        y+= name[i].toUpperCase()
      }else{
        y+=name[i].toLowerCase()
      }
    }
  return `Hello ${y}!`  
  };