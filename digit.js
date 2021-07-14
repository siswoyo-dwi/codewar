String.prototype.digit = function() {
    console.log(this)
    let count=0
    if(this.length==1){
      if(this=='0'){
      count+=1
    }
      for(let i=1;i<10;i++){
        if(+this==i){
          count+=1
        
      }
    }
    }else
    {
      count=0
    }
  
    return count==1
  };