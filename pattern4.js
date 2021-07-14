function pattern(n){
    console.log(n)
      var output="";
        if(n<1){return output}
        for(let  i = 0 ;i<Math.floor((n+1)/2) ; i++){
          for(let  k = 0 ;k<1+(i*2); k++){
              output+=((i*2)+1)
          }if(i!=Math.floor((n+1)/2)-1)
          output+='\n'
        }
      return output;
     }
console.log(pattern(4),"1\n333");
console.log(pattern(1),"1");
console.log(pattern(5),"1\n333\n55555");
console.log(pattern(0),"");
console.log(pattern(-25),"");
