function pattern(n){
    var output="";
      // Happy Coding ^_^
for(let i = 1 ;i<=(n*2)-1 ; i++){
    let str=''
    for(let k = 1 ;k<=(n*2)-1 ; k++){
        if((k==i)||(k+i==n*2)){
            if(i<=n){i<10?str+=i:str+=i-(Math.floor((i/10))*10)}
            else{
                (n*2)-i<10?str+=(n*2)-i:str+=((n*2)-i)-(Math.floor(((n*2)-i)/10)*10)
            }
        }else{
            str+=' '
        }
    }if(i<(n*2)){
        output+=str+'\n'
    }else{
        output+=str
    }
}

    return output;
   }
   console.log(pattern(12));

