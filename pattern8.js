function pattern(n){
  var output="";
    // Happy Coding ^_^
    for(let i = 1 ; i <= n ; i++){
      let str=''
      for(let l = 1 ; l <= n-i ; l++){
        str+=' '
      }
      for(let k = 1 ; k <= (i*2)-1 ; k++){
        if(k<=i){
          k<10?str+=`${k}`:str+=`${k-(Math.floor(k/10)*10)}`

        }
        else{
          (i*2)-k<10?str+=`${(i*2)-k}`:str+=`${(i*2)-k-((Math.floor(((i*2)-k)/10))*10)}`
        }
      }
      for(let j = 1 ; j <= n-i ; j++){
        str+=' '
      }
      i<n?output+=str+'\n':output+=str
    }
  return output;
 }
console.log(pattern(7),"      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321");
