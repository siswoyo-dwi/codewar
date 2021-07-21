function pattern(n){
    var output='';
      // Happy Coding ^_^
    let arr=[]
    for(let i = n ;i>0 ; i--){
        let str=''
        for(let k = n ;k>=i ; k--){
            str+=k-(Math.floor(k/10)*10)
        }arr.push(str)
    }
    for(let i = 0 ;i<n ; i++){
        let str=''
        for(let k =0  ;k<n-i ; k++){
            if(k==0){str+=arr[i]}
            else{
                str+=arr[i][arr[i].length-1]
            }
        }if(i<n-1)
        output+=str+'\n'
    }console.log(arr)
    return output;
  }

  console.log(pattern(11));

