function pattern(n){
    var output="";
      if(n<2){return output}
      for(let  i = 1 ;i<=Math.floor(n/2) ; i++){
        for(let  k = 1 ;k<=(Math.floor(n/2)*i) ; k++){
            output+=(i*2)
        }if(i!=Math.floor(n/2))
        output+='\n'
      }
    return output;
   }
   console.log(pattern(2),"22");
   console.log(pattern(1),"");
   console.log(pattern(5),"22\n4444");
   console.log(pattern(0),"");
   console.log(pattern(-25),"");
    