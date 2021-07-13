function pattern(n){
    var output="";
    if(n==1){return '1'}
    for(let i = 1 ;i<=n ; i++){
        for(let k = 1 ;k<=i; k++){
            output+=i
        }output+='\n'
    }
    let b = output.split('')
    b.pop()
    return b.join('')
   }

console.log(pattern(5),"1\n22\n333\n4444\n55555");
