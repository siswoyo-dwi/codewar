function pattern(n){
    var output="";
      // Happy Coding ^_^
      for(let i = 1 ; i <= (n*2)-1 ; i++){
        let str=''
        for(let l = 1 ; l <= n-i ; l++){
          str+=' '
        }
        if(i<=n){
            for(let k = 1 ; k <=(i*2)-1 ; k++){
                if(k<=i){
                    k<10?str+=`${k}`:str+=`${k-(Math.floor(k/10)*10)}`

                }
                else{
                    (i*2)-k<10?str+=`${(i*2)-k}`:str+=`${(i*2)-k-((Math.floor(((i*2)-k)/10))*10)}`
                }
              }
        }
        if(i>n){
        for(let k = 1 ; k<i-n+1; k++){
            str+=' '
          }
        }
        if(i>n){
            for(let k = 1 ; k<(n*4)-i*2; k++){
            if(k<=((n*4)-i*2)/2){
                k<10?str+=`${k}`:str+=`${k-(Math.floor(k/10)*10)}`
            }
            else{
                k<10?str+=`${(n*4)-(i*2)-k}`:str+=`${((n*4)-(i*2)-k)-(Math.floor(((n*4)-(i*2)-k)/10)*10)}`
            }
          }

        }
        if(i<=n){
        for(let j = 1 ; j <= n-i ; j++){
          str+=' '
            }
        }
        if(i>n){
            for(let k = 1 ; k<i-n+1; k++){
                str+=' '
              }
            }
        i<n*2-1?output+=str+'\n':output+=str
      }
    return output;
   }
   console.log(pattern(7),"      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321\n 12345654321 \n  123454321  \n   1234321   \n    12321    \n     121     \n      1      ");