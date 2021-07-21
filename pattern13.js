function pattern(n){
    var output="";
        //being coder
        for(let i=1;i<n*2 ; i++){
            let str=''
            for(let k=1;k<n*2 ; k++){
                if(i==n){
                    if(k<=n){
                        k<10?str+=k:str+=k-(Math.floor(k/10)*10)
                    }else{(n*2)-k<10?str+=(n*2)-k:str+=(n*2)-k-(Math.floor(((n*2)-k)/10)*10)}
                }else{
                    if(k<n){str+=' '}
                    else if(k==n){
                        if(i<n){
                            i<10?str+=i:str+=i-(Math.floor(i/10)*10)
                        }
                        else if(i>n){
                            n*2-i<10?str+=n*2-i:str+=n*2-i-(Math.floor((str+=n*2-i)/10)*10)
                        }
                }
                    
                }
            }if(i<n*2-2){
                output+=str+'\n'
            }else{
                output+=str
            }
            
        }
    return output;
    }
console.log(pattern(3),"  1\n  2\n12321\n  2\n  1\n");
