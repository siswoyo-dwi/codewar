function pattern(n){
    var output="";
      
      for(let i = 1 ; i < n ;i++){
        let str = ''
        for(let k = 0 ; k < (n*3)-2 ;k++){
          if(k>n-2&&k<(n*2)-1){
            str+=`${i-(Math.floor(i/10)*10)}`
          }else{
              str+=' '
          }
        }str+='\n'
        output+=str
      }


      for(let i = 1 ; i <= n ;i++){
        let str = ''
        for(let k = 0 ; k <  (n*3)-2;k++){
          if(k>n-2&&k<(n*2)-1){
            n<10?str+=`${n}`:str+=`${n-(Math.floor(n/10)*10)}`
          }else if(k<n-1){
            k+1<10? str+= `${k+1}`:str+=`${(k+1)-(Math.floor((k+1)/10)*10)}`
          }else{
         ((n*3)-2)-k<10? str+= `${((n*3)-2)-k}`:str+=`${(((n*3)-2)-k)-(Math.floor((((n*3)-2)-k)/10)*10)}`
          }
        }str+='\n'
        output+=str
      }


      for(let i = n-1 ; i > 0 ;i--){
        let str = ''
        for(let k = 0 ; k < (n*3)-2 ;k++){
          if(k>n-2&&k<(n*2)-1){
            i<10?str+=`${i}`:str+=`${i-(Math.floor(i/10)*10)}`
          }else{
              str+=' '
          }
        }if(i!=1)
        str+='\n'
        output+=str
      }



    return output;
   }
   console.log(pattern(11));
   
