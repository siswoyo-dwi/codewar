function pattern(n){
    var output="";
    if(n==1){return '1'}
    for(let i = 0 ;i<n ; i++){
        for(let k = n ;k>i; k--){
            output+=k
        }
        output+='\n'
    }
    let b = output.split('')
    b.pop()
    return b.join('')
   }

console.log(pattern(5),"54321\n5432\n543\n54\n5");
 