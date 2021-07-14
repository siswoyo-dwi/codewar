function pattern(n){
    console.log(n)
      var output="";
      
        for(let i = 1 ;i<=n ; i++){
          for(let l = i ;l<n ; l++){
              output+=' '
          }
          for(let k = 1 ;k<=n ; k++){
              output+=k-((Math.floor(k/10))*10)
          }
          for(let m =0 ;m<i-1 ; m++){
              output+=' '
          }
          if(i!=n)
          output+='\n'
        }
      return output;
     }
   console.log(pattern(30),"  123\n 123 \n123  ");
   console.log(pattern(5),"    12345\n   12345 \n  12345  \n 12345   \n12345    ");
   console.log(pattern(8),"       12345678\n      12345678 \n     12345678  \n    12345678   \n   12345678    \n  12345678     \n 12345678      \n12345678       ");
