function pattern(n){
    var output="";
    let final =[]
    if(n == 1 ){return '1'}
    if(n <= 0 ){return ''}
      for(let i = 0 ;i<n; i++){
        for(let k = 1 ;k<=n ; k++){
            output+=`${k+i},`
        }output+='\n'
      }
      let b= output.split(',')
      for(let i = 0 ;i<b.length;i++){
        +(b[i])>n?final.push(`${+(b[i])-n}`):final.push(b[i])
      }    
      final.pop()
      return final.join('')
   }
console.log(pattern(7));

 